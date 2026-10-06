# Design System: Editorial Noir

## Overview

**Creative North Star: "Editorial Noir"**

頁面以暗黑編輯雜誌結合工程案例檔案，呈現 Jack 的前端現代化能力。近黑底、暖白紙張、巨型襯線展示字、霧金行動色與冷灰藍技術訊號構成個人識別；專案內容仍以清楚的技術結構承載。AI 是可驗證的工作方法，不是視覺主角。

**Physical scene:** 前端主管在白天用筆電快速查看資深前端候選人。首屏要在十秒內說清楚年資、核心專長與代表作，再沿著遷移、經歷、AI 方法與能力邊界確認可信度。

**Brand voice:** precise, candid, unhurried.

**Distinctiveness:** 首屏以超大 `JACK SUN` 建立記憶點，代表案例像三張錯落的工程檔案；`02 → 03` 成為版本遷移的視覺主角。正文沿用 1px 線、等寬標籤與清楚案例結構，避免整頁變成純展示作品。

## Colors

全站使用 oklch。霧金負責行動與個人語氣，冷灰藍只標示技術遷移與 AI 協作，兩者不互換。

- **bg:** `oklch(12.5% 0.006 75)`，近黑暖色頁面底色。
- **surface:** `oklch(17.5% 0.007 75)`，深色案例表面。
- **surface-2:** `oklch(21% 0.008 75)`，次級表面。
- **line:** `oklch(36% 0.014 75)`，實體邊框。
- **line-soft:** `oklch(26% 0.01 75)`，區塊分隔與網格線。
- **text:** `oklch(94% 0.018 85)`，暖白紙張與主要文字。
- **muted:** `oklch(72% 0.016 80)`，次級文字與標籤。
- **faint:** `oklch(58% 0.016 80)`，序號與分隔符號。
- **accent:** `oklch(74% 0.1 78)`，姓名、主行動與大面積聲明；用霧金取代高彩度紅色，提高暗色背景與反白區塊的辨識度。
- **signal:** `oklch(66% 0.055 230)`，版本卡、AI 協作與技術遷移。

不使用 gradient、玻璃卡片或發光效果。signal 是語意色而非第二個裝飾 accent；不拿來替代 CTA。所有正文前景色對 bg 的對比都在 4.5:1 以上。

## Typography

- **Display:** `Instrument Serif`，只用於姓名、版本數字與英文案例標題。
- **Latin:** `Schibsted Grotesk`。
- **CJK:** `Noto Sans TC`，承載所有繁體中文標題與正文。
- **Mono:** `JetBrains Mono`，承載所有數字、版本、日期、技術標籤與小標籤。

字重只用 400、500、600 三級，不使用 700 以上。

字級走 token，小字只有三階，新元件必須落在其中之一：

- `--fs-meta` `0.75rem`：等寬小標籤、技術標籤、頁尾。
- `--fs-sm` `0.875rem`：次級正文、導覽、按鈕。
- `--fs-base` `1rem`：正文。
- `--fs-lede` `1.0625rem`：導言。
- `--fs-h3` `1.1875rem`、`--fs-h2` `clamp(2.5rem, 5vw, 4.75rem)`、`--fs-h1` `clamp(5.25rem, 14vw, 12rem)`。

唯一的例外是遷移視覺的 `02` / `03`，使用 `clamp(3.25rem, 7vw, 5rem)` 等寬字。

全站只有一種小標籤樣式：等寬、`--fs-meta`、字距 `0.06em`、`--muted`。新增區塊沿用，不要再造第二種。

620px 以下將 `--fs-sm` 提升為 `1rem`，確保手機上的次級正文與操作文字不小於 16px；`--fs-meta` 仍只用於短標籤、日期與技術標記。

## Layout

- 最大內容寬度 1180px。
- 面板與列表以 `gap: 1px` 加上容器底色畫出 1px 網格線。**欄數必須整除項目數**，否則空格會露出一整塊容器底色（列印時尤其明顯）。
- 斷點：1040px 收起雙欄首屏與 case 並排；880px 收起導覽列，三項式列表改為整排；620px 全部單欄。
- 圓角 4px（元件）與 6px（面板），不使用直角或膠囊。
- Hero 先以巨型姓名建立辨識，再由左側定位文字與右側錯落案例檔案完成說明。
- 敘事順序固定為遷移、AI 能力邊界聲明、工作經歷、AI 方法、能力邊界、side projects。
- Hero 的次要行動連到 GitHub；站內遷移連結稱為「案例」，只有連到公開原始資料時才使用「證據」。
- 能力邊界以 A／B／C 三層呈現，A 層以 surface 底色與 accent 邊框標示。

## Components

### AI workflow

- Define、Direct、Review、Verify 四步全部寫入靜態 HTML。
- 流程位於工作經歷之後，和責任分工及後端 API 現代化案例組成完整方法區。
- JavaScript 不承載內容，停用後仍可讀到所有步驟。

### Migration visual

- 左側深色紙張代表 Nuxt 2／Vue 2，右側暖白紙張代表 Nuxt 3／Vue 3，`03` 用冷灰藍 signal。
- 中央以 1px 線與小箭頭標示「保留行為、逐步替換」，窄螢幕轉為水平。
- 技術名稱只作為遷移證據，後面接續 Jack 實際負責的三類決策。

### Responsibility map

- 「我負責」用 accent，「AI 協助」用 signal，讓責任與工具在語意上可以快速區分。
- 最後一列明確指出合併、行為與風險責任仍由 Jack 承擔。
- 後端 API 現代化案例直接說明後端深度邊界，不暗示資深後端能力。

### Capability levels

- A：可獨立交付，包含前端框架、語言、介面與測試。
- B：具工作知識，代表可讀、可串接、可除錯。
- C：AI 協作接觸，代表有專案經驗但不是獨立核心熟練。

## Motion

- 區塊進場只有一次 opacity／translate 動畫，位移 10px。
- 連結與按鈕只有 140ms 的顏色與邊框回饋，沒有位移、3D 或持續動畫。
- `prefers-reduced-motion: reduce` 時關閉 smooth scroll 與 reveal。

## Print

履歷必須能印。`@media print` 把整組 token 翻成白底黑字，accent 降到 `oklch(40% 0.09 245)` 以維持紙本對比，並隱藏 header、reading progress、hero 行動按鈕與頁尾。A4，邊界 13mm。

## Content Rules

- 純繁體中文，必要技術詞保留英文。
- 先說責任與判斷，再列工具名稱。
- 工作成果、AI 協作案例與個人實驗清楚分區。
- 不以 AI 產生的程式碼作為獨立熟練證據。
- 不顯示 Git commit 數，也不宣稱未直接驗證的商業成效。
