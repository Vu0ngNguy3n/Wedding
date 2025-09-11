"use client";

import AnimatedSection from "@/app/components/AnimatedSection";
import React, { useState, useEffect } from "react";

const InvitationSection = () => {
  const weddingDate = new Date("2025-10-26T11:00:00"); // giống hình

  const calculateTimeLeft = () => {
    const difference = +weddingDate - +new Date();
    let timeLeft = {} as {
      days: number;
      hours: number;
      minutes: number;
      seconds: number;
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="invitation"
      className="py-20 lg:py-30 text-[#48332c] relative font-comfortaa"
      style={{
        backgroundImage: "url(/images/bg.png)",
      }}
    >
      <div
        className="w-[150] h-[281] lg:w-[220] lg:h-[414] absolute left-0 -top-5 bg-no-repeat bg-center bg-cover z-1"
        style={{
          backgroundImage: "url(/images/invitation-left-img.png)",
        }}
      ></div>
      <div
        className="w-[400] h-[580] absolute bottom-5 right-0 z-1"
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
            <h2 className="text-5xl font-great-vibes italic mb-2">
              Save the Date
            </h2>
            <p className="text-gray-600 text-sm">For the wedding of</p>
            <span className="text-3xl font-dancing font-bold text-[#202A41] my-2">
              Lê Quốc & Nguyễn Nhung
            </span>
            <p className="text-gray-600 mb-6">
              Một lời chúc của bạn chắc chắn sẽ làm cho đám cưới của chúng tôi
              có thêm một niềm hạnh phúc!
            </p>
            <button className="bg-[#b18c85] text-white px-6 py-3 rounded shadow hover:bg-[#48332c] transition">
              Gửi lời chúc →
            </button>
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
                              <span
                                className={`inline-block w-7 h-7 leading-7 rounded-full ${
                                  day === 26
                                    ? "bg-[#b18c85] text-white font-bold"
                                    : ""
                                }`}
                              >
                                {day}
                              </span>
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
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold">
                  {timeLeft.days ?? "00"}
                </span>
                <span className="text-sm">Ngày</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold">
                  {timeLeft.hours ?? "00"}
                </span>
                <span className="text-sm">Giờ</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold">
                  {timeLeft.minutes ?? "00"}
                </span>
                <span className="text-sm">Phút</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold">
                  {timeLeft.seconds ?? "00"}
                </span>
                <span className="text-sm">Giây</span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default InvitationSection;
