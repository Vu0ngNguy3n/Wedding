import React from "react";

const Footer = () => {
  return (
    <footer
      className="relative w-full text-center h-screen bg-[length:100%] bg-no-repeat bg-[center_bottom] bg-local"
      style={{ backgroundImage: "url(/images/footer-shape.png)" }}
    >
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2">
        <div
          className="relative w-[300px] h-[276px] lg:w-[511px] lg:h-[470px] mx-auto 
             bg-center bg-no-repeat bg-cover bg-local"
          style={{
            backgroundImage: "url(/images/footer-couple-pic-frame.png)",
          }}
        >
          <img
            src="images/ff8579f5d01fb20660f75dcdb4acdbf4.jpeg"
            className="absolute max-w-[75%] rounded-full left-[48%] top-[44%] 
             -translate-x-1/2 -translate-y-1/2"
            alt="Trọng Cường &amp; Quỳnh Trâm Wedding site!"
          />
        </div>
        <h2 className="font-dancing text-5xl lg:text-7xl">Thank you!</h2>
      </div>
    </footer>
  );
};

export default Footer;
