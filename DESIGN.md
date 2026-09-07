# Design System: Career Migration Map

## Overview

**Creative North Star: "The Migration Map"**

頁面像一張攤在工作桌上的工程遷移藍圖：大片鈷藍是主結構，暖紙色承載長文，安全橘只標出轉折與關鍵結果。它不是終端機，也不是雜誌，而是一份有方向、有版本、有證據的工程履歷。

**Physical scene:** 招聘主管在白天的辦公桌前，用 14 吋筆電快速檢查一位資深工程候選人的履歷；環境光充足，必須先看到方向，再看到細節。因此採高可讀亮色頁面，不使用暗色控制室風格。

**Brand voice:** precise, sturdy, awake.

**Color strategy:** Committed。鈷藍承擔約 35% 到 45% 的視覺面積，暖紙色負責閱讀，安全橘低於 10% 且只標示重要節點。

## Colors

- **Blueprint Cobalt:** `oklch(45% 0.18 257)`，Hero、導覽、主要區塊與連結。
- **Deep Cobalt:** `oklch(27% 0.11 260)`，深色文字與 hover 狀態。
- **Warm Paper:** `oklch(96% 0.018 88)`，主要閱讀背景。
- **Draft Paper:** `oklch(91% 0.026 83)`，次要區帶與分隔。
- **Graphite Ink:** `oklch(22% 0.035 258)`，正文。
- **Muted Ink:** `oklch(48% 0.032 258)`，metadata 與輔助說明。
- **Safety Orange:** `oklch(68% 0.19 44)`，關鍵節點與 focus ring。
- **Signal Mint:** `oklch(82% 0.10 154)`，已驗證狀態。

不使用純黑或純白。所有中性色都向鈷藍或紙張暖色偏移。

## Typography

- **Primary:** `Chiron Hei HK`，fallback 為 `PingFang TC`, `Noto Sans TC`, system-ui, sans-serif。選擇原因是繁體中文畫面現代、字重完整，適合長文與高密度履歷。
- **Technical labels:** `Azeret Mono`，只用於日期、章節編號、技術標籤與短 metadata。
- H1 使用 `clamp(3.2rem, 9vw, 7.6rem)`，重量 800，行高 0.95。
- H2 使用 `clamp(2rem, 5vw, 4.6rem)`，重量 750，行高 1.05。
- 正文 1rem 到 1.08rem，行高 1.75，最大行長 72ch。
- 不使用 display serif、斜體大標或 gradient text。

## Layout

- 桌面使用 12 欄可見格線，最大寬度 1180px；重要區塊採 4 欄 metadata 加 8 欄內容。
- Hero 不置中，名稱與定位靠左，右側以遷移路徑展示技術跨度。
- 經歷以時間軸和寬版內容列呈現，不使用獨立卡片堆疊。
- 個人專案使用交錯的色帶與編號，每一項只有最必要的技術與驗證狀態。
- 手機降為單欄，metadata 先於內容，導覽改為可水平捲動的錨點列。

## Components

### Navigation

- Sticky 細導覽，紙色背景加 1px 鈷藍邊線。
- 顯示姓名縮寫、四個區段錨點與 Email 行動。
- Focus 使用 2px Safety Orange outline。

### Hero

- 鈷藍滿寬色帶，暖紙文字，大型姓名與一句定位。
- 右側 migration path 以線與節點表達 `Frontend → Platform → AI Tooling`。
- 不使用頭像、英雄數字或能力百分比。

### Experience row

- 左側顯示日期、公司、職稱；右側放 3 到 6 條成果。
- 關鍵技術以 inline chips 呈現，chip 不使用膠囊造型。
- 公司經歷與個人專案之間以不同背景與章節標題分開。

### Project strip

- 每個專案是一個完整寬度區帶，有名稱、用途、兩條成果與驗證狀態。
- 先以 Windows／WSL AI 系統與 Mac 工程工具分組，再於組內維持一致的證據格式。
- 已驗證狀態同時使用文字與 Signal Mint 圓點，不只依賴顏色。
- 不使用重複卡片網格。

### Contact

- Email 是唯一公開聯絡方式。
- 使用大型純文字連結與清楚的 hover／focus 回饋，不顯示電話與住址。

## Motion

- 首屏只有一次 500ms 到 800ms 的 opacity／transform choreography。
- 捲動 reveal 使用 `cubic-bezier(0.16, 1, 0.3, 1)`，每個元素只執行一次。
- 不做 3D tilt、自訂游標、無限跑馬燈或持續旋轉背景。
- `prefers-reduced-motion: reduce` 時完全停用 reveal、smooth scroll 與進度動畫。

## Content Rules

- 純繁體中文，專有名詞保留英文。
- 不使用 em dash，改用冒號、句號或括號。
- 不寫空泛自評；每個重要敘述必須有 repository、文件、測試或本人確認作為來源。
- 對外不顯示 Git commit 數，commit 僅用於內部判斷責任範圍。
