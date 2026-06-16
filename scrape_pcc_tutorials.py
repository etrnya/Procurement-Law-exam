# -*- coding: utf-8 -*-
"""
Scrape PCC tutorials from the two pages and save to a JSON file.
"""
import requests
import urllib3
import json
from bs4 import BeautifulSoup
import re

urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}

def scrape_page(eid):
    url = f"https://www.pcc.gov.tw/content/index?type=C&eid={eid}&lang=1"
    print(f"Scraping EID {eid}: {url}")
    try:
        r = requests.get(url, headers=headers, verify=False, timeout=30)
        r.raise_for_status()
        soup = BeautifulSoup(r.text, "html.parser")
        
        # 尋找主內容區域
        # 常用結構: div#content, div.content, div.main, td.content, etc.
        # 我們直接找頁面標題跟所有連結
        title = soup.find('title')
        title_text = title.text.strip() if title else ""
        
        h1 = soup.find('h1')
        h1_text = h1.text.strip() if h1 else ""
        
        h2 = soup.find('h2')
        h2_text = h2.text.strip() if h2 else ""
        
        # 尋找內容區段 (一般在 class 含有 content, article, 或 main_content 的 div)
        content_div = soup.find(id='content') or soup.find(class_='content') or soup.find(class_='main')
        content_text = ""
        if content_div:
            content_text = content_div.get_text("\n", strip=True)
            
        links = []
        # 找尋此 EID 頁面內所有的下載連結或相關連結
        # 我們主要關注 page 中的 a 標籤
        search_container = content_div if content_div else soup
        for a in search_container.find_all('a', href=True):
            href = a['href']
            text = a.text.strip()
            # 排除選單、頁尾等無關連結 (只取包含下載、檔案、或是特定課程的連結)
            # PCC 網站的下載連結通常會包含 fileId 或 download
            if 'fileId' in href or 'download' in href or href.endswith(('.pdf', '.ppt', '.pptx', '.doc', '.docx', '.rar', '.zip')):
                # 轉換為絕對路徑
                full_url = href if href.startswith("http") else "https://www.pcc.gov.tw" + href
                links.append({
                    "text": text,
                    "url": full_url
                })
                
        return {
            "eid": eid,
            "url": url,
            "title": title_text,
            "h1": h1_text,
            "h2": h2_text,
            "content_summary": content_text[:3000], # 擷取一部分內容做摘要
            "links": links
        }
    except Exception as e:
        print(f"Error scraping EID {eid}: {e}")
        return None

def main():
    eids = ['9868', '9869']
    results = {}
    for eid in eids:
        data = scrape_page(eid)
        if data:
            results[eid] = data
            
    # 寫入 JSON
    with open("pcc_tutorials_scraped.json", "w", encoding="utf-8") as f:
        json.dump(results, f, ensure_ascii=False, indent=2)
    print("Scraping completed. Saved to pcc_tutorials_scraped.json")

if __name__ == "__main__":
    main()
