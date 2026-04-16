import { NextResponse } from "next/server";

import { getEventBySlug } from "@/lib/data";

type Props = {
  params: {
    slug: string;
  };
};

export async function GET(_: Request, { params }: Props) {
  const { slug } = params;
  const event = getEventBySlug(slug);

  if (!event) {
    return NextResponse.json({ message: "Event not found" }, { status: 404 });
  }

  return NextResponse.json(event);
}
