# -*- coding: utf-8 -*-
"""
政府採購法教材下載修復工具 (PCC Material Download Fixer)
"""

import os
import re
import requests
import urllib3
from bs4 import BeautifulSoup

urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

# 官方網址基礎路徑
BASE_URL = "https://web.pcc.gov.tw"

def get_file_type(content):
    """
    根據二進位檔案內容的前面幾個位元組判斷副檔名
    """
    if content.startswith(b'%PDF'):
        return '.pdf'
    elif content.startswith(b'PK\x03\x04'):
        return '.docx'
    elif content.startswith(b'\xd0\xcf\x11\xe0\xa1\xb1\x1a\xe1'):
        return '.doc'
    elif content.startswith(b'{\\rtf'):
        return '.rtf'
    elif content.startswith(b'Rar!'):
        return '.rar'
    elif content.startswith(b'PK\x05\x06'): # 空的 zip
        return '.zip'
    elif content.strip().startswith(b'<!DOCTYPE') or content.strip().startswith(b'<html') or b'<html' in content[:500].lower():
        return '.html'
    return None

def clean_filename(name):
    """
    清理檔名，移除非法字元，防止 Windows 存檔錯誤
    """
    name = re.sub(r'[\/\\\:\*\?\"\<\>\|]+', '_', name)
    name = re.sub(r'\s+', '_', name)
    # 移除版本標記
    name = re.sub(r'\([vV]?\d+(\.\d+)*\)', '', name)
    # 移除大小標記如 (1.2MB)
    name = re.sub(r'\(\d+(\.\d+)?[mMgG][bB]\)', '', name)
    return name.strip('_').strip()

def download_and_save(url, target_path_base, title):
    """
    下載檔案，自動偵測檔案類型並儲存到正確的副檔名
    """
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    }
    print(f"  --> 正在下載: {url}")
    try:
        r = requests.get(url, headers=headers, timeout=30, verify=False)
        r.raise_for_status()
        content = r.content
        
        ext = get_file_type(content)
        if not ext:
            # 嘗試從 Content-Type 讀取
            ct = r.headers.get('Content-Type', '').lower()
            if 'pdf' in ct:
                ext = '.pdf'
            elif 'msword' in ct:
                ext = '.doc'
            elif 'officedocument.wordprocessingml' in ct:
                ext = '.docx'
            elif 'zip' in ct:
                ext = '.zip'
            elif 'html' in ct:
                ext = '.html'
            else:
                ext = '.bin' # 預設二進位
                
        if ext == '.html':
            print(f"  [警告] 網頁回應為 HTML，可能需要登入或該連結為無效檔案。跳過儲存。")
            return False
            
        dest_filename = f"{title}{ext}"
        dest_path = os.path.join(target_path_base, dest_filename)
        
        with open(dest_path, 'wb') as f:
            f.write(content)
        print(f"  [成功] 儲存檔案: {dest_filename} ({len(content)} 位元組)")
        return True
    except Exception as e:
        print(f"  [失敗] 下載或儲存失敗: {url}, 原因: {e}")
        return False

def main():
    downloads_dir = "downloads"
    materials_dir = os.path.join(downloads_dir, "教材")
    
    if not os.path.exists(downloads_dir):
        print(f"找不到 '{downloads_dir}' 資料夾，請確認執行路徑。")
        return
        
    if not os.path.exists(materials_dir):
        os.makedirs(materials_dir)
        print(f"已建立教材儲存目錄: {materials_dir}")
        
    print("====================================================")
    print("      政府採購法教材下載與修復工具啟動")
    print("====================================================")
    
    # 步驟 1: 修復已下載但副檔名錯誤的 PDF 檔案
    print("\n[步驟 1] 掃描現有檔案並修正副檔名...")
    for filename in os.listdir(downloads_dir):
        filepath = os.path.join(downloads_dir, filename)
        if os.path.isdir(filepath) or filename in ["build_progress.txt", "extracted_laws_raw.txt"]:
            continue
            
        try:
            with open(filepath, 'rb') as f:
                head = f.read(100)
                
            actual_ext = get_file_type(head)
            _, current_ext = os.path.splitext(filename)
            
            # 如果是 PDF 卻被命名為 .docx
            if actual_ext == '.pdf' and current_ext.lower() == '.docx':
                new_filename = filename[:-5] + ".pdf"
                new_filepath = os.path.join(materials_dir, new_filename)
                os.rename(filepath, new_filepath)
                print(f"  修正: {filename} -> 教材/{new_filename} (實際為 PDF 檔案)")
            # 如果是 RAR，移動到教材目錄
            elif actual_ext == '.rar' and current_ext.lower() == '.rar':
                new_filepath = os.path.join(materials_dir, filename)
                os.rename(filepath, new_filepath)
                print(f"  移動: {filename} -> 教材/{filename} (RAR 壓縮檔)")
        except Exception as e:
            print(f"  讀取或更名 {filename} 發生錯誤: {e}")

    # 步驟 2: 掃描 HTML 檔案，尋找內嵌的下載連結並下載
    print("\n[步驟 2] 解析錯誤下載的 HTML 網頁並下載實際教材...")
    for filename in os.listdir(downloads_dir):
        filepath = os.path.join(downloads_dir, filename)
        if os.path.isdir(filepath) or not filename.endswith(('.docx', '.doc')):
            continue
            
        # 排除考試題庫，只處理教材
        if "題庫" in filename:
            continue
            
        try:
            with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
                html_content = f.read()
                
            # 檢查是否為 HTML 格式
            if not (html_content.strip().startswith('<!DOCTYPE') or '<html' in html_content[:500].lower()):
                continue
                
            print(f"\n正在解析教材網頁結構: {filename} ...")
            soup = BeautifulSoup(html_content, 'html.parser')
            
            # 尋找所有下載連結
            download_links = []
            
            # 方法 A: 尋找表格列中的下載連結與檔名
            for tr in soup.find_all('tr'):
                cells = tr.find_all(['td', 'th'])
                if not cells:
                    continue
                links = tr.find_all('a', href=True)
                for a in links:
                    href = a['href']
                    if 'getClientDownloadForDownloadFile' in href:
                        # 從整列中萃取有意義的名稱
                        row_texts = []
                        for c in cells:
                            t = c.get_text().strip()
                            t = t.replace('(下載)', '').replace('下載', '').strip()
                            # 移除非檔名資訊如 (1.0MB)
                            t = re.sub(r'\([vV]?\d+(\.\d+)*\)', '', t)
                            t = re.sub(r'\(\d+(\.\d+)?[mMgG][bB]\)', '', t)
                            if t and t not in ['DOC', 'PDF', 'ODF', '開啟', '說明', '檔案格式', 'v1.0', '2.0', 'v5.0', 'V5.0', 'V1.0', 'V4.1']:
                                row_texts.append(t)
                        title = ' - '.join(row_texts)
                        title = clean_filename(title)
                        if not title:
                            title = a.get_text().strip()
                        download_links.append((href, title))
            
            # 方法 B: 若沒有表格列，直接找所有 a 標籤
            if not download_links:
                for a in soup.find_all('a', href=True):
                    href = a['href']
                    if 'getClientDownloadForDownloadFile' in href:
                        title = clean_filename(a.get_text().strip())
                        if not title:
                            title = f"file_{href.split('=')[-1]}"
                        download_links.append((href, title))
                        
            # 如果有找到下載連結，則進行下載
            if download_links:
                print(f"  在網頁中找到 {len(download_links)} 個教材檔案連結，準備下載...")
                for href, title in download_links:
                    full_url = href if href.startswith("http") else BASE_URL + href
                    download_and_save(full_url, materials_dir, title)
                
                # 下載完後刪除舊的假 Word 檔 (HTML 檔)
                os.remove(filepath)
                print(f"  [清理] 已刪除暫存 HTML 檔: {filename}")
            else:
                # 如果沒有檔案下載連結，代表這只是一個說明網頁或外部連結專區
                # 我們把它的外部連結匯整出來存成一個說明文字檔
                external_links = []
                for a in soup.find_all('a', href=True):
                    href = a['href']
                    text = a.get_text().strip()
                    if href.startswith('http') and not href.startswith(BASE_URL):
                        external_links.append((text, href))
                        
                if external_links:
                    base_name, _ = os.path.splitext(filename)
                    txt_filename = f"{base_name}_相關連結.txt"
                    txt_path = os.path.join(materials_dir, txt_filename)
                    with open(txt_path, 'w', encoding='utf-8') as txt_f:
                        txt_f.write(f"=== {base_name} 外部相關連結 ===\n\n")
                        for t, h in external_links:
                            txt_f.write(f"【{t}】：\n{h}\n\n")
                    print(f"  本網頁無直接下載檔，已將 {len(external_links)} 個外部連結儲存至: 教材/{txt_filename}")
                    
                    # 刪除舊的假 Word 檔
                    os.remove(filepath)
                    print(f"  [清理] 已刪除暫存 HTML 檔: {filename}")
                else:
                    print(f"  本網頁未找到任何檔案下載連結或外部連結。暫不處理。")
                    
        except Exception as e:
            print(f"  處理 HTML 檔案 {filename} 發生異常: {e}")

    print("\n====================================================")
    print("             教材修復與下載完成！")
    print(f"      所有教材均已分類下載/修復至：{materials_dir}")
    print("====================================================")

if __name__ == "__main__":
    main()
