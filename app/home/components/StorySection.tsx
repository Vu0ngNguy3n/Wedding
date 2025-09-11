import React from "react";

const StorySection = () => {
  const stories = [
    {
      year: "2018",
      title: "Chương một: Cô gái áo trắng",
      description:
        "Chúng mình gặp nhau lần đầu vào năm 2018, trong một buổi liên hoan tân sinh viên.",
    },
    {
      year: "2019",
      title: "Chương hai: Những lần hẹn hò",
      description:
        "Sau buổi gặp gỡ định mệnh đó, chúng mình thường xuyên hẹn hò và tìm hiểu nhau.",
    },
    {
      year: "2020",
      title: "Chương ba: Lời tỏ tình và cái gật đầu",
      description:
        "Trải qua 2 năm tìm hiểu, mình đã dũng cảm tỏ tình và nhận được cái gật đầu từ nàng.",
    },
    {
      year: "2023",
      title: "Chương bốn: Cột mốc hôn nhân",
      description:
        "Sau bao năm tháng đồng hành, cùng vượt qua mọi khó khăn. Chúng mình chính thức về chung một nhà.",
    },
  ];

  return (
    <section id="story" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-serif font-bold text-[#48332c] mb-4">
          Chuyện tình yêu
        </h2>
        <p className="text-gray-600 mb-12">
          Sau bao năm tháng đồng hành, chúng tôi chính thức về chung một nhà.
        </p>
        <div className="max-w-3xl mx-auto love-story-timeline relative">
          {stories.map((story, index) => (
            <div
              key={index}
              className="love-story-item text-left pl-10 relative"
            >
              <div className="absolute left-[-10px] top-0 h-full w-2 flex flex-col justify-start">
                <div className="w-4 h-4 rounded-full bg-pink-500 absolute top-0 -left-1 transform -translate-x-1/2"></div>
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#48332c]">
                {story.year}
              </h3>
              <h4 className="text-xl font-semibold mb-2">{story.title}</h4>
              <p className="text-gray-700 italic">{story.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StorySection;
