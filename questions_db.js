const questions_db = [
  {
    "id": "pcc-q-1",
    "category": "政府採購全生命週期概論",
    "type": "tf_question",
    "question_text": "私立學校辦理採購，不論是否接受政府補助，皆不適用政府採購法之規定。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法第4條規定，法人或團體（含私立學校）接受機關補助辦理採購，其補助金額占採購金額半數以上，且補助金額在公告金額以上者，適用本法之規定，並應受補助機關之監督。因此並非一律不適用。",
    "exam_year": 112,
    "has_amendment": true,
    "historical_regulation": "舊法規：公告金額為新臺幣 100 萬元。",
    "current_regulation": "現行法規（自 112 年 1 月 1 日起）：公告金額調高為新臺幣 150 萬元，故補助金額需達 150 萬元以上且占半數以上才適用採購法。",
    "amendment_warning": "⚠️ 門檻金額變更：自 112 年起，公告金額已由 100 萬元調整為 150 萬元。"
  },
  {
    "id": "pcc-q-2",
    "category": "政府採購全生命週期概論",
    "type": "mc_question",
    "question_text": "機關委託廠商辦理法律諮詢服務，屬於政府採購法中所定義的哪一種採購？",
    "options": [
      "工程採購",
      "財物採購",
      "勞務採購",
      "以上皆非"
    ],
    "correct_answer": 3,
    "explanation": "依政府採購法第2條規定，本法所稱採購，指工程之定作、財物之買受、定製、承租及勞務之委任或僱傭等。法律諮詢服務屬於專業服務之委任，故為「勞務採購」。",
    "exam_year": 113,
    "has_amendment": false
  },
  {
    "id": "pcc-q-3",
    "category": "政府採購法之總則、招標及決標",
    "type": "mc_question",
    "question_text": "依現行政府採購法規定，中央機關辦理未達公告金額但達小額採購額度以上之採購，其小額採購之金額限制為新臺幣多少元以下？",
    "options": [
      "10 萬元",
      "15 萬元",
      "20 萬元",
      "50 萬元"
    ],
    "correct_answer": 2,
    "explanation": "依行政院公共工程委員會 111 年 12 月 23 日工程企字第 1110100798 號令，自 112 年 1 月 1 日起，小額採購金額調高至新臺幣 15 萬元以下。",
    "exam_year": 113,
    "has_amendment": true,
    "historical_regulation": "舊法規：小額採購額度為新臺幣 10 萬元以下。",
    "current_regulation": "現行法規（112年1月1日施行）：小額採購額度調高至新臺幣 15 萬元以下。",
    "amendment_warning": "⚠️ 重要修法：112 年起小額採購上限已由 10 萬元提高至 15 萬元。若題目為舊年度考古題，請特別留意此差異。"
  },
  {
    "id": "pcc-q-4",
    "category": "政府採購法之總則、招標及決標",
    "type": "tf_question",
    "question_text": "限制性招標是指不經公告程序，僅能邀請一家廠商進行議價，而不能邀請兩家以上廠商比價。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法第18條第4項規定，限制性招標指不經公告程序，邀請二家以上廠商比價或僅邀請一家廠商議價。因此是可以邀請兩家以上廠商比價的。",
    "exam_year": 112,
    "has_amendment": false
  },
  {
    "id": "pcc-q-5",
    "category": "政府採購法之總則、招標及決標",
    "type": "mc_question",
    "question_text": "現行政府採購法規中，工程及財物採購的「公告金額」標準為新臺幣多少元？",
    "options": [
      "100 萬元",
      "150 萬元",
      "200 萬元",
      "5,000 萬元"
    ],
    "correct_answer": 2,
    "explanation": "自 112 年 1 月 1 日起，工程、財物及勞務採購之公告金額均調整為新臺幣 150 萬元。",
    "exam_year": 113,
    "has_amendment": true,
    "historical_regulation: ": "舊法規：公告金額為新臺幣 100 萬元。",
    "current_regulation": "現行法規：公告金額提高至新臺幣 150 萬元。",
    "amendment_warning": "⚠️ 公告金額調整：自 112 年 1 月 1 日起，已從 100 萬調高至 150 萬元。"
  },
  {
    "id": "pcc-q-6",
    "category": "政府採購法之履約管理及驗收",
    "type": "tf_question",
    "question_text": "驗收人應於驗收完畢後，於驗收紀錄上簽名，若有不同意見時，應在紀錄上載明，不得拒絕簽名。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法施行細則第96條規定，驗收紀錄應由辦理驗收人員會同監驗人員、協辦驗收人員及廠商代表共同簽名。如有不同意見，應予載明，不得拒絕簽名。",
    "exam_year": 111,
    "has_amendment": false
  },
  {
    "id": "pcc-q-7",
    "category": "政府採購法之罰則及附則",
    "type": "mc_question",
    "question_text": "機關辦理採購，發現廠商有採購法第101條第1項各款情形之一（如轉包、擅自減工料等），應將其事實及理由通知廠商，並附記如未提出異議，將刊登政府採購公報。廠商如欲提出異議，應於收受通知之次日起幾日內以書面向機關提出？",
    "options": [
      "7 日",
      "10 日",
      "20 日",
      "30 日"
    ],
    "correct_answer": 3,
    "explanation": "依政府採購法第102條第1項規定，廠商對於機關依前條所為之通知，認為違反本法或不實者，得於接獲通知之次日起二十日內，以書面向機關提出異議。",
    "exam_year": 112,
    "has_amendment": false
  },
  {
    "id": "pcc-q-8",
    "category": "政府採購法之爭議處理",
    "type": "mc_question",
    "question_text": "廠商與機關因履約爭議未能達成協議，得向採購申訴審議委員會申請下列何種程序以求解決？",
    "options": [
      "行政訴訟",
      "訴願",
      "調解",
      "仲裁登記"
    ],
    "correct_answer": 3,
    "explanation": "依政府採購法第85條之1規定，機關與廠商因履約爭議未能達成協議者，得向採購申訴審議委員會申請調解，或向仲裁機構提付仲裁。",
    "exam_year": 113,
    "has_amendment": false
  },
  {
    "id": "pcc-q-9",
    "category": "底價及價格分析",
    "type": "tf_question",
    "question_text": "招標文件已訂明固定服務費用或費率者，仍必須辦理議價程序，並應訂定底價。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法第47條第1項第2款，招標文件已訂明固定服務費用或費率者，得不訂底價；且若已訂明固定價格，議價程序僅需確認廠商同意該價格及協商履約內容即可，不需訂底價。",
    "exam_year": 112,
    "has_amendment": false
  },
  {
    "id": "pcc-q-10",
    "category": "投標須知及招標文件製作",
    "type": "mc_question",
    "question_text": "機關辦理公開招標，其投標文件之收受截止期限，自公告日起至截止投標日止，其「等標期」之訂定，原則上應依何種辦法辦理？",
    "options": [
      "政府採購法施行細則",
      "招標期限標準",
      "投標廠商資格與特殊採購辦法",
      "最有利標評選辦法"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法第28條規定，等標期之訂定應依「招標期限標準」之規定辦理，依採購金額規模及招標方式不同，訂有不同之法定最短等標期。",
    "exam_year": 112,
    "has_amendment": false
  },
  {
    "id": "pcc-q-11",
    "category": "採購契約",
    "type": "tf_question",
    "question_text": "採購契約因政策變更，機關依契約規定終止或解除部分契約者，應補償廠商因此所生之全部損失，包含廠商預期可得之利益。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依採購契約要項規定，機關因政策變更終止契約，應補償廠商因此所生之損失，但不包括廠商若繼續履約預期可得之利益（即不補償預期利潤）。",
    "exam_year": 111,
    "has_amendment": false
  },
  {
    "id": "pcc-q-12",
    "category": "最有利標及評選優勝廠商",
    "type": "mc_question",
    "question_text": "依最有利標評選辦法規定，評選委員會之成員中，外聘專家、學者之人數比例不得少於全體委員的多少？",
    "options": [
      "四分之一",
      "三分之一",
      "二分之一",
      "三分之二"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法第94條規定，採購評選委員會置委員五人至十七人，其中專家、學者人數不得少於三分之一，並由機關自工程會所建立之建議名單中遴選。",
    "exam_year": 113,
    "has_amendment": false
  },
  {
    "id": "pcc-q-13",
    "category": "電子採購實務",
    "type": "tf_question",
    "question_text": "機關辦理電子領標，得於招標文件中規定，投標廠商必須繳驗電子領標之電子憑據書面明細，否則視為無效標。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "為防止圍標及確認廠商確實有電子領標，機關得於投標須知規定廠商投標時須檢附電子憑據明細，如未檢附且未於開標後限期澄清者，得判定為無效標（不合格標）。",
    "exam_year": 112,
    "has_amendment": false
  },
  {
    "id": "pcc-q-14",
    "category": "工程及技術服務採購作業",
    "type": "mc_question",
    "question_text": "機關委託技術服務廠商辦理監造，其監造人員之資格與人數限制，應適用下列何種辦法之規定？",
    "options": [
      "公共工程專業人員資格辦法",
      "工程技術顧問公司管理條例",
      "公共工程施工品質管理作業要點",
      "機關委託技術服務廠商評選及計費辦法"
    ],
    "correct_answer": 3,
    "explanation": "監造人員（包含監工、品管人員等）之資格及派駐人數標準，依行政院公共工程委員會頒布之「公共工程施工品質管理作業要點」規定辦理。",
    "exam_year": 112,
    "has_amendment": false
  },
  {
    "id": "pcc-q-15",
    "category": "財物及勞務採購作業",
    "type": "tf_question",
    "question_text": "機關辦理勞務採購，其履約期間如跨越三個年度，應在招標文件中明訂預算如未獲民意機關審議通過時之處理方式，例如可終止契約且不補償廠商預期利潤。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "複數年度之跨年度採購案，後續年度預算均須經民意機關審議，因此必須在契約中載明預算未通過時之保留條款或終止契約條款，以規避財政與法律風險。",
    "exam_year": 111,
    "has_amendment": false
  },
  {
    "id": "pcc-q-16",
    "category": "錯誤採購態樣",
    "type": "mc_question",
    "question_text": "下列何者不屬於行政院公共工程委員會所列舉之「常見招標文件製作錯誤態樣」？",
    "options": [
      "限特定地區之廠商方得投標",
      "限特定廠牌之商品且不允許同等品",
      "要求投標廠商必須具有 ISO 9001 認證（非特殊採購）",
      "限制投標文件必須使用再生紙雙面列印"
    ],
    "correct_answer": 4,
    "explanation": "限特定地區投標、限特定廠牌不許同等品、非特殊採購卻限ISO認證等，皆違反政府採購法第36條或第37條妨礙公平競爭規定。環保用紙則符合綠色採購方針，非屬限制競爭錯誤態樣。",
    "exam_year": 112,
    "has_amendment": false
  },
  {
    "id": "pcc-q-17",
    "category": "道德規範及違法處置",
    "type": "tf_question",
    "question_text": "辦理採購之機關承辦人員，因廠商請託而洩漏底價，只要未收受廠商賄賂或利益，即不構成刑事責任，僅適用行政處分。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "洩漏底價違反政府採購法第34條秘密規定，且即使未收受賄賂，仍構成刑法第132條洩漏國防以外秘密罪，以及貪污治罪條例之圖利罪，屬重大刑事責任。",
    "exam_year": 113,
    "has_amendment": false
  },
  {
    "id": "pcc-q-18",
    "category": "常用採購工具及參考資源",
    "type": "mc_question",
    "question_text": "辦理最有利標評選時，若承辦人員對評選文件的公文撰寫或簽呈格式有疑問，應參考下列工程會的哪項工具書？",
    "options": [
      "最有利標作業手冊",
      "機關辦理最有利標簽辦文件範例",
      "政府採購稽核發現缺失案例",
      "採購業務標準化作業流程及控制重點"
    ],
    "correct_answer": 2,
    "explanation": "「機關辦理最有利標簽辦文件範例」提供了完整的最有利標簽呈、公文及表格範本，是承辦人員簽辦案件時的最佳參考資源。",
    "exam_year": 113,
    "has_amendment": false
  },
  {
    "id": "pcc-q-19",
    "category": "政府採購全生命週期概論",
    "type": "tf_question",
    "question_text": "接受政府補助辦理採購之法人或團體，其補助金額占採購金額恰好為半數（50%），且補助金額達公告金額以上者，仍須適用政府採購法之規定。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "政府採購法第4條規定「占採購金額半數以上」，包含剛好半數（50%）及以上，因此若達公告金額以上且剛好占一半，確實適用採購法。",
    "exam_year": 112,
    "has_amendment": false
  },
  {
    "id": "pcc-q-20",
    "category": "政府採購法之總則、招標及決標",
    "type": "mc_question",
    "question_text": "現行政府採購法規定中，關於「巨額採購」金額門檻的劃分，下列敘述何者正確？",
    "options": [
      "工程採購為新臺幣 2 億元",
      "財物採購為新臺幣 2 億元",
      "勞務採購為新臺幣 2,000 萬元",
      "工程採購為新臺幣 1 億元"
    ],
    "correct_answer": 2,
    "explanation": "依現行「特別採購招標決標處理辦法」第2條，巨額採購門檻自 112 年 1 月 1 日起調高：工程採購調高為 4 億元；財物採購調高為 2 億元；勞務採購調高為 8,000 萬元。",
    "exam_year": 113,
    "has_amendment": true,
    "historical_regulation": "舊法規：工程 2 億、財物 1 億、勞務 2,000 萬。",
    "current_regulation": "現行法規（112年起）：工程 4 億、財物 2 億、勞務 8,000 萬。",
    "amendment_warning": "⚠️ 門檻調高：自 112 年起巨額採購門檻已全面翻倍調高，請特別注意金額數值。"
  },
  {
    "id": "pcc-q-21",
    "category": "工程及技術服務採購作業",
    "type": "mc_question",
    "question_text": "機關委託廠商辦理技術服務，服務費用採建造費用百分比法計費者，下列敘述何者正確？",
    "options": [
      "各階段環境影響評估及相關說明書、報告書之編製及送審之服務費用，屬百分比計費之範疇，不得另行估算編列。",
      "水土保持計畫之辦理及送審之服務費用，仍須受附表所列參考百分比之限制，不得另行估算編列。",
      "申請公有建築物候選綠建築證書或綠建築標章之服務費用，仍須受附表所列參考百分比之限制，不得另行估算編列。",
      "招標文件可載明建造費用不包括拆除工程之有價回收料之減項金額。"
    ],
    "correct_answer": 4,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-22",
    "category": "工程及技術服務採購作業",
    "type": "mc_question",
    "question_text": "建築物工程技術服務建造費用百分比參考表所列服務費用參考值，於包括規劃、設計及監造3項時，原則上各占多少百分比？",
    "options": [
      "規劃占5%，設計占50%，監造占45%。",
      "規劃占15%，設計占45%，監造占40%。",
      "規劃占10%，設計占45%，監造占45%。",
      "規劃占10%，設計占50%，監造占40%。"
    ],
    "correct_answer": 3,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-23",
    "category": "工程及技術服務採購作業",
    "type": "mc_question",
    "question_text": "機關辦理技術服務採購，採建造費用百分比法計費，下列何者正確？",
    "options": [
      "建築物裝修及整修工程不得比照建築物工程技術服務建造費用百分比參考表計費。",
      "技術服務契約有關之各項工程，不得合併計算建造費用。",
      "技術服務契約有關之各項工程，如屬分期或分區施作，且契約已明訂依分期或分區給付服務費用者，可分別計算建造費用，但不包括同一工程之分標採購案。",
      "若後續施作工程未發包，則機關得免付費用予技術服務廠商。"
    ],
    "correct_answer": 3,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-24",
    "category": "工程及技術服務採購作業",
    "type": "mc_question",
    "question_text": "機關委託廠商辦理技術服務，服務費用採建造費用百分比法計費者，下列敘述何者錯誤？",
    "options": [
      "建造費用，指工程採購底價金額或評審委員會建議金額，若無前2者，以工程預算代之。但應依規定不包括若干事項之費用。",
      "建造費用不包括工程保險費。",
      "其服務費率應按工程內容、服務項目及難易度，參考附表1至附表4，訂定建造費用之費率級距及各級費率，簽報機關首長或其授權人員核定，無須於招標文件中載明。",
      "工程於履約期間有契約變更、終止或解除契約之情形者，技術服務費用得視實際情形協議增減之。"
    ],
    "correct_answer": 3,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-25",
    "category": "工程及技術服務採購作業",
    "type": "tf_question",
    "question_text": "機關委託工程設計、監造，採建造費用百分比法計費，工程採購無底價且無評審委員會建議金額者，建造費用以工程預算代之。但應扣除規費、規劃費、設計費、監造費、專案管理費、物價指數調整工程款、營業稅、土地及權利費用、法律費用、主辦機關所需工程管理費、承包商辦理工程之各項利息、保險費及招標文件所載其他除外費用及稅捐等。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-26",
    "category": "工程及技術服務採購作業",
    "type": "tf_question",
    "question_text": "依「機關委託技術服務廠商評選及計費辦法」之規定，採建造費用百分比法之計費方式者，申請公有建築物候選綠建築證書或綠建築標章之服務費用，包含於採建造費用百分比法所計算之服務費中。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-27",
    "category": "工程及技術服務採購作業",
    "type": "tf_question",
    "question_text": "依「機關委託技術服務廠商評選及計費辦法」之規定，採建造費用百分比法之計費方式者，申請公有建築物候選綠建築證書或綠建築標章之服務費用，不含於建造費用百分比法計費範圍，應單獨列項供廠商報價，或於招標文件中載明固定費用。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-28",
    "category": "工程及技術服務採購作業",
    "type": "tf_question",
    "question_text": "工程專案管理技術服務（不含施工監造）建造費用百分比參考表所列服務費用參考值，包括規劃與可行性評估、規劃、設計、招標、決標、施工督導與履約管理之諮詢及審查。其中可行性研究之諮詢及審查占百分之五、規劃之諮詢及審查占百分之五、工程設計之諮詢及審查占百分之三十五、招標、決標之諮詢及審查占百分之十、施工督導與履約管理之諮詢及審查占百分之四十五為原則。各機關不得自行調整。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-29",
    "category": "工程及技術服務採購作業",
    "type": "tf_question",
    "question_text": "工程專案管理技術服務（不含施工監造）建造費用百分比參考表之參考值包括規劃與可行性評估、規劃、設計、招標、決標、施工督導與履約管理之諮詢及審查。其中可行性研究之諮詢及審查占百分之五、規劃之諮詢及審查占百分之五、工程設計之諮詢及審查占百分之三十五、招標、決標之諮詢及審查占百分之十、施工督導與履約管理之諮詢及審查占百分之四十五為原則。各機關仍得自行調整。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-30",
    "category": "工程及技術服務採購作業",
    "type": "tf_question",
    "question_text": "外國技師如欲於我國提供服務，得以外國技師執照代替我國執照。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-31",
    "category": "工程及技術服務採購作業",
    "type": "tf_question",
    "question_text": "外國技師如欲於我國提供簽證服務，可經我國技師考試及格取得技師證書，或依我國與其母國所簽相互認許協議等方式，於取得我國執照後為之。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-32",
    "category": "工程及技術服務採購作業",
    "type": "tf_question",
    "question_text": "機關委託廠商辦理技術服務，服務費用採建造費用百分比法計費者，其服務費率應按工程內容、服務項目及難易度，參考附表1至附表4，訂定建造費用之費率級距及各級費率，簽報機關首長或其授權人員核定，無須於招標文件中載明。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-33",
    "category": "工程及技術服務採購作業",
    "type": "tf_question",
    "question_text": "機關委託廠商辦理技術服務，服務費用採建造費用百分比法計費者，其服務費率應按工程內容、服務項目及難易度，參考附表1至附表4，訂定建造費用之費率級距及各級費率，簽報機關首長或其授權人員核定，並於招標文件中載明。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-34",
    "category": "工程及技術服務採購作業",
    "type": "tf_question",
    "question_text": "依「機關委託技術服務廠商評選及計費辦法」之規定，有2家以上廠商為同一優勝順序者，以配分最高之評選項目之得分合計值較高者優先議價；得分仍相同者，就該等廠商進行抽籤決定。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-35",
    "category": "工程及技術服務採購作業",
    "type": "tf_question",
    "question_text": "依「機關委託技術服務廠商評選及計費辦法」之規定，有2家以上廠商為同一優勝順序者，擇配分最高之評選項目之得分合計值較高者，優先議價；得分仍相同者，就該等廠商再進行綜合評選1次，以總評分最高、價格與總評分之商數最低或序位合計值最低者，優先議價；其再次相同者，抽籤決定之。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-36",
    "category": "工程及技術服務採購作業",
    "type": "tf_question",
    "question_text": "依「機關委託技術服務廠商評選及計費辦法」之規定，有2家以上廠商為同一優勝順序者，以標價低者優先議價。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-37",
    "category": "工程及技術服務採購作業",
    "type": "tf_question",
    "question_text": "依「機關委託技術服務廠商評選及計費辦法」之規定，採建造費用百分比法之計費方式者，各階段環境影響評估及相關說明書、報告書之編製及送審之服務費用，不得超過附表所列百分比參考值，亦不得另行估算編列。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-38",
    "category": "工程及技術服務採購作業",
    "type": "tf_question",
    "question_text": "機關委託廠商辦理規劃、設計及監造之技術服務，採建造費用百分比法之計費方式者，如工程採購無底價且無評審委員會建議金額者，建造費用以工程預算代之，惟應扣除建造費用所稱不包括之費用及稅捐等。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-39",
    "category": "工程及技術服務採購作業",
    "type": "tf_question",
    "question_text": "依「機關委託技術服務廠商評選及計費辦法」之規定，採建造費用百分比法之計費方式者，替代方案、工程設計及施工可行性之審查服務費用，得由機關依個案特性及實際需要估算，訂定合理服務費率。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-40",
    "category": "工程及技術服務採購作業",
    "type": "tf_question",
    "question_text": "建造費用百分比法所稱之「建造費用」，指工程採購底價金額或評審委員會建議金額，若無前二者，以工程預算代之。包括規費、規劃費、設計費、監造費、專案管理費、物價指數調整工程款、營業稅、土地及權利費用、法律費用、主辦機關所需工程管理費、承包商辦理工程之各項利息及保險費。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-41",
    "category": "工程及技術服務採購作業",
    "type": "tf_question",
    "question_text": "小規模（例如工程經費未達新臺幣100萬元）或區位偏遠之工程，其服務費用得依個案特性及實際需要預估編列，但不得超過建築物工程技術服務建造費用百分比參考表所列百分比。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-42",
    "category": "工程及技術服務採購作業",
    "type": "tf_question",
    "question_text": "基於節省預算考量，機關或上級機關宜通案另訂定較「機關委託技術服務廠商評選及計費辦法」之附表所列服務費用參考百分比更低之技術服務費率上限範圍或標準。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-43",
    "category": "工程及技術服務採購作業",
    "type": "tf_question",
    "question_text": "依「機關委託技術服務廠商評選及計費辦法」之規定，採建造費用百分比法之計費方式者，水土保持計畫之辦理及送審之服務費用，屬百分比計費之範疇，不得另行估算編列。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-44",
    "category": "財物及勞務採購作業",
    "type": "tf_question",
    "question_text": "機關辦理公開招標，計有3家廠商參加投標，經資格規格審查後，合於招標文件規定之投標廠商僅有1家，因報價超底價，開標主持人不得通知該廠商其減價次數限制為6次。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-45",
    "category": "財物及勞務採購作業",
    "type": "tf_question",
    "question_text": "機關辦理公開招標，計有3家廠商參加投標，經資格規格審查後，合於招標文件規定之投標廠商僅有1家，因報價超底價，開標主持人通知該廠商其減價次數限制為6次。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-46",
    "category": "財物及勞務採購作業",
    "type": "tf_question",
    "question_text": "公開招標於廢標或流標後，依原招標文件重行招標者，應有3家以上合格廠商投標，始可開標。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-47",
    "category": "財物及勞務採購作業",
    "type": "tf_question",
    "question_text": "公開招標於廢標或流標後，依原招標文件重行招標者，有1家以上合格廠商投標，即可開標。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-48",
    "category": "財物及勞務採購作業",
    "type": "tf_question",
    "question_text": "個案採購之目的係作為將來欲轉售物品之用，費用轉嫁消費者，亦屬轉售性質。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-49",
    "category": "財物及勞務採購作業",
    "type": "tf_question",
    "question_text": "機關不得依機關指定地區採購房地產作業辦法辦理員工宿舍租賃採購。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-50",
    "category": "最有利標及評選優勝廠商",
    "type": "tf_question",
    "question_text": "公立學校或公營事業辦理評選作業，依規定其採購評選委員會專家學者之委員，不得為政府機關之現職人員，故得由該公立學校或公營事業之人員，擔任該學校或事業之專家學者之委員。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-51",
    "category": "最有利標及評選優勝廠商",
    "type": "tf_question",
    "question_text": "公立學校或公營事業辦理評選作業，依規定其採購評選委員會專家學者之委員，不得為政府機關之現職人員，仍不得由該公立學校或公營事業之人員，擔任該學校或事業之專家學者之委員。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-52",
    "category": "最有利標及評選優勝廠商",
    "type": "tf_question",
    "question_text": "機關成立採購評選委員會，擬聘請專家學者擔任委員，經簽報機關首長或其授權人員核定後，無需經其本人同意。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-53",
    "category": "最有利標及評選優勝廠商",
    "type": "tf_question",
    "question_text": "機關成立採購評選委員會，擬聘請專家學者擔任委員，經簽報機關首長或其授權人員核定後，仍應經其本人同意。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-54",
    "category": "最有利標及評選優勝廠商",
    "type": "tf_question",
    "question_text": "機關辦理評選作業，如將「過去履約績效」列為評選項目，除投標廠商以自己名義所完成者外，得包含投標廠商計畫主持人或相關工作團隊成員之經驗實績。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-55",
    "category": "最有利標及評選優勝廠商",
    "type": "tf_question",
    "question_text": "機關辦理評選作業，如將「過去履約績效」列為評選項目，應為投標廠商以自己名義所完成者，不包含投標廠商計畫主持人或相關工作團隊成員之經驗實績。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-56",
    "category": "最有利標及評選優勝廠商",
    "type": "tf_question",
    "question_text": "工作小組就受評廠商資料擬具之初審意見，如無法明確表達受評廠商於各評選項目之「差異性」，得僅載明「符合」、「尚可」，或僅載明投標文件之頁碼。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-57",
    "category": "最有利標及評選優勝廠商",
    "type": "tf_question",
    "question_text": "工作小組就受評廠商資料擬具之初審意見，如僅載明「符合」、「尚可」，或僅載明投標文件之頁碼，屬採購法主管機關訂定之錯誤行為態樣。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-58",
    "category": "最有利標及評選優勝廠商",
    "type": "tf_question",
    "question_text": "採購評選委員會之正、副召集人由機關內部人員擔任者，應由一級主管以上人員任之。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-59",
    "category": "最有利標及評選優勝廠商",
    "type": "tf_question",
    "question_text": "採購評選委員會召集人由機關首長或其授權人員指定者，應由一級主管以上人員任之。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-60",
    "category": "最有利標及評選優勝廠商",
    "type": "tf_question",
    "question_text": "機關依「機關辦理設計競賽廠商評選及計費辦法」以公告程序辦理設計競賽，其非採固定費用或費率者，得於招標文件明定優勝廠商在2家以上者，依配分最高之評選項目之得分合計值較高者，優先議價；得分仍相同者，抽籤決定之。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-61",
    "category": "最有利標及評選優勝廠商",
    "type": "tf_question",
    "question_text": "機關不得遴選現任各級民意機關民意代表為採購評選委員會之委員；各級民意機關辦理採購，亦同。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-62",
    "category": "最有利標及評選優勝廠商",
    "type": "tf_question",
    "question_text": "採購評選委員會委員於所評採購個案決標後，得擔任得標廠商該案之履約工作成員，或協助履約。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-63",
    "category": "最有利標及評選優勝廠商",
    "type": "tf_question",
    "question_text": "採購評選委員會委員於所評採購個案決標後，不得擔任得標廠商該案之履約工作成員，或協助履約。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-64",
    "category": "最有利標及評選優勝廠商",
    "type": "tf_question",
    "question_text": "評選委員會辦理廠商評選後，可代替機關做出決標決定，評選結果無須另行簽報機關首長核定。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-65",
    "category": "最有利標及評選優勝廠商",
    "type": "tf_question",
    "question_text": "招標機關首長及一級主管以上人員均無法出任採購評選委員會之召集人時，得改由一級副主管代之。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-66",
    "category": "最有利標及評選優勝廠商",
    "type": "tf_question",
    "question_text": "為借重評選委員之專業知識，得標廠商得聘任採購評選委員會委員擔任履約工作成員。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-67",
    "category": "最有利標及評選優勝廠商",
    "type": "tf_question",
    "question_text": "機關辦理評選，得於招標文件規定合格分數為70分，並規定過半數出席評選委員評定總分未達70分者，為不合格廠商。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-68",
    "category": "最有利標及評選優勝廠商",
    "type": "tf_question",
    "question_text": "機關辦理評選，得於招標文件規定合格分數為70分，並規定出席評選委員評定之平均分數未達70分者，為不合格廠商。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-69",
    "category": "最有利標及評選優勝廠商",
    "type": "tf_question",
    "question_text": "召集人及副召集人如均無法出席採購評選委員會議，應檢討會議時間之妥適性及召集人、副召集人未出席會議之原因，並另訂時間開會。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-70",
    "category": "最有利標及評選優勝廠商",
    "type": "tf_question",
    "question_text": "機關應於採購評選委員會成立時，一併成立工作小組，協助採購評選委員會辦理與評選有關之作業。但案件性質單純、緊急或宜由採購評選委員會逕為評選者，得免成立工作小組。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-71",
    "category": "最有利標及評選優勝廠商",
    "type": "tf_question",
    "question_text": "機關應於採購評選委員會成立時，一併成立工作小組，協助採購評選委員會辦理與評選有關之作業。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-72",
    "category": "最有利標及評選優勝廠商",
    "type": "mc_question",
    "question_text": "機關成立之工作小組就受評廠商資料擬具初審意見，下列何者不是應載明事項？",
    "options": [
      "採購案名稱。",
      "工作小組人員姓名、職稱及專長。",
      "受評廠商於各評選項目所報內容是否具可行性，並符合招標文件所定之目的、功能、需求、特性、標準、經費及期程。",
      "受評廠商之經驗或實績。"
    ],
    "correct_answer": 4,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-73",
    "category": "最有利標及評選優勝廠商",
    "type": "mc_question",
    "question_text": "下列何者非屬工作小組初審意見所應載明之事項？",
    "options": [
      "採購案名稱。",
      "受評廠商於各評選項目之得分或序位。",
      "受評廠商於各評選項目所報內容是否具可行性，並符合招標文件所定之目的、功能、需求、特性、標準、經費及期程。",
      "受評廠商於各評選項目之差異性。"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-74",
    "category": "最有利標及評選優勝廠商",
    "type": "mc_question",
    "question_text": "採購評選委員會召集人及副召集人之產生，下列何者不正確？",
    "options": [
      "召集人及副召集人均為委員。",
      "由委員互選產生。",
      "召集人由機關首長擔任，或由機關首長或其授權人員指定一級主管以上人員擔任。",
      "副召集人由機關首長或其授權人員指定機關內部人員擔任。"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-75",
    "category": "電子採購實務",
    "type": "mc_question",
    "question_text": "17日及18日皆為上班日，若機關於17日上午10時上傳招標公告並選擇刊登政府採購公報，於下午發現其公告招標案件誤填標的分類，請問機關應於何時完成欄位修改並上傳至正式區，才能於18日刊登？",
    "options": [
      "隨時都可以。",
      "17日下午5時30分前。",
      "17日下午11時59分前。",
      "18日上午8時前。"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-76",
    "category": "電子採購實務",
    "type": "mc_question",
    "question_text": "以下就「線上繳納押標金」服務，對於招標方式之適用情形說明，何者正確？",
    "options": [
      "僅適用於「公開取得電子報價單」採購機制。",
      "不適用於公告金額以上之案件。",
      "不適用於經公開評選或公開徵求之限制性招標。",
      "各式招標方式皆適用。"
    ],
    "correct_answer": 4,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-77",
    "category": "電子採購實務",
    "type": "mc_question",
    "question_text": "機關允許廠商以電子化方式辦理領標者，應於招標公告及招標文件中規定，並於招標文件中規定，廠商得以下列方式之一投標：",
    "options": [
      "書面投標。",
      "電子投標。",
      "書面投標或電子投標。",
      "以上皆是。"
    ],
    "correct_answer": 4,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-78",
    "category": "電子採購實務",
    "type": "tf_question",
    "question_text": "機關辦理未達公告金額但逾公告金額十分之一之公開取得書面企劃書者，依規定應公告於「公開取得書面報價或企劃書」網站，並應刊登政府採購公報，邀請廠商遞送企劃書，並得參考最有利標的精神擇符合需要者依序議價。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": true,
    "historical_regulation": "舊版法規：依中央機關未達公告金額採購招標辦法第5條，小額採購額度為新臺幣 10 萬元以下。",
    "current_regulation": "現行法規（自 112 年 1 月 1 日施行）：提高至新臺幣 15 萬元以下。",
    "amendment_warning": "⚠️ 異動提醒：小額採購額度已從 10 萬元調高至 15 萬元。作答時請確認題目要求的法規時點。"
  },
  {
    "id": "pcc-q-79",
    "category": "電子採購實務",
    "type": "tf_question",
    "question_text": "機關辦理未達公告金額但逾公告金額十分之一之公開取得書面企劃書者，應於政府電子採購網刊登「公開取得書面報價或企劃書」公告，得免刊登政府採購公報，邀請廠商遞送企劃書，並得參考最有利標的精神擇符合需要者依序議價。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": true,
    "historical_regulation": "舊版法規：依中央機關未達公告金額採購招標辦法第5條，小額採購額度為新臺幣 10 萬元以下。",
    "current_regulation": "現行法規（自 112 年 1 月 1 日施行）：提高至新臺幣 15 萬元以下。",
    "amendment_warning": "⚠️ 異動提醒：小額採購額度已從 10 萬元調高至 15 萬元。作答時請確認題目要求的法規時點。"
  },
  {
    "id": "pcc-q-80",
    "category": "電子採購實務",
    "type": "tf_question",
    "question_text": "「線上繳納押標金」服務，目前僅適用於採「公開取得電子報價單」辦理之案件。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-81",
    "category": "電子採購實務",
    "type": "tf_question",
    "question_text": "「線上繳納押標金」服務，適用於各種招標方式辦理之案件。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-82",
    "category": "電子採購實務",
    "type": "tf_question",
    "question_text": "廠商透過線上瀏覽招標文件方式下載招標文件後投標，符合電子採購作業辦法第5條規定。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-83",
    "category": "電子採購實務",
    "type": "tf_question",
    "question_text": "廠商透過線上瀏覽招標文件方式下載招標文件後投標，不符電子採購作業辦法第5條規定。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-84",
    "category": "電子採購實務",
    "type": "tf_question",
    "question_text": "廠商採用「線上繳納押標金」繳納之押標金等同現金，退還流程也是在線上退款作業流程。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-85",
    "category": "電子採購實務",
    "type": "tf_question",
    "question_text": "廠商採用「線上繳納押標金」繳納之押標金等同現金，退還流程依各機關現行之作業流程。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-86",
    "category": "電子採購實務",
    "type": "tf_question",
    "question_text": "機關得於例假日及放假日，連線至「政府電子採購網」上網作公告作業，其公告日為假日。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-87",
    "category": "電子採購實務",
    "type": "tf_question",
    "question_text": "機關於例假日及放假日14:00，連線至「政府電子採購網」上網作公告作業，如屬應刊登政府採購公報者，其公告日須設定為第2個上班日(含)以後之上班日。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-88",
    "category": "電子採購實務",
    "type": "tf_question",
    "question_text": "廠商利用「線上繳納押標金」服務線上繳納押標金成功後，如因銀行作業程序機關未能即時查得是否入帳者，即便機關已從政府電子採購網查詢廠商線上繳納押標金之成功紀錄，仍應判定該廠商未繳納押標金。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-89",
    "category": "電子採購實務",
    "type": "tf_question",
    "question_text": "廠商利用「線上繳納押標金」服務線上繳納押標金成功後，如因銀行作業程序機關未能即時查得是否入帳者，機關可以政府電子採購網查詢廠商線上繳納押標金之成功紀錄，作為判定廠商是否完成繳納之依據。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-90",
    "category": "電子採購實務",
    "type": "tf_question",
    "question_text": "廠商利用「線上繳納押標金」服務線上繳納押標金後，機關僅可於開標後登入政府電子採購網，查詢廠商線上繳納押標金之情形。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-91",
    "category": "電子採購實務",
    "type": "tf_question",
    "question_text": "廠商利用「線上繳納押標金」服務線上繳納押標金後，機關可隨時登入政府電子採購網查詢廠商線上繳納押標金之情形。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-92",
    "category": "電子採購實務",
    "type": "tf_question",
    "question_text": "機關依採購法第49條及第93條之1規定採「公開取得電子報價單」辦理採購，決標後利用政府電子採購網製作之電子契約，因已保存於政府電子採購網，爰機關無須另行下載及保存。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-93",
    "category": "電子採購實務",
    "type": "tf_question",
    "question_text": "機關依採購法第49條及第93條之1規定採「公開取得電子報價單」辦理採購，決標後利用政府電子採購網製作之電子契約，應自行下載及存檔，並妥善保存。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-94",
    "category": "電子採購實務",
    "type": "tf_question",
    "question_text": "廠商電子投標者，應於開標前將所有電子投標文件傳輸至主管機關指定之資訊系統。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-95",
    "category": "電子採購實務",
    "type": "tf_question",
    "question_text": "機關依「電子採購作業辦法」第6條第3項規定允許廠商電子投標者，不得於招標文件中規定廠商應另以其他形式投標之項目。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-96",
    "category": "電子採購實務",
    "type": "tf_question",
    "question_text": "機關依「電子採購作業辦法」第6條第3項規定允許廠商電子投標者，得於招標文件中規定廠商應另以其他形式投標之項目。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-97",
    "category": "電子採購實務",
    "type": "tf_question",
    "question_text": "機關允許廠商以電子化方式辦理領標者，應於招標公告及招標文件中規定，並得於招標文件訂明電子領標之廠商，以電子資料傳輸投標或書面投標時，均應檢附主管機關指定資訊系統之領標電子憑據。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-98",
    "category": "電子採購實務",
    "type": "tf_question",
    "question_text": "機關允許廠商以電子化方式辦理領標者，應於招標公告及招標文件中規定，並應於招標文件訂明電子領標之廠商，以電子資料傳輸投標或書面投標時，均應檢附主管機關指定資訊系統之領標電子憑據。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-99",
    "category": "錯誤採購態樣",
    "type": "mc_question",
    "question_text": "下列何者屬巨額工程採購之應辦事項？",
    "options": [
      "應採行統包方式辦理。",
      "成立採購工作及審查小組。",
      "訂定投標廠商之特定資格。",
      "允許共同投標。"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": true,
    "historical_regulation": "舊版法規：工程巨額採購為 2 億元、財物為 1 億元、勞務為 2,000 萬元。",
    "current_regulation": "現行法規（自 112 年 1 月 1 日施行）：工程巨額採購提高為 4 億元、財物提高為 2 億元、勞務提高為 8,000 萬元。",
    "amendment_warning": "⚠️ 異動提醒：巨額採購標準已自 112 年調高（工程 4 億、財物 2 億、勞務 8,000 萬）。"
  },
  {
    "id": "pcc-q-100",
    "category": "錯誤採購態樣",
    "type": "mc_question",
    "question_text": "下列何者非屬巨額財物採購之應辦事項？",
    "options": [
      "招標前簽准預期使用情形。",
      "成立採購工作及審查小組。",
      "報上級機關派員監辦。",
      "訂定投標廠商之特定資格前，評估可能符合特定資格之廠商家數。"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": true,
    "historical_regulation": "舊版法規：工程巨額採購為 2 億元、財物為 1 億元、勞務為 2,000 萬元。",
    "current_regulation": "現行法規（自 112 年 1 月 1 日施行）：工程巨額採購提高為 4 億元、財物提高為 2 億元、勞務提高為 8,000 萬元。",
    "amendment_warning": "⚠️ 異動提醒：巨額採購標準已自 112 年調高（工程 4 億、財物 2 億、勞務 8,000 萬）。"
  },
  {
    "id": "pcc-q-101",
    "category": "錯誤採購態樣",
    "type": "mc_question",
    "question_text": "有關技術規格之敘述，何者為正確？",
    "options": [
      "機關所擬定、採用或適用之技術規格，其在目的或效果上有無限制競爭，應以符合該規格之廠商家數多寡作為判斷依據。",
      "機關已於招標文件精確描述技術規格，可一併列出參考廠牌，以方便投標廠商詢價。",
      "採購法第26條第1項至第3項規定技術規格之訂定順序，即機關應優先依同條第1項規定，訂定符合機關需求之技術規格；無法依第1項規定訂定技術規格時，再依序依第2項、第3項規定辦理。",
      "機關依採購法第11條之1規定成立採購工作及審查小組，其任務不包括確認招標文件所訂技術規格是否為「機關所必須」之需求。"
    ],
    "correct_answer": 3,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-102",
    "category": "錯誤採購態樣",
    "type": "tf_question",
    "question_text": "廠商經機關依據採購法第101條至第103條規定，刊登於政府採購公報，該廠商於停權期間內，仍可擔任連帶保證廠商。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-103",
    "category": "錯誤採購態樣",
    "type": "tf_question",
    "question_text": "廠商經機關依據採購法第101條至第103條規定，刊登於政府採購公報，該廠商於停權期間內，不可擔任連帶保證廠商。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-104",
    "category": "錯誤採購態樣",
    "type": "tf_question",
    "question_text": "只要最低標廠商之總標價在底價百分之八十以上，該採購案即無採購法第58條之適用。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-105",
    "category": "錯誤採購態樣",
    "type": "tf_question",
    "question_text": "最低標廠商之總標價在底價百分之八十以上，如部分標價偏低，仍有採購法第58條之適用。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-106",
    "category": "錯誤採購態樣",
    "type": "tf_question",
    "question_text": "有一新臺幣為150萬元之特殊採購，依採購法規定，該採購案於招標文件中不得訂定特定資格。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-107",
    "category": "錯誤採購態樣",
    "type": "tf_question",
    "question_text": "有一新臺幣為20萬元之非特殊採購，依採購法規定，該採購案於招標文件中不得訂定特定資格。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-108",
    "category": "錯誤採購態樣",
    "type": "tf_question",
    "question_text": "以單價決標者，無須載明預估數量或採購金額上限。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-109",
    "category": "錯誤採購態樣",
    "type": "tf_question",
    "question_text": "以單價決標者，應載明預估數量或採購金額上限。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-110",
    "category": "錯誤採購態樣",
    "type": "tf_question",
    "question_text": "機關辦理技術服務廠商公開客觀評選之採購，將廠商主要工作人員具備採購法專業知識之情形納入評選項目，屬不當限制競爭。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-111",
    "category": "錯誤採購態樣",
    "type": "tf_question",
    "question_text": "機關辦理技術服務廠商公開客觀評選之採購，將廠商主要工作人員具備採購法專業知識之情形納入評選項目，尚無違反法令規定。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-112",
    "category": "錯誤採購態樣",
    "type": "tf_question",
    "question_text": "機關辦理財物出租、變賣等收入性之招標，雖不適用採購法，但其招標文件內容仍得引用採購法有關救濟與不良廠商處分之規定。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-113",
    "category": "錯誤採購態樣",
    "type": "tf_question",
    "question_text": "機關辦理財物出租、變賣等收入性之招標，不適用採購法，其招標文件內容不得引用採購法有關救濟與不良廠商處分之規定。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-114",
    "category": "錯誤採購態樣",
    "type": "tf_question",
    "question_text": "機關依其招標文件公告之時間辦理開標，於開啟廠商投標文件之標封前，當場宣布補充規定或變更招標文件內容，尚屬適法。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-115",
    "category": "錯誤採購態樣",
    "type": "tf_question",
    "question_text": "機關依其招標文件公告之時間辦理開標，於開啟廠商投標文件之標封前，當場宣布補充規定或變更招標文件內容後即進行開標，違反採購法。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-116",
    "category": "錯誤採購態樣",
    "type": "tf_question",
    "question_text": "機關依採購法第102條第3項規定，將廠商之分公司名稱刊登政府採購公報，於刊登期間，該廠商之其他分公司得繼續參加投標或作為決標對象。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-117",
    "category": "錯誤採購態樣",
    "type": "tf_question",
    "question_text": "機關依採購法第102條第3項規定，將廠商之分公司名稱刊登政府採購公報，於刊登期間，該廠商之其他分公司不得繼續參加投標或作為決標對象。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-118",
    "category": "錯誤採購態樣",
    "type": "tf_question",
    "question_text": "押標金及保證金之繳納方式，可由機關就採購法第30條第2項所定繳納種類中選擇適合機關採用者訂入投標須知。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-119",
    "category": "錯誤採購態樣",
    "type": "tf_question",
    "question_text": "押標金及保證金之繳納方式，機關不得就採購法第30條第2項所定繳納種類中選擇其中5種訂入投標須知。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-120",
    "category": "錯誤採購態樣",
    "type": "tf_question",
    "question_text": "機關於招標文件規定廠商投標時須檢附之納稅證明，依採購法令規定廠商不及提出最近一期證明者，尚不得以前一期之納稅證明代之。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-121",
    "category": "錯誤採購態樣",
    "type": "tf_question",
    "question_text": "機關採最低標為決標原則之採購案，遇有最低標廠商之總標價偏低，顯不合理，有降低品質、不能誠信履約之虞或其他特殊情形時，請該最低標廠商提出說明，如經評估其說明合理，應於通知廠商繳納差額保證金後，宣布決標。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-122",
    "category": "錯誤採購態樣",
    "type": "tf_question",
    "question_text": "機關辦理公開招標，於招標公告所定開標時間未到，先開啟廠商標封審標，並可提升採購效率。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-123",
    "category": "錯誤採購態樣",
    "type": "tf_question",
    "question_text": "機關辦理公開招標，於招標公告所定開標時間未到即先開啟廠商標封審標，並不符合採購法之規定，不得採行。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-124",
    "category": "錯誤採購態樣",
    "type": "tf_question",
    "question_text": "機關辦理採購，發現廠商有採購法第101條第1項各款情形之一，將其事實及理由及第103條第1項所定期間通知廠商時，該通知函如已附記「如未提出異議者，將刊登政府採購公報」之文字，無須載明提出異議之期限。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-125",
    "category": "錯誤採購態樣",
    "type": "tf_question",
    "question_text": "機關辦理採購，發現廠商有採購法第101條第1項各款情形之一，將其事實及理由及第103條第1項所定期間通知廠商時，該通知函雖已附記「如未提出異議者，將刊登政府採購公報」之文字，仍應載明提出異議之期限。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-126",
    "category": "錯誤採購態樣",
    "type": "tf_question",
    "question_text": "機關辦理財物採購之驗收，廠商未依通知派代表參加者，不得為之。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-127",
    "category": "錯誤採購態樣",
    "type": "tf_question",
    "question_text": "機關辦理財物採購之驗收，廠商未依通知派代表參加者，仍得為之。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-128",
    "category": "錯誤採購態樣",
    "type": "tf_question",
    "question_text": "依採購法規定，機關得於招標文件或招標公告規定廠商僅能親自領取招標文件而不得採郵遞方式領取。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-129",
    "category": "錯誤採購態樣",
    "type": "tf_question",
    "question_text": "依採購法規定，機關不得於招標文件或招標公告規定廠商僅能親自領取招標文件而不得採郵遞方式領取。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-130",
    "category": "錯誤採購態樣",
    "type": "tf_question",
    "question_text": "機關已於招標文件精確描述規格，仍得依採購法第26條第3項規定標示廠牌。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-131",
    "category": "錯誤採購態樣",
    "type": "tf_question",
    "question_text": "以公開取得廠商書面報價辦理招標，公告結果僅1家廠商投標，而改採限制性招標之議價，訂定底價前毋須先參考廠商之報價或估價單。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-132",
    "category": "錯誤採購態樣",
    "type": "tf_question",
    "question_text": "以公開取得廠商書面報價辦理招標，公告結果僅1家廠商投標，而改採限制性招標之議價，訂定底價前仍須先參考廠商之報價或估價單。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-133",
    "category": "錯誤採購態樣",
    "type": "tf_question",
    "question_text": "機關已於招標文件精確描述規格，不得依採購法第26條第3項規定標示廠牌。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-134",
    "category": "錯誤採購態樣",
    "type": "tf_question",
    "question_text": "某校辦理公告金額以上教學儀器之財物採購(非複數決標)，部分採購項目之規定得訂定：「無機及有機分子模型組之包裝盒灰色尺寸為235x171x58m/m；護目鏡規格為一體成型透明式及美製；三球儀之尺寸為長52x19x30cm」。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": true,
    "historical_regulation": "舊版法規：工程及財物採購公告金額為新臺幣 100 萬元，勞務採購為 100 萬元。",
    "current_regulation": "現行法規（自 112 年 1 月 1 日施行）：公告金額調高為新臺幣 150 萬元。",
    "amendment_warning": "⚠️ 異動提醒：公告金額已自 112 年起由 100 萬元調高至 150 萬元。"
  },
  {
    "id": "pcc-q-135",
    "category": "錯誤採購態樣",
    "type": "tf_question",
    "question_text": "機關依採購法第84條第1項但書辦理者，如申訴廠商之利益大於個案之公共利益，仍得繼續採購程序之進行。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-136",
    "category": "錯誤採購態樣",
    "type": "tf_question",
    "question_text": "機關依採購法第84條第1項但書繼續採購程序之進行者，應將個案之公共利益大於申訴廠商之利益具體明確化，以免恣意濫用，不當侵害廠商權益。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-137",
    "category": "錯誤採購態樣",
    "type": "tf_question",
    "question_text": "採購法第31條第2項第3款已規定投標廠商冒用他人名義或證件投標，其所繳納之押標金不予發還，其未依招標文件規定繳納或已發還者，並予追繳，是以個案招標文件無須將該規定納入，如發現投標廠商有該等情形者，逕依上開規定不予發還或追繳該投標廠商所繳納之押標金。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-138",
    "category": "錯誤採購態樣",
    "type": "tf_question",
    "question_text": "機關採最低標為決標原則之採購案，遇有最低標廠商之總標價偏低，顯不合理，有降低品質、不能誠信履約之虞或其他特殊情形時，請該最低標廠商提出說明，如經評估其說明合理，應予決標，無須通知繳納差額保證金。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-139",
    "category": "錯誤採購態樣",
    "type": "tf_question",
    "question_text": "廠商有採購法第101條第1項各款情形之一時，應通知廠商將刊登政府採購公報，並附記於10日提出異議之教示規定。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-140",
    "category": "錯誤採購態樣",
    "type": "tf_question",
    "question_text": "機關辦理採購，使用主管機關訂定之招標投標簽約三用文件，於決標後無須通知廠商至機關簽約。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-141",
    "category": "錯誤採購態樣",
    "type": "tf_question",
    "question_text": "招標文件未載明採購法第31條第2項、第101條第1項各款之文字，機關發現廠商有前開規定所定情形，不得依前開規定辦理。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-142",
    "category": "錯誤採購態樣",
    "type": "tf_question",
    "question_text": "於招標文件更改採購法第31條第2項、第101條第1項各款之文字屬擅改法律文字之錯誤行為態樣。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-143",
    "category": "錯誤採購態樣",
    "type": "tf_question",
    "question_text": "機關於招標文件規定廠商投標時須檢附之納稅證明，依採購法令規定廠商不及提出最近一期證明者，得以前一期之納稅證明代之。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-144",
    "category": "錯誤採購態樣",
    "type": "tf_question",
    "question_text": "機關辦理採購，使用主管機關訂定之招標投標簽約三用文件，於決標後仍須通知廠商至機關簽約。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-145",
    "category": "錯誤採購態樣",
    "type": "tf_question",
    "question_text": "採購法第101條第1項第1款及第2款規定之適用，以成立圍標之刑事處罰為要件。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-146",
    "category": "錯誤採購態樣",
    "type": "tf_question",
    "question_text": "採購法第101條第1項第1款及第2款規定之適用，不以成立圍標之刑事處罰為要件。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-147",
    "category": "錯誤採購態樣",
    "type": "tf_question",
    "question_text": "採購法第101條第1項第1款及第2款所稱「借用」，如借用人無合格參標資格，不適用該款規定。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-148",
    "category": "錯誤採購態樣",
    "type": "tf_question",
    "question_text": "採購法第101條第1項第1款及第2款所稱「借用」，不以借用人為無合格參標資格為要件。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-149",
    "category": "投標須知及招標文件製作",
    "type": "tf_question",
    "question_text": "機關辦理採購，為避免廠商代表人具有犯罪紀錄者參與採購，均得依個案特性及實際需要，於招標文件訂定廠商資格限制條件。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-150",
    "category": "投標須知及招標文件製作",
    "type": "tf_question",
    "question_text": "機關辦理涉關鍵基礎設施之採購案，應於契約約定廠商履約人員於進場或參與工作前，自行提出或委託機關代為申請無犯罪紀錄證明，並經機關審核同意，始得進場或參與工作。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-151",
    "category": "投標須知及招標文件製作",
    "type": "tf_question",
    "question_text": "有一機關辦理採購，如於招標文件規定押標金繳納方式限現金、金融機構簽發之本票或支票、郵政匯票、政府公債，並不違反採購法。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-152",
    "category": "投標須知及招標文件製作",
    "type": "tf_question",
    "question_text": "為引導國內廠商落實企業社會責任，並表彰善盡企業社會責任，機關辦理評選，得將廠商提供員工「工作與生活平衡」措施(如友善家庭措施、友善性別等)設為評選項目納入評分項目。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-153",
    "category": "投標須知及招標文件製作",
    "type": "mc_question",
    "question_text": "下列何者非屬機關應依採購法第31條第2項第7款規定，就廠商所繳納之押標金不予發還之情形？",
    "options": [
      "廠商有採購法第50條第1項第5款情形。",
      "廠商或其代表人、代理人、受雇人或其他從業人員與機關人員，共同違反採購法第26條、第34條或第37條第1項規定。",
      "廠商或其代表人、代理人、受雇人或其他從業人員與受機關委託提供採購規劃、設計、專案管理或代辦採購廠商之人員，共同實施採購法第89條規定構成要件事實。",
      "廠商有採購法第48條第1項第2款「足以影響採購公正之違法行為者」情形。"
    ],
    "correct_answer": 4,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-154",
    "category": "採購契約",
    "type": "mc_question",
    "question_text": "某工程採購在開標前，機關發現招標文件之「工程規範說明書」漏印兩頁重要圖說。此時機關最適當的處置為何？",
    "options": [
      "已有廠商投標，為保護投標廠商權益，應照常開標決標，事後再辦理變更。",
      "重要圖說屬「變更或補充招標文件內容」之情形，應不予開標。",
      "繼續開標，但要求投標廠商現場簽名表示不計較漏印部分。",
      "只要投標廠商超過3家，即可視為不影響公正，繼續辦理決標。"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-155",
    "category": "採購契約",
    "type": "mc_question",
    "question_text": "依採購法主管機關之「採購契約範本附記條款特別聲明」，廠商於履約過程使用資通訊產品履約時，下列何者不得使用？",
    "options": [
      "中國大陸廠牌之資通訊產品。",
      "日本國廠牌之資通訊產品。",
      "韓國廠牌之資通訊產品。",
      "美國廠牌之資通訊產品。"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-156",
    "category": "採購契約",
    "type": "mc_question",
    "question_text": "有關採購法主管機關所定「採購契約範本附記條款特別聲明」載明履約禁用中國大陸廠牌資通訊產品、不得提供公務機密予AI及使用AI履約須報機關同意等規定，下列何者錯誤？",
    "options": [
      "履約過程及履約標的禁止使用及採購中國大陸廠牌資通訊產品〔含軟體、硬體及服務（含生成式AI程式如：Deepseek等）〕。",
      "廠商履約過程及成果需透過使用及採購生成式AI以產出履約標的內容或相關文件者，應先徵得機關同意始得為之。",
      "廠商不得向生成式AI提供採購案涉及公務應保密、個人及未經機關（構）同意公開之資訊，亦不得向生成式AI詢問可能涉及採購案機敏或個人資料之事項。",
      "契約本文之效力優於本特別聲明附記條款。"
    ],
    "correct_answer": 4,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-157",
    "category": "採購契約",
    "type": "mc_question",
    "question_text": "廠商於履約過程使用中國大陸廠牌資通訊產品（含中國大陸生成式AI程式 Deepseek），下列何者錯誤？",
    "options": [
      "機關得以書面通知廠商終止或解除全部或部分契約。",
      "廠商於得標後只要不簽署「使用資通訊產品禁制事項同意書/切結書」就可以使用中國大陸廠牌資通訊產品。",
      "致第三人權利受有損害者，廠商應負責任。",
      "廠商違反契約禁制事項，適用契約本文關於權利及責任條款之違約責任，就機關所受損害負賠償之責。"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-158",
    "category": "採購契約",
    "type": "tf_question",
    "question_text": "機關採購，契約價金係以總價決標，且以契約總價給付，工程標的中某項之實作數量較契約所定數量增加達百分之八，不得以契約變更增加該項契約價金，應由廠商完全吸收。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-159",
    "category": "採購契約",
    "type": "tf_question",
    "question_text": "機關採購，契約價金係以總價決標，且以契約總價給付，工程標的中某項之實作數量較契約所定數量增加達百分之八，契約約定未逾增減百分比(3%)部分，由廠商自行吸收。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-160",
    "category": "採購契約",
    "type": "tf_question",
    "question_text": "依採購法主管機關訂定之工程採購契約範本，逾期違約金之上限，以契約價金總額之百分之二十為原則。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-161",
    "category": "採購契約",
    "type": "tf_question",
    "question_text": "依採購法主管機關訂定之工程採購契約範本，逾期違約金之上限，以契約價金總額之百分之十為原則。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-162",
    "category": "採購契約",
    "type": "tf_question",
    "question_text": "機關辦理採購須至國外原廠辦理查驗或驗收，契約得約定機關查驗或驗收人員之旅費及生活費用，包括在契約價金內。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-163",
    "category": "採購契約",
    "type": "tf_question",
    "question_text": "機關採購契約，履約期間，因不可抗力或有不可歸責於廠商之事由者，得延長之；其事由半日者，仍以1日計。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-164",
    "category": "採購契約",
    "type": "tf_question",
    "question_text": "機關採購契約，履約期間，因不可抗力或有不可歸責於廠商之事由者，得延長之；其事由未逾半日者，以半日計。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-165",
    "category": "採購契約",
    "type": "tf_question",
    "question_text": "適用機關利用共同供應契約辦理採購，必須與共同供應契約訂約廠商另簽訂契約，以釐清權利義務關係。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-166",
    "category": "採購契約",
    "type": "tf_question",
    "question_text": "適用機關利用共同供應契約辦理採購，無須與共同供應契約訂約廠商另簽訂契約。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-167",
    "category": "採購契約",
    "type": "tf_question",
    "question_text": "依採購法主管機關訂定之勞務採購契約範本，廠商如僱用原派駐於機關之派駐勞工，並指派繼續在該機關提供勞務，無論其年資是否中斷，應重計該派駐勞工服務之年資，計算特別休假日數。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-168",
    "category": "採購契約",
    "type": "tf_question",
    "question_text": "依採購法主管機關訂定之勞務採購契約範本，廠商如僱用原派駐於機關之派駐勞工，並指派繼續在該機關提供勞務而未中斷年資者，應溯自該派駐勞工在機關提供勞務之第1日併計該派駐勞工服務之年資，計算特別休假日數，以保障其休假權益。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-169",
    "category": "採購契約",
    "type": "tf_question",
    "question_text": "依採購法主管機關訂定之災害搶險搶修開口契約範本，廠商依機關通知待命，如未發生災害，不予計價。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-170",
    "category": "採購契約",
    "type": "tf_question",
    "question_text": "依採購法主管機關訂定之災害搶險搶修開口契約範本，廠商依機關通知待命，如未發生災害，仍應依契約約定予以計價。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-171",
    "category": "採購契約",
    "type": "tf_question",
    "question_text": "甲工程分三階段完工使用(屬分段完工使用或移交)，第一階段工程約定於109年5月1日完工，第二階段工程約定於109年8月1日完工，最後完工期限為109年11月1日，且均訂有逾期違約金；如廠商第一階段工程於109年4月30日完工，第二階段工程於109年8月12日完工，且於109年10月30日完成甲工程，免計算逾期違約金。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-172",
    "category": "採購契約",
    "type": "tf_question",
    "question_text": "甲工程分三階段完工使用(屬分段完工使用或移交)，第一階段工程約定於109年5月1日完工，第二階段工程約定於109年8月1日完工，最後完工期限為109年11月1日，且均訂有逾期違約金；如廠商第一階段工程於109年4月30日完工，第二階段工程於109年8月12日完工，且於109年10月30日完成甲工程，計算逾第二階段工程進度之違約金。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-173",
    "category": "採購契約",
    "type": "tf_question",
    "question_text": "機關採購契約價金係以總價決標，且依實際施作數量給付，其履約結果，個別項目實作數量較契約所定數量增減未達一定百分比者，契約價金得不予增減。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-174",
    "category": "採購契約",
    "type": "tf_question",
    "question_text": "依採購法主管機關訂定之工程採購契約範本，機關採購契約價金係以總價決標，且依契約價金總額結算給付，其履約結果，個別項目實作數量較契約所定數量增減未逾3%者，契約價金不予增減。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-175",
    "category": "採購契約",
    "type": "tf_question",
    "question_text": "對於共同投標之採購案，機關單獨通知代表廠商終止契約，該契約即終止。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-176",
    "category": "採購契約",
    "type": "tf_question",
    "question_text": "廠商未依政府採購契約約定履約，經機關通知廠商全部暫停執行，其情況經改正後，機關應就暫停執行給予延長履約期限。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-177",
    "category": "採購契約",
    "type": "tf_question",
    "question_text": "依採購契約要項，契約價金係以總價決標，且以契約總價給付，而其履約工程之個別項目實作數量較契約所定數量增減逾百分之十以上者，其逾百分之十之部分，得以變更設計增減契約價金。未逾百分之十者，契約價金得不予增減。但契約另有約定者，不在此限。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-178",
    "category": "採購契約",
    "type": "tf_question",
    "question_text": "機關辦理採購須至國外原廠辦理查驗或驗收，機關查驗或驗收人員之旅費及生活費用，不得包括在契約價金內。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-179",
    "category": "採購契約",
    "type": "tf_question",
    "question_text": "廠商未依政府採購契約約定辦理保險、保險範圍不足或未能自保險人獲得足額理賠者，其損失或損害賠償，由機關負擔。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-180",
    "category": "採購契約",
    "type": "tf_question",
    "question_text": "廠商未依政府採購契約約定辦理保險、保險範圍不足或未能自保險人獲得足額理賠者，其損失或損害賠償，由廠商負擔。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-181",
    "category": "採購契約",
    "type": "tf_question",
    "question_text": "依採購法主管機關所定「採購契約範本附記條款特別聲明」，廠商履約過程及成果需透過使用及採購生成式AI以產出履約標的內容或相關文件者，不用徵得機關同意，但品質符合契約要求。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-182",
    "category": "採購契約",
    "type": "tf_question",
    "question_text": "依採購法主管機關所定「採購契約範本附記條款特別聲明」，廠商於履約過程使用中國大陸廠牌資通訊產品（含中國大陸生成式AI Deepseek），機關得以書面通知廠商終止或解除全部或部分契約。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-183",
    "category": "採購契約",
    "type": "tf_question",
    "question_text": "依採購法主管機關所定「採購契約範本附記條款特別聲明」，廠商於刊登廣告前，僅需提報擬刊登內容供機關審查，無須提供刊平臺供機關審查。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-184",
    "category": "採購契約",
    "type": "tf_question",
    "question_text": "依採購法主管機關所定「採購契約範本附記條款特別聲明」，廠商於刊登廣告前，應提報擬刊登廣告之網路廣告平臺及刊登內容供機關審查。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-185",
    "category": "底價及價格分析",
    "type": "tf_question",
    "question_text": "軍事機關依採購法第104條第1項第2款辦理具機密採購者，其底價於決標後得不予公開。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-186",
    "category": "政府採購法之爭議處理",
    "type": "mc_question",
    "question_text": "「廠商請求機關展延工期不成故申請調解，並繳納調解費新臺幣（下同）10萬元，嗣於第1次調解期日之次日起10日內以書面撤回調解，則應退還調解費多少元？",
    "options": [
      "0元。",
      "5萬元。",
      "9萬5,000元。",
      "10萬元。"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-187",
    "category": "政府採購法之爭議處理",
    "type": "tf_question",
    "question_text": "政府採購所涉招標、審標、決標之申訴，廠商申訴縱有理由時，也不得向招標機關請求償付其準備投標、異議及申訴所支出之必要費用。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-188",
    "category": "政府採購法之爭議處理",
    "type": "tf_question",
    "question_text": "政府採購所涉招標、審標、決標之申訴，廠商申訴有理由時，得向招標機關請求償付其準備投標、異議及申訴所支出之必要費用。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-189",
    "category": "政府採購法之爭議處理",
    "type": "tf_question",
    "question_text": "申訴逾越法定期間者，採購申訴審議委員會仍得受理。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-190",
    "category": "政府採購法之爭議處理",
    "type": "tf_question",
    "question_text": "申訴逾越法定期間者，應提採購申訴審議委員會委員會議為不受理決議。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-191",
    "category": "政府採購法之爭議處理",
    "type": "tf_question",
    "question_text": "機關辦理採購，廠商提出異議或申訴，招標機關評估其事由，縱認其異議或申訴有理由者，仍不得自行撤銷、變更原處理結果，或暫停採購程序之進行，應待申訴審議結果。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-192",
    "category": "政府採購法之爭議處理",
    "type": "tf_question",
    "question_text": "機關辦理採購，廠商提出異議或申訴，招標機關評估其事由，認其異議或申訴有理由者，應自行撤銷、變更原處理結果，或暫停採購程序之進行。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-193",
    "category": "政府採購法之爭議處理",
    "type": "tf_question",
    "question_text": "廠商於履約中因違反契約約定事項，遭機關計罰違約金，廠商就此得提出調解。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-194",
    "category": "政府採購法之爭議處理",
    "type": "tf_question",
    "question_text": "廠商於履約中因違反契約約定事項，遭機關計罰違約金，廠商就此得提出申訴。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-195",
    "category": "道德規範及違法處置",
    "type": "mc_question",
    "question_text": "甲廠商之負責人為A機關首長之表弟，下列敘述何者正確？",
    "options": [
      "甲廠商不得參與A機關採購案之投標。",
      "甲廠商得參與A機關採購案之投標，惟A機關首長應迴避。",
      "甲廠商得參與A機關採購案之投標，且A機關首長無須迴避。",
      "甲廠商不得為A機關採購案之分包廠商。"
    ],
    "correct_answer": 3,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-196",
    "category": "道德規範及違法處置",
    "type": "tf_question",
    "question_text": "某機關採購主管於108年2月底離職後，擔任B公司之負責人，B公司於110年3月參加該機關辦理之採購，並未違反採購法第15條第1項規定。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-197",
    "category": "道德規範及違法處置",
    "type": "tf_question",
    "question_text": "某機關採購主管於107年2月底離職後，擔任B公司之負責人，B公司於110年3月參加該機關辦理之採購，並未違反採購法第15條第1項規定。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-198",
    "category": "道德規範及違法處置",
    "type": "tf_question",
    "question_text": "採購人員為社會禮儀，逢年過節得接受與職務或利益有關廠商之價值新臺幣500元之餽贈。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-199",
    "category": "道德規範及違法處置",
    "type": "tf_question",
    "question_text": "採購人員不接受與職務或利益有關廠商之價值新臺幣200元之餽贈，反不符合社會禮儀或習俗者，得予接受，但以非主動求取，且係偶發之情形為限。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-200",
    "category": "道德規範及違法處置",
    "type": "tf_question",
    "question_text": "機關辦理採購，發生無預算即先決標，或預算遭挪用致無款項及時支付廠商之情形，係為考量加速採購效率，尚屬可行。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-201",
    "category": "道德規範及違法處置",
    "type": "tf_question",
    "question_text": "機關辦理採購，如發生無預算即先決標，或預算遭挪用致無款項及時支付廠商之情形，應依「採購人員倫理準則」第12條第1項處置相關人員。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-202",
    "category": "政府採購全生命週期概論",
    "type": "tf_question",
    "question_text": "為使公共設施有效管理使用，避免閒置，工程會訂定公共設施有效管理使用作業要點，採設施管理機關、主管機關及工程會三層級管控機制據以執行。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-203",
    "category": "政府採購全生命週期概論",
    "type": "tf_question",
    "question_text": "政府採購全生命週期風險管理，不包含營運維護階段。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-204",
    "category": "政府採購全生命週期概論",
    "type": "tf_question",
    "question_text": "經費較高或較複雜之公共工程計畫，應設定妥適標準、規格及等級，必要時可先行編列規劃費用委託專業機構妥適評估造價。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-205",
    "category": "政府採購全生命週期概論",
    "type": "tf_question",
    "question_text": "原工程採購契約無物價指數調整條款，履約期間如構成民法所定情事變更，得辦理契約變更新增物價指數調整條款。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-206",
    "category": "政府採購全生命週期概論",
    "type": "tf_question",
    "question_text": "因設計與計畫核定有時間差，爰機關編列計畫經費時，除應配合當時物價編列，亦應針對其後之物價調整編列費用。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-207",
    "category": "政府採購全生命週期概論",
    "type": "tf_question",
    "question_text": "橋梁設計擇定結構型式時，應將美觀性納入考量，其造成之長期偏心及扭矩不必考量。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-208",
    "category": "政府採購全生命週期概論",
    "type": "tf_question",
    "question_text": "工程招標時，機關應檢核原核定之設計預算是否符合招標當下之市場行情，並作必要之調整；招標文件並納入總指數漲跌幅調整契約價金之內容即符合主管機關之工程採購契約範本。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-209",
    "category": "政府採購全生命週期概論",
    "type": "tf_question",
    "question_text": "依據「公共建設工程經費估算編列手冊」，工程預備費為因應可行性評估、綜合規劃及設計等各階段，因無法預見之情事變更等狀況，所預為準備的一筆費用。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-210",
    "category": "政府採購全生命週期概論",
    "type": "tf_question",
    "question_text": "依據「公共建設工程經費估算編列手冊」，直接工程成本不包括品管費。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-211",
    "category": "政府採購全生命週期概論",
    "type": "tf_question",
    "question_text": "政府採購法主管機關召開「政府採購諮詢小組」會議，其決議之效力等同調解建議。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-212",
    "category": "政府採購全生命週期概論",
    "type": "tf_question",
    "question_text": "工程會協助解決機關與廠商間因政府採購契約條款認知歧異之問題，成立之政府採購諮詢小組，該小組所作出之諮詢建議，因屬採購法主管機關之意見，其效力等同調解建議，對契約雙方有拘束力。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-213",
    "category": "政府採購全生命週期概論",
    "type": "tf_question",
    "question_text": "政府採購全生命週期風險管理，包含計畫階段、規劃設計階段、招標決標階段、履約驗收階段、營運維護階段。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-214",
    "category": "政府採購全生命週期概論",
    "type": "tf_question",
    "question_text": "廠商未依契約約定辦理，或實際進度落後達契約約定之一定百分比以上，而予以暫停發放估驗款或扣留部分款項時，機關仍須依規定程序辦理當期之估驗手續。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-215",
    "category": "政府採購全生命週期概論",
    "type": "mc_question",
    "question_text": "下列何者非政府協調改善我國營造工缺工之措施？",
    "options": [
      "合理檢討移工規定。",
      "加強本國勞工訓練媒合。",
      "推動營建自動化。",
      "全面開放移工進駐工地。"
    ],
    "correct_answer": 4,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-216",
    "category": "政府採購全生命週期概論",
    "type": "mc_question",
    "question_text": "下列何者非工程會推動公共工程生態檢核之措施？",
    "options": [
      "工程會公共工程技術服務契約範本納入生態環境調查。",
      "執行機關使用之生態檢核自評表無須送主管機關審查。",
      "生態檢核列為施工查核及金質獎評審重點項目。",
      "生態檢核資訊應予公開。"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-217",
    "category": "政府採購全生命週期概論",
    "type": "mc_question",
    "question_text": "下列何者非屬「契約書圖條件不合理」之情形？",
    "options": [
      "保固年限過長。",
      "訂定技術規格時，以功能或效益等精確方式說明招標需求，而不提供參考品牌。",
      "未考量現場施工條件。",
      "訂定之主要部分過於空泛。"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-218",
    "category": "政府採購全生命週期概論",
    "type": "mc_question",
    "question_text": "下列何者非政府採購多元化的履約爭議處理機制？",
    "options": [
      "向訴願申請調解。",
      "由機關成立「爭議處理小組」協調爭議。",
      "向法院提起訴訟。",
      "雙方合意仲裁。"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-219",
    "category": "政府採購全生命週期概論",
    "type": "mc_question",
    "question_text": "以班班有冷氣計畫冷氣採購為例，為考量特性需求及兼顧採購效率，下列何者非採行之採購策略？",
    "options": [
      "集中採購，以縣市政府為一標。",
      "採最有利標，價格納入評分占比重40%。",
      "考量冷氣機尚有節省能源、低噪音或耐久性等需求，以最有利標決標。",
      "採複數決標予多家廠商，由學校選擇不同冷氣機之供應商。"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-220",
    "category": "政府採購全生命週期概論",
    "type": "mc_question",
    "question_text": "工程會為協調改善營造業缺工問題，下列何者非整體性之解決對策？",
    "options": [
      "推動營建自動化。",
      "暫緩公共工程推動。",
      "加強本勞訓練媒合。",
      "合理檢討移工規定。"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-221",
    "category": "政府採購全生命週期概論",
    "type": "mc_question",
    "question_text": "工程會透過公共工程流標專案檢討會議發現流標皆有其個案因素，下列何者為非？",
    "options": [
      "材料短缺。",
      "設計內容與預算編列不相同。",
      "未按實際需要訂定工期。",
      "契約書圖條件不合理。"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-222",
    "category": "政府採購全生命週期概論",
    "type": "mc_question",
    "question_text": "下列因應物價波動之方式，何者非屬妥適？",
    "options": [
      "計畫階段預為編列物調費及預備費。",
      "個案契約依工程會工程採購契約範本採用3層級物調機制。",
      "工程招標時請廠商提出放棄物調聲明書。",
      "招標文件公告前再次訪查市場行情。"
    ],
    "correct_answer": 3,
    "explanation": "依政府採購法規相關規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-223",
    "category": "政府採購法之罰則及附則",
    "type": "mc_question",
    "question_text": "依採購法第93條簽訂之共同供應契約應公開於何處供適用機關利用？",
    "options": [
      "訂約機關之資訊網站。",
      "主管機關指定之資訊網站。",
      "各適用機關之資訊網站。",
      "政府採購公報。"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法 第 93 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-224",
    "category": "政府採購法之罰則及附則",
    "type": "mc_question",
    "question_text": "機關依採購法第96條第1項優先採購環保產品，並允許價差優惠者，招標文件所定價差優惠比率以內之環保產品廠商家數在2家以上者，優先決標對象為？",
    "options": [
      "第1類及第2類產品廠商。",
      "第3類產品廠商。",
      "不論第幾類產品，以標價低者優先決標。",
      "不論第幾類產品，抽籤決定之。"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法 第 96 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-225",
    "category": "政府採購法之罰則及附則",
    "type": "mc_question",
    "question_text": "機關依採購法第96條第1項優先採購環保產品，且於招標文件載明價差優惠8%以內優先決標予環保產品廠商。現最低標A廠商為非環保產品廠商標價90萬元已進入底價100萬元，次低標B廠商為環保產品廠商，其標價最高不逾下列何者時，得優先決標予環保產品廠商？",
    "options": [
      "95萬元。",
      "96萬元。",
      "97萬元。",
      "98萬元。"
    ],
    "correct_answer": 3,
    "explanation": "依政府採購法 第 96 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-226",
    "category": "政府採購法之罰則及附則",
    "type": "tf_question",
    "question_text": "共同供應契約之訂約廠商於契約有效期內，以更優惠之價格或條件供應本契約之標的於不特定對象者，訂約機關應與廠商終止或解除本契約。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法 第 93 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-227",
    "category": "政府採購法之罰則及附則",
    "type": "tf_question",
    "question_text": "共同供應契約之訂約廠商於契約有效期內，以更優惠之價格或條件供應本契約之標的於不特定對象者，訂約機關得與廠商協議變更本契約。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法 第 93 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-228",
    "category": "政府採購法之罰則及附則",
    "type": "tf_question",
    "question_text": "某中央機關採購辦公傢俱一批，預算金額新臺幣(下同)50萬元，其中部分項目可從共同供應契約取得，金額計45萬元，部分項目無法自共同供應契約取得，金額5萬元，得以附加採購方式逕洽同一廠商採購。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法 第 93 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-229",
    "category": "政府採購法之罰則及附則",
    "type": "tf_question",
    "question_text": "某中央機關採購辦公傢俱一批，預算金額新臺幣(下同)65萬元，其中部分項目可從共同供應契約取得，金額計40萬元，部分項目無法自共同供應契約取得，金額25萬元，得以附加採購方式逕洽同一共同供應契約廠商採購。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法 第 93 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-230",
    "category": "政府採購法之罰則及附則",
    "type": "tf_question",
    "question_text": "共同供應契約之適用機關，其採購需求在該契約所載可供訂購之數量或金額範圍內，得利用該契約辦理採購。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法 第 93 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-231",
    "category": "政府採購法之罰則及附則",
    "type": "tf_question",
    "question_text": "共同供應契約之適用機關，須報經上級機關核准後，始得利用該契約採購。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法 第 93 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-232",
    "category": "政府採購法之罰則及附則",
    "type": "tf_question",
    "question_text": "中央機關辦理未達公告金額而逾公告金額十分之一之委託資訊服務，其依「中央機關未達公告金額採購招標辦法」第2條第1項第1款，以符合採購法第22條第1項第9款及「機關委託資訊服務廠商評選及計費辦法」採公開評選之限制性招標辦理評選者，準用「採購評選委員會組織準則」之規定。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法 第 94 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": true,
    "historical_regulation": "舊版法規：依中央機關未達公告金額採購招標辦法第5條，小額採購額度為新臺幣 10 萬元以下。",
    "current_regulation": "現行法規（自 112 年 1 月 1 日施行）：提高至新臺幣 15 萬元以下。",
    "amendment_warning": "⚠️ 異動提醒：小額採購額度已從 10 萬元調高至 15 萬元。作答時請確認題目要求的法規時點。"
  },
  {
    "id": "pcc-q-233",
    "category": "政府採購法之罰則及附則",
    "type": "tf_question",
    "question_text": "中央機關辦理未達公告金額而逾公告金額十分之一之委託資訊服務，其依「中央機關未達公告金額採購招標辦法」第2條第1項第1款，以符合採購法第22條第1項第9款及「機關委託資訊服務廠商評選及計費辦法」採公開評選之限制性招標辦理評選者，無須依「採購評選委員會組織準則」之規定辦理。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法 第 94 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": true,
    "historical_regulation": "舊版法規：依中央機關未達公告金額採購招標辦法第5條，小額採購額度為新臺幣 10 萬元以下。",
    "current_regulation": "現行法規（自 112 年 1 月 1 日施行）：提高至新臺幣 15 萬元以下。",
    "amendment_warning": "⚠️ 異動提醒：小額採購額度已從 10 萬元調高至 15 萬元。作答時請確認題目要求的法規時點。"
  },
  {
    "id": "pcc-q-234",
    "category": "政府採購法之罰則及附則",
    "type": "tf_question",
    "question_text": "機關辦理採購，應由主（會）計或政風單位依採購評選委員會組織準則第4條第4項之規定，提出評選委員建議名單，簽報機關首長或其授權人員核定。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法 第 94 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-235",
    "category": "政府採購法之罰則及附則",
    "type": "tf_question",
    "question_text": "機關辦理採購，得由業務需求單位依採購評選委員會組織準則第4條第4項之規定，提出評選委員名單，簽報機關首長或其授權人員核定。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法 第 94 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-236",
    "category": "政府採購法之罰則及附則",
    "type": "tf_question",
    "question_text": "機關不得遴選現任各級民意機關民意代表為採購評選委員會委員。但各級民意機關辦理採購時，不在此限。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法 第 94 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-237",
    "category": "政府採購法之罰則及附則",
    "type": "tf_question",
    "question_text": "機關得遴選現任各級民意機關民意代表為採購評選委員會委員。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法 第 94 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-238",
    "category": "政府採購法之罰則及附則",
    "type": "tf_question",
    "question_text": "採購評選委員會會議紀錄，應記載事項包括請假委員之姓名。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法 第 94 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-239",
    "category": "政府採購法之罰則及附則",
    "type": "tf_question",
    "question_text": "採購評選委員會會議紀錄，應記載事項不包括請假委員之姓名。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法 第 94 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-240",
    "category": "政府採購法之罰則及附則",
    "type": "tf_question",
    "question_text": "機關依採購法第22條第1項第9款辦理之採購，評選優勝廠商之決標程序，係依據優勝廠商順序，依序議價。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法 第 94 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-241",
    "category": "政府採購法之罰則及附則",
    "type": "tf_question",
    "question_text": "機關依採購法與評選優勝廠商之決標程序，優勝廠商在2家以上者，以比價方式辦理。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法 第 94 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-242",
    "category": "政府採購法之罰則及附則",
    "type": "tf_question",
    "question_text": "機關依採購法第96條規定優先採購環保產品，應於招標文件規定以環保產品得標之廠商，應於履約期間向機關提出與該產品有關之證明文件，以供查核。並應於招標文件規定以環保產品得標之廠商，其於履約期間未依契約規定提供該產品時，機關得追繳押標金。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法 第 96 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-243",
    "category": "政府採購法之罰則及附則",
    "type": "tf_question",
    "question_text": "機關依採購法第96條規定優先採購環保產品，應於招標文件規定以環保產品得標之廠商，應於履約期間向機關提出與該產品有關之證明文件，以供查核。並應於招標文件規定以環保產品得標之廠商，其於履約期間未依契約規定提供該產品時，機關得追償價差優惠損失、不發還履約保證金、依採購法第101條規定辦理。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法 第 96 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-244",
    "category": "政府採購法之罰則及附則",
    "type": "tf_question",
    "question_text": "未達公告金額之採購，除中小企業無法承做、競爭度不足、標價不合理或有採購法第22條第1項各款、第104條第1項第1款與第3款及第105條第1項各款情形者外，以向中小企業採購為原則。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法 第 97 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": true,
    "historical_regulation": "舊版法規：依中央機關未達公告金額採購招標辦法第5條，小額採購額度為新臺幣 10 萬元以下。",
    "current_regulation": "現行法規（自 112 年 1 月 1 日施行）：提高至新臺幣 15 萬元以下。",
    "amendment_warning": "⚠️ 異動提醒：小額採購額度已從 10 萬元調高至 15 萬元。作答時請確認題目要求的法規時點。"
  },
  {
    "id": "pcc-q-245",
    "category": "政府採購法之罰則及附則",
    "type": "tf_question",
    "question_text": "機關辦理公告金額以上採購，除中小企業無法承做、競爭度不足、標價不合理或有採購法第22條第1項各款、第104條第1項第1款與第3款及第105條第1項各款情形者外，以向中小企業採購為原則。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法 第 97 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": true,
    "historical_regulation": "舊版法規：工程及財物採購公告金額為新臺幣 100 萬元，勞務採購為 100 萬元。",
    "current_regulation": "現行法規（自 112 年 1 月 1 日施行）：公告金額調高為新臺幣 150 萬元。",
    "amendment_warning": "⚠️ 異動提醒：公告金額已自 112 年起由 100 萬元調高至 150 萬元。"
  },
  {
    "id": "pcc-q-246",
    "category": "政府採購法之罰則及附則",
    "type": "tf_question",
    "question_text": "採購法第101條第1項各款情形，除第6款須經第1審為有罪判決外，餘並未以司法機關起訴或判決為要件，機關應及時本權責審認，例如書面通知廠商陳述意見或蒐集必要之資料等，以釐清廠商以不法或不當行為危害機關人員是否與履約事項有關。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法 第 101 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-247",
    "category": "政府採購法之罰則及附則",
    "type": "tf_question",
    "question_text": "採購法第101條第1項各款情形，除第6款須經第1審為有罪判決外，其餘各款需將廠商移送司法機關起訴後，機關以書面通知廠商陳述意見或蒐集必要之資料等，並釐清廠商以不法或不當行為危害機關人員是否與履約事項有關。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法 第 101 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-248",
    "category": "政府採購法之罰則及附則",
    "type": "tf_question",
    "question_text": "採購稽核小組認為採購機關違反採購法之情節重大者，應另通知機關追究相關人員責任，並副知其上級機關、主管機關及審計機關，有犯罪嫌疑者，應移送該管司法機關處理。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法 第 108 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-249",
    "category": "政府採購法之罰則及附則",
    "type": "tf_question",
    "question_text": "縣（市）政府所辦理之採購，屬於縣（市）政府採購稽核小組之稽核監督範圍。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法 第 108 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-250",
    "category": "政府採購法之罰則及附則",
    "type": "tf_question",
    "question_text": "縣（市）政府所辦理之採購，有重大異常者非屬中央採購稽核小組之稽核監督範圍。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法 第 108 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-251",
    "category": "政府採購法之總則、招標及決標",
    "type": "mc_question",
    "question_text": "機關辦理涉及國家安全之採購，對廠商資格訂定限制條件，得依採購案件之特性及實際需要，就下列何種事項擇定之？",
    "options": [
      "廠商之國籍或其設立登記所依據之法律。",
      "廠商之代表人、董事、監察人、監事、經理人或持有股份總數或資本總額逾百分之十之股東之國籍。",
      "廠商之資金來源及其比率限制。",
      "以上皆是。"
    ],
    "correct_answer": 4,
    "explanation": "依政府採購法 第 17 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-252",
    "category": "政府採購法之總則、招標及決標",
    "type": "mc_question",
    "question_text": "下列敘述何者不正確？",
    "options": [
      "經常性採購，應建立6家以上之合格廠商名單。",
      "機關為特定個案辦理選擇性招標，應於辦理廠商資格審查後，邀請所有符合資格之廠商投標。",
      "合格廠商名單有效期逾1年者，應逐年公告辦理資格審查，並檢討修正既有合格廠商名單。",
      "合格廠商名單有效期內發現廠商被刊登政府採購公報，因廠商資格審查符合招標文件規定，機關後續邀標得邀請該廠商投標。"
    ],
    "correct_answer": 4,
    "explanation": "依政府採購法 第 21 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-253",
    "category": "政府採購法之總則、招標及決標",
    "type": "mc_question",
    "question_text": "依「機關邀請或委託文化藝術專業人士機構團體提供藝文服務作業辦法」之規定，機關辦理藝文服務採購，下列何者正確？",
    "options": [
      "應免收押標金、保證金。",
      "採公告審查程序者，審查委員會應由委員5人以上組成。",
      "巨額藝文服務採購不經公告審查程序辦理者，應由機關邀集機關人員2人及文化、藝術領域之專家學者7人開會審查，經三分之二以上人員出席，出席人員二分之一以上審查通過，簽報機關首長或其授權人員核准。",
      "以上皆是。"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法 第 22 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-254",
    "category": "政府採購法之總則、招標及決標",
    "type": "mc_question",
    "question_text": "機關辦理藝文服務採購，採公告審查程序者，下列何者正確？",
    "options": [
      "招標文件之內容，應考量藝文服務之採購特性及實際需要，必要時得徵詢藝文業者之意見。",
      "審查委員會應由委員5人以上組成；其會議之決議應有委員總額三分之二以上出席，出席委員三分之二同意行之。",
      "公告結果，僅1家藝文業者投標者，不得進行審查。",
      "以上皆是。"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法 第 22 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-255",
    "category": "政府採購法之總則、招標及決標",
    "type": "mc_question",
    "question_text": "有關機關委託廠商辦理社會福利服務，下列敘述何者不正確？",
    "options": [
      "得於招標文件規定得標廠商實際績效提高時，依其情形給付廠商獎勵金。",
      "採購評選委員會評選優勝廠商，得不以1家為限。",
      "提供服務工作人員之薪資，應於招標文件規定採固定價格決標或不得低於一定金額。",
      "機關提供場地供廠商使用，皆應由廠商負責維修，機關無需另外編列費用給付。"
    ],
    "correct_answer": 4,
    "explanation": "依政府採購法 第 22 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-256",
    "category": "政府採購法之總則、招標及決標",
    "type": "mc_question",
    "question_text": "機關如欲在開標後辦理廢標，須刊登以下那一個公告？",
    "options": [
      "更正公告。",
      "決標公告。",
      "定期彙送。",
      "無法決標公告。"
    ],
    "correct_answer": 4,
    "explanation": "依政府採購法 第 27 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-257",
    "category": "政府採購法之總則、招標及決標",
    "type": "mc_question",
    "question_text": "採購法第31條第2項第7款「其他經主管機關認定有影響採購公正之違反法令行為者」之情形，下列何者為非？",
    "options": [
      "有採購法第50條第1項第5款情形。",
      "有採購法第50條第1項第7款情形。",
      "廠商或其代表人、代理人、受雇人或其他從業人員有採購法第87條、第90條或第91條規定構成要件事實之一。",
      "廠商或其代表人、代理人、受雇人或其他從業人員與受機關委託提供採購規劃、設計、審查、監造、專案管理或代辦採購廠商之人員，共同實施採購法第88條規定構成要件事實。"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法 第 31 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-258",
    "category": "政府採購法之總則、招標及決標",
    "type": "mc_question",
    "question_text": "某學校總務主任主持一開標案，經發現廠商之投標文件有下列何種情形時，應為不合格標？",
    "options": [
      "投標文件置於塑膠透明資料袋內並以膠帶密封者。",
      "投標文件置於不透明標封袋內並以釘書針封裝者。",
      "標封上標示廠商之名稱及地址。",
      "投標文件以不透明紙箱封裝。"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法 第 33 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-259",
    "category": "政府採購法之總則、招標及決標",
    "type": "mc_question",
    "question_text": "下列敘述何者正確？",
    "options": [
      "機關辦理公開招標，因投標廠商家數未滿3家而流標者，得發還投標文件。",
      "機關於開標後因故廢標，廠商要求發還投標文件者，機關得保留其中一份，其餘發還，或僅保留影本。",
      "機關於開標後因故廢標，採分段開標者，尚未開標之部分應予發還。",
      "以上皆是。"
    ],
    "correct_answer": 4,
    "explanation": "依政府採購法 第 48 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-260",
    "category": "政府採購法之總則、招標及決標",
    "type": "mc_question",
    "question_text": "機關辦理採購，下列敘述何者錯誤？",
    "options": [
      "查核金額以上之採購，擬決標之最低標價超過底價百分之四未逾百分之八者，應先報經上級機關核准後決標。",
      "合於招標文件規定之投標廠商僅有1家或採議價方式辦理，須限制減價次數者，應先通知廠商。",
      "洽最低標廠商優先減價1次時，該廠商書明照底價承作，機關得決標予該廠商。",
      "決標依採購法第52條第1項第2款規定辦理者，除小額採購外，應成立評審委員會，成立時機準用採購法第46條第2項有關底價之訂定時機。"
    ],
    "correct_answer": 3,
    "explanation": "依政府採購法 第 53 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-261",
    "category": "政府採購法之總則、招標及決標",
    "type": "tf_question",
    "question_text": "機關辦理巨額勞務採購，應依採購之特性及實際需要，成立採購工作及審查小組，協助審查採購需求與經費、採購策略、招標文件等事項，及提供與採購有關事務之諮詢。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法 第 11 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": true,
    "historical_regulation": "舊版法規：工程巨額採購為 2 億元、財物為 1 億元、勞務為 2,000 萬元。",
    "current_regulation": "現行法規（自 112 年 1 月 1 日施行）：工程巨額採購提高為 4 億元、財物提高為 2 億元、勞務提高為 8,000 萬元。",
    "amendment_warning": "⚠️ 異動提醒：巨額採購標準已自 112 年調高（工程 4 億、財物 2 億、勞務 8,000 萬）。"
  },
  {
    "id": "pcc-q-262",
    "category": "政府採購法之總則、招標及決標",
    "type": "tf_question",
    "question_text": "機關辦理巨額工程採購，應依採購之特性及實際需要，成立採購工作及審查小組，協助審查採購需求與經費、採購策略、招標文件等事項，及提供與採購有關事務之諮詢。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法 第 11 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": true,
    "historical_regulation": "舊版法規：工程巨額採購為 2 億元、財物為 1 億元、勞務為 2,000 萬元。",
    "current_regulation": "現行法規（自 112 年 1 月 1 日施行）：工程巨額採購提高為 4 億元、財物提高為 2 億元、勞務提高為 8,000 萬元。",
    "amendment_warning": "⚠️ 異動提醒：巨額採購標準已自 112 年調高（工程 4 億、財物 2 億、勞務 8,000 萬）。"
  },
  {
    "id": "pcc-q-263",
    "category": "政府採購法之總則、招標及決標",
    "type": "tf_question",
    "question_text": "依政府採購法第101條第3項成立採購工作及審查小組，其組成、作業程序得參照機關採購工作及審查小組設置及作業辦法之規定，但其委員組成宜就本機關以外人員至少一人聘兼之，且至少宜有外聘委員一人出席。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法 第 11 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-264",
    "category": "政府採購法之總則、招標及決標",
    "type": "tf_question",
    "question_text": "機關辦理查核金額以上採購，依採購特性及實際需要，認有成立採購工作及審查小組之必要者，得成立採購工作及審查小組，協助審查採購需求與經費、採購策略、招標文件等事項，及提供與採購有關事務之諮詢。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法 第 11 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": true,
    "historical_regulation": "舊版法規：工程及財物查核金額為 5,000 萬元，勞務為 1,000 萬元。",
    "current_regulation": "現行法規（自 112 年 1 月 1 日施行）：工程查核金額提高為 1.5 億元、財物提高為 1.5 億元、勞務提高為 4,000 萬元。",
    "amendment_warning": "⚠️ 異動提醒：查核金額標準已於 112 年大幅調高（工程 1.5 億、財物 1.5 億、勞務 4,000 萬）。"
  },
  {
    "id": "pcc-q-265",
    "category": "政府採購法之總則、招標及決標",
    "type": "tf_question",
    "question_text": "機關辦理涉及國家安全採購，招標文件訂明廠商資格限制條件之情形，廠商履約時，因廠商組成異動不符廠商資格限制條件，因非屬投標時不符招標文件規定，機關無須檢討得洽廠商繼續履約。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法 第 17 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-266",
    "category": "政府採購法之總則、招標及決標",
    "type": "tf_question",
    "question_text": "機關辦理涉及國家安全採購，訂定廠商資格限制條件，應由需求、使用或承辦採購單位敘明限制之理由及其必要性，簽報機關首長或其授權人員核准。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法 第 17 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-267",
    "category": "政府採購法之總則、招標及決標",
    "type": "tf_question",
    "question_text": "機關辦理涉及國家安全採購，為免廠商代表人具有犯罪紀錄參與採購，影響國家安全，機關得於招標文件訂定廠商資格限制條件，禁止該等廠商參與採購。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法 第 17 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-268",
    "category": "政府採購法之總則、招標及決標",
    "type": "tf_question",
    "question_text": "機關為特定個案辦理選擇性招標，其後續邀標之通知，無論個案符合資格之廠商家數多寡，不得個別通知不同廠商至不同處所遞送投標文件，以維公平競爭。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法 第 21 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-269",
    "category": "政府採購法之總則、招標及決標",
    "type": "tf_question",
    "question_text": "機關為特定個案辦理選擇性招標，其後續邀標之通知，機關可就個案符合資格之廠商家數多寡，必要時以密件方式個別通知不同廠商至不同處所遞送投標文件。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法 第 21 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-270",
    "category": "政府採購法之總則、招標及決標",
    "type": "tf_question",
    "question_text": "採購法第22條第1項第4款及第7款分別明定採購案後續擴充得採行限制性招標之要件，其中第7款擴充之範圍須於招標公告及招標文件載明，而第4款則無須於原採購案公告擴充範圍。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法 第 22 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-271",
    "category": "政府採購法之總則、招標及決標",
    "type": "tf_question",
    "question_text": "機關辦理清潔服務採購，於招標文件中載明得依採購法第22條第1項第7款辦理後續擴充1年，並以招標當年度基本工資估算清潔人員薪資為固定金額給付。嗣於第2年後續擴充時，基本工資已調漲，致原保留後續擴充之薪資金額已不足支應調整後之基本工資，機關不得與原廠商辦理續約，應重新辦理招標。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法 第 22 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-272",
    "category": "政府採購法之總則、招標及決標",
    "type": "tf_question",
    "question_text": "建造費用百分比法所稱之建造費用，指工程採購底價金額或評審委員會建議金額，若無前2者，以工程預算代之，並包括承包商辦理工程之各項保險費。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法 第 22 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-273",
    "category": "政府採購法之總則、招標及決標",
    "type": "tf_question",
    "question_text": "建造費用百分比法所稱之建造費用，指工程採購底價金額或評審委員會建議金額，若無前2者，以工程預算代之。不包括相關法規所定規費、設計費等費用或除外費用。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法 第 22 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-274",
    "category": "政府採購法之總則、招標及決標",
    "type": "tf_question",
    "question_text": "機關依採購法第22條第1項規定辦理限制性招標，應由需求、使用或承辦採購單位，通案就性質相近之案件(例如搶修、搶險採購)預為敘明符合各該款之情形，簽報機關首長或其授權人員通案核准，以提升採購效率。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法 第 22 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-275",
    "category": "政府採購法之總則、招標及決標",
    "type": "tf_question",
    "question_text": "機關依採購法第22條第1項規定辦理限制性招標，應由需求、使用或承辦採購單位，就個案敘明符合各款之情形，簽報機關首長或其授權人員核准。其得以比價方式辦理者，優先以比價方式辦理。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法 第 22 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-276",
    "category": "政府採購法之總則、招標及決標",
    "type": "tf_question",
    "question_text": "機關採購公用事業依一定費率供應之標的，縱使非獨家供應，亦無須議價程序。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法 第 22 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-277",
    "category": "政府採購法之總則、招標及決標",
    "type": "tf_question",
    "question_text": "機關採購公用事業依一定費率供應之標的，如確屬獨家供應且無法以議價方式辦理者，得免議價程序。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法 第 22 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-278",
    "category": "政府採購法之總則、招標及決標",
    "type": "tf_question",
    "question_text": "機關依採購法第22條第1項第9款規定與評選優勝廠商之議價及決標，如有2家以上廠商為同一優勝順序者，以獲得較多委員給予第1名者為第1序位。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法 第 22 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-279",
    "category": "政府採購法之總則、招標及決標",
    "type": "tf_question",
    "question_text": "機關依採購法第22條第1項第9款規定(非採固定價格或費率)與評選資訊服務優勝廠商之議價及決標，於招標文件載明如有2家以上廠商為同一優勝順序者，以標價低者優先議價。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法 第 22 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-280",
    "category": "政府採購法之總則、招標及決標",
    "type": "tf_question",
    "question_text": "機關依採購法第22條第1項第9款規定與評選優勝廠商之議價及決標，如有2家以上廠商為同一優勝順序者，應就該等廠商進行綜合評選1次，以總評分最高、價格與總評分之商數最低或序位合計值最低者，優先議價。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法 第 22 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-281",
    "category": "政府採購法之總則、招標及決標",
    "type": "tf_question",
    "question_text": "機關依採購法第22條第1項第9款規定(非採固定價格或費率)與評選資訊服務優勝廠商之議價，於招標文件載明如有2家以上廠商為同一優勝順序者，就該等廠商再進行綜合評選1次，以總評分最高、價格與總評分之商數最低或序位合計值最低者，優先議價；得分仍相同者，以配分最高之評選項目之得分合計值較高者決定議價順序。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法 第 22 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-282",
    "category": "政府採購法之總則、招標及決標",
    "type": "tf_question",
    "question_text": "機關依採購法第22條第1項第9款規定與評選資訊服務優勝廠商之議價，如有2家以上廠商為同一優順序者，擇配分最高之評選項目之得分合計值較高者，優先議價；得分仍相同者，就該等廠商再進行綜合評選1次，以總評分最高、價格與總評分之商數最低或序位合計值最低者，優先議價；其再次相同者，抽籤決定之。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法 第 22 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-283",
    "category": "政府採購法之總則、招標及決標",
    "type": "tf_question",
    "question_text": "機關依採購法第22條第1項第9款規定與評選優勝廠商之議價及決標，如有2家以上廠商為同一優勝順序者，除依機關委託社會福利服務廠商評選及計費辦法辦理者外，以標價低者優先議價。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法 第 22 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-284",
    "category": "政府採購法之總則、招標及決標",
    "type": "tf_question",
    "question_text": "機關辦理設計競賽，其招標文件訂有廠商資格者，應先審查資格文件，資格不符合招標文件之規定者，其他部分不予審查。另機關應於審查結果完成後儘速通知各該廠商，最遲不得逾決標或廢標日30日。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法 第 22 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-285",
    "category": "政府採購法之總則、招標及決標",
    "type": "tf_question",
    "question_text": "機關辦理設計競賽，其招標文件訂有廠商資格者，應先審查資格文件，資格不符合招標文件之規定者，其他部分不予審查。另機關應於審查結果完成後儘速通知各該廠商，最遲不得逾決標或廢標日10日。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法 第 22 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-286",
    "category": "政府採購法之總則、招標及決標",
    "type": "tf_question",
    "question_text": "依「機關委託專業服務廠商評選及計費辦法」之規定，有2家以上廠商為同一優勝順序者，為求公平謹慎，應以抽籤決定議價順序，惟抽籤方式應載明於招標文件。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法 第 22 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-287",
    "category": "政府採購法之總則、招標及決標",
    "type": "tf_question",
    "question_text": "依「機關辦理設計競賽廠商評選及計費辦法」之規定，有2家以上廠商為同一優勝順序者，擇配分最高之評選項目之得分合計值較高者，優先議價；得分仍相同者，就該等廠商再進行綜合評選1次，以總評分最高、價格與總評分之商數最低或序位合計值最低者，優先議價；其再次相同者，抽籤決定之。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法 第 22 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-288",
    "category": "政府採購法之總則、招標及決標",
    "type": "tf_question",
    "question_text": "機關依採購法第22條第1項第9款規定與評選優勝廠商之議價及決標，如有2家以上廠商為同一優勝順序者，以抽籤決定議價順序。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法 第 22 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-289",
    "category": "政府採購法之總則、招標及決標",
    "type": "tf_question",
    "question_text": "機關委託技術服務廠商辦理規劃服務，其服務內容已包括測量、地質調查、土壤調查與試驗、水文氣象測量及調查、材料調查及試驗、模型試驗及其他調查、試驗或勘測等項目，前述項目之服務費用不得採建造費用百分比法計費。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法 第 22 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-290",
    "category": "政府採購法之總則、招標及決標",
    "type": "tf_question",
    "question_text": "機關辦理委託資訊服務採服務成本加公費法者，應於契約訂明廠商應記錄各項費用並提出憑證，憑證應經會計師簽證方有效。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法 第 22 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-291",
    "category": "政府採購法之總則、招標及決標",
    "type": "tf_question",
    "question_text": "機關允許共同投標時，應於招標文件中載明廠商得單獨投標。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法 第 25 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-292",
    "category": "政府採購法之總則、招標及決標",
    "type": "tf_question",
    "question_text": "機關允許共同投標時，其對共同投標廠商押標金不予發還之通知，對共同投標廠商成員之一為通知，仍具效力。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法 第 25 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-293",
    "category": "政府採購法之總則、招標及決標",
    "type": "tf_question",
    "question_text": "機關允許共同投標時，應於招標文件中規定其對共同投標廠商之代表人之通知，與對共同投標廠商所有成員之通知具同等效力。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法 第 25 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-294",
    "category": "政府採購法之總則、招標及決標",
    "type": "tf_question",
    "question_text": "機關允許共同投標時，得於招標文件中規定廠商僅得共同投標不得單獨投標。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法 第 25 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-295",
    "category": "政府採購法之總則、招標及決標",
    "type": "tf_question",
    "question_text": "機關允許共同投標時，應於招標文件中規定共同投標廠商之成員，不得對同一採購另行提出投標文件或為另一共同投標廠商之成員。但有該採購涉及專利或特殊之工法或技術，或預估合於招標文件規定之投標廠商競爭不足，為增加廠商競爭，則不在此限。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法 第 25 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-296",
    "category": "政府採購法之總則、招標及決標",
    "type": "tf_question",
    "question_text": "機關允許共同投標時，於招標文件中規定共同投標廠商之成員，不得對同一採購另行提出投標文件或為另一共同投標廠商之成員，係屬限制競爭之作法，不得採行。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法 第 25 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-297",
    "category": "政府採購法之總則、招標及決標",
    "type": "tf_question",
    "question_text": "機關辦理採購，採公開招標方式辦理者，如於開標前取消採購，則應刊登無法決標公告。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法 第 27 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-298",
    "category": "政府採購法之總則、招標及決標",
    "type": "tf_question",
    "question_text": "廠商原係以現金繳納履約保證金，即不得再向機關提出申請轉換保證金繳納方式。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法 第 30 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-299",
    "category": "政府採購法之總則、招標及決標",
    "type": "tf_question",
    "question_text": "廠商原係以現金繳納履約保證金，如向機關提出申請轉換保證金方式，且經機關同意，得改以政府公債繳納之。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法 第 30 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-300",
    "category": "政府採購法之總則、招標及決標",
    "type": "tf_question",
    "question_text": "依採購法施行細則第33條第1項規定，同一投標廠商就同一採購之投標，以一標為限。今有甲公司與乙公司就同一採購分別投標，其投標文件所載負責人為同一人，未違反上開規定，惟如有採購法第50條第1項第5款規定情形，機關應不予開標決標。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法 第 33 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-301",
    "category": "政府採購法之總則、招標及決標",
    "type": "tf_question",
    "question_text": "機關辦理採購，底價於開標後決標前仍應保密，廢標後縱使有特殊情形亦同。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法 第 34 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-302",
    "category": "政府採購法之總則、招標及決標",
    "type": "tf_question",
    "question_text": "機關辦理採購，底價於開標後仍應保密，但廢標後除有特殊情形外，應予公開。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法 第 34 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-303",
    "category": "政府採購法之總則、招標及決標",
    "type": "tf_question",
    "question_text": "為確保廠商履約能力與誠信，凡有欠稅情形之廠商，一律不得參與政府採購之投標。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法 第 36 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-304",
    "category": "政府採購法之總則、招標及決標",
    "type": "tf_question",
    "question_text": "個案採購之投標廠商資格條件，得不以檢具納稅證明文件為必要。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法 第 36 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-305",
    "category": "政府採購法之總則、招標及決標",
    "type": "tf_question",
    "question_text": "機關辦理採購，對於廠商履行契約所必須具備之財務、商業或技術資格條件，得就廠商在我國之商業活動為考量，並得以其為政府機關、公立學校或公營事業所完成者為限。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法 第 36 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-306",
    "category": "政府採購法之總則、招標及決標",
    "type": "tf_question",
    "question_text": "機關辦理採購，對於廠商履行契約所必須具備之財務、商業或技術資格條件，應就廠商在我國或外國之商業活動為整體考量，不以其為政府機關、公立學校或公營事業所完成者為限。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法 第 36 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-307",
    "category": "政府採購法之總則、招標及決標",
    "type": "tf_question",
    "question_text": "機關辦理資訊服務採購，如屬經濟部投資審議司公告「具敏感性或國安（含資安）疑慮之業務範疇」，為免發生國安或資安疑慮，依「機關辦理涉及國家安全採購之廠商資格限制條件及審查作業辦法」及「投標廠商資格與特殊或巨額採購認定標準」第4條第1項第6款規定，於招標文件載明不允許經濟部投資審議司公告之陸資資訊服務業參與。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法 第 36 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": true,
    "historical_regulation": "舊版法規：工程巨額採購為 2 億元、財物為 1 億元、勞務為 2,000 萬元。",
    "current_regulation": "現行法規（自 112 年 1 月 1 日施行）：工程巨額採購提高為 4 億元、財物提高為 2 億元、勞務提高為 8,000 萬元。",
    "amendment_warning": "⚠️ 異動提醒：巨額採購標準已自 112 年調高（工程 4 億、財物 2 億、勞務 8,000 萬）。"
  },
  {
    "id": "pcc-q-308",
    "category": "政府採購法之總則、招標及決標",
    "type": "tf_question",
    "question_text": "機關於招標文件規定廠商得請求釋疑之期限，至少應有等標期之四分之一，其不足1日者不納入計算。機關釋疑之期限，比照答復異議之期限。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法 第 41 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-309",
    "category": "政府採購法之總則、招標及決標",
    "type": "tf_question",
    "question_text": "機關於招標文件規定廠商得請求釋疑之期限，至少應有等標期之四分之一。機關最後釋疑之次日起算至截止投標日或資格審查截止收件日之日數，不得少於原等標期之四分之一。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法 第 41 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-310",
    "category": "政府採購法之總則、招標及決標",
    "type": "tf_question",
    "question_text": "機關辦理採購，決標或簽約後發現得標廠商於決標前有採購法第50條第1項情形者，應撤銷決標、終止契約或解除契約，並得追償損失。但撤銷決標、終止契約或解除契約反不符公共利益，並經機關首長及其授權人核准者，不在此限。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法 第 50 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-311",
    "category": "政府採購法之總則、招標及決標",
    "type": "tf_question",
    "question_text": "機關辦理採購，決標或簽約後發現得標廠商於決標前有採購法第50條第1項情形者，應撤銷決標、終止契約或解除契約，並得追償損失。但撤銷決標、終止契約或解除契約反不符公共利益，並經上級機關核准者，不在此限。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法 第 50 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-312",
    "category": "政府採購法之總則、招標及決標",
    "type": "tf_question",
    "question_text": "機關辦理公告金額以上之專業服務、技術服務、資訊服務、社會福利服務或文化創意服務，且招標文件已訂明固定服務費用或費率者，依該服務費用或費率決標，議價程序得予免除。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法 第 52 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": true,
    "historical_regulation": "舊版法規：工程及財物採購公告金額為新臺幣 100 萬元，勞務採購為 100 萬元。",
    "current_regulation": "現行法規（自 112 年 1 月 1 日施行）：公告金額調高為新臺幣 150 萬元。",
    "amendment_warning": "⚠️ 異動提醒：公告金額已自 112 年起由 100 萬元調高至 150 萬元。"
  },
  {
    "id": "pcc-q-313",
    "category": "政府採購法之總則、招標及決標",
    "type": "tf_question",
    "question_text": "機關辦理公告金額以上之專業服務、技術服務、資訊服務、社會福利服務或文化創意服務者，以不訂底價之最有利標為原則。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法 第 52 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": true,
    "historical_regulation": "舊版法規：工程及財物採購公告金額為新臺幣 100 萬元，勞務採購為 100 萬元。",
    "current_regulation": "現行法規（自 112 年 1 月 1 日施行）：公告金額調高為新臺幣 150 萬元。",
    "amendment_warning": "⚠️ 異動提醒：公告金額已自 112 年起由 100 萬元調高至 150 萬元。"
  },
  {
    "id": "pcc-q-314",
    "category": "政府採購法之總則、招標及決標",
    "type": "tf_question",
    "question_text": "機關辦理採購之決標，所有合於招標文件規定之投標廠商僅有1家，其標價超過底價時，須限制減價次數者，應先通知廠商。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法 第 53 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-315",
    "category": "政府採購法之總則、招標及決標",
    "type": "tf_question",
    "question_text": "機關辦理採購之決標，所有合於招標文件規定之投標廠商僅有1家，其標價超過底價時，減價次數不得逾3次，且無須通知廠商。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法 第 53 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-316",
    "category": "政府採購法之總則、招標及決標",
    "type": "tf_question",
    "question_text": "機關辦理採購之決標，合於招標文件規定之投標廠商之最低標價超過底價時，得洽該最低標廠商減價1次；減價結果仍超過底價時，得由所有合於招標文件規定之投標廠商重新比減價格，比減價格不得逾3次。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法 第 53 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-317",
    "category": "政府採購法之總則、招標及決標",
    "type": "tf_question",
    "question_text": "機關辦理採購，其決標依採購法第52條第1項第2款規定採未訂底價最低標決標原則辦理者，無論金額大小，應成立評審委員會，其成員由機關首長或其授權人員就對於採購標的之價格具有專門知識之機關職員或公正人士派兼或聘兼之。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法 第 54 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-318",
    "category": "政府採購法之總則、招標及決標",
    "type": "tf_question",
    "question_text": "機關依採購法第58條規定通知最低標廠商提出說明，而廠商說明不合理，即使表明願意提供擔保者，機關應予拒絕，逕不決標予該廠商。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 1,
    "explanation": "依政府採購法 第 58 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-319",
    "category": "政府採購法之總則、招標及決標",
    "type": "tf_question",
    "question_text": "依採購法第59條規定，個案採購如已結案或終止解除契約，則免通知廠商限期給付2倍不正利益。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法 第 59 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  },
  {
    "id": "pcc-q-320",
    "category": "政府採購法之總則、招標及決標",
    "type": "tf_question",
    "question_text": "廠商人員違反採購法第59條第1項規定，機關可就終止契約、解除契約或扣除2倍不正利益擇一處置即可。",
    "options": [
      "對",
      "錯"
    ],
    "correct_answer": 2,
    "explanation": "依政府採購法 第 59 條 規定辦理。",
    "exam_year": 115,
    "has_amendment": false,
    "historical_regulation": "",
    "current_regulation": "",
    "amendment_warning": ""
  }
];

// 支援瀏覽器與 Node.js 載入
if (typeof window !== 'undefined') {
    window.questions_db = questions_db;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = questions_db;
}
