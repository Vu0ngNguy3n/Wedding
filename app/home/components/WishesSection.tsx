import React from "react";

const WishesSection = () => {
  return (
    <section id="wishes" className="py-20 bg-gray-100 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold text-[#48332c] mb-4">
          Sổ lưu bút
        </h2>
        <p className="text-gray-600 mb-8">
          Hãy để lại những lời chúc tốt đẹp nhất cho chúng tôi!
        </p>
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-xl mx-auto">
          {/* Form ở đây, bạn sẽ cần thêm logic xử lý form */}
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Tên của bạn *"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#48332c]"
              />
            </div>
            <div>
              <textarea
                placeholder="Lời chúc *"
                rows={5}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#48332c]}"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#48332c] text-white py-3 rounded-md font-semibold hover:bg-pink-600 transition-colors"
            >
              Gửi lời chúc
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default WishesSection;
