# -*- coding: utf-8 -*-
"""
政府採購法 RAG 知識庫 一鍵更新工具 (One-Click GP-KOS Knowledge Base Updater)

此腳本整合並自動執行以下三個核心更新流程：
1. 【題庫更新】：從政府電子採購網下載最新是非與選擇題 Word 檔，並執行 parse_exams.py 進行解析、比對修法規則並生成 questions_db.js。
2. 【教材與投影片更新】：爬取公共工程委員會採購專業人員（基礎與進階）訓練課程投影片與大綱連結，下載官方 PDF 教材，並執行 build_slides_db.py 生成 pcc_slides_db.js。
3. 【法令彙編更新】：從中華民國法務部全國法規資料庫（MOJ）即時爬取最新的《政府採購法》與《政府採購法施行細則》條文，結合歷史核心法條標題對照表，自動生成最新標準化的 laws_db.js。若本地有法令彙編完整 PDF，亦會自動呼叫 build_rag_db.py 更新解釋函令資料庫 explain_letters_db.js。
"""

import sys
import os
import re
import json
import subprocess
import requests
import urllib3
from bs4 import BeautifulSoup

# 強制設定標準輸出入為 UTF-8 編碼，防止 Windows 環境下 CP950 導致亂碼或 Unicode 錯誤
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')
if hasattr(sys.stderr, 'reconfigure'):
    sys.stderr.reconfigure(encoding='utf-8')

urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

# 常量定義
HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}

# 核心法條精選標題對照表（用於 laws_db.js 保持原有 curated title）
CORE_LAW_TITLES = {
    "第1條": "立法宗旨",
    "第3條": "適用對象",
    "第4條": "法人團體接受補助",
    "第6條": "公平合理原則",
    "第18條": "招標方式定義",
    "第19條": "公開招標原則",
    "第22條": "限制性招標適用情形",
    "第34條": "招標文件與底價保密",
    "第48條": "開標廠商家數規定",
    "第50條": "不予開標決標情形",
    "第52條": "決標原則",
    "第58條": "超低標處理程序",
    "第71條": "驗收程序與人員",
    "第85-1條": "履約爭議調解與仲裁",
    "第101條": "刊登公報停權情形",
    "第102條": "異議與申訴期限",
    "第103條": "停權期限與效果"
}

def log_section(title):
    print("\n" + "=" * 60)
    print(f"  {title}")
    print("=" * 60)

def download_file(url, dest_path):
    """下載檔案並存檔"""
    print(f"  --> 下載中: {url}")
    try:
        r = requests.get(url, headers=HEADERS, stream=True, timeout=30, verify=False)
        r.raise_for_status()
        with open(dest_path, 'wb') as f:
            for chunk in r.iter_content(chunk_size=8192):
                f.write(chunk)
        print(f"  [成功] 下載並儲存至: {dest_path}")
        return True
    except Exception as e:
        print(f"  [失敗] 下載失敗: {url}, 原因: {e}")
        return False

def scrape_moj_law(pcode):
    """從法務部全國法規資料庫網頁解析全部條文"""
    url = f"https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode={pcode}"
    print(f"  --> 正在爬取法規資料: {url} ...")
    r = requests.get(url, headers=HEADERS, timeout=30, verify=False)
    r.raise_for_status()
    soup = BeautifulSoup(r.text, 'html.parser')
    
    articles = []
    rows = soup.find_all(class_='row')
    for row in rows:
        no_div = row.find(class_='col-no')
        data_div = row.find(class_='col-data')
        if no_div and data_div:
            art_no = no_div.get_text().strip()
            art_content = data_div.get_text().strip()
            # 移除條號內部的空格，標準化格式 (如 "第 1 條" -> "第1條")
            art_no_clean = art_no.replace(" ", "")
            articles.append({
                "article": art_no_clean,
                "content": art_content
            })
    return articles

def run_script(script_name):
    """使用 subprocess 執行指定的 Python 腳本"""
    print(f"  --> 正在執行: {script_name} ...")
    if not os.path.exists(script_name):
        print(f"  [錯誤] 找不到腳本: {script_name}")
        return False
    try:
        res = subprocess.run([sys.executable, script_name], capture_output=True, text=True, encoding='utf-8')
        if res.returncode == 0:
            print(f"  [成功] {script_name} 執行完成！")
            return True
        else:
            print(f"  [失敗] {script_name} 執行失敗，錯誤碼: {res.returncode}")
            print(f"  錯誤輸出:\n{res.stderr}")
            return False
    except Exception as e:
        print(f"  [失敗] 執行 {script_name} 發生異常: {e}")
        return False

def main():
    log_section("GP-KOS 本地知識庫一鍵更新系統啟動")
    
    # 建立目錄
    downloads_dir = "downloads"
    materials_dir = os.path.join(downloads_dir, "教材")
    if not os.path.exists(downloads_dir):
        os.makedirs(downloads_dir)
    if not os.path.exists(materials_dir):
        os.makedirs(materials_dir)

    # ----------------------------------------------------
    # 流程一：題庫更新與下載
    # ----------------------------------------------------
    log_section("1. 正在更新政府採購法考題題庫...")
    
    pcc_exam_url = "https://web.pcc.gov.tw/psms/plrtqdm/questionPublic/indexReadQuestion"
    base_pcc_url = "https://web.pcc.gov.tw"
    print(f"  --> 連線至電子採購網: {pcc_exam_url} ...")
    
    try:
        r = requests.get(pcc_exam_url, headers=HEADERS, timeout=20, verify=False)
        r.raise_for_status()
        soup = BeautifulSoup(r.text, "html.parser")
        links = soup.find_all("a", href=True)
        
        q_count = 0
        for link in links:
            href = link["href"]
            text = link.text.strip()
            # 判斷是否為題庫下載連結 (含有 download 或檔名含有 doc/docx)
            is_question = "download" in href.lower() or "file" in href.lower() or href.endswith((".docx", ".doc"))
            if is_question:
                full_url = href if href.startswith("http") else base_pcc_url + href
                # 清理檔名
                file_title = re.sub(r'[\\/*?:"<>|]', "", text)
                if not file_title:
                    file_title = "pcc_questions_" + href.split("=")[-1]
                
                # 統一存為 docx 檔
                ext = ".docx" if not href.endswith(".pdf") else ".pdf"
                dest_path = os.path.join(downloads_dir, f"{file_title}{ext}")
                
                success = download_file(full_url, dest_path)
                if success:
                    q_count += 1
        print(f"  [成功] 題庫下載完成！共成功下載 {q_count} 個考題檔案。")
    except Exception as e:
        print(f"  [警告] 自動抓取題庫清單發生異常: {e}")
        print("  將嘗試以現有下載的題庫檔案進行解析...")

    # 執行題庫解析引擎 (parse_exams.py)
    run_script("parse_exams.py")

    # ----------------------------------------------------
    # 流程二：訓練教材與投影片更新
    # ----------------------------------------------------
    log_section("2. 正在更新官方課程大綱與訓練教材...")
    
    # 2.1 爬取投影片與大綱 metadata
    run_script("scrape_pcc_tutorials.py")
    run_script("build_slides_db.py")
    
    # 2.2 下載教材 PDF 檔
    textbook_url = "https://www.pcc.gov.tw/content/list?eid=736&lang=1"
    pcc_base_url = "https://www.pcc.gov.tw"
    print(f"  --> 連線至官方訓練教材專區: {textbook_url} ...")
    try:
        r_tb = requests.get(textbook_url, headers=HEADERS, timeout=20, verify=False)
        r_tb.raise_for_status()
        soup_tb = BeautifulSoup(r_tb.text, "html.parser")
        tb_links = soup_tb.find_all("a", href=True)
        
        tb_count = 0
        for link in tb_links:
            href = link["href"]
            text = link.text.strip()
            
            is_pdf = "fileId=" in href or ".pdf" in href.lower() or "pdf" in text.lower()
            if is_pdf:
                full_url = href if href.startswith("http") else pcc_base_url + href
                clean_text = re.sub(r'[\\/*?:"<>|]', "", text)
                if not clean_text:
                    clean_text = "pcc_textbook_" + href.split("=")[-1]
                
                dest_path = os.path.join(materials_dir, f"教材_{clean_text}.pdf")
                success = download_file(full_url, dest_path)
                if success:
                    tb_count += 1
        print(f"  [成功] 教材下載完成！共成功下載 {tb_count} 個 PDF 教材。")
    except Exception as e:
        print(f"  [警告] 自動抓取官方訓練教材專區發生異常: {e}")
        
    # 2.3 執行下載修復與副檔名更正
    run_script("downloads_fixer.py")

    # ----------------------------------------------------
    # 流程三：法令彙編更新 (全國法規資料庫即時同步)
    # ----------------------------------------------------
    log_section("3. 正在從法務部即時同步採購法與施行細則條文...")
    
    laws_list = []
    try:
        # 3.1 爬取《政府採購法》
        act_articles = scrape_moj_law("A0030057")
        print(f"  --> 政府採購法爬取完成，共 {len(act_articles)} 條條文。")
        for art in act_articles:
            # 比對精選標題
            title = CORE_LAW_TITLES.get(art["article"], "法規條文")
            laws_list.append({
                "article": art["article"],
                "title": title,
                "content": art["content"]
            })
            
        # 3.2 爬取《政府採購法施行細則》
        rules_articles = scrape_moj_law("A0030058")
        print(f"  --> 政府採購法施行細則爬取完成，共 {len(rules_articles)} 條條文。")
        for art in rules_articles:
            # 標準化施行細則條號 (例如 "第1條" -> "施行細則第1條")
            rule_art_no = art["article"].replace("第", "施行細則第")
            laws_list.append({
                "article": rule_art_no,
                "title": f"施行細則{art['article']}",
                "content": art["content"]
            })
            
        # 3.3 寫入 laws_db.js
        laws_db_path = "laws_db.js"
        with open(laws_db_path, "w", encoding="utf-8") as f:
            f.write("/* eslint-disable */\n")
            f.write("/**\n * 政府採購法核心條文與施行細則資料庫\n * 全自動由中華民國法務部全國法規資料庫即時同步更新\n */\n\n")
            f.write("const laws_db = ")
            f.write(json.dumps(laws_list, ensure_ascii=False, indent=4))
            f.write(";\n\n")
            f.write('if (typeof window !== "undefined") {\n    window.laws_db = laws_db;\n}\n')
            f.write('if (typeof module !== "undefined" && module.exports) {\n    module.exports = laws_db;\n}\n')
            
        print(f"  [成功] 順利將 {len(laws_list)} 條最新法規條文寫入 {laws_db_path}！")
    except Exception as e:
        print(f"  [錯誤] 從法務部爬取最新法規失敗: {e}")
        print("  將保留原有的 laws_db.js 資料庫。")

    # ----------------------------------------------------
    # 流程四：法令彙編詳細函釋與錯誤態樣提取
    # ----------------------------------------------------
    log_section("4. 正在比對法令彙編 PDF 提取細部函釋...")
    pdf_path = "downloads/extracted/政府採購法令彙編_第35版.pdf"
    if os.path.exists(pdf_path):
        print(f"  [偵測] 發現本地有完整法令彙編 PDF: {pdf_path}")
        run_script("build_rag_db.py")
    else:
        print(f"  [提示] 找不到 {pdf_path}。")
        print("  若您需要更完整的解釋函令與採購錯誤態樣提取，請自行下載《政府採購法令彙編第35版》PDF 檔並放置於 downloads/extracted/ 目錄下後，再行更新。")

    log_section("GP-KOS 本地知識庫一鍵更新流程全部結束！")
    print("請重新整理或重啟 index.html 以加載最新政府採購法知識庫資料。")

if __name__ == "__main__":
    main()
