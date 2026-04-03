import { events } from "@/lib/data";

export default function EventDetail({ params }: any) {
  const event = events.find(e => e.id === params.id);

  if (!event) return <p>找不到活動</p>;

  return (
    <div style={{ padding: 20 }}>
      <h1>{event.artist}</h1>
      <h2>{event.event_name}</h2>

      <p>📅 {event.date}</p>
      <p>📍 {event.venue}</p>
      <p>🎟️ 搶票時間：{event.ticket_sale_time}</p>

      <a href={event.ticket_url} target="_blank">
        前往購票
      </a>
    </div>
  );
}
