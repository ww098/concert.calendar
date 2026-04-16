import { notFound } from "next/navigation";

import { Header } from "@/components/Header";
import { getEventBySlug } from "@/lib/data";
import { formatDate, formatDateTime } from "@/lib/utils";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function EventDetailPage({ params }: Props) {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  return (
    <main>
      <Header />
      <section className="detail-hero">
        <div className="site-shell detail-hero__content">
          <div>
            <span className="pill">{event.artist.genre}</span>
            <h1>{event.title}</h1>
            <p>{event.description}</p>
          </div>
          <div className="detail-panel">
            <h2>{event.artist.name}</h2>
            <p>{event.venue}</p>
            <p>{formatDate(event.startDate)}</p>
          </div>
        </div>
      </section>

      <section className="site-shell detail-layout">
        <article className="detail-card">
          <h2>活動資訊</h2>
          <dl className="detail-list">
            <div>
              <dt>藝人</dt>
              <dd>{event.artist.name}</dd>
            </div>
            <div>
              <dt>粉絲名</dt>
              <dd>{event.artist.fandom}</dd>
            </div>
            <div>
              <dt>城市</dt>
              <dd>{event.city}</dd>
            </div>
            <div>
              <dt>資料來源</dt>
              <dd>
                {event.source} / {event.sourceType}
              </dd>
            </div>
          </dl>
        </article>

        <article className="detail-card">
          <h2>搶票時間與網址</h2>
          <div className="ticket-list">
            {event.tickets.map((ticket) => (
              <div className="ticket-row" key={`${event.id}-${ticket.saleLabel}`}>
                <div>
                  <strong>{ticket.saleLabel}</strong>
                  <p>{formatDateTime(ticket.saleAt)}</p>
                </div>
                <a className="primary-button" href={ticket.url} target="_blank" rel="noreferrer">
                  前往頁面
                </a>
              </div>
            ))}
          </div>
        </article>

        <article className="detail-card">
          <h2>亮點曲目</h2>
          <div className="tag-group">
            {event.lineupHighlights.map((item) => (
              <span className="pill pill--soft" key={item}>
                {item}
              </span>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
}
