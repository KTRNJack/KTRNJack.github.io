# Jack — 個人履歷網站

求職導向的個人網站。純 HTML/CSS + 無相依小 JS，無框架、無建置流程。

## 設計方向（v2，2026-07-10 改版）

**深夜控制室 × acid lime。** 兩層賣點：內容上「個人專案是持續運營中的系統」
（每個 case study 掛 `systemctl status` 風格狀態列）；形式上**網站本身就是
前端作品**——所有動效純 CSS/vanilla JS、零依賴。

- 色：近黑 `#0c0d11`、米白 `#eceada`、acid lime `#c8f31d`、running 綠 `#3ddc84`
- 字：Noto Serif TC（標題 900）、Noto Sans TC（內文）、IBM Plex Mono（狀態列/標籤）
- 動效：自訂游標（dot＋lerp 拖尾環）、捲動進度條、活的 career uptime 秒錶、
  斜角無限跑馬燈、卡片 3D tilt＋滑鼠追蹤光暈、hero 逐行升起、描邊大字章節號、
  conic-gradient 光暈背景＋網格；全部尊重 `prefers-reduced-motion`

## 結構（單頁）

Hero（狀態列＋一句定位）→ §1 工作經歷 → §2 個人系統（4 個 case study：
Hermes / Stock Monitor / ESP32 / Fusion Panel）→ §3 其他運行中專案 →
§4 技能 → 聯絡（email＋電話）。

## 部署

- **線上網址**：https://ktrnjack.github.io/
- repo：`KTRNJack/KTRNJack.github.io`（GitHub Pages user site，push main 即自動部署）
- 之後買自訂網域直接綁定，零重工。
