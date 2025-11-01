"use client";
import AnimatedSection from "@/app/components/AnimatedSection";
import React from "react";

const DonateSection = () => {
  const accounts = [
    {
      title: "Mừng cưới đến chú rể",
      bank: "Vietinbank",
      name: "Hoàng Quốc Hùng",
      number: "100025021999",
      qr: "/images/bank/trang.png", // đường dẫn QR code
    },
    {
      title: "Mừng cưới đến cô dâu",
      bank: "Vietinbank",
      name: "Võ Thùy Trang",
      number: "9336154201",
      qr: "/images/bank/trang.png", // đường dẫn QR code
    },
  ];

  return (
    <section
      id="donate"
      className="py-10 lg:py-20 text-[#48332c] bg-[#f9f5f2] relative font-comfortaa overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div
            className="h-[59px] w-[126px] bg-no-repeat bg-center bg-cover mx-auto mb-4"
            style={{
              backgroundImage: "url(/images/sec-title-flower.png)",
            }}
          ></div>
          <h2 className="text-3xl md:text-4xl font-dancing font-bold mb-3 text-gray-800">
            Hộp mừng cưới
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Chúng tôi rất biết ơn sự hiện diện và tình cảm của bạn trong ngày
            đặc biệt.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto ">
          {accounts.map((acc, idx) => (
            <AnimatedSection
              key={idx}
              animationType={idx % 2 === 0 ? "slide-in-left" : "slide-in-right"}
              className="flex-1"
            >
              <div className="border-2 border-[#d2bdb7] p-6 lg:p-10 shadow-lg w-full flex flex-col items-center gap-4 bg-white rounded-lg hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold">{acc.title}</h3>
                <img
                  src={acc.qr}
                  alt="QR code"
                  className="w-80 h-80 object-contain border border-gray-300 rounded-lg p-3"
                />
                <div className="text-center space-y-1 text-sm ld:text-lg">
                  <p>
                    Ngân hàng: <strong>{acc.bank}</strong>
                  </p>
                  <p>
                    Tên tài khoản: <strong>{acc.name}</strong>
                  </p>
                  <p>
                    Số tài khoản: <strong>{acc.number}</strong>
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
