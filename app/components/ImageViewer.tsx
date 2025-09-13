"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Keyboard,
  FreeMode,
  Thumbs,
  Autoplay,
  Zoom,
} from "swiper/modules";
import {
  FaTimes,
  FaPlay,
  FaPause,
  FaSearchPlus,
  FaSearchMinus,
} from "react-icons/fa";
import { motion } from "framer-motion";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "swiper/css/zoom";

type ImageViewerProps = {
  images: string[];
  currentIndex: number;
  onClose: () => void;
};

const AUTOPLAY_DELAY = 4000; // 4s

const animations = [
  {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
  },
  {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
  },
  {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
  },
  {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
  },
  {
    initial: { opacity: 0, rotate: -15 },
    animate: { opacity: 1, rotate: 0 },
  },
];

const ImageViewer: React.FC<ImageViewerProps> = ({
  images,
  currentIndex,
  onClose,
}) => {
  const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progressKey, setProgressKey] = useState(0); // reset progress mỗi khi slide đổi

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  if (images.length === 0) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 flex justify-between items-center px-6 py-3 z-50 text-white">
        {/* Index */}
        <span className="text-sm">
          {mainSwiper
            ? `${mainSwiper.activeIndex + 1} / ${images.length}`
            : `${currentIndex + 1} / ${images.length}`}
        </span>

        {/* Progress bar */}
        {isPlaying && (
          <motion.div
            key={progressKey}
            className="absolute top-0 left-0 right-0 h-1 bg-gray-700 overflow-hidden"
          >
            <motion.div
              className="h-1 bg-blue-500"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: AUTOPLAY_DELAY / 1000, ease: "linear" }}
            />
          </motion.div>
        )}

        {/* Buttons */}
        <div className="flex items-center gap-5 text-xl">
          {/* Play / Pause */}
          <button
            onClick={() => {
              if (!mainSwiper) return;
              if (isPlaying) {
                mainSwiper.autoplay?.stop();
              } else {
                mainSwiper.autoplay?.start();
                setProgressKey((k) => k + 1); // reset progress
              }
              setIsPlaying(!isPlaying);
            }}
            className="hover:text-gray-300 transition"
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>

          {/* Zoom In */}
          <button
            onClick={() => mainSwiper?.zoom?.in()}
            className="hover:text-gray-300 transition"
          >
            <FaSearchPlus />
          </button>

          {/* Zoom Out */}
          <button
            onClick={() => mainSwiper?.zoom?.out()}
            className="hover:text-gray-300 transition"
          >
            <FaSearchMinus />
          </button>

          {/* Close */}
          <button onClick={onClose} className="hover:text-gray-300 transition">
            <FaTimes />
          </button>
        </div>
      </div>

      {/* Main Swiper */}
      <Swiper
        modules={[Pagination, Keyboard, FreeMode, Thumbs, Autoplay, Zoom]}
        keyboard={{ enabled: true }}
        initialSlide={currentIndex}
        thumbs={{ swiper: thumbsSwiper }}
        onSwiper={setMainSwiper}
        onSlideChange={(swiper) => {
          setProgressKey((k) => k + 1); // reset progress
          if (thumbsSwiper) {
            thumbsSwiper.slideTo(swiper.activeIndex, 300); // auto center thumb
          }
        }} // reset progress khi đổi slide
        autoplay={{
          delay: AUTOPLAY_DELAY,
          disableOnInteraction: false,
        }}
        zoom={{ maxRatio: 3 }}
        className="w-full max-w-5xl flex-1 flex items-center"
      >
        {images.map((src, idx) => {
          // random animation cho mỗi lần mount slide
          const anim =
            animations[Math.floor(Math.random() * animations.length)];

          return (
            <SwiperSlide
              key={idx}
              className="flex justify-center items-center h-full w-full"
            >
              <div className="swiper-zoom-container flex justify-center items-center h-full w-full">
                <motion.img
                  key={idx + "-" + Math.random()} // ép remount để random lại khi slide hiển thị
                  src={src}
                  alt={`image-${idx}`}
                  initial={anim.initial}
                  animate={anim.animate}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-lg object-contain"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Thumbnails */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={6}
        freeMode
        watchSlidesProgress
        centeredSlides
        slideToClickedSlide={true}
        modules={[FreeMode, Thumbs]}
        className="w-full max-w-5xl mt-4"
        breakpoints={{
          0: { slidesPerView: 4 },
          640: { slidesPerView: 6 },
          1024: { slidesPerView: 8 },
        }}
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx} className="cursor-pointer">
            <img
              src={src}
              alt={`thumb-${idx}`}
              className="w-full h-20 object-cover rounded-md border-3 border-transparent transition-all duration-300"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Active thumbnail style */}
      <style jsx global>{`
        .swiper-slide-thumb-active img {
          border: 3px solid #d1d5dc;
          transform: scale(1.05);
          box-shadow: 0 0 10px rgba(236, 72, 153, 0.6);
        }
      `}</style>
    </motion.div>
  );
};

export default ImageViewer;
