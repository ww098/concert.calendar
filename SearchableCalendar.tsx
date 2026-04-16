"use client";

import { startTransition, useDeferredValue, useEffect, useState } from "react";

import { ConcertEvent } from "@/types";
import { EventCard } from "@/components/EventCard";

type Props = {
  initialEvents: ConcertEvent[];
};

export function SearchableCalendar({ initialEvents }: Props) {
  const [query, setQuery] = useState("");
  const [events, setEvents] = useState(initialEvents);
  const [isLoading, setIsLoading] = useState(false);
  const deferredQuery = useDeferredValue(query);

  useEffect(() => {
    let ignore = false;

    async function fetchEvents() {
      setIsLoading(true);
      try {
        const params = new URLSearchParams();
        if (deferredQuery.trim()) {
          params.set("q", deferredQuery.trim());
        }

        const response = await fetch(`/api/events?${params.toString()}`);
        const result = await response.json();

        if (!ignore) {
          startTransition(() => {
            setEvents(result.events);
            setIsLoading(false);
          });
        }
      } catch {
        if (!ignore) {
          startTransition(() => {
            setEvents(initialEvents);
            setIsLoading(false);
          });
        }
      }
    }

    fetchEvents();

    return () => {
      ignore = true;
    };
  }, [deferredQuery]);

  return (
    <div className="calendar-stack">
      <div className="search-panel">
        <label htmlFor="search">搜尋藝人、城市、場館、關鍵字</label>
        <input
          id="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="例如：BLACKPINK / 台北 / 大巨蛋"
        />
        <span className="muted">{isLoading ? "查詢中..." : `找到 ${events.length} 筆活動`}</span>
      </div>
      <div className="event-grid">
        {events.map((event) => (
          <EventCard event={event} key={event.id} />
        ))}
      </div>
    </div>
  );
}
