import { ConcertEvent } from "@/types";

export const concertEvents: ConcertEvent[] = [
  {
    id: "tw-blackpink-2026-kaohsiung",
    slug: "blackpink-deadline-kaohsiung-2026",
    title: "BLACKPINK WORLD TOUR <DEADLINE> IN KAOHSIUNG",
    artist: {
      name: "BLACKPINK",
      fandom: "BLINK",
      genre: "K-POP",
      image:
        "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80",
    },
    venue: "高雄國家體育場",
    city: "高雄",
    startDate: "2026-07-18T19:30:00+08:00",
    endDate: "2026-07-19T22:00:00+08:00",
    source: "Live Nation Taiwan",
    sourceType: "scraped",
    tickets: [
      {
        saleLabel: "BLINK Membership 預售",
        saleAt: "2026-05-16T11:00:00+08:00",
        url: "https://example.com/tickets/blackpink"
      },
      {
        saleLabel: "全面開賣",
        saleAt: "2026-05-18T12:00:00+08:00",
        url: "https://example.com/tickets/blackpink/general"
      }
    ],
    tags: ["女團", "世界巡演", "高雄", "熱門"],
    popularityScore: 98,
    summary: "兩日高雄世運開唱，含會員預售與一般售票提醒。",
    description:
      "整合台灣站演出日期、售票分流、場館與票務網址，方便粉絲快速追蹤行程。",
    lineupHighlights: ["Pink Venom", "Shut Down", "Solo stages"]
  },
  {
    id: "tw-seventeen-2026-taipei",
    slug: "seventeen-right-here-taipei-2026",
    title: "SEVENTEEN [RIGHT HERE] WORLD TOUR IN TAIPEI",
    artist: {
      name: "SEVENTEEN",
      fandom: "CARAT",
      genre: "K-POP",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80",
    },
    venue: "台北大巨蛋",
    city: "台北",
    startDate: "2026-06-06T18:00:00+08:00",
    endDate: "2026-06-07T21:30:00+08:00",
    source: "拓元售票 / 主辦公告",
    sourceType: "api",
    tickets: [
      {
        saleLabel: "CARAT 優先購",
        saleAt: "2026-04-28T13:00:00+08:00",
        url: "https://example.com/tickets/seventeen"
      },
      {
        saleLabel: "一般售票",
        saleAt: "2026-04-30T12:00:00+08:00",
        url: "https://example.com/tickets/seventeen/general"
      }
    ],
    tags: ["男團", "台北", "大巨蛋", "優先購"],
    popularityScore: 95,
    summary: "台北大巨蛋雙場，適合做行事曆追蹤與售票提醒。",
    description:
      "可延伸串接會員驗證與票價資訊，未來也能顯示座位區域與票務倒數。",
    lineupHighlights: ["Super", "HOT", "Very Nice"]
  },
  {
    id: "tw-aespa-2026-taichung",
    slug: "aespa-synk-taichung-2026",
    title: "aespa LIVE TOUR : SYNK PARALLEL LINE IN TAICHUNG",
    artist: {
      name: "aespa",
      fandom: "MY",
      genre: "K-POP",
      image:
        "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80",
    },
    venue: "台中國際展演館",
    city: "台中",
    startDate: "2026-08-22T19:00:00+08:00",
    endDate: "2026-08-22T22:00:00+08:00",
    source: "主辦單位官網",
    sourceType: "scraped",
    tickets: [
      {
        saleLabel: "MY Presale",
        saleAt: "2026-06-20T11:00:00+08:00",
        url: "https://example.com/tickets/aespa"
      },
      {
        saleLabel: "一般售票",
        saleAt: "2026-06-22T11:00:00+08:00",
        url: "https://example.com/tickets/aespa/general"
      }
    ],
    tags: ["女團", "台中", "新場館"],
    popularityScore: 87,
    summary: "單日台中場，票量較少，通知功能很重要。",
    description:
      "介面可顯示搶票時間軸、票務連結、是否已收藏，以及熱門度指標。",
    lineupHighlights: ["Drama", "Next Level", "Spicy"]
  },
  {
    id: "tw-day6-2026-taipei",
    slug: "day6-forever-young-taipei-2026",
    title: "DAY6 3RD WORLD TOUR <FOREVER YOUNG> IN TAIPEI",
    artist: {
      name: "DAY6",
      fandom: "My Day",
      genre: "K-POP",
      image:
        "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1200&q=80",
    },
    venue: "林口體育館",
    city: "新北",
    startDate: "2026-05-24T18:00:00+08:00",
    endDate: "2026-05-24T21:00:00+08:00",
    source: "KKTIX / 主辦公告",
    sourceType: "manual",
    tickets: [
      {
        saleLabel: "會員預購",
        saleAt: "2026-04-21T12:00:00+08:00",
        url: "https://example.com/tickets/day6"
      },
      {
        saleLabel: "全面開賣",
        saleAt: "2026-04-23T12:00:00+08:00",
        url: "https://example.com/tickets/day6/general"
      }
    ],
    tags: ["樂團", "新北", "KKTIX"],
    popularityScore: 82,
    summary: "適合展示不同票務平台來源如何整合成同一筆活動。",
    description:
      "此筆資料示範來源可為人工校對，和爬蟲或 API 取得的資料並存。",
    lineupHighlights: ["Time of Our Life", "You Were Beautiful", "Welcome to the Show"]
  }
];

export const getAllEvents = () =>
  [...concertEvents].sort(
    (a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
  );

export const getTopRankedEvents = () =>
  [...concertEvents].sort((a, b) => b.popularityScore - a.popularityScore).slice(0, 5);

export const getEventBySlug = (slug: string) =>
  concertEvents.find((event) => event.slug === slug);

export const searchEvents = (query: string) => {
  const keyword = query.trim().toLowerCase();
  if (!keyword) {
    return getAllEvents();
  }

  return getAllEvents().filter((event) =>
    [event.title, event.artist.name, event.city, event.venue, ...event.tags]
      .join(" ")
      .toLowerCase()
      .includes(keyword)
  );
};
