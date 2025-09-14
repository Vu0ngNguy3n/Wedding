import { Redis } from "@upstash/redis";
import { NextResponse } from "next/server";

// Khởi tạo Redis từ env
const redis = Redis.fromEnv();

type Wish = { name: string; message: string };

export async function GET() {
  const wishes = (await redis.get<Wish[]>("wishes")) || [];
  return NextResponse.json(wishes);
}

export async function POST(req: Request) {
  const { name, message } = await req.json();

  if (!name || !message) {
    return NextResponse.json({ error: "Thiếu thông tin" }, { status: 400 });
  }

  // Lấy danh sách hiện tại từ Redis
  const wishes = (await redis.get<Wish[]>("wishes")) || [];
  wishes.unshift({ name, message });

  // Lưu lại
  await redis.set("wishes", wishes);

  return NextResponse.json({ success: true });
}
