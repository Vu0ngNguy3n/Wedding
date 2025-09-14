import Database from "better-sqlite3";
import path from "path";

// Đường dẫn đến file wishes.db trong thư mục /data
const dbPath = path.join(process.cwd(), "data", "wishes.db");

// Kết nối database
const db = new Database(dbPath);

// Tạo bảng nếu chưa tồn tại
db.prepare(
  `
  CREATE TABLE IF NOT EXISTS wishes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`
).run();

// Interface cho dữ liệu
export interface Wish {
  id: number;
  name: string;
  message: string;
  created_at: string;
}

export default db;
