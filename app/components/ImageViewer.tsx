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

const ImageViewer: React.FC<ImageViewerProps> = ({
  images,
  currentIndex,
  onClose,
}) => {
  const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

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
      {/* Thanh trên cùng: index + control buttons */}
      <div className="absolute top-0 left-0 right-0 flex justify-between items-center px-6 py-3 z-50 text-white">
        {/* Số ảnh */}
        <span className="text-sm">
          {mainSwiper
            ? `${mainSwiper.activeIndex + 1} / ${images.length}`
            : `${currentIndex + 1} / ${images.length}`}
        </span>

        {/* Progress bar dưới thanh trên cùng */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gray-700">
          <div
            className="h-1 bg-blue-500 transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Nhóm nút */}
        <div className="flex items-center gap-5 text-xl">
          {/* Play / Pause */}
          <button
            onClick={() => {
              if (!mainSwiper) return;
              if (isPlaying) {
                mainSwiper.autoplay?.stop();
              } else {
                mainSwiper.autoplay?.start();
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

      {/* Swiper chính */}
      <Swiper
        modules={[Pagination, Keyboard, FreeMode, Thumbs, Autoplay, Zoom]}
        keyboard={{ enabled: true }}
        initialSlide={currentIndex}
        thumbs={{ swiper: thumbsSwiper }}
        onSwiper={setMainSwiper}
        onSlideChange={(swiper) => {
          if (thumbsSwiper) {
            thumbsSwiper.slideTo(swiper.activeIndex, 500, false);
          }
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        zoom={{ maxRatio: 3 }}
        onAutoplayTimeLeft={(_, __, p) => {
          setProgress((1 - p) * 100);
        }}
        className="w-full max-w-5xl flex-1 flex items-center"
      >
        {images.map((src, idx) => (
          <SwiperSlide
            key={idx}
            className="flex justify-center items-center h-full w-full"
          >
            <div className="swiper-zoom-container flex justify-center items-center h-full w-full">
              <motion.img
                src={src}
                alt={`image-${idx}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-lg object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Swiper thumbnail */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={6}
        freeMode
        watchSlidesProgress
        centeredSlides={true}
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

      {/* Custom style cho thumbnail active */}
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
