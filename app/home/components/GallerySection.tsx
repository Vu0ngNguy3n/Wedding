"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import ImageViewer from "@/app/components/ImageViewer";

const GallerySection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const openViewer = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    fetch("/api/get-image-gallery")
      .then((res) => res.json())
      .then((data) => {
        setImageUrls(data);
        console.log("data :>> ", data);
      });
  }, []);
  return (
    <section id="gallery" className="py-10 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <div
            className="h-[59px] w-[126px] bg-no-repeat bg-center bg-cover mx-auto"
            style={{
              backgroundImage: "url(/images/sec-title-flower.png)",
            }}
          ></div>
          <h2 className="text-4xl font-dancing font-bold mb-4">
            Album Hình Cưới
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Được ai đó yêu sâu sắc sẽ mang lại cho bạn sức mạnh, trong khi yêu
            ai đó sâu sắc sẽ cho bạn dũng khí.
          </p>
        </div>

        {/* Masonry Layout */}
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {[...imageUrls]
            // .sort(() => Math.random() - 0.5)
            .slice(0, 9)
            .map((src, idx) => (
              <div key={idx} className="overflow-hidden rounded-lg">
                <Image
                  src={src}
                  alt={`Gallery ${idx + 1}`}
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover rounded-lg hover:scale-105 transition-transform duration-500"
                  onClick={() => openViewer(idx)}
                />
              </div>
            ))}
          {isOpen && (
            <ImageViewer
              images={imageUrls}
              currentIndex={currentIndex}
              onClose={() => setIsOpen(false)}
            />
          )}
        </div>

        {/* Nút xem thêm */}
        <div className="text-center mt-8">
          <button
            className="px-6 py-2 bg-[#b18c85] text-white rounded-full hover:bg-[#a97f7f] transition"
            onClick={() => {
              setIsOpen(true);
              setCurrentIndex(0);
            }}
          >
            Xem tất cả ảnh
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
