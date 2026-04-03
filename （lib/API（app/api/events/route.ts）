import { NextResponse } from "next/server";
import { events, calculatePopularity } from "@/lib/data";

export async function GET() {
  const data = events.map(e => ({
    ...e,
    popularity: calculatePopularity(e)
  }));

  return NextResponse.json(data);
}
