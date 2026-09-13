# Design System: Graphite

## Overview

**Creative North Star: "Graphite"**

頁面以編輯式技術履歷呈現 Jack 的前端現代化能力。深色近乎單色的介面代表工程判斷，資訊層級由密度、對齊與等寬字建立，而不是由顏色或字重。單一低飽和冷色只標示關鍵指標與互動狀態。AI 是可驗證的工作方法，不是視覺主角。

**Physical scene:** 前端主管在白天用筆電快速查看資深前端候選人。首屏要在十秒內說清楚年資、核心專長與代表作，再沿著遷移、經歷、AI 方法與能力邊界確認可信度。

**Brand voice:** precise, candid, unhurried.

**Distinctiveness:** 近乎單色的深色介面、1px 網格線構成的資料表面，以及等寬字承載的所有數字與標籤。`02 → 03` 版本遷移以等寬字中等尺寸呈現，不使用巨型展示字。

## Colors

全站使用 oklch。只有一個 accent，色度刻意壓低。

- **bg:** `oklch(16% 0.004 250)`，頁面底色。
- **surface:** `oklch(21% 0.005 250)`，卡片與強調帶。
- **surface-2:** `oklch(25% 0.005 250)`，遷移視覺的 after 側。
- **line:** `oklch(31% 0.006 250)`，實體邊框。
- **line-soft:** `oklch(25% 0.005 250)`，區塊分隔與網格線。
- **text:** `oklch(93% 0.004 250)`，主要文字。
- **muted:** `oklch(64% 0.006 250)`，次級文字與標籤。
- **faint:** `oklch(58% 0.006 250)`，序號與分隔符號。
- **accent:** `oklch(72% 0.055 245)`，關鍵指標、主行動、目前狀態。

不使用 gradient、玻璃卡片、發光效果或第二個 accent。所有前景色對 bg 的對比都在 4.5:1 以上。

## Typography

- **Latin:** `Schibsted Grotesk`。
- **CJK:** `Noto Sans TC`，承載所有繁體中文標題與正文。
- **Mono:** `JetBrains Mono`，承載所有數字、版本、日期、技術標籤與小標籤。

字重只用 400、500、600 三級，不使用 700 以上。

字級走 token，小字只有三階，新元件必須落在其中之一：

- `--fs-meta` `0.75rem`：等寬小標籤、技術標籤、頁尾。
- `--fs-sm` `0.875rem`：次級正文、導覽、按鈕。
- `--fs-base` `1rem`：正文。
- `--fs-lede` `1.0625rem`：導言。
- `--fs-h3` `1.1875rem`、`--fs-h2` `clamp(1.75rem, 3vw, 2.375rem)`、`--fs-h1` `clamp(2.25rem, 4.4vw, 3.25rem)`。

唯一的例外是遷移視覺的 `02` / `03`，使用 `clamp(3.25rem, 7vw, 5rem)` 等寬字。

全站只有一種小標籤樣式：等寬、`--fs-meta`、字距 `0.06em`、`--muted`。新增區塊沿用，不要再造第二種。

## Layout

- 最大內容寬度 1180px。
- 面板與列表以 `gap: 1px` 加上容器底色畫出 1px 網格線。**欄數必須整除項目數**，否則空格會露出一整塊容器底色（列印時尤其明顯）。
- 斷點：1040px 收起雙欄首屏與 case 並排；880px 收起導覽列，三項式列表改為整排；620px 全部單欄。
- 圓角 4px（元件）與 6px（面板），不使用直角或膠囊。
- Hero 左側是定位與三項證據，右側是低調的主案例摘要。
- 敘事順序固定為遷移、工作經歷、AI 方法、能力邊界、side projects。
- 能力邊界以 A／B／C 三層呈現，A 層以 surface 底色與 accent 邊框標示。

## Components

### AI workflow

- Define、Direct、Review、Verify 四步全部寫入靜態 HTML。
- 流程位於工作經歷之後，和責任分工及 Core API 案例組成完整方法區。
- JavaScript 不承載內容，停用後仍可讀到所有步驟。

### Migration visual

- 左側 surface 代表 Nuxt 2／Vue 2，右側 surface-2 代表 Nuxt 3／Vue 3，`03` 用 accent。
- 中央以 1px 線與小箭頭標示「保留行為、逐步替換」，窄螢幕轉為水平。
- 技術名稱只作為遷移證據，後面接續 Jack 實際負責的三類決策。

### Responsibility map

- 「我負責」用 accent，「AI 協助」用 muted，靠色階分開而不是靠兩個對比色。
- 最後一列明確指出合併、行為與風險責任仍由 Jack 承擔。
- Core API 案例直接說明後端深度邊界，不暗示資深後端能力。

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
