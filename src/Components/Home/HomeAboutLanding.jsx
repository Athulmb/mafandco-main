// src/components/HomeAboutLanding.jsx
import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const aboutLandingData = {
  images: [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
  ],
  companyLabel: "About our company",
  title: `Explore Dubai's Finest Properties With MAF & Co Properties LLC`,
  teamAvatars: [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
  ],
  userReviewCount: 1200,
  reviewLabel: "users review",
  description: [
    "Discover Unmatched Excellence with MAF & Co Properties LLC. At MAF & Co Properties LLC, we are your trusted partner in navigating Dubai's dynamic real estate market. Established in 2024 and strategically located in Business Bay, one of Dubai's most prestigious and sought-after neighborhoods, we specialize in offering luxury real estate solutions tailored to discerning clients worldwide.",
    "Our portfolio includes an exclusive selection of high-end residences, waterfront villas, and prime commercial properties in Dubai's top communities, such as Downtown Dubai, Palm Jumeirah, and Dubai Marina. Whether you're an investor looking for high ROI real estate opportunities or searching for your dream home, we combine professionalism, market expertise, and a personalized approach to deliver unparalleled results.",
    "At MAF & Co Properties LLC, we are committed to helping you explore the best real estate investment opportunities in Dubai. With a reputation for integrity, reliability, and exceptional service, we ensure that your journey into Dubai's luxury property market is seamless and rewarding.",
  ],
  buttonText: "Contact Us",
};

const HomeAboutLanding = () => {
  const data = aboutLandingData;
  const [count, setCount] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  const containerRef = useRef(null);

  // Animate review count
  useEffect(() => {
    let start = 0;
    const end = data.userReviewCount;
    const duration = 2000;
    const increment = Math.ceil(end / (duration / 30));
    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setCount(start);
    }, 30);
    return () => clearInterval(counter);
  }, [data.userReviewCount]);

  // Detect mobile / desktop
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Sticky scroll animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const yTransform = useTransform(scrollYProgress, [0, 1], [0, 0]); // keep motion effect

  const headingContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.04 } },
  };

  const letterVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 12, stiffness: 120 } },
  };

  return (
    <motion.div
      ref={containerRef}
      className="w-full bg-backgound py-12 px-4 sm:px-6 lg:px-20 lg:pt-12"
    >
      <div className="max-w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-12 items-start min-h-screen">

          {/* LEFT: Images */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            {data.images.map((img, index) => (
              <motion.div
                key={index}
                className="w-full lg:w-[88%] overflow-hidden rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                style={{ aspectRatio: "550 / 662" }}
              >
                <img
                  src={img}
                  alt={`About image ${index + 1}`}
                  className="w-full h-full object-cover object-center rounded-2xl"
                />
              </motion.div>
            ))}
          </div>

          {/* RIGHT: Sticky Content Section */}
          <motion.div
            className="lg:col-span-1 flex flex-col justify-start sticky top-24"
            style={{ y: yTransform }}
          >
            <div className="flex items-center mb-4 sm:mb-6">
              <span className="text-primary text-xs sm:text-sm font-medium px-3 py-1 rounded-full">
                {data.companyLabel}
              </span>
              <div className="flex-1 h-px bg-gray-300 ml-3 sm:ml-4"></div>
            </div>

            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold mb-6 sm:mb-8 leading-snug sm:leading-tight bg-gradient-to-b from-[#4DAEC1] to-[#0A374E] text-transparent bg-clip-text flex flex-wrap"
              variants={headingContainer}
              initial="hidden"
              animate="visible"
            >
              {data.title.split("").map((char, index) => (
                <motion.span key={index} variants={letterVariant}>
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h1>

            <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6 sm:mb-8 shadow-sm p-4 sm:p-5 rounded-lg">
              <div className="flex -space-x-3 mr-0 sm:mr-5 mb-3 sm:mb-0">
                {data.teamAvatars.map((avatar, index) => (
                  <div
                    key={index}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white shadow-lg overflow-hidden"
                  >
                    <img
                      src={avatar}
                      alt={`Team ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-base">
                <div className="font-bold text-gray-900 text-lg">{count}+</div>
                <div className="text-gray-600 text-sm">{data.reviewLabel}</div>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-5 text-gray-600 text-sm sm:text-base leading-relaxed mb-8 sm:mb-10">
              <p className="text-justify">
                {data.description[0]}{" "}
                {isMobile && !showMore && (
                  <span
                    className="text-primary font-medium underline cursor-pointer"
                    onClick={() => setShowMore(true)}
                  >
                    Read More
                  </span>
                )}
              </p>

              {(showMore || !isMobile) &&
                data.description.slice(1).map((para, idx) => (
                  <p key={idx} className="text-justify">{para}</p>
                ))}

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

            <button className="relative overflow-hidden px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg group bg-primary text-white shadow-lg transition-all duration-500 self-start hover:shadow-xl">
              <span className="absolute bottom-0 left-1/2 w-0 h-0 bg-primary rounded-lg transform -translate-x-1/2 group-hover:w-full group-hover:h-full transition-all duration-500 ease-in-out"></span>
              <span className="relative z-10 block transition-transform duration-500 group-hover:-translate-y-[180%]">
                {data.buttonText}
              </span>
              <span className="absolute inset-0 flex items-center justify-center text-white font-semibold transform translate-y-full transition-transform duration-500 group-hover:translate-y-0">
                {data.buttonText}
              </span>
            </button>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
};

export default HomeAboutLanding;
