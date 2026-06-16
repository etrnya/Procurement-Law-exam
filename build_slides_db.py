# -*- coding: utf-8 -*-
"""
Process pcc_tutorials_scraped.json into a clean javascript database pcc_slides_db.js
"""
import json
import urllib.parse
import os
import re

def main():
    if not os.path.exists("pcc_tutorials_scraped.json"):
        print("Scraped JSON not found!")
        return
        
    with open("pcc_tutorials_scraped.json", "r", encoding="utf-8") as f:
        scraped_data = json.load(f)
        
    structured_db = {
        "basic": [],  # 基礎課程
        "advanced": []  # 進階課程
    }
    
    # 處理 9868 (基礎課程) 和 9869 (進階課程)
    for eid, key in [("9868", "basic"), ("9869", "advanced")]:
        if eid not in scraped_data:
            continue
        
        links = scraped_data[eid]["links"]
        # 先以檔案名稱主體分組
        # 例如: "政府採購全生命週期概論(11502).pdf" 與 "政府採購全生命週期概論(11502).pptx" 都屬於 "政府採購全生命週期概論(11502)"
        grouped_files = {}
        
        for item in links:
            url = item["url"]
            parsed_url = urllib.parse.urlparse(url)
            query_params = urllib.parse.parse_qs(parsed_url.query)
            
            sname = query_params.get("sname", [""])[0]
            if not sname:
                # 備用: 從網址或文字中猜測
                sname = item["text"]
                
            # 解碼中文檔名
            filename = urllib.parse.unquote(sname)
            if not filename:
                filename = url.split("/")[-1]
                
            # 取得主檔名與副檔名
            base_name, ext = os.path.splitext(filename)
            ext = ext.lower().replace(".", "")
            
            # 清理檔名中的空白
            base_name = base_name.strip()
            
            # 以底線、括號版本等為基礎做主要分類標題 (如 "政府採購全生命週期概論")
            # 移除非主體文字，像是版本日期 (11502), 空白等
            main_topic = re.sub(r'\(11[0-9]{4}\b.*?\)', '', base_name)
            main_topic = re.sub(r'\(11[0-9]{2}\b.*?\)', '', main_topic)
            main_topic = re.sub(r'\(11[0-9]{2}\)', '', main_topic)
            main_topic = re.sub(r'\(\s*[vV]\d+(\.\d+)*\s*\)', '', main_topic)
            main_topic = main_topic.strip()
            
            # 如果還沒有建立這個主體
            if main_topic not in grouped_files:
                grouped_files[main_topic] = {
                    "topic": main_topic,
                    "original_base_name": base_name,
                    "files": []
                }
                
            grouped_files[main_topic]["files"].append({
                "ext": ext,
                "filename": filename,
                "url": url
            })
            
        # 轉成列表
        structured_db[key] = list(grouped_files.values())

    # 寫出至 pcc_slides_db.js
    with open("pcc_slides_db.js", "w", encoding="utf-8") as f:
        f.write("/* eslint-disable */\n")
        f.write("/**\n")
        f.write(" * 政府電子採購網 官方訓練教材投影片與大綱連結資料庫 (PCC Official Slides & Outlines DB)\n")
        f.write(" */\n\n")
        f.write("const pcc_slides_db = ")
        json.dump(structured_db, f, ensure_ascii=False, indent=2)
        f.write(";\n\n")
        f.write("if (typeof window !== 'undefined') {\n")
        f.write("    window.pcc_slides_db = pcc_slides_db;\n")
        f.write("}\n")
        f.write("if (typeof module !== 'undefined' && module.exports) {\n")
        f.write("    module.exports = pcc_slides_db;\n")
        f.write("}\n")
        
    print("pcc_slides_db.js generated successfully!")

if __name__ == "__main__":
    main()
