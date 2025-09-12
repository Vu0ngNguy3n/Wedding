"use client";
import React from "react";
import Image from "next/image";
import AnimatedSection from "@/app/components/AnimatedSection";

const CoupleSection = () => {
  const groom = {
    name: "Lê Văn Quốc",
    parents: ["Lê Văn Thịnh", "Phạm Thị Khảm"],
    image:
      "https://cdn.biihappy.com/ziiweb/website/68a8232f1d37106a65000d60/1bad1de041c955b5cee90092ebc9fc5b.jpeg",
    bio: "Lê Quốc – chàng trai IT trầm lặng nhưng giàu nhiệt huyết. Ngày thường, Quốc vẫn miệt mài với thế giới công nghệ, nhưng sâu trong tim lại là một người luôn hướng về mái ấm giản dị và chan chứa yêu thương. Đằng sau sự điềm tĩnh ấy là một trái tim chân thành, khát khao sẻ chia và đồng hành. Hôm nay, Quốc hạnh phúc khi được cùng người con gái mình thương bước vào hành trình hôn nhân, dựng xây nên một tổ ấm vẹn tròn.",
  };

  const bride = {
    name: "Nguyễn Thị Nhung",
    parents: ["Nguyễn Văn Phương", "Nguyễn Thị Hợp"],
    image:
      "https://cdn.biihappy.com/ziiweb/website/68a8232f1d37106a65000d60/92ed0e92080b2c6ad163031a39d67c96.jpeg",
    bio: "Nguyễn Nhung – cô gái dịu dàng, trong trẻo và ấm áp. Nụ cười của Nhung mang đến sự bình yên, khiến những khoảnh khắc bên cạnh trở nên ngọt ngào và đáng nhớ. Ẩn sau vẻ mong manh là một trái tim kiên định, luôn trân trọng và nâng niu những giá trị yêu thương. Hôm nay, Nhung hạnh phúc khi được trao trọn trái tim mình cho người bạn đời, cùng nhau viết tiếp câu chuyện tình yêu bền lâu và đầy hy vọng.",
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
