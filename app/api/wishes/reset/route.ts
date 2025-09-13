import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

const filePath = path.join(process.cwd(), "data", "wishes.json");

export async function GET() {
  try {
    // Reset về mảng rỗng, bạn có thể thay bằng dữ liệu mẫu nếu muốn
    fs.writeFileSync(filePath, JSON.stringify([], null, 2), "utf-8");

    return NextResponse.json({
      success: true,
      message: "Đã reset wishes.json",
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, error: "Reset thất bại" },
      { status: 500 }
    );
  }
}
