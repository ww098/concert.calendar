export type Genre = "K-POP" | "J-POP" | "Mandopop" | "Western" | "Festival";

export type TicketInfo = {
  saleLabel: string;
  saleAt: string;
  url: string;
};

export type Artist = {
  name: string;
  fandom: string;
  genre: Genre;
  image: string;
};

export type ConcertEvent = {
  id: string;
  slug: string;
  title: string;
  artist: Artist;
  venue: string;
  city: string;
  startDate: string;
  endDate: string;
  source: string;
  sourceType: "scraped" | "api" | "manual";
  tickets: TicketInfo[];
  tags: string[];
  popularityScore: number;
  summary: string;
  description: string;
  lineupHighlights: string[];
};

export type Subscription = {
  name: string;
  email?: string;
  lineId?: string;
  favoriteArtists: string[];
  channels: Array<"email" | "line">;
};
