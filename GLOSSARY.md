# GLOSSARY / 政府採購法模擬測驗系統專業術語對照表

本文件定義 `Procurement-Law-exam` 專案中所使用的專業術語，以確保命名與邏輯的一致性。

## 核心名詞對照表

| 中文名稱 | 英文名稱 | 代碼變數/資料庫欄位名稱 | 定義與說明 |
| :--- | :--- | :--- | :--- |
| 政府採購法 | Government Procurement Act | `procurement_law` | 中華民國政府採購法規與相關子法 |
| 題庫 | Question Bank | `question_bank` | 包含所有採購法規考試題目的集合 |
| 是非題 | True-False Question | `tf_question` | 答案為對 (True/O) 或錯 (False/X) 的題型 |
| 選擇題 | Multiple-Choice Question | `mc_question` | 答案為四選一的單選題型 |
| 題目內文 | Question Content | `question_text` | 考題的題目敘述文字 |
| 選項 | Options | `options` | 選擇題的四個備選答案，以陣列或 JSON 儲存 |
| 正確答案 | Correct Answer | `correct_answer` | 題目設定的正確解答 (是非題為 `boolean` 或 `'O'/'X'`，選擇題為 `1`, `2`, `3`, `4`) |
| 法規條號分類 | Law Category / Article | `category` / `article_no` | 題目對應的政府採購法法規分類或具體條號（如：招標、決標、履約管理） |
| 解析與說明 | Explanation | `explanation` | 題目背後引用的法規依據或詳細解析說明 |
| 解析器 | Question Parser | `question_parser` | 用於解析從政府採購網下載的題庫檔案（PDF/Doc/Odf）的自動化工具 |
| 測驗模式 | Exam Mode | `exam_mode` | 模擬正式考試的模式，限制時間且交卷後才顯示分數與解答 |
| 練習模式 | Practice Mode | `practice_mode` | 隨選隨答的學習模式，答題後立即顯示正誤與法規解析 |
| 錯題本 | Error Ledger / Wrong Answers | `error_ledger` / `wrong_answers` | 記錄使用者答錯的題目，以便進行針對性複習 |
| 測驗紀錄 | Quiz Record | `quiz_record` | 記錄使用者歷次測驗的時間、得分與答題明細 |
| 現行法規規定 | Current Regulation | `current_regulation` | 目前最新的政府採購法規法條與限額標準（如現行小額採購為 15 萬元） |
| 歷史法規規定 | Historical Regulation | `historical_regulation` | 題目出題當時適用之舊版政府採購法規法條與限額標準（如修正前之小額採購為 10 萬元） |
| 法規修訂警告 | Regulation Amendment Warning | `amendment_warning` | 當歷史考題與現行法規衝突或標準改變時，顯示之特別提醒與對照說明 |
| 考試年份 / 年度 | Exam Year | `exam_year` | 題目出題的年度（如 109 ~ 114 年），系統支援優先篩選「近五年」的考題 |
| 行動裝置優化版面 | Mobile-First Layout | `mobile_layout` | 保留手機版寬度、點擊尺寸與滑動手勢優化的響應式網頁設計 |
| 教學模式 | Tutorial Mode | `tutorial_mode` | 依照章節科目顯示法規核心要點、重點講義與關鍵法條的引導學習模式 |
| 重點講義資料庫 | Tutorial Database | `tutorial_db` | 儲存各章節採購法重點概念、圖表與核心條文對照的 JS 資料庫檔案 |
| 諮詢模式 | Consultation Mode / Chat Mode | `chat_mode` | 提供對話介面供使用者輸入政府採購法規問題，並由 AI 扮演採購法顧問給予即時法規檢索與說明的模式 |
| API 金鑰 | API Key | `api_key` | 用於授權 AI 諮詢對話與解題功能所需的 Gemini 驗證金鑰，加密安全存於使用者本機 LocalStorage 中 |
| 現行法規資料庫 | Laws Database | `laws_db` | 收錄政府採購法母法及其所有子法最新條文的結構化 JS 資料庫 |
| 前端檢索增強生成 | Client-Side RAG | `client_side_rag` | 無需伺服器，直接在瀏覽器端比對法規庫條文並作為 Context 提供給 AI 以防幻覺的檢索技術 |
| 主張物理鏈結溯源 | Claim Traceability | `claim_traceability` | AI 的回答能精確物理錨定並對照到 `laws_db` 具體條號與文字的雙向追溯機制 |
| 法律知識代謝 | Knowledge Decay | `knowledge_decay` | 當政府採購法規修正時，系統能自動識別、標記並更新歷史失效考題與解析的代謝機制 |
| 觀念地圖 | Concept Map | `concept_map` | 連結考題、法條與常見考題陷阱的結構化採購法規概念網絡 |
| 命題分析引擎 | Exam Analytics Engine | `exam_analytics_engine` | 統計近五年考題中各法條的命題頻率並生成高頻考點排行榜的分析模組 |
| 間隔重複系統 | Spaced Repetition System | `spaced_repetition` / `srs` | 仿 Anki 遺忘曲線機制，根據使用者答題歷史動態計算錯題複習時間的排程系統 |
| AI 智慧導師 | AI Tutor | `ai_tutor` | 診斷使用者錯題弱點、分析法規盲區並主動推薦導學或出題計畫的智慧教練模組 |
| 法規多版本庫 | Regulation Version Store | `version_store` | 儲存並比對母法與子法歷史多次修法歷程（如 109年、112年、115年等）的多版本資料結構 |
| 雙向反查索引 | Bidirectional Indexing | `bidirectional_index` | 支援「法條 ↔ 觀念 ↔ 題目」雙向鏈結與一鍵反向出題練習的檢索索引 |





