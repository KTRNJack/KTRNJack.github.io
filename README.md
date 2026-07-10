# Jack — 個人履歷網站

求職導向的個人網站。純 HTML/CSS + 無相依小 JS，無框架、無建置流程。

## 設計方向

**編輯部誌面 × systemd 狀態列。** 核心賣點是「這些個人專案不是 demo，
是持續運營中的系統」——所以每個 case study 掛一條 `systemctl status` 風格
的等寬狀態列，內文用技術雜誌的編排（問題 → 架構 → 決策 → 規模）。

- 色：紙白 `#f7f4ee`、墨 `#191714`、單一橘 accent `#e8590c`、systemd 綠點 `#1f7a4d`
- 字：Noto Serif TC（標題 900）、Noto Sans TC（內文）、IBM Plex Mono（狀態列/標籤）
- 質地：淡橫線稿紙背景、highlight 底帶強調、捲動漸顯

## 結構（單頁）

Hero（狀態列＋一句定位）→ §1 工作經歷 → §2 個人系統（4 個 case study：
Hermes / Stock Monitor / ESP32 / Fusion Panel）→ §3 其他運行中專案 →
§4 技能 → 聯絡（email＋電話）。

## 本機預覽

```bash
python3 -m http.server 8792
# http://localhost:8792/
```

## 部署

計畫放 GitHub Pages（免費、push 即部署），之後買自訂網域再綁定，零重工。
