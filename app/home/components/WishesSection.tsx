"use client";

import React, { useEffect, useState } from "react";
import AnimatedSection from "@/app/components/AnimatedSection";
import { AnimatePresence, motion } from "framer-motion";

const WishesSection = () => {
  const [wishes, setWishes] = useState<{ name: string; message: string }[]>([]);
  const [relation, setRelation] = useState("");
  // const [customRelation, setCustomRelation] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  // Load danh sách lời chúc
  useEffect(() => {
    fetch("/api/wishes")
      .then((res) => res.json())
      .then((data) => setWishes(data));
  }, []);

  // Gửi lời chúc
  const sendWish = async () => {
    // const finalRelation = relation === "Khác" ? customRelation : relation;
    // if (!finalRelation || !name || !message)
    //   return alert("Nhập đủ thông tin nhé!");

    // const finalName = `${finalRelation} ${name}`; // gộp quan hệ + tên

    await fetch("/api/wishes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, message }),
    });

    setRelation("");
    // setCustomRelation("");
    setName("");
    setMessage("");

    // Load lại danh sách
    const data = await fetch("/api/wishes").then((res) => res.json());
    setWishes(data);

    // Hiện modal cảm ơn
    setShowModal(true);
  };

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showModal]);

  return (
    <section
      id="wishes"
      className="py-10 lg:py-20 text-[#48332c] relative font-comfortaa overflow-hidden"
      style={{ backgroundImage: "url(/images/bg.png)" }}
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
            Sổ lưu bút
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Cảm ơn bạn rất nhiều vì đã gửi những lời chúc mừng tốt đẹp nhất đến
            đám cưới của chúng tôi!
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row gap-8">
        {/* Form box */}
        <AnimatedSection
          animationType="slide-in-left"
          className="flex-1 flex p-5 lg:p-10 bg-white w-full"
        >
          <div className="border-2 border-[#d2bdb7] p-6 lg:p-10 shadow-lg w-full flex flex-col justify-center gap-6">
            <h2 className="text-3xl lg:text-4xl font-dancing font-bold text-center text-[#202A41]">
              Gửi lời chúc
            </h2>
            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                sendWish();
              }}
            >
              {/* Quan hệ */}
              {/* <select
                className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c19a9a]"
                value={relation}
                onChange={(e) => setRelation(e.target.value)}
              >
                <option value="">Danh xưng*</option>
                <option value="Ông">Ông</option>
                <option value="Bà">Bà</option>
                <option value="Bố">Bố</option>
                <option value="Mẹ">Mẹ</option>
                <option value="Cô">Cô</option>
                <option value="Dì">Dì</option>
                <option value="Chú">Chú</option>
                <option value="Bác">Bác</option>
                <option value="Anh">Anh</option>
                <option value="Chị">Chị</option>
                <option value="Em">Em</option>
                <option value="Bạn">Bạn</option>
                <option value="Đồng nghiệp">Đồng nghiệp</option>
                <option value="Khác">Khác</option>
              </select> */}

              {/* Quan hệ khác */}
              {/* {relation === "Khác" && (
                <input
                  type="text"
                  placeholder="Nhập danh xưng của bạn*"
                  className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c19a9a]"
                  value={customRelation}
                  onChange={(e) => setCustomRelation(e.target.value)}
                />
              )} */}

              {/* Họ tên */}
              <input
                type="text"
                placeholder="Nhập họ tên*"
                className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c19a9a]"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              {/* Lời chúc */}
              <textarea
                placeholder="Nhập lời chúc của bạn*"
                rows={5}
                className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c19a9a]"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>

              {/* Submit */}
              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-3 bg-[#c19a9a] text-white font-semibold rounded-md hover:bg-[#a97f7f] transition flex items-center justify-center gap-2 mx-auto"
                >
                  Gửi lời chúc <span className="ml-2">➜</span>
                </button>
              </div>
            </form>
          </div>
        </AnimatedSection>

        {/* Wishes list */}
        <AnimatedSection
          animationType="slide-in-right"
          className="flex-1 flex p-5 lg:p-10 bg-white w-full"
        >
          <div className="border-2 border-[#d2bdb7] p-6 lg:p-10 shadow-lg w-full flex flex-col gap-4">
            <h2 className="text-3xl lg:text-4xl font-dancing font-bold text-center text-[#202A41]">
              Lời chúc đã gửi
            </h2>
            <div className="flex-1 overflow-y-auto max-h-[400px] pr-2 space-y-4">
              {wishes.length === 0 && (
                <p className="text-gray-500 text-center italic">
                  Chưa có lời chúc nào. Hãy là người đầu tiên nhé!
                </p>
              )}
              {wishes.map((w, i) => (
                <div
                  key={i}
                  className="bg-[#faf8f7] border border-[#e5d5d0] p-4 rounded-md shadow-sm"
                >
                  <p className="font-bold text-[#b18c85]">{w.name}:</p>
                  <p className="text-gray-700 mt-1">{w.message}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Modal cảm ơn */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gray-800/30 flex items-center justify-center z-50 px-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-white p-6 sm:p-8 rounded-lg shadow-xl w-full max-w-sm sm:max-w-md md:max-w-lg text-center"
            >
              <h3 className="text-xl sm:text-2xl font-dancing font-bold text-[#b18c85] mb-4">
                🎉 Cảm ơn bạn!
              </h3>
              <p className="text-sm sm:text-base text-gray-700 mb-6">
                Lời chúc của bạn đã được gửi thành công ❤️
              </p>
              <button
                onClick={() => setShowModal(false)}
                className="px-4 sm:px-6 py-2 bg-[#c19a9a] text-white font-semibold rounded-md hover:bg-[#a97f7f] transition"
              >
                Đóng
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default WishesSection;
