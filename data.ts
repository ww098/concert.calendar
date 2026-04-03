export const events = [
  {
    id: "1",
    artist: "IVE",
    event_name: "IVE THE 1ST WORLD TOUR",
    date: "2026-06-10",
    city: "台北",
    venue: "林口體育館",
    ticket_sale_time: "2026-04-10 12:00",
    ticket_url: "https://kktix.com",
    views: 1200,
    favorites: 300,
    search: 500
  },
  {
    id: "2",
    artist: "SEVENTEEN",
    event_name: "FOLLOW AGAIN TOUR",
    date: "2026-07-01",
    city: "高雄",
    venue: "世運主場館",
    ticket_sale_time: "2026-04-20 13:00",
    ticket_url: "https://tixcraft.com",
    views: 2000,
    favorites: 800,
    search: 900
  }
];

// 熱門計算
export function calculatePopularity(event: any) {
  return event.favorites * 0.5 + event.views * 0.3 + event.search * 0.2;
}
