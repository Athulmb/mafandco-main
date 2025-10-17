"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MissionVision() {
  const [showMission, setShowMission] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowMission((prev) => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const cards = [
    {
      id: "mission",
      title: "Our Mission",
      content: `At MAF & Co Properties LLC, our mission is to deliver exceptional
        real estate experiences by connecting clients with Dubai’s most exclusive
        off-plan developments and premium secondary market properties.
        We strive to provide a seamless, transparent, and rewarding property journey
        whether you’re searching for your dream home, a high-ROI investment, or prime
        commercial real estate. Rooted in trust, integrity, and market expertise, we empower
        investors, homeowners, and agents through strategic real estate solutions, ensuring
        lasting value, comfort, and client satisfaction.`,
    },
    {
      id: "vision",
      title: "Our Vision",
      content: `Our vision is to establish MAF & Co Properties LLC as the most trusted
        name in Dubai’s real estate market, recognized for excellence, elegance,
        and client success. We aspire to be the first choice for property investors
        and buyers, offering innovative solutions, data-driven insights, and unmatched
        service quality. By expanding across Dubai’s prime communities, we aim to
        shape the future of luxury living and investment in the UAE.`,
    },
  ];

  const activeCard = showMission ? cards[0] : cards[1];
  const nextCard = showMission ? cards[1] : cards[0];

  // Rotation + depth animation (shuffle style)
  const shuffleVariants = {
    enter: {
      rotateX: -20,
      rotateY: 15,
      y: 20,
      scale: 0.96,
      opacity: 0.8,
    },
    center: {
      rotateX: 0,
      rotateY: 0,
      y: 0,
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
    exit: {
      rotateX: 20,
      rotateY: -15,
      y: -20,
      scale: 0.96,
      opacity: 0.8,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <div className="relative w-full bg-background py-20 px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center justify-center">
      <div
        className="relative w-full md:w-[70%] h-auto min-h-[400px] flex items-center justify-center"
        style={{ perspective: "1000px" }}
      >
        {/* 🔹 Static back card (next card with slight tilt) */}
        <motion.div
          key={nextCard.id}
          className="absolute bg-white rounded-3xl p-8 sm:p-10 lg:p-12 w-full shadow-[0_8px_40px_rgba(0,0,0,0.08)] border border-gray-100"
          style={{
            transform: "rotateX(-8deg) rotateY(6deg) translateY(20px)",
            transformStyle: "preserve-3d",
          }}
          animate={{
            y: [20, 18, 20],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-lufga text-gray-400 mb-4">
            {nextCard.title}
          </h2>
          <p className="text-gray-400 text-base sm:text-lg lg:text-xl leading-relaxed sm:leading-8 line-clamp-3">
            {nextCard.content}
          </p>
        </motion.div>

        {/* 🔸 Active front card with rotation shuffle animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCard.id}
            variants={shuffleVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute bg-white rounded-3xl p-8 sm:p-10 lg:p-12 w-full shadow-[0_8px_40px_rgba(0,0,0,0.1)] border border-gray-200 z-10"
            style={{
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
            }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-lufga text-gray-900 mb-6">
              {activeCard.title}
            </h2>
            <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed sm:leading-8">
              {activeCard.content}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
