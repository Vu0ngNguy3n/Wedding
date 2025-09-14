import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function POST() {
  db.prepare("DELETE FROM wishes").run();
  return NextResponse.json({ success: true, message: "Đã reset dữ liệu" });
}
