import React from "react";

const EventSection = () => {
  const events = [
    {
      type: "Tiệc nhà gái",
      date: "Ngày 25 tháng 10 năm 2025",
      time: "18:00 (Thứ Sáu)",
      location: "Nhà hàng Tiệc Cưới Bến Xưa",
      address: "391/11 Bến Xưa, Q.12, TP.HCM",
      googleMaps: "https://maps.app.goo.gl/9uT9wD5t3sF8V7tX8",
      image:
        "https://cdn.biihappy.com/ziiweb/website/68a8232f1d37106a65000d60/f8753d085600d11c05d761614915a31b.jpeg",
    },
    {
      type: "Tiệc nhà trai",
      date: "Ngày 26 tháng 10 năm 2025",
      time: "18:00 (Thứ Bảy)",
      location: "Nhà hàng Tiệc Cưới Bến Xưa",
      address: "391/11 Bến Xưa, Q.12, TP.HCM",
      googleMaps: "https://maps.app.goo.gl/9uT9wD5t3sF8V7tX8",
      image:
        "https://cdn.biihappy.com/ziiweb/website/68a8232f1d37106a65000d60/f8753d085600d11c05d761614915a31b.jpeg",
    },
  ];

  return (
    <section id="events" className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-serif font-bold text-[#48332c] mb-4">
          Sự kiện cưới
        </h2>
        <p className="text-gray-600 mb-12">
          Hãy đến và chia sẻ niềm vui với chúng tôi.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <h3 className="text-3xl font-bold font-serif text-[#48332c] mb-2">
                {event.type}
              </h3>
              <p className="text-lg text-gray-700 font-semibold">
                {event.date}
              </p>
              <p className="text-lg text-gray-700">{event.time}</p>
              <p className="text-lg text-gray-700 mt-4 font-bold">
                {event.location}
              </p>
              <p className="text-gray-500 italic mb-4">{event.address}</p>
              <a
                href={event.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-[#48332c] text-white py-2 px-6 rounded-full hover:bg-white hover:text-[#48332c] border border-[#48332c] transition-colors"
              >
                Xem bản đồ
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventSection;
