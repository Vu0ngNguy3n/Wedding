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
          <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
            <a
              href="#donate"
              className="relative bg-[#DF4758] text-white p-3 rounded-full shadow-lg hover:bg-[#b18c85] transition group shake"
            >
              <img
                src="/images/money_bag.png"
                alt="Mừng cưới"
                className="w-4 h-4"
              />
              <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 whitespace-nowrap bg-[#DF4758] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                Mừng cưới
              </span>
            </a>
            <BackgroundMusic />
          </div>

          {children}
        </body>
      </html>
    </>
  );
}
