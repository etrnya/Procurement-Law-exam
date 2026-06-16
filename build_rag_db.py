# -*- coding: utf-8 -*-
import sys
import os
import re
import json
import pypdf

sys.stdout.reconfigure(encoding='utf-8')

def log_progress(msg):
    print(msg)
    with open("downloads/build_progress.txt", "a", encoding="utf-8") as f:
        f.write(msg + "\n")

def main():
    with open("downloads/build_progress.txt", "w", encoding="utf-8") as f:
        f.write("Optimized Build progress started.\n")

    pdf_path = "downloads/extracted/政府採購法令彙編_第35版.pdf"
    if not os.path.exists(pdf_path):
        log_progress(f"Error: {pdf_path} not found.")
        sys.exit(1)
        
    log_progress("Loading PDF...")
    reader = pypdf.PdfReader(pdf_path)
    log_progress("PDF loaded successfully.")
    
    # Target pages to extract: (Start page, End page, Title, Category)
    targets = [
        (95, 105, "政府採購法第二十二條第一項各款執行錯誤態樣", "招標執行錯誤態樣"),
        (171, 172, "機關辦理公告金額十分之一以下採購常見誤解或錯誤態樣", "小額採購錯誤態樣"),
        (181, 184, "政府採購法第二十六條執行注意事項", "招標規格注意事項"),
        (249, 250, "依政府採購法第三十一條第二項第七款認定情形", "押標金認定情形"),
        (251, 258, "依政府採購法第三十一條第二項辦理不發還或追繳押標金之執行程序", "押標金追繳程序"),
        (297, 305, "最有利標錯誤行為態樣", "最有利標錯誤態樣"),
        (467, 478, "政府採購法第一百零一條執行注意事項", "廠商停權注意事項"),
        (557, 568, "政府採購錯誤行為態樣", "採購綜合錯誤態樣")
    ]
    
    explanations = []
    
    for start_p, end_p, title, category in targets:
        log_progress(f"Extracting {title} (Pages {start_p}-{end_p})...")
        content_lines = []
        for idx in range(start_p - 1, end_p):
            log_progress(f"Reading page {idx+1}/{end_p} for {category}...")
            text = reader.pages[idx].extract_text()
            for line in text.split('\n'):
                line_str = line.strip()
                if line_str and not ("總" in line_str and ("頁" in line_str or re.search(r'\d+', line_str))):
                    content_lines.append(line_str)
        
        # Split into individual items using common item headers
        full_text = "\n".join(content_lines)
        # Split on numbered lines or chinese numbers
        items = re.split(r'\n(?=\d+[\s、.])|\n(?=[一二三四五六七八九十]+[\s、.])', full_text)
        
        chunk_idx = 1
        for item in items:
            item_clean = item.strip()
            if len(item_clean) > 30:
                explanations.append({
                    "title": f"{title} - 項目 {chunk_idx}",
                    "category": category,
                    "content": item_clean
                })
                chunk_idx += 1
                
    log_progress(f"Extracted {len(explanations)} explanation guidelines.")

    # Write explain_letters_db.js
    log_progress("Writing explain_letters_db.js...")
    existing_letters = [
        {
            "title": "政府採購法施行細則 第 6 條",
            "category": "施行細則",
            "content": "機關辦理採購，其採購金額之計算方式如下：\n1. 招標文件含有複數決標者，以複數決標之預估採購總金額認定。\n2. 招標文件含有選購或後續擴充項目者，應將該選購或後續擴充期間之預估金額納入採購金額計算。\n3. 定期合約依合約總金額或特定期間之估計總價認定。"
        },
        {
            "title": "政府採購法施行細則 第 109 條",
            "category": "施行細則",
            "content": "機關依本法第七十四條規定受理廠商異議，應自收受異議之次日起十五日內為適當之處理，並將處理結果以書面通知提出異議之廠商。"
        },
        {
            "letter_no": "工程企字第 1110100798 號函",
            "date": "111 年 12 月 23 日",
            "title": "政府採購門檻金額調整令",
            "content": "自 112 年 1 月 1 日起，政府採購法相關門檻金額調高如下：\n1. 小額採購額度：工程、財物及勞務採購，調整為新臺幣 15 萬元以下。\n2. 公告金額：工程、財物及勞務採購，調整為新臺幣 150 萬元。\n3. 查核金額：工程採購調整為 1.5 億元；財物採購調整為 1.5 億元；勞務採購調整為 4,000 萬元。\n4. 巨額採購：工程採購調整為 4 億元；財物採購調整為 2 億元；勞務採購調整為 8,000 萬元。"
        },
        {
            "letter_no": "工程企字第 09800387310 號函",
            "date": "98 年 8 月 31 日",
            "title": "採購法第 101 條「情節重大」認定原則",
            "content": "機關依採購法第101條第1項第3款（擅自減省工料）或第8款（未依限履行契約）通知廠商時，應視其違約具體情節是否確屬「情節重大」為認定，不可僅因廠商有些微違約即逕行停權。需考量影響公共利益程度、違約比例、以及廠商是否有改善意願等。"
        },
        {
            "letter_no": "工程企字第 8813354 號函",
            "date": "88 年 8 月 30 日",
            "title": "固定服務費用或費率之議價程序簡化",
            "content": "招標文件已訂明固定服務費用或費率者，依政府採購法第47條第1項第2款得不訂底價。其議價程序僅需確認廠商同意該固定服務費用或費率，並協商履約內容、付款期程等，不需另外進行價格議減。"
        },
        {
            "letter_no": "工程企字第 10700011420 號函",
            "date": "107 年 1 月 11 日",
            "title": "同等品審查時機與程序",
            "content": "機關辦理採購，招標文件允許投標廠商提出同等品者，除招標文件另有規定外，得允許廠商於開標後或履約期間提出審查。機關應審查同等品之規格、功能、效益等，是否不低於招標文件所指定之廠牌商品。"
        }
    ]
    
    for exp in explanations:
        existing_letters.append(exp)
        
    with open("explain_letters_db.js", "w", encoding="utf-8") as f:
        f.write("/* eslint-disable */\n")
        f.write("/**\n * 政府採購法重要解釋函令、施行細則與採購錯誤態樣資料庫\n * 自動由政府採購法令彙編第35版提取\n */\n\n")
        f.write("const explain_letters_db = ")
        f.write(json.dumps(existing_letters, ensure_ascii=False, indent=4))
        f.write(";\n\n")
        f.write('if (typeof window !== "undefined") {\n    window.explain_letters_db = explain_letters_db;\n}\n')
        f.write('if (typeof module !== "undefined" && module.exports) {\n    module.exports = explain_letters_db;\n}\n')
        
    log_progress(f"Successfully wrote {len(existing_letters)} explanation letters / error patterns to explain_letters_db.js!")
    log_progress("Done!")

if __name__ == "__main__":
    main()
