"use client";
import React, { useState, useEffect } from "react";
import { FaHeart, FaTimes } from "react-icons/fa";

const Header: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScroll = window.scrollY;

    if (currentScroll < 100) {
      // Ở top -> hiện cả 2 tầng
      setIsSticky(true);
    } else if (currentScroll > lastScrollY) {
      // Scroll xuống -> ẩn tầng 2
      setIsSticky(false);
    } else {
      // Scroll lên -> hiện tầng 2
      setIsSticky(true);
    }

    setLastScrollY(currentScroll);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // navLinks.ts
  const navLinks = [
    { id: "couple", label: "Cặp đôi" },
    { id: "story", label: "Chuyện tình yêu" },
    { id: "gallery", label: "Album Hình Cưới" },
    { id: "events", label: "Sự kiện cưới" },
    { id: "wishes", label: "Sổ Lưu Bút" },
    { id: "donate", label: "Mừng cưới" },
  ];
  return (
    <>
      <div className="flex flex-col justify-between items-center text-nowrap w-full gap-3 p-3">
        <h1 className="w-full text-2xl lg:text-4xl text-[#202A41]">
          <div className="flex items-center justify-center font-dancing gap-3">
            <span className="flex-1 text-right">Lê Quốc</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
            >
              <path
                d="M21 8.99998C21 12.7539 15.7156 17.9757 12.5857 20.5327C12.2416 20.8137 11.7516 20.8225 11.399 20.5523C8.26723 18.1523 3 13.1225 3 8.99998C3 2.00001 12 2.00002 12 8C12 2.00001 21 1.99999 21 8.99998Z"
                stroke="#c89d9c"
                fill="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="flex-1">Nguyễn Nhung</span>
          </div>
        </h1>
        <span
          className="relative text-xs font-comfortaa tracking-[2px] font-light w-fit text-[#797979]
       before:content-[''] before:absolute before:left-[-50px] before:top-[9px] before:w-[35px] before:h-[1px] before:bg-[#ece9e9]
    after:content-[''] after:absolute after:right-[-50px] after:top-[9px] after:w-[35px] after:h-[1px] after:bg-[#ece9e9]"
        >
          Just Married
        </span>
      </div>
      <div
        // className="justify-between flex mt-2 p-2 border-t-1 border-[#efefef]"
        // className={`flex justify-between p-2 border-t-1 bg-white border-[#efefef] z-50 transform transition-transform duration-300 ${
        //   isSticky ? "fixed top-0 right-0 w-full" : ""
        // }`}
        className={`flex justify-between p-2 border-t bg-white border-[#efefef] z-50 transform transition-all duration-500 ease-in-out w-full 
          ${
            isSticky
              ? " sticky translate-y-0 opacity-100 shadow-md top-0"
              : "-translate-y-full "
          }
        `}
      >
        <div className="flex lg:hidden items-center text-[#c89d9c] justify-center font-dancing gap-1 text-2xl lg:text-3xl">
          <span>Q</span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
          >
            <path
              d="M21 8.99998C21 12.7539 15.7156 17.9757 12.5857 20.5327C12.2416 20.8137 11.7516 20.8225 11.399 20.5523C8.26723 18.1523 3 13.1225 3 8.99998C3 2.00001 12 2.00002 12 8C12 2.00001 21 1.99999 21 8.99998Z"
              stroke="#c89d9c"
              fill="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>N</span>
        </div>
        <div className="hidden lg:flex justify-center items-center flex-1 font-comfortaa font-bold">
          <ul className="flex flex-col lg:flex-row">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="block py-2 px-4 hover:text-red-500 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:hidden">
          <button
            type="button"
            className="text-gray-600 focus:outline-none"
            onClick={toggleNav}
            aria-label="Toggle navigation"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {isNavOpen && (
        <div
          className="fixed inset-0 h-screen bg-gray-800/30 bg-opacity-75 z-51 lg:hidden"
          onClick={toggleNav}
        ></div>
      )}
      {isNavOpen && (
        <div
          className="fixed inset-0 h-screen bg-gray-800/30 bg-opacity-75 z-51 lg:hidden"
          onClick={toggleNav}
        ></div>
      )}
      <div
        className={`fixed top-0 right-0 h-screen w-64 z-52 bg-white p-6 transform transition-transform duration-300 lg:hidden ${
          isNavOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-gray-600"
          onClick={toggleNav}
        >
          <FaTimes className="text-2xl" />
        </button>
        <div className="mt-12">
          <ul className="flex flex-col lg:flex-row">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="block py-2 px-4 hover:text-red-500 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
