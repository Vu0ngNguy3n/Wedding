import type { Metadata } from "next";
import "./globals.css";
import BackgroundMusic from "./components/BackgroundMusic";

export const metadata: Metadata = {
  title: "Lê Quốc & Nguyễn Nhung Wedding site!",
  description:
    "Lê Quốc & Nguyễn Nhung - Our wedding date: 2025-10-26 | Họ chọn nắm tay nhau, không phải vì giống nhau hoàn toàn – mà vì bên nhau, họ là phiên bản tốt hơn của chính mình.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="vi">
        <body className="overflow-x-hidden">
          <BackgroundMusic />
          {children}
        </body>
      </html>
    </>
  );
}
