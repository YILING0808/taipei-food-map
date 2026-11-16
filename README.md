# Taipei Bites｜台北美食收藏

一個簡約、溫暖、可持續擴充的台北美食單頁網站，收錄 **6 間店家**，分為 **正餐 / 咖啡廳 / 甜點**。

## 專案特色

* 純 HTML / CSS / JavaScript，零安裝、零建置工具。
* 分類按鈕、關鍵字搜尋、結果數量、無結果提示。
* 點擊卡片即可開啟 Google Maps 搜尋與參考來源。
* 支援手機與桌面；網站使用 CSS + 美食示意照片 插畫，沒有外部餐廳圖片的版權風險。
* `AGENTS.md` 清楚告訴 AI 未來如何繼續新增內容。

## 快速預覽

直接用瀏覽器開啟 `index.html` 即可。若使用 VS Code，可選擇 Live Server 預覽。

## 專案結構

```text
taipei-food-map/
├── index.html
├── style.css
├── script.js
├── restaurants.js
├── AGENTS.md
└── README.md
```

## 如何新增店家

1. 先閱讀 **AGENTS.md**。
2. 在 `restaurants.js` 的 `window.RESTAURANTS` 陣列末端新增一筆符合規範的物件。
3. 確認店名與地址有可信來源，不編造資訊。
4. 重新整理網頁。系統會自動產生卡片，分類、搜尋與計數也會同步更新。

示範指令：

> 請讀取 AGENTS.md，幫我新增一間台北甜點店。保留原本網頁樣式，只修改 restaurants.js；檢查分類、搜尋與 Google Maps 是否正常。

