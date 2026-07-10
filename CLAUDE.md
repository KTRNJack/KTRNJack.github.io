# CLAUDE.md — Jack 履歷網站

給未來接手的 Claude 的工作備忘。設計說明見 `README.md`。

## 目前狀態（2026-07-10）

v1 完成並部署 GitHub Pages。單頁、純 HTML/CSS、四個 case study，
全區塊實測截圖驗證過（桌機＋手機）。
剩餘工作只有一項：§1 沃草工作經歷內容——**由 Mac 上的 Claude 補**，見 `TODO.md`。

## 已拍板的決策（2026-07-10 與 Jack 確認）

- **用途**：求職（未來用），非接案、非個人品牌。
- **語言**：純繁體中文。**不寫語言能力**（英日文僅聽說，Jack 明確說先不放）。
- **身分**：顯示名 **Jack Sun**、**不放照片**。
- **定位（2026-07-10 本人糾正，重要）**：Jack 是**前端工程師（Vue/Nuxt/JavaScript）**，
  **不會 Python**——個人專案的後端是他指揮 AI agent 寫的（AI 協作開發）。
  技能區、hero、聯絡 lede 都已按此改寫；**永遠不要再把 Python 列為他的技能**，
  case study 的技術 facts 標「AI 協作開發」。這個「前端工程師指揮 AI 蓋後端」
  的敘事是整站的差異化主軸，別弱化它。
- **視覺 v2（2026-07-10）**：Jack 嫌 v1 編輯部風單調，改深色 acid lime 酷炫版
  （細節見 README）。網站本身就是前端作品這件事是需求的一部分。
- **聯絡**：只放 email；**電話不上站**，寫「面談時提供」（避免公開爬蟲 spam）。
- **接案作品**：無（幫別人做的網站不在展示範圍）。
- **策展原則**：pikmin-gps、IG 自動化等灰色專案**永不上站**；
  stock-monitor 以「研究平台」呈現，**不得出現任何實際財務數字**。
- **model-audit 條目**：保留在 §3（本機 Claude 判斷對 civic-tech 求職加分，
  Jack 問過意見後採納；他若之後改變主意就刪，一行的事）。
- **絕對禁止**：任何個人敏感資訊（參見 memory `user_jack.md`）不得出現在這個公開網站上。

## 待辦

1. **沃草工作內容**：見 `TODO.md`，指派給 Mac 的 Claude。
2. **網域**：尚未購買，不急。之後買了綁 GitHub Pages，並把 hero 的
   `jack-sun.service` 裝飾字串換成真網域。

## 開發備忘

- 預覽：`python3 -m http.server 8792`。
- 視覺驗證：用 `~/.cache/ms-playwright/chromium-*` + playwright python 套件，
  真實 `scrollIntoView` 逐段截圖（別用超高視窗一次截，hero 沒有 100vh 但養成習慣）。
- 強調詞 `em` 是墨字＋橘 highlight 底帶；別再把字也改橘（試過，太重）。
- 稿紙橫線背景已調到 45% 透明度，再深會搶內文。
