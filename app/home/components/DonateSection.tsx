import React from "react";

const DonateSection = () => {
  return (
    <section id="donate" className="py-20 bg-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold text-[#48332c] mb-4">
          Mừng cưới
        </h2>
        <p className="text-gray-600 mb-8">
          Chúng tôi rất trân trọng tình cảm của bạn!
        </p>
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold font-serif text-[#48332c] mb-2">
              Chú rể
            </h3>
            <p className="text-gray-700">Nguyễn Trọng Cường</p>
            <p className="text-sm text-gray-500">
              Ngân hàng: Sacombank
              <br />
              Số tài khoản: 060138971030
              <br />
              Nội dung: Trọng Cường & Quỳnh Trâm
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold font-serif text-[#48332c] mb-2">
              Cô dâu
            </h3>
            <p className="text-gray-700">Nguyễn Lê Quỳnh Trâm</p>
            <p className="text-sm text-gray-500">
              Ngân hàng: Sacombank
              <br />
              Số tài khoản: 060138971030
              <br />
              Nội dung: Trọng Cường & Quỳnh Trâm
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
