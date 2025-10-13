"use client";
import React from "react";
import Image from "next/image";
import AnimatedSection from "@/app/components/AnimatedSection";

const CoupleSection = () => {
  const groom = {
    name: "Lê Văn Quốc",
    parents: ["Lê Văn Thịnh", "Phạm Thị Khảm"],
    image: "/images/couple/cr.jpg",
    bio: "Ai bảo IT chỉ biết code? Quốc đã chứng minh rằng, phía sau bàn phím và những dòng lệnh khô khan là một trái tim luôn chan chứa yêu thương. Không chỉ giỏi viết code, anh còn “debug” được chính trái tim mình để tìm ra tình yêu đích thực. Và hôm nay, Quốc chính thức “commit” cuộc đời mình với người con gái anh thương – một “project” không có deadline, không có bug, chỉ có hạnh phúc và đồng hành. Đó là dự án lớn nhất, đẹp nhất đời anh – hành trình hôn nhân, nơi cả hai cùng dựng xây một tổ ấm vẹn tròn, đầy ắp yêu thương.",
  };

  const bride = {
    name: "Nguyễn Thị Nhung",
    parents: ["Nguyễn Văn Phương", "Nguyễn Thị Hợp"],
    image: "/images/couple/cd.jpg",
    bio: "Nguyễn Nhung – một cô gái dịu dàng, trong sáng và tràn đầy hơi ấm. Nụ cười của Nhung như thắp sáng mọi khoảnh khắc, mang đến sự bình yên và những rung cảm ngọt ngào khó quên. Dưới vẻ ngoài mong manh ấy là một trái tim mạnh mẽ, biết trân trọng và nâng niu từng giá trị yêu thương. Hôm nay, Nhung rạng rỡ trong hạnh phúc, trao trọn trái tim mình cho người bạn đời, cùng nhau viết tiếp những chương đầy yêu thương, hy vọng và hạnh phúc bền lâu.",
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
