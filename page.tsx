import { Header } from "@/components/Header";
import { NotifyForm } from "@/components/NotifyForm";
import { RankingCard } from "@/components/RankingCard";
import { SearchableCalendar } from "@/components/SearchableCalendar";
import { getAllEvents, getTopRankedEvents } from "@/lib/data";
import { formatDate } from "@/lib/utils";

export default function HomePage() {
  const events = getAllEvents();
  const rankings = getTopRankedEvents();

  return (
    <main>
      <Header />
      <section className="hero">
        <div className="site-shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">歡迎來到 Idol Calendar TW</p>
            <h1>台灣演唱會行事曆</h1>
            <p className="hero-text">
              整理即將在台灣開唱的 K-pop 與國際藝人活動，讓使用者可以快速看到演出日期、場館、搶票時間、售票連結與熱門排行。
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#calendar">
                查看演唱會
              </a>
              <a className="button secondary" href="#notify">
                設定通知
              </a>
            </div>
          </div>
          <div className="hero-card">
            <p className="hero-panel__label">最近熱門場次</p>
            <h2>{events[0].artist.name}</h2>
            <p>{events[0].title}</p>
            <dl>
              <div>
                <dt>演出日期</dt>
                <dd>{formatDate(events[0].startDate)}</dd>
              </div>
              <div>
                <dt>場館</dt>
                <dd>{events[0].venue}</dd>
              </div>
              <div>
                <dt>售票</dt>
                <dd>{formatDate(events[0].tickets[0].saleAt)}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="quick-links" id="ranking">
        <div className="site-shell">
          <div className="section-heading">
            <p>快捷入口</p>
            <h2>站內常用功能</h2>
          </div>
          <div className="link-grid">
            <article className="link-card">
              <span>01</span>
              <strong>即將開唱</strong>
              <small>{events.length} 筆台灣活動整理完成</small>
            </article>
            <article className="link-card">
              <span>02</span>
              <strong>熱門排行</strong>
              <small>依照熱度指數與關注度排序</small>
            </article>
            <article className="link-card">
              <span>03</span>
              <strong>搶票提醒</strong>
              <small>整合預售、全面開賣與網址</small>
            </article>
            <article className="link-card">
              <span>04</span>
              <strong>自動抓資料</strong>
              <small>預留 scraping / API 同步流程</small>
            </article>
            <article className="link-card">
              <span>05</span>
              <strong>LINE / Email</strong>
              <small>收藏喜歡的偶像並接收通知</small>
            </article>
          </div>
        </div>
      </section>

      <section className="announcements" id="calendar">
        <div className="site-shell">
          <div className="section-heading">
            <p>最新活動</p>
            <h2>首頁演唱會公告欄</h2>
          </div>
          <SearchableCalendar initialEvents={events} />
        </div>
      </section>

      <section className="resources" id="ranking-list">
        <div className="site-shell">
          <div className="section-heading">
            <p>熱門排行</p>
            <h2>📊 使用者最關注的場次</h2>
          </div>
          <div className="ranking-grid">
            {rankings.map((event, index) => (
              <RankingCard event={event} key={event.id} rank={index + 1} />
            ))}
          </div>
        </div>
      </section>

      <section className="page-section" id="automation">
        <div className="site-shell">
          <div className="section-heading">
            <p>自動整理</p>
            <h2>🤖 資料同步與通知架構</h2>
          </div>
          <div className="card-grid three-up">
            <article className="content-card">
              <h2>Web Scraping</h2>
              <p>抓取主辦、票務平台與公告頁，找出台灣場次與售票時間。</p>
            </article>
            <article className="content-card">
              <h2>API Aggregation</h2>
              <p>優先接 API 或公開 JSON 來源，讓資料更穩定、更新更快。</p>
            </article>
            <article className="content-card">
              <h2>Manual Review</h2>
              <p>保留人工校對層，避免取消、延後或改售票時間造成資訊錯誤。</p>
            </article>
          </div>
        </div>
      </section>

      <section className="page-section" id="notify">
        <div className="site-shell notify-layout">
          <div className="content-card">
            <p className="eyebrow">通知設定</p>
            <h2>🔔 LINE / Email 通知</h2>
            <p className="page-intro">
              使用者可以輸入最愛藝人，當新活動上架、售票倒數或票務網址更新時收到提醒。未來也能加入收藏、Telegram、App Push 與會員系統。
            </p>
          </div>
          <NotifyForm />
        </div>
      </section>

      <footer className="site-footer">
        <div className="site-shell footer-grid">
          <div>
            <p className="footer-title">Idol Calendar TW</p>
            <p>台灣演唱會資訊整理網站原型</p>
            <p>主題：K-pop 演唱會、搶票時間、熱門排行、通知提醒</p>
          </div>
          <div>
            <p className="footer-title">下一步</p>
            <p>部署到 Vercel 才能完整使用 Next.js 頁面、API 與未來資料庫功能。</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
