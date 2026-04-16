# Idol Calendar TW

一個可直接放到 GitHub 的 `Next.js + TypeScript` 專案原型，主打整理台灣即將開唱的 K-pop 演唱會資訊，並預留未來擴充到更多藝人與音樂類型的能力。

## 核心功能

- 演唱會首頁：集中顯示台灣即將開唱的活動
- 詳細頁：包含演出日期、場館、搶票時間與售票網址
- 熱門排行：可延伸用搜尋量、收藏數、訂閱數計算
- 自動抓資料架構：預留 `web scraping / API sync`
- 通知設定：示範 `LINE / Email` 訂閱流程
- 未來擴充：K-pop 以外的日韓、華語、西洋、音樂祭

## 技術選型

- Next.js App Router
- TypeScript
- 原生 CSS
- API Routes 作為後端入口

## 快速開始

```bash
npm install
npm run dev
```

啟動後開啟 [http://localhost:3000](http://localhost:3000)

## 專案結構

```text
src/
  app/
    page.tsx
    events/[slug]/page.tsx
    api/
      events/
      rankings/
      subscriptions/
      sync/
  components/
  lib/
  types/
```

## API 範例

- `GET /api/events`
- `GET /api/events?q=blackpink`
- `GET /api/events/[slug]`
- `GET /api/rankings`
- `POST /api/subscriptions`
- `POST /api/sync`

## 後續可以怎麼接

1. 把 `src/lib/data.ts` 換成資料庫，例如 PostgreSQL / Supabase。
2. 在 `src/lib/scrapers.ts` 接入 `cheerio`、`playwright` 或第三方票務 API。
3. 把 `src/lib/notifications.ts` 接上真正的 LINE Messaging API、Resend、SMTP 或 SendGrid。
4. 新增會員登入、收藏、倒數提醒與 admin 後台。

## 環境變數

可參考 `.env.example`。

## 注意

目前內建的是示範資料與示範通知流程，方便你先做作品集、提案或 MVP。若要正式上線，建議補：

- 爬蟲合法性與來源授權檢查
- 活動變更人工校對
- 票務平台反爬限制處理
- 真正的資料庫與排程
