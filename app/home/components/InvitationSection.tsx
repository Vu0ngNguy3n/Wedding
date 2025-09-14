"use client";

import AnimatedSection from "@/app/components/AnimatedSection";
import React, { useState, useEffect } from "react";

const InvitationSection = () => {
  const weddingDate = new Date("2025-10-26T11:00:00"); // giống hình

  const calculateTimeLeft = () => {
    const difference = +weddingDate - +new Date();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  // ⚡ Ban đầu null để SSR/CSR khớp
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft()); // tính lần đầu sau khi client mount
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="invitation"
      className="py-20 lg:py-30 text-[#48332c] relative font-comfortaa overflow-x-hidden"
      style={{
        backgroundImage: "url(/images/bg.png)",
      }}
    >
      <div
        className="w-[150] h-[281] lg:w-[220] lg:h-[414] absolute left-0 -top-5 bg-no-repeat bg-center bg-cover z-1 pointer-events-none"
        style={{
          backgroundImage: "url(/images/invitation-left-img.png)",
        }}
      ></div>
      <div
        className="w-[400] h-[580] absolute bottom-5 right-0 z-1 pointer-events-none"
        style={{
          backgroundImage: "url(/images/invitation-right-image.png)",
        }}
      ></div>
      <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row gap-8">
        <AnimatedSection
          animationType="slide-in-left"
          className="flex-1 flex p-5 lg:p-15 bg-white w-full"
        >
          {/* Left box */}
          <div className="border-2 border-[#d2bdb7] p-4 lg:p-8 flex flex-col justify-center shadow-lg text-center gap-3 h-full">
            <h2 className="text-3xl lg:text-5xl font-great-vibes italic mb-2">
              Save the Date
            </h2>
            <p className="text-gray-600 text-sm">For the wedding of</p>
            <span className="text-2xl lg:text-3xl font-dancing font-bold text-[#202A41] my-2">
              Lê Quốc & Nguyễn Nhung
            </span>
            <p className="text-gray-600 mb-6 text-sm lg:text-md">
              Một lời chúc của bạn chắc chắn sẽ làm cho đám cưới của chúng tôi
              có thêm một niềm hạnh phúc!
            </p>
            <a
              href="#wishes"
              className="px-8 py-3 bg-[#c19a9a] text-white font-semibold rounded-md hover:bg-[#a97f7f] transition flex items-center justify-center gap-2 mx-auto"
            >
              Gửi lời chúc →
            </a>
          </div>
        </AnimatedSection>
        <AnimatedSection
          animationType="slide-in-right"
          className="flex-1 flex p-5 lg:p-15 bg-white w-full"
        >
          {/* Right box */}
          <div className="border-2 border-[#d2bdb7] p-4 lg:p-8 shadow-lg flex flex-col justify-between w-full h-full">
            {/* Calendar mockup */}
            <div className="text-center mb-6">
              <h3 className="font-bold mb-2">OCTOBER / 2025</h3>
              <table className="w-full text-sm text-gray-700">
                <thead>
                  <tr className="border-b">
                    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                      (d) => (
                        <th key={d} className="py-1 font-medium">
                          {d}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody>
                  {[...Array(5)].map((_, row) => (
                    <tr key={row} className="text-center">
                      {[...Array(7)].map((_, col) => {
                        const day = row * 7 + col - 2; // adjust offset
                        return (
                          <td key={col} className="py-1">
                            {day > 0 && day <= 31 ? (
                              <div
                                className={`relative inline-flex items-center justify-center w-8 h-8 ${
                                  day === 26 ? "text-white font-bold" : ""
                                }`}
                              >
                                <svg
                                  viewBox="0 0 24 24"
                                  className={`absolute w-8 h-8 ${
                                    day === 26
                                      ? "fill-[#b18c85]"
                                      : "fill-transparent"
                                  }`}
                                >
                                  <path
                                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
             2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09 
             C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 
             22 8.5c0 3.78-3.4 6.86-8.55 
             11.54L12 21.35z"
                                  />
                                </svg>
                                <span className="relative z-10">{day}</span>
                              </div>
                            ) : (
                              ""
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Countdown */}
            <div className="flex justify-center gap-6 font-dancing text-[#b18c85]">
              {timeLeft ? (
                <>
                  <div className="flex flex-col items-center">
                    <span className="text-3xl font-bold">{timeLeft.days}</span>
                    <span className="text-sm">Ngày</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-3xl font-bold">{timeLeft.hours}</span>
                    <span className="text-sm">Giờ</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-3xl font-bold">
                      {timeLeft.minutes}
                    </span>
                    <span className="text-sm">Phút</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-3xl font-bold">
                      {timeLeft.seconds}
                    </span>
                    <span className="text-sm">Giây</span>
                  </div>
                </>
              ) : (
                <span className="text-gray-400">Đang tải...</span>
              )}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default InvitationSection;
