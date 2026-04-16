import Link from "next/link";

import { ConcertEvent } from "@/types";

type Props = {
  event: ConcertEvent;
  rank: number;
};

export function RankingCard({ event, rank }: Props) {
  return (
    <article className="link-card ranking-card">
      <div className="ranking-card__top">
        <span className="ranking-card__index">#{rank}</span>
        <span className="pill pill--soft">{event.artist.fandom}</span>
      </div>
      <h3>{event.artist.name}</h3>
      <p>{event.title}</p>
      <div className="progress-track">
        <div className="progress-value" style={{ width: `${event.popularityScore}%` }} />
      </div>
      <small>熱度指數 {event.popularityScore}/100</small>
      <Link className="text-link strong-link" href={`/events/${event.slug}`}>
        查看活動
      </Link>
    </article>
  );
}
