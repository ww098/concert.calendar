import Link from "next/link";

export default function EventCard({ event }: any) {
  return (
    <div style={{ border: "1px solid #ccc", padding: 10, margin: 10 }}>
      <h3>{event.artist}</h3>
      <p>{event.event_name}</p>
      <p>{event.date}｜{event.city}</p>

      <Link href={`/event/${event.id}`}>
        查看詳細
      </Link>
    </div>
  );
}
