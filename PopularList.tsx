export default function PopularList({ events }: any) {
  const sorted = [...events].sort((a, b) => b.popularity - a.popularity);

  return (
    <div>
      <h2>🔥 熱門演唱會</h2>
      {sorted.slice(0, 3).map((event: any, i: number) => (
        <p key={event.id}>
          {i + 1}. {event.artist}（{Math.round(event.popularity)}）
        </p>
      ))}
    </div>
  );
}
