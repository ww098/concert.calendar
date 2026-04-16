import Link from "next/link";

export function Header() {
  return (
    <header className="site-header">
      <div className="site-shell nav-shell">
        <Link className="brand" href="/">
          <div className="brand-mark">IC</div>
          <div>
            <span className="brand-kicker">IDOL CALENDAR TAIWAN</span>
            <strong>台灣演唱會行事曆</strong>
          </div>
        </Link>
        <nav className="main-nav" aria-label="主導覽">
          <a href="#calendar">演唱會行事曆</a>
          <a href="#ranking">熱門排行</a>
          <a href="#automation">自動整理</a>
          <a href="#notify">通知設定</a>
        </nav>
      </div>
    </header>
  );
}
