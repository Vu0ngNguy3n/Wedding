// app/api/images/route.ts
import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET() {
  // Lấy path đến folder images trong public
  const imagesDir = path.join(process.cwd(), "public/images/gallery");

  // Đọc tất cả file trong folder
  const files = fs.readdirSync(imagesDir);

  // Lọc file ảnh (tuỳ chọn)
  const imageFiles = files.filter((file) =>
    /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(file)
  );

  // Tạo URL public
  const imageUrls = imageFiles.map((file) => `/images/gallery/${file}`);

  return NextResponse.json(imageUrls);
}
