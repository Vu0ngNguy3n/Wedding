"use client";
import { motion } from "framer-motion";
import React from "react";

interface Stage {
  title: string;
  text: string;
}

const StorySection = () => {
  const defaultStages = [
    {
      title: "Gặp gỡ",
      text: "Hai người vô tình quen nhau chỉ từ một lần rep story. Ban đầu tưởng chỉ là một tương tác thoáng qua, nhưng từ đó lại nảy ra một sự tò mò đặc biệt.",
    },
    {
      title: "Thấu hiểu",
      text: "Từ những dòng tin nhắn ngắn ngủi, rồi dần thành những câu chuyện dài hơn. Cả hai chia sẻ công việc, ước mơ, cả niềm vui lẫn nỗi buồn, và nhận ra bên kia là một người biết lắng nghe thật sự.",
    },
    {
      title: "Gắn bó",
      text: "Mỗi ngày đều mong chờ một thông báo tin nhắn. Dần dần, thói quen nhỏ ấy trở thành một phần không thể thiếu, để rồi chỉ cần thiếu đi một lời hỏi thăm cũng thấy lòng trống trải.",
    },
    {
      title: "Hẹn ước",
      text: "Từ một lần rep story đến những tháng ngày trò chuyện, giờ đây họ mang trong tim mong ước được gặp nhau, nắm tay nhau ngoài đời và cùng viết tiếp câu chuyện chưa có hồi kết.",
    },
  ];

  return (
    <section id="couple" className="py-10 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div
            className="h-[59px] w-[126px] bg-no-repeat bg-center bg-cover mx-auto"
            style={{
              backgroundImage: "url(/images/sec-title-flower.png)",
            }}
          ></div>
          <h2 className="text-4xl font-dancing font-bold mb-4">
            Chuyện tình yêu
          </h2>
          <p className="text-gray-600">
            Tình yêu không chỉ là một danh từ - nó là một động từ; nó còn hơn cả
            một cảm giác - đó là sự quan tâm, chia sẻ, giúp đỡ, hy sinh.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* line timeline */}
          <div className="absolute left-1/2 top-0 h-full w-1 bg-pink-200 transform -translate-x-1/2"></div>

          <div className="space-y-16">
            {defaultStages.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center gap-6 ${
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Dot */}
                <div className="absolute left-1/2 top-4 transform -translate-x-1/2">
                  <div className="w-5 h-5 bg-pink-500 rounded-full border-4 border-white shadow"></div>
                </div>

                {/* Nội dung */}
                <div className="w-full md:w-5/12 bg-white p-6 rounded-xl shadow-md border">
                  <h3 className="text-lg font-semibold text-pink-600">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-gray-600 text-sm">{s.text}</p>
                </div>

                {/* Chừa chỗ đối xứng (nếu cần sau này thêm ảnh) */}
                <div className="hidden md:block md:w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
