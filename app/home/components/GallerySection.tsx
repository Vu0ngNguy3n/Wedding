"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import ImageViewer from "@/app/components/ImageViewer";

const GallerySection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  // const imageUrls = [
  //   "https://res.cloudinary.com/da4lws7lv/image/upload/v1760539728/TD_00361a_ycs9rk.jpg",
  //   "https://res.cloudinary.com/da4lws7lv/image/upload/v1760539725/TD_00332a_hifuit.jpg",
  //   "https://res.cloudinary.com/da4lws7lv/image/upload/v1760539719/8_xggu3s.jpg",
  //   "https://res.cloudinary.com/da4lws7lv/image/upload/v1760539717/10_eziv5p.jpg",
  //   "https://res.cloudinary.com/da4lws7lv/image/upload/v1760539716/2_wt9tau.jpg",

  //   // "https://drive.google.com/uc?export=view&id=1G9IKU04NmMf2Lb4FqyiFBnKR8aALUg5K",
  //   // "https://drive.google.com/uc?export=view&id=1uvNUsTcKoPQbMD_DHsU1AJ6a884uF2vq",
  //   // "https://drive.google.com/uc?export=view&id=1M-UejZSx17IR5AJvT3JyYqQHhR-DnI6N",
  //   // "https://drive.google.com/uc?export=view&id=1GBSVr_pvUhlBDKqEQxoN5c9bYMuyLJfo",
  //   // "https://drive.google.com/uc?export=view&id=15rP2ouKcb2ejpO1BZghPi4hXiD2wqlZA",
  //   // "https://drive.google.com/uc?export=view&id=1wXqSUw_azMMppxj0KdWbM6L-XDxqnB7Q",
  //   // "https://drive.google.com/uc?export=view&id=19LLF0Wwmy22ElVzCxBu_L9LEKWkkS3Db",
  //   // "https://drive.google.com/uc?export=view&id=1ErZ66lxGXaxFlKfvsD3gOPVzdAVFetXm",
  //   // "https://drive.google.com/uc?export=view&id=1w5FVovs6gaYlsiBay9nGzUFnBhPTx6pu",
  //   // "https://drive.google.com/uc?export=view&id=1pNX2u-UV1jsJLu-fKRa5O4EA_4VuijMt",
  //   // "https://drive.google.com/uc?export=view&id=1fMgc7ANhjOKX9djdo7tZ8U-I9w4ze0hN",
  //   // "https://drive.google.com/uc?export=view&id=1SCkV5tTpMkVq14WNfCNUr0AsAHXOWBfP",
  //   // "https://drive.google.com/uc?export=view&id=1XuK1u_sndLRN9hxqCErcdbL32R7VkMC2",
  //   // "https://drive.google.com/uc?export=view&id=1PmEyyJEa4hzHKMf8UI8Fy5FH47B7CNSo",
  //   // "https://drive.google.com/uc?export=view&id=1C7ciUc4UA7mX0lyy6HWowc1aBHjhkbDj",
  //   // "https://drive.google.com/uc?export=view&id=1Xj5DmaEhipFE4ur8EGfwHTjX6_MNMF7j",
  //   // "https://drive.google.com/uc?export=view&id=1QytWs6M_SPWjD5NESfU3TjvnextPntDo",
  //   // "https://drive.google.com/uc?export=view&id=1nsZDKi5j-LJr4iKoWtaaEHkfBQH6hFur",
  //   // "https://drive.google.com/uc?export=view&id=1xzOKp-dUg_rSdoM_9uE_Bf6tx0rJG3S7",
  //   // "https://drive.google.com/uc?export=view&id=1duO2atHgRxthxt0J7grV98TW94prBdui",
  //   // "https://drive.google.com/uc?export=view&id=1RDrldZ9nZS1Qd4HU9GiKx3RwpLhRt1Mr",
  //   // "https://drive.google.com/uc?export=view&id=1vJAIcaxyBsM6NI6zh5lxnmpuYNvxeHux",
  //   // "https://drive.google.com/uc?export=view&id=1uoZwd3VCtI_lKgzIYvphTlxn9Vo8ByU3",
  //   // "https://drive.google.com/uc?export=view&id=1S-JQrLQzPSO95z-Fen5u7FbJWt7hcSET",
  //   // "https://drive.google.com/uc?export=view&id=1Gi8fd-qPgIPpd6JnAruebrk8JT4MR86p",
  //   // "https://drive.google.com/uc?export=view&id=1HHyWbGgyFBuTl5HBSktotD3MdgJl1ff4",
  //   // "https://drive.google.com/uc?export=view&id=1sYoXfN-IKpIiH5EybC1cA4SuyVz4fm3E",
  //   // "https://drive.google.com/uc?export=view&id=1hUbaCMgwJon6pnefhTwBTfi0An2wNrbe",
  // ];
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
      // fetch("https://lequocpro.com/wedding/images.php/")
      .then((res) => res.json())
      .then((data) => {
        setImageUrls(data);
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
            .slice(0, 10)
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
