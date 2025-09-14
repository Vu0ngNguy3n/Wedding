import { Redis } from "@upstash/redis";
import { NextResponse } from "next/server";

// Khởi tạo Redis từ env
const redis = Redis.fromEnv();

export async function GET() {
  // Xóa key "wishes" trong Redis
  await redis.del("wishes");

  return NextResponse.json({
    success: true,
    message: "Đã reset dữ liệu",
  });
}
