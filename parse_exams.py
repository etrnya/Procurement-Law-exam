# -*- coding: utf-8 -*-
"""
政府採購法題庫解析器 (Procurement Law Exam Parser)

本腳本負責讀取 downloads/ 資料夾內的官方題庫檔案（DOCX 格式表格），
解析出是非題與選擇題，並結構化輸出為前端資料庫 `questions_db.js`。
同時，腳本內建「新舊法條規則引擎」，會自動偵測關鍵字（如：小額採購、公告金額等），
並自動在資料庫中標記 `has_amendment = true` 並附上新舊法條對照。
"""

import sys
import os
import json
import re
import docx
from docx.oxml.table import CT_Tbl
from docx.oxml.text.paragraph import CT_P
from docx.table import Table
from docx.text.paragraph import Paragraph

# 強制設定標準輸出入為 UTF-8 編碼，防止 Windows 環境下印出中文時因 CP950 導致亂碼或 UnicodeEncodeError 錯誤
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')
if hasattr(sys.stderr, 'reconfigure'):
    sys.stderr.reconfigure(encoding='utf-8')

# 1. 定義修法異動規則對照字典 (用於自動標記新舊法差異)
AMENDMENT_RULES = [
    {
        "keywords": ["小額採購", "小額", "未達公告金額"],
        "historical_regulation": "舊版法規：依中央機關未達公告金額採購招標辦法第5條，小額採購額度為新臺幣 10 萬元以下。",
        "current_regulation": "現行法規（自 112 年 1 月 1 日施行）：提高至新臺幣 15 萬元以下。",
        "amendment_warning": "⚠️ 異動提醒：小額採購額度已從 10 萬元調高至 15 萬元。作答時請確認題目要求的法規時點。"
    },
    {
        "keywords": ["公告金額"],
        "historical_regulation": "舊版法規：工程及財物採購公告金額為新臺幣 100 萬元，勞務採購為 100 萬元。",
        "current_regulation": "現行法規（自 112 年 1 月 1 日施行）：公告金額調高為新臺幣 150 萬元。",
        "amendment_warning": "⚠️ 異動提醒：公告金額已自 112 年起由 100 萬元調高至 150 萬元。"
    },
    {
        "keywords": ["查核金額"],
        "historical_regulation": "舊版法規：工程及財物查核金額為 5,000 萬元，勞務為 1,000 萬元。",
        "current_regulation": "現行法規（自 112 年 1 月 1 日施行）：工程查核金額提高為 1.5 億元、財物提高為 1.5 億元、勞務提高為 4,000 萬元。",
        "amendment_warning": "⚠️ 異動提醒：查核金額標準已於 112 年大幅調高（工程 1.5 億、財物 1.5 億、勞務 4,000 萬）。"
    },
    {
        "keywords": ["巨額"],
        "historical_regulation": "舊版法規：工程巨額採購為 2 億元、財物為 1 億元、勞務為 2,000 萬元。",
        "current_regulation": "現行法規（自 112 年 1 月 1 日施行）：工程巨額採購提高為 4 億元、財物提高為 2 億元、勞務提高為 8,000 萬元。",
        "amendment_warning": "⚠️ 異動提醒：巨額採購標準已自 112 年調高（工程 4 億、財物 2 億、勞務 8,000 萬）。"
    }
]

def check_amendment(question_text):
    """
    依據題目文字自動匹配是否包含修法關鍵字，並返回對應資訊
    """
    for rule in AMENDMENT_RULES:
        for kw in rule["keywords"]:
            if kw in question_text:
                return {
                    "has_amendment": True,
                    "historical_regulation": rule["historical_regulation"],
                    "current_regulation": rule["current_regulation"],
                    "amendment_warning": rule["amendment_warning"]
                }
    return {
        "has_amendment": False,
        "historical_regulation": "",
        "current_regulation": "",
        "amendment_warning": ""
    }

def iter_blocks(doc):
    """
    循序走訪 Word 中的段落與表格，維持文件順序
    """
    for child in doc.element.body.iterchildren():
        if isinstance(child, CT_P):
            yield Paragraph(child, doc)
        elif isinstance(child, CT_Tbl):
            yield Table(child, doc)

def split_mc_options(text):
    """
    將選擇題題目文字與 (1)(2)(3)(4) 選項拆分
    """
    parts = re.split(r'\s*\((1|2|3|4)\)\s*', text)
    if len(parts) >= 9:
        q_text = parts[0].strip()
        options = []
        for idx in [2, 4, 6, 8]:
            if idx < len(parts):
                options.append(parts[idx].strip())
        while len(options) < 4:
            options.append("選項")
        return q_text, options[:4]
    
    # 備用機制：若是用 1. 2. 3. 4. 的格式
    parts2 = re.split(r'\s*(?:1|2|3|4)\.\s*', text)
    if len(parts2) >= 5:
        q_text = parts2[0].strip()
        options = [p.strip() for p in parts2[1:5]]
        return q_text, options[:4]
        
    return text, ["選項1", "選項2", "選項3", "選項4"]

def parse_docx_file(file_path):
    """
    解析單一 DOCX 題庫檔案
    """
    print(f"正在解析檔案：{file_path} ...")
    questions = []
    
    try:
        doc = docx.Document(file_path)
    except Exception as e:
        print(f"[警告] 無法讀取 Word 檔案 {file_path}，已跳過。錯誤原因: {e}")
        return questions
    
    # 嘗試找尋產生年份
    doc_year = 115
    for p in doc.paragraphs[:5]:
        m = re.search(r'(?:產生日期|資料產生日期)：(\d+)', p.text)
        if m:
            doc_year = int(m.group(1))
            break
            
    current_category = "未分類"
    current_type = "未分類"
    
    for block in iter_blocks(doc):
        if isinstance(block, Paragraph):
            text = block.text.strip()
            if not text:
                continue
            if "選擇題" in text:
                current_type = "mc_question"
            elif "是非題" in text:
                current_type = "tf_question"
            elif "資料產生日期" in text or "產生日期" in text:
                pass
            else:
                current_category = text
        elif isinstance(block, Table):
            rows = block.rows
            if len(rows) < 2:
                continue
            
            # 檢查表頭欄位是否包含「編號」或「序號」以及「答案」、「題目」
            headers = [c.text.strip() for c in rows[0].cells]
            is_valid_table = any("編號" in h or "序號" in h or "s" in h.lower() for h in headers)
            if not is_valid_table:
                continue
                
            for row in rows[1:]:
                cells = [c.text.strip() for c in row.cells]
                if len(cells) < 3:
                    continue
                
                num_str = cells[0]
                ans_str = cells[1]
                q_raw_text = cells[2]
                
                # 依據法條
                legal_basis = ""
                if len(cells) >= 4:
                    legal_basis = cells[3].strip()
                
                if legal_basis:
                    explanation = f"依政府採購法 {legal_basis} 規定辦理。"
                else:
                    explanation = "依政府採購法規相關規定辦理。"

                # 題型判斷
                if ans_str in ['O', 'X']:
                    q_type = "tf_question"
                    options = ["對", "錯"]
                    correct_answer = 1 if ans_str == 'O' else 2
                    q_text = q_raw_text
                else:
                    q_type = "mc_question"
                    q_text, options = split_mc_options(q_raw_text)
                    try:
                        correct_answer = int(ans_str)
                    except ValueError:
                        correct_answer = 1

                amend_info = check_amendment(q_text)

                q_item = {
                    "id": f"pcc-temp-{num_str}", # 後續會重新編號
                    "category": current_category,
                    "type": q_type,
                    "question_text": q_text,
                    "options": options,
                    "correct_answer": correct_answer,
                    "explanation": explanation,
                    "exam_year": doc_year,
                    **amend_info
                }
                questions.append(q_item)
                
    return questions

def parse_json_from_js(js_content):
    """清理 JS 註解與尾隨逗號以解析為標準 JSON 陣列"""
    start_idx = js_content.find("[")
    end_idx = js_content.rfind("]")
    if start_idx == -1 or end_idx == -1:
        raise ValueError("無法定位 JSON 陣列邊界")
    
    json_str = js_content[start_idx:end_idx+1]
    json_str = re.sub(r'/\*.*?\*/', '', json_str, flags=re.S)
    json_str = re.sub(r'//.*?\n', '\n', json_str)
    json_str = re.sub(r',\s*([\]}])', r'\1', json_str)
    return json.loads(json_str)

def main():
    downloads_dir = "downloads"
    output_file = "questions_db.js"
    
    if not os.path.exists(downloads_dir):
        os.makedirs(downloads_dir)
        print(f"已建立空的 '{downloads_dir}' 資料夾，請將下載的 Word (.docx) 檔放入該目錄下。")
        return

    # 1. 嘗試讀取並載入已有的本機題庫數據
    existing_questions = []
    if os.path.exists(output_file):
        try:
            with open(output_file, "r", encoding="utf-8") as f:
                content = f.read()
                existing_questions = parse_json_from_js(content)
                print(f"成功載入現有的本機資料庫：{len(existing_questions)} 題。")
        except Exception as e:
            print(f"[警告] 無法解析現有 {output_file}，將直接重新建立：{e}")

    # 2. 解析新下載的 Word 檔案 (題庫檔案)
    newly_parsed = []
    for filename in os.listdir(downloads_dir):
        # 排除說明書或教材等非題庫檔案，僅解析檔名包含「題庫」的 docx
        if filename.endswith(".docx") and "題庫" in filename and not filename.startswith("教材_"):
            file_path = os.path.join(downloads_dir, filename)
            questions = parse_docx_file(file_path)
            newly_parsed.extend(questions)
            print(f"檔案 '{filename}' 解析完成，共 {len(questions)} 題。")
            
    # 3. 合併與去重邏輯：以「去空白後的題目內文」作為唯一辨識鍵
    merged_dict = {}
    
    # 放入現有題目
    for q in existing_questions:
        key = re.sub(r'\s+', '', q["question_text"])
        merged_dict[key] = q
        
    # 放入/更新新解析的題目
    for q in newly_parsed:
        key = re.sub(r'\s+', '', q["question_text"])
        if key in merged_dict:
            # 重疊時保留年份較新者
            if q.get("exam_year", 0) >= merged_dict[key].get("exam_year", 0):
                merged_dict[key] = q
        else:
            merged_dict[key] = q

    # 4. 歷史考題刪除與過濾機制：依據題目本身年度 (刪除民國 110 年之前的舊題目)
    year_threshold = 110
    final_questions = []
    pruned_count = 0
    
    for q in merged_dict.values():
        if q.get("exam_year", 0) >= year_threshold:
            final_questions.append(q)
        else:
            pruned_count += 1

    # 5. 重新編號 (Id) 使其美觀且統一 (pcc-q-1, pcc-q-2 ...)
    for idx, q in enumerate(final_questions):
        q["id"] = f"pcc-q-{idx+1}"

    print(f"去重與合併完成！新增/更新了 {len(newly_parsed)} 題。")
    print(f"歷史過濾完成！已根據題目年份刪除了 {pruned_count} 題民國 {year_threshold} 年前的舊題目。")
    print(f"最終資料庫題庫總計：{len(final_questions)} 題。")

    # 6. 輸出回 questions_db.js
    if final_questions:
        with open(output_file, "w", encoding="utf-8") as f:
            f.write("const questions_db = ")
            json.dump(final_questions, f, ensure_ascii=False, indent=2)
            f.write(";\n\n")
            f.write("// 支援瀏覽器與 Node.js 載入\n")
            f.write("if (typeof window !== 'undefined') {\n")
            f.write("    window.questions_db = questions_db;\n")
            f.write("}\n")
            f.write("if (typeof module !== 'undefined' && module.exports) {\n")
            f.write("    module.exports = questions_db;\n")
            f.write("}\n")
        print(f"成功將最新題庫寫入：{output_file}")
    else:
        print("沒有符合保留條件的考題可以寫入。")

if __name__ == "__main__":
    main()
