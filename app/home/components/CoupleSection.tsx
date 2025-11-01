"use client";
import React from "react";
import Image from "next/image";
import AnimatedSection from "@/app/components/AnimatedSection";

const CoupleSection = () => {
  const groom = {
    name: "Hoàng Quốc Hùng",
    parents: ["Hoàng Quốc Hùng", "Hoàng Quốc Hùng"],
    image: "/images/couple/cr1.jpg",
    bio: "Không chỉ là một người thợ cắt tóc tài hoa, Hùng còn là chàng trai sống đầy tình cảm và luôn biết quan tâm đến những người xung quanh. Mỗi đường kéo của anh không chỉ tạo nên kiểu tóc đẹp mà còn gửi gắm trong đó sự chân thành và niềm vui giản dị của cuộc sống. Với Hùng, niềm hạnh phúc lớn nhất không nằm ở thành công vật chất mà là những khoảnh khắc được sẻ chia cùng gia đình, bạn bè và người anh yêu thương. Hôm nay, Hùng “cắt” thêm một dấu mốc trong hành trình cuộc đời mình — “kiểu tóc” mang tên hạnh phúc, nơi anh cùng người con gái anh thương xây nên một tổ ấm ngọt ngào và ấm áp.",
  };

  const bride = {
    name: "Võ Thùy Trang",
    parents: ["Võ Thùy Trang", "Võ Thùy Trang"],
    image: "/images/couple/cd1.jpg",
    bio: "Thùy Trang – cô giáo dịu dàng với nụ cười hiền và ánh mắt chan chứa yêu thương. Mỗi ngày đến lớp, cô không chỉ mang tri thức mà còn mang theo trái tim ấm áp dành cho học trò, đồng nghiệp và những người thân yêu. Ngoài giờ lên lớp, Trang là cô gái sống tình cảm, luôn quan tâm và trân trọng từng người bên cạnh. Hôm nay, trong chiếc váy cưới trắng tinh khôi, cô giáo ấy không chỉ trao đi tình yêu mà còn mở ra trang sách mới của đời mình – nơi cô và người thương cùng viết nên câu chuyện ngọt ngào mang tên “hạnh phúc”.",
  };

  return (
    <section id="couple" className="py-10 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div
            className="h-[59] w-[126] bg-no-repeat bg-center bg-cover mx-auto"
            style={{
              backgroundImage: "url(/images/sec-title-flower.png)",
            }}
          ></div>
          <h2 className="text-4xl font-dancing font-bold mb-4">
            Cô dâu & Chú rể
          </h2>
          <p className="text-gray-600">
            Tình yêu là điều kiện trong đó hạnh phúc của người khác là điều cần
            thiết cho chính bạn.
          </p>
        </div>
        <div className="max-w-4xl mx-auto overflow-x-hidden">
          <AnimatedSection animationType="slide-in-right">
            <div className="md:flex items-center mb-10">
              <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0 text-center">
                <Image
                  src={groom.image}
                  alt={groom.name}
                  width={500}
                  height={500}
                  className="rounded-lg shadow-lg mx-auto"
                />
              </div>
              <div className="md:w-1/2 text-center md:text-left">
                <h3 className="text-4xl font-dancing  mb-4">{groom.name}</h3>
                <p className="text-gray-600">
                  Con ông:{" "}
                  <span className="font-bold">
                    {groom.parents[0].toUpperCase()}
                  </span>
                  <br />
                  Con bà:{" "}
                  <span className="font-bold">
                    {groom.parents[1].toUpperCase()}
                  </span>
                </p>
                <p className="mt-4 text-gray-700 italic">{groom.bio}</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animationType="expand-in">
            <div className="md:flex flex-row-reverse items-center">
              <div className="md:w-1/2 md:pl-8 mb-6 md:mb-0 text-center">
                <Image
                  src={bride.image}
                  alt={bride.name}
                  width={500}
                  height={500}
                  className="rounded-lg shadow-lg mx-auto"
                />
              </div>
              <div className="md:w-1/2 text-center md:text-right">
                <h3 className="text-4xl font-dancing mb-4">{bride.name}</h3>
                <p className="text-gray-600">
                  Con ông:{" "}
                  <span className="font-bold">
                    {bride.parents[0].toUpperCase()}
                  </span>
                  <br />
                  Con bà:{" "}
                  <span className="font-bold">
                    {bride.parents[1].toUpperCase()}
                  </span>
                </p>
                <p className="mt-4 text-gray-700 italic">{bride.bio}</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default CoupleSection;
