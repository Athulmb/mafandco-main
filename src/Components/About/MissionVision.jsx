import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MissionVision() {
  const [showMission, setShowMission] = useState(true);

  // Loop between mission and vision every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setShowMission((prev) => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Animation variants for card transition
  const cardVariants = {
    initial: { opacity: 0, y: 50, scale: 0.95 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -50,
      scale: 0.95,
      transition: { duration: 0.8, ease: "easeIn" },
    },
  };

  return (
    <div className="relative w-full bg-backgound py-20 px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center justify-center">
      <div className="relative w-full md:w-[70%] h-auto min-h-[400px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          {showMission ? (
            <motion.div
              key="mission"
              variants={cardVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              // ✨ Added 4-sided shadow effect
              className="absolute bg-white rounded-3xl p-8 sm:p-10 lg:p-12 w-full shadow-[0_0_40px_rgba(0,0,0,0.15)]"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-lufga text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed sm:leading-8">
                At MAF & Co Properties LLC, our mission is to deliver exceptional
                real estate experiences by connecting clients with Dubai’s most
                exclusive off-plan developments and premium secondary market
                properties. We strive to provide a seamless, transparent, and
                rewarding property journey—whether you’re searching for your dream
                home, a high-ROI investment, or prime commercial real estate.
                Rooted in trust, integrity, and market expertise, we empower
                investors, homeowners, and agents through strategic real estate
                solutions, ensuring lasting value, comfort, and client satisfaction.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="vision"
              variants={cardVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute bg-white rounded-3xl border border-gray-300 shadow-lg p-8 sm:p-10 lg:p-12 w-full"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-lufga text-gray-900 mb-6">
                Our Vision
              </h2>
              <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed sm:leading-8">
                Our vision is to establish MAF & Co Properties LLC as the most
                trusted name in Dubai’s real estate market, recognized for
                excellence, elegance, and client success. We aspire to be the first
                choice for property investors and buyers, offering innovative
                solutions, data-driven insights, and unmatched service quality. By
                continuously expanding our portfolio across Dubai’s most sought-after
                communities—including Downtown Dubai, Palm Jumeirah, Dubai Marina,
                Business Bay, Dubai South, and Dubailand—we aim to shape the future
                of luxury living and investment in the UAE.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
