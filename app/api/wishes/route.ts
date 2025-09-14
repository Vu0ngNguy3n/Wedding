import { NextResponse } from "next/server";
import db, { Wish } from "@/lib/db";

export async function GET() {
  const rows = db
    .prepare<[], Wish>("SELECT * FROM wishes ORDER BY id DESC")
    .all();
  return NextResponse.json(rows);
}

export async function POST(req: Request) {
  const { name, message } = await req.json();

  if (!name || !message) {
    return NextResponse.json({ error: "Thiếu thông tin" }, { status: 400 });
  }

  db.prepare("INSERT INTO wishes (name, message) VALUES (?, ?)").run(
    name,
    message
  );

  return NextResponse.json({ success: true });
}
