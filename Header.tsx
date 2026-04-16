import Link from "next/link";

export function Header() {
  return (
    <header className="site-shell header">
      <Link className="brand" href="/">
        Idol Calendar TW
      </Link>
      <nav className="nav">
        <a href="#calendar">演唱會行事曆</a>
        <a href="#ranking">熱門排行</a>
        <a href="#notify">通知設定</a>
      </nav>
    </header>
  );
}
