import { NextRequest, NextResponse } from "next/server";

import { getAllEvents, searchEvents } from "@/lib/data";

export async function GET(request: NextRequest) {
  const keyword = request.nextUrl.searchParams.get("q");
  const events = keyword ? searchEvents(keyword) : getAllEvents();

  return NextResponse.json({
    total: events.length,
    events
  });
}
