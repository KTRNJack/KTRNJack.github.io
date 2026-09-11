# Design System: Reviewable Delivery

## Overview

**Creative North Star: "Reviewable Delivery"**

頁面把 Jack 的工作方式做成一套看得見的交付系統。深色首屏代表工程判斷，酸性綠標示可驗收結果，藍色負責技術遷移，橘色標示 AI 協作區。重點不是營造神祕的 AI 氣氛，而是讓招募者看見一條可追蹤的責任鏈。

**Physical scene:** 前端主管在白天用筆電快速查看資深前端候選人。首屏要在十秒內說清楚核心專長，接著能用一個互動流程理解 Jack 如何和 AI 工作，再看到實際遷移證據與能力邊界。

**Brand voice:** mechanical, candid, kinetic.

**Distinctiveness:** 深墨色、酸性綠與實心藍橘色塊形成高辨識度；大型中文標題、版本遷移圖與責任分工表是主要視覺語言。

## Colors

- **Deep Ink:** `oklch(19% 0.025 264)`，首屏、AI 方法與頁尾。
- **Warm Paper:** `oklch(96.5% 0.018 92)`，主要閱讀背景。
- **Draft Paper:** `oklch(91% 0.03 94)`，能力邊界區。
- **Signal Acid:** `oklch(88% 0.22 126)`，主行動、驗收訊號與誠實宣言。
- **Migration Blue:** `oklch(57% 0.23 267)`，前端遷移與關鍵索引。
- **Collaboration Orange:** `oklch(71% 0.19 48)`，AI 協作案例。

色彩使用實心區塊，不使用 gradient text、玻璃卡片或發光效果。

## Typography

- **Primary:** `Chiron Hei HK`，用於所有繁體中文標題與正文。
- **Technical labels:** `Azeret Mono`，只用於英文流程、版本、日期與技術標籤。
- H1 使用 `clamp(4rem, 8vw, 8rem)`，字重 800，行高 0.9。
- H2 使用 `clamp(2.8rem, 6.8vw, 6.3rem)`，字重 800，行高 0.96。
- 正文最大行長約 65 到 70 個字元，保持高密度履歷仍可閱讀。

## Layout

- 最大內容寬度 1240px，桌面以 12 欄思考，手機降為單欄。
- Hero 左側是定位與三項證據，右側是可操作的 AI 交付流程。
- Nuxt 版本遷移以大型 `02 → 03` 視覺呈現，不做一般 before／after 卡片。
- 經歷與個人實驗使用全寬列，避免重複卡片網格。
- 能力邊界以 A／B／C 三層呈現，層級名稱比技術清單更醒目。

## Components

### AI workflow

- 四個按鈕對應 Define、Direct、Review、Verify。
- 點擊後更新目前階段與具體行為，使用 `aria-live` 讓輔助技術取得變更。
- 這是首屏唯一的主要互動，用來說明責任流程。

### Migration visual

- 左側深色代表 Nuxt 2／Vue 2，右側藍色代表 Nuxt 3／Vue 3。
- 中央酸性綠箭頭標示「保留行為、逐步替換」。
- 技術名稱只作為遷移證據，後面接續 Jack 實際負責的三類決策。

### Responsibility map

- 「我負責」與「AI 協助」以不同訊號色分開。
- 最後一列明確指出合併、行為與風險責任仍由 Jack 承擔。
- Core API 案例直接說明後端深度邊界，不暗示資深後端能力。

### Capability levels

- A：可獨立交付，包含前端框架、語言、介面與測試。
- B：具工作知識，代表可讀、可串接、可除錯。
- C：AI 協作接觸，代表有專案經驗但不是獨立核心熟練。

## Motion

- 區塊進場只有一次 opacity／translate 動畫。
- 按鈕以短距離位移和實心色彩回饋，不使用 3D、漂浮或持續動畫。
- `prefers-reduced-motion: reduce` 時關閉 smooth scroll 與 reveal。

## Content Rules

- 純繁體中文，必要技術詞保留英文。
- 先說責任與判斷，再列工具名稱。
- 工作成果、AI 協作案例與個人實驗清楚分區。
- 不以 AI 產生的程式碼作為獨立熟練證據。
- 不顯示 Git commit 數，也不宣稱未直接驗證的商業成效。
