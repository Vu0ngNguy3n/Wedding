import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

const filePath = path.join(process.cwd(), "data", "wishes.json");

export async function GET() {
  const data = fs.readFileSync(filePath, "utf-8");
  return NextResponse.json(JSON.parse(data));
}

export async function POST(req: Request) {
  const { name, message } = await req.json();

  if (!name || !message) {
    return NextResponse.json({ error: "Thiếu thông tin" }, { status: 400 });
  }

  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  data.unshift({ name, message });

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

  return NextResponse.json({ success: true });
}
