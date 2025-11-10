"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroSection = () => {
  const bgImages = ["/images/hero/weddingImg01.jpg", "/images/hero/weddingImg.jpg"];
  return (
    <section
      id="home"
      className="relative w-full lg:h-[calc(100vh-149px)] h-[calc(100vh-129px)]"
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 px-4 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-6 w-full text-4xl md:text-7xl text-white flex flex-col lg:flex-row items-center gap-3 drop-shadow-lg pointer-events-none"
        >
          <span className="font-dancing flex-1  text-right">Quốc Hùng</span>
          <motion.div
            animate={{ scale: [1, 1.3, 1] }}
            transition={{
              repeat: Infinity,
              duration: 1.2,
              ease: "easeInOut",
            }}
          >
            <FaHeart className="text-pink-400 w-9 h-9" />
          </motion.div>
          <span className="font-dancing flex-1 text-left">Thùy Trang</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          className="pointer-events-none"
        >
          <span className="text-xs md:text-lg font-comfortaa text-white">
            16 Tháng 11 2025
          </span>
        </motion.div>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop
        className="h-full z-50"
      >
        {bgImages.map((url, index) => (
          <SwiperSlide>
            <div
              className="w-full h-full bg-cover bg-top"
              style={{
                backgroundImage: `url(${url})`,
              }}
            ></div>
          </SwiperSlide>
        ))}

        <div className="absolute inset-0 bg-black/30 pointer-events-none z-10"></div>
      </Swiper>
    </section>
  );
};

export default HeroSection;
