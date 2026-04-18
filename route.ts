import { NextResponse } from "next/server";

import { runMockSync } from "@/lib/scrapers";

export async function POST() {
  const result = await runMockSync();

  return NextResponse.json({
    success: true,
    result
  });
}
