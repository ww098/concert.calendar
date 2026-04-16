import Link from "next/link";

import { ConcertEvent } from "@/types";
import { formatDateTime } from "@/lib/utils";

type Props = {
  event: ConcertEvent;
};

export function EventCard({ event }: Props) {
  return (
    <article className="notice-card">
      <div className="event-card__meta">
        <span className="pill">{event.artist.genre}</span>
        <span className="muted">{event.city}</span>
      </div>
      <h3>{event.title}</h3>
      <p>{event.summary}</p>
      <dl className="event-card__details">
        <div>
          <dt>演出時間</dt>
          <dd>{formatDateTime(event.startDate)}</dd>
        </div>
        <div>
          <dt>場館</dt>
          <dd>{event.venue}</dd>
        </div>
        <div>
          <dt>最近搶票</dt>
          <dd>{formatDateTime(event.tickets[0].saleAt)}</dd>
        </div>
      </dl>
      <div className="event-card__actions">
        <a className="text-link" href={event.tickets[0].url} target="_blank" rel="noreferrer">
          前往售票
        </a>
        <Link className="text-link strong-link" href={`/events/${event.slug}`}>
          查看詳情
        </Link>
      </div>
    </article>
  );
}
