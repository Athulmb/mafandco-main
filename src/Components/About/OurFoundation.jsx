import React, { useState, useEffect, useRef } from "react";

const OurFoundation = () => {
  const [showMore, setShowMore] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [isVisible, setIsVisible] = useState({
    heading: false,
    content: false,
    founder: false,
    team: false,
  });

  const headingRef = useRef(null);
  const contentRef = useRef(null);
  const founderRef = useRef(null);
  const teamRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const key = entry.target.dataset.section;
          setIsVisible((prev) => ({ ...prev, [key]: true }));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (headingRef.current) observer.observe(headingRef.current);
    if (contentRef.current) observer.observe(contentRef.current);
    if (founderRef.current) observer.observe(founderRef.current);
    if (teamRef.current) observer.observe(teamRef.current);

    return () => observer.disconnect();
  }, []);

  const paragraphs = [

    "MAF & Co Properties LLC was founded with a powerful vision — to redefine excellence in Dubai’s real estate market and deliver exceptional value to investors and homeowners worldwide. Guided by the visionary leadership of KV Baby, the company stands on strong principles of integrity, innovation, and a client-first approach, setting a new benchmark in the UAE property sector.",
    "With over 30 years of successful business experience in the UAE, Mr. KV Baby brings unmatched market knowledge, strategic foresight, and entrepreneurial expertise to the Dubai real estate industry. His forward-thinking vision ensures that MAF & Co Properties LLC continues to raise the bar in service, transparency, and client trust.",
    "At MAF & Co Properties LLC, our core strength lies in off-plan property investments—offering clients access to exclusive project launches, developer-direct deals, and flexible payment plans in Dubai’s most prestigious communities. Along with this, we also specialize in the secondary market, helping buyers and sellers with ready properties, resale opportunities, and high-ROI investment options.",
    "Our portfolio features luxury villas, modern townhouses, and prime apartments across Downtown Dubai, Palm Jumeirah, Dubai Marina, Business Bay, and other high-demand neighborhoods. Whether you are a first-time buyer, a seasoned investor, or seeking golden visa–eligible properties, we ensure a seamless, secure, and rewarding property journey."
  ];

  return (
    <div className="bg-backgound min-h-screen py-12 px-4 sm:px-6 md:px-8 lg:px-12">
      {/* 🔹 Heading Section */}
      <div
        ref={headingRef}
        data-section="heading"
        className="w-5/6 mx-auto mb-12 sm:mb-16 flex justify-center"
        style={{
          opacity: isVisible.heading ? 1 : 0,
          transform: isVisible.heading ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
        }}
      >
        <h1
          className="font-black tracking-tight leading-none text-center bg-gradient-to-b from-[#49A6B9] to-[#0B3950] text-transparent bg-clip-text"
          style={{ fontSize: "12vw", whiteSpace: "nowrap" }}
        >
          Our Foundation
        </h1>
      </div>

     {/* 🔹 Bottom Section with Sticky Image Animation */}
<div className="relative flex flex-col lg:flex-row justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 w-5/6 mx-auto">
  {/* Left Content - Text */}
  <div
    ref={contentRef}
    data-section="content"
    className="flex-1 space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-14 text-center xl:text-left xl:flex xl:flex-col pt-12 sm:pt-16 lg:pt-28 p-4 sm:p-5 md:p-6 lg:p-8"
    style={{
      opacity: isVisible.content ? 1 : 0,
      transform: isVisible.content ? "translateX(0)" : "translateX(-30px)",
      transition: "opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s",
    }}
  >
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

  {/* Right Image - Sticky on Scroll */}
  <div
    ref={founderRef}
    data-section="founder"
    className="flex-1 flex justify-center"
    style={{
      opacity: isVisible.founder ? 1 : 0,
      transform: isVisible.founder ? "translateX(0)" : "translateX(30px)",
      transition: "opacity 0.8s ease-out 0.4s, transform 0.8s ease-out 0.4s",
    }}
  >
    {/* ✅ Sticky wrapper */}
    <div className="sticky top-[15vh] self-start w-full max-w-md sm:max-w-lg md:max-w-xl h-auto">
      <div className="relative w-full">
        <img
          src="/Founder.png"
          alt="K V Baby"
          className="w-full h-auto rounded-2xl"
        />
        {/* ✅ Name & Position inside image */}
        <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 lg:bottom-12 right-6 sm:right-8 md:right-10 lg:right-12">
          <p className="text-white font-black text-2xl sm:text-4xl md:text-5xl tracking-tight drop-shadow-md">
            K V BABY
          </p>
          <p className="text-white font-light text-lg sm:text-xl md:text-2xl mt-2 drop-shadow-md">
            CEO
          </p>
        </div>
      </div>
    </div>
  </div>
</div>


      {/* 🔹 Team Section */}
      <div
        ref={teamRef}
        data-section="team"
        className="mt-24 sm:mt-32 md:mt-20"
        style={{
          opacity: isVisible.team ? 1 : 0,
          transform: isVisible.team ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.8s ease-out 0.6s, transform 0.8s ease-out 0.6s",
        }}
      >
        {/* Team Grid */}
        <div className="flex flex-col lg:flex-row justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 w-5/6 mx-auto">
          {/* COO & CFO - Left */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
              {/* COO */}
              <div className="relative flex justify-center">
                <div className="w-[80%] sm:w-[70%] md:w-[65%] lg:w-[60%] relative">
                  <img
                    src="/Founder.png"
                    alt="Indhu Lekha"
                    className="w-full h-auto rounded-2xl object-cover shadow-lg"
                  />
                  <div className="absolute bottom-4 md:bottom-4 left-4">
                    <p className="text-white font-black text-2xl sm:text-2xl xl:text-4xl tracking-tight">
                      INDHU LEKHA
                    </p>
                    <p className="text-white font-light text-lg sm:text-xl md:text-2xl">
                      COO
                    </p>
                  </div>
                </div>
              </div>

              {/* CFO */}
              <div className="relative flex justify-center">
                <div className="w-[80%] sm:w-[70%] md:w-[65%] lg:w-[60%] relative">
                  <img
                    src="/Founder.png"
                    alt="Nanda Kishor"
                    className="w-full h-auto rounded-2xl object-cover shadow-lg"
                  />
                  <div className="absolute bottom-4 md:bottom-4 right-4">
                    <p className="text-white font-black text-2xl sm:text-2xl xl:text-4xl tracking-tight">
                      NANDA KISHOR
                    </p>
                    <p className="text-white font-light text-lg sm:text-xl md:text-2xl">
                      CFO
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFoundation;