# -*- coding: utf-8 -*-
"""
政府採購法題庫 一鍵更新工具 (One-Click PCC Question Updater)

此腳本會造訪公共工程委員會及電子採購網的題庫公告網頁，
自動搜尋、下載最新的 Word (.docx) 題庫檔案至 downloads/ 資料夾下，
並直接呼叫 parse_exams.py 進行最新資料的解析與資料庫更新。
"""

import sys
import os
import re
import requests
from bs4 import BeautifulSoup

# 強制設定標準輸出入為 UTF-8 編碼，防止 Windows 環境下印出中文時因 CP950 導致亂碼或 UnicodeEncodeError 錯誤
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')
if hasattr(sys.stderr, 'reconfigure'):
    sys.stderr.reconfigure(encoding='utf-8')

def download_file(url, dest_path):
    """下載檔案並存檔"""
    print(f"下載中: {url} ...")
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    }
    try:
        import urllib3
        urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)
    except:
        pass
    try:
        r = requests.get(url, headers=headers, stream=True, timeout=30, verify=False)
        r.raise_for_status()
        with open(dest_path, 'wb') as f:
            for chunk in r.iter_content(chunk_size=8192):
                f.write(chunk)
        print(f"成功下載並儲存至: {dest_path}")
        return True
    except Exception as e:
        print(f"下載失敗: {url}, 錯誤原因: {e}")
        return False

def main():
    print("====================================================")
    print("   政府採購法題庫與法規資料 一鍵下載更新工具")
    print("====================================================")
    
    # 建立下載目錄 (保留原有下載檔案，僅做增量下載)
    downloads_dir = "downloads"
    if not os.path.exists(downloads_dir):
        os.makedirs(downloads_dir)
        print(f"已建立目錄: {downloads_dir}")

    # 官方題庫公告與下載頁面 URL
    base_url = "https://web.pcc.gov.tw"
    target_url = "https://web.pcc.gov.tw/psms/plrtqdm/questionPublic/indexReadQuestion"
    
    print(f"正在連線至官方電子採購網: {target_url} ...")
    
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    }

    try:
        import urllib3
        urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)
    except:
        pass

    try:
        r = requests.get(target_url, headers=headers, timeout=15, verify=False)
        r.raise_for_status()
    except Exception as e:
        print(f"[錯誤] 無法取得網頁內容: {e}")
        print("請確認網路連線是否正常，或由瀏覽器下載後手動放入 downloads/ 資料夾下。")
        sys.exit(1)

    soup = BeautifulSoup(r.text, "html.parser")
    
    # 尋找所有 Word (.doc 或 .docx) 與 PDF 檔案連結
    links = soup.find_all("a", href=True)
    download_count = 0

    print("正在掃描下載連結...")
    for link in links:
        href = link["href"]
        text = link.text.strip()
        
        # 匹配常見的 doc, docx 或 pdf 下載路徑 (PCC 網頁通常是特定的 API 下載連結)
        # 例如: /psms/plrtqdm/questionPublic/downloadFile?id=... 等
        is_question_download = "download" in href.lower() or "file" in href.lower() or href.endswith((".docx", ".doc", ".pdf"))
        
        if is_question_download:
            # 確保是完整 URL
            full_url = href if href.startswith("http") else base_url + href
            
            # 從連結文字或 URL 取檔名，若無則用 ID 命名
            file_title = re.sub(r'[\\/*?:"<>|]', "", text) # 移除非法檔名變數
            if not file_title:
                file_title = "pcc_questions_" + href.split("=")[-1]
                
            # 預設存為 docx 檔
            extension = ".docx"
            if ".pdf" in href.lower() or "pdf" in text.lower():
                extension = ".pdf"
            elif ".doc" in href.lower() and not ".docx" in href.lower():
                extension = ".docx" # 我們統一存為新版 Word
            
            dest_path = os.path.join(downloads_dir, f"{file_title}{extension}")
            
            # 下載檔案
            success = download_file(full_url, dest_path)
            if success:
                download_count += 1

    # ====================================================
    # 新增：下載官方「採購專業人員訓練教材」
    # ====================================================
    textbook_url = "https://www.pcc.gov.tw/content/list?eid=736&lang=1"
    pcc_base_url = "https://www.pcc.gov.tw"
    print("\n----------------------------------------------------")
    print(f"正在連線至官方訓練教材網頁: {textbook_url} ...")
    print("----------------------------------------------------")
    
    try:
        r_textbook = requests.get(textbook_url, headers=headers, timeout=15, verify=False)
        if r_textbook.status_code == 200:
            soup_tb = BeautifulSoup(r_textbook.text, "html.parser")
            tb_links = soup_tb.find_all("a", href=True)
            tb_download_count = 0
            
            for link in tb_links:
                href = link["href"]
                text = link.text.strip()
                
                # 判斷是否為教材下載連結
                is_pdf_download = "fileId=" in href or ".pdf" in href.lower() or "pdf" in text.lower()
                if is_pdf_download:
                    # 確保是完整 URL
                    full_url = href if href.startswith("http") else pcc_base_url + href
                    
                    # 整理檔名，加上「教材_」前置標記
                    clean_text = re.sub(r'[\\/*?:"<>|]', "", text)
                    if not clean_text:
                        clean_text = "pcc_textbook_" + href.split("=")[-1]
                    
                    dest_path = os.path.join(downloads_dir, f"教材_{clean_text}.pdf")
                    
                    success = download_file(full_url, dest_path)
                    if success:
                        tb_download_count += 1
            
            print(f"教材下載完成！共成功下載 {tb_download_count} 個最新訓練教材 PDF。")
    except Exception as e:
        print(f"[警告] 教材下載程序發生異常 (將跳過並繼續考題解析): {e}")

    print("\n----------------------------------------------------")
    print(f"全部下載完成！共下載 {download_count} 個考題檔案與教材檔案。")
    print("----------------------------------------------------")
    
    # 自動啟動解析器更新 questions_db.js
    if os.path.exists("parse_exams.py"):
        print("正在啟動題庫解析引擎更新 questions_db.js ...")
        os.system("python parse_exams.py")
    else:
        print("[警告] 找不到 parse_exams.py，請手動執行解析。")

    print("\n====================================================")
    print("   更新流程結束。請重整 index.html 載入最新題庫！")
    print("====================================================")

if __name__ == "__main__":
    main()
