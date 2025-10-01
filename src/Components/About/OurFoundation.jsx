import React, { useState, useEffect } from "react";

const OurFoundation = () => {
  const [showMore, setShowMore] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024); // lg breakpoint

  // Detect mobile / desktop
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const paragraphs = [
    "MAF & Co Properties LLC was established with a clear vision: to redefine excellence in real estate and deliver unparalleled value to our clients. Guided by the visionary leadership of John Baby, the company is built on a foundation of integrity, innovation, and a client-first approach.",
    "A globally accomplished entrepreneur with a proven track record of business success, John Baby brings decades of experience and strategic insight to this new endeavor in Dubai's dynamic real estate market. His forward-thinking vision and commitment to excellence ensure that MAF & Co Properties LLC sets new benchmarks in service, professionalism, and client satisfaction.",
    "At MAF & Co Properties LLC, we are driven to exceed expectations, offering bespoke real estate solutions that cater to the diverse needs of investors, homeowners, and businesses alike.",
  ];

  return (
    <div className="bg-backgound min-h-screen py-12 px-4 sm:px-6 md:px-8 lg:px-12">

      {/* 🔹 Heading Section */}
      <div className="w-5/6 mx-auto mb-12 sm:mb-16 flex justify-center">
        <h1
          className="font-black text-black tracking-tight leading-none text-center"
          style={{ fontSize: "12vw", whiteSpace: "nowrap" }}
        >
          Our Foundation
        </h1>
      </div>

      {/* 🔹 Bottom Section */}
      <div className="flex flex-col lg:flex-row justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 w-5/6 mx-auto">

        {/* Left Content - Text */}
        <div className="flex-1 space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-14 text-center xl:text-left xl:flex xl:flex-col pt-12 sm:pt-16 lg:pt-28 p-4 sm:p-5 md:p-6 lg:p-8">
          {/* First paragraph always visible */}
          <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed font-light text-justify">
            {paragraphs[0]}{" "}
            {isMobile && !showMore && (
              <span
                className="text-primary font-medium underline cursor-pointer"
                onClick={() => setShowMore(true)}
              >
                Read More
              </span>
            )}
          </p>

          {/* Remaining paragraphs */}
          {(showMore || !isMobile) &&
            paragraphs.slice(1).map((para, idx) => (
              <p
                key={idx}
                className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed font-light text-justify"
              >
                {para}
              </p>
            ))}

          {/* Show Less for mobile */}
          {isMobile && showMore && (
            <p>
              <span
                className="text-primary font-medium underline cursor-pointer"
                onClick={() => setShowMore(false)}
              >
                Show Less
              </span>
            </p>
          )}
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="/Founder.png"
            alt="Founder"
            className="w-full h-auto max-w-md sm:max-w-lg md:max-w-xl rounded-2xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default OurFoundation;
