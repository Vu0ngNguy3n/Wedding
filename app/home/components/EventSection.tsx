"use client";
import React from "react";
import { AddToCalendarButton, atcb_action } from "add-to-calendar-button-react";

const EventSection = () => {
  const events = [
    {
      type: "Tiệc cưới nhà gái",
      datetime: "2025-11-13T11:15:00",
      endtime: "2025-11-13T13:00:00",
      location: "TT Sự kiện tiệc cưới Tuấn Anh",
      address: "Số 186A - Đ. Vạn Lộc - Khối 6 Nghi Tân - Cửa Lò - Nghệ An",
      googleMaps: "https://maps.app.goo.gl/bDnCtnEtSRQbxnPF7",
      image: "/images/event/ev5.jpg",
    },
    {
      type: "Tiệc cưới nhà trai",
      datetime: "2025-11-16T11:00:00",
      endtime: "2025-11-16T13:00:00",
      location: "Khách sạn Mường Thanh Cửa Lò",
      address: "Đường Bình Minh, Cửa Lò, Nghệ An",
      googleMaps: "https://maps.app.goo.gl/cywDLhceMYmb8He48",
      image: "/images/event/ev5.jpg",
    },
  ];

  return (
    <section id="events" className="py-16 sm:py-20 bg-[#f9f5f2]">
      <div className="container mx-auto px-4 text-center">
        <div
          className="h-[59px] w-[126px] bg-no-repeat bg-center bg-cover mx-auto"
          style={{
            backgroundImage: "url(/images/sec-title-flower.png)",
          }}
        ></div>
        <h2 className="text-4xl font-dancing font-bold text-[#48332c] mb-2">
          Sự kiện cưới
        </h2>
        <p className="text-gray-600 mb-12 italic text-sm sm:text-base">
          ...tình yêu không phải là nhìn chằm chằm vào nhau, mà là nhìn cùng về
          một hướng...
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg flex flex-col items-center hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={event.image}
                alt={event.type}
                className="w-full h-56 sm:h-64 object-cover rounded-xl mb-4"
              />
              <h3 className="text-lg sm:text-xl font-bold text-[#48332c] mb-2 text-center">
                {event.type}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base mb-1">
                {new Date(event.datetime).toLocaleString("vi-VN")}
              </p>
              <p className="text-gray-700 font-semibold text-sm sm:text-base text-center">
                {event.location}
              </p>
              <p className="text-gray-500 italic text-xs sm:text-sm mb-4 text-center">
                {event.address}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <button
                  onClick={() =>
                    atcb_action({
                      name: event.type,
                      startDate: event.datetime.split("T")[0],
                      startTime: event.datetime.split("T")[1],
                      endDate: event.endtime.split("T")[0],
                      endTime: event.endtime.split("T")[1],
                      location: `${event.location}, ${event.address}`,
                      options: [
                        "Apple",
                        "Google",
                        "iCal",
                        "Microsoft365",
                        "Outlook.com",
                        "Yahoo",
                      ],
                      language: "vi",
                    })
                  }
                  className="flex-1 px-4 py-2 border border-[#c19a9a] text-[#48332c] rounded-full hover:bg-[#48332c] hover:text-white transition-colors text-center"
                >
                  Thêm vào lịch
                </button>
                <a
                  href={event.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-2 border border-[#c19a9a] text-[#48332c] rounded-full hover:bg-[#48332c] hover:text-white transition-colors text-center"
                >
                  Xem bản đồ
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventSection;
