import EventCard from "@/components/EventCard";
import PopularList from "@/components/PopularList";

async function getEvents() {
  const res = await fetch("http://localhost:3000/api/events");
  return res.json();
}

export default async function Home() {
  const events = await getEvents();

  return (
    <main style={{ padding: 20 }}>
      <h1>🎤 演唱會行事曆</h1>

      <PopularList events={events} />

      <h2>全部活動</h2>
      {events.map((event: any) => (
        <EventCard key={event.id} event={event} />
      ))}
    </main>
  );
}
