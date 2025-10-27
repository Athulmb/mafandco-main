"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MissionVision() {
  const [showMission, setShowMission] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowMission((prev) => !prev);
      setProgress(0);
    }, 6000);

    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 100 / 600));
    }, 10);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, []);

  const cards = [
    {
      id: "mission",
      title: "Our Mission",
      content: `At MAF & Co Properties LLC, our mission is to deliver exceptional
        real estate experiences by connecting clients with Dubai's most exclusive
        off-plan developments and premium secondary market properties.
        We strive to provide a seamless, transparent, and rewarding property journey
        whether you're searching for your dream home, a high-ROI investment, or prime
        commercial real estate. Rooted in trust, integrity, and market expertise, we empower
        investors, homeowners, and agents through strategic real estate solutions, ensuring
        lasting value, comfort, and client satisfaction.`,
      gradient: "from-white to-black",
      accent: "bg-black",
      textColor: "text-white",
    },
    {
      id: "vision",
      title: "Our Vision",
      content: `Our vision is to establish MAF & Co Properties LLC as the most trusted
        name in Dubai's real estate market, recognized for excellence, elegance,
        and client success. We aspire to be the first choice for property investors
        and buyers, offering innovative solutions, data-driven insights, and unmatched
        service quality. By expanding across Dubai's prime communities, we aim to
        shape the future of luxury living and investment in the UAE.`,
      gradient: "from-[#49A6B9] to-[#0B3950]",
      accent: "bg-[#ffffff]",
      textColor: "text-white",
    },
  ];

  const activeCard = showMission ? cards[0] : cards[1];
  const inactiveCard = showMission ? cards[1] : cards[0];

  const cardVariants = {
    enter: (direction) => ({
      rotateY: direction > 0 ? 90 : -90,
      opacity: 0,
      scale: 0.8,
      z: -200,
    }),
    center: {
      rotateY: 0,
      opacity: 1,
      scale: 1,
      z: 0,
      transition: {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
    exit: (direction) => ({
      rotateY: direction > 0 ? -90 : 90,
      opacity: 0,
      scale: 0.8,
      z: -200,
      transition: {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    }),
  };

  const glowVariants = {
    animate: {
      opacity: [0.3, 0.6, 0.3],
      scale: [1, 1.05, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="relative w-full bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center justify-center">
      {/* Background animated orbs */}
      <motion.div
        variants={glowVariants}
        animate="animate"
        className={`absolute top-20 left-10 w-72 h-72 bg-gradient-to-b ${activeCard.gradient} rounded-full blur-3xl opacity-20`}
      />
      <motion.div
        variants={glowVariants}
        animate="animate"
        className={`absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-b ${activeCard.gradient} rounded-full blur-3xl opacity-20`}
        style={{ animationDelay: "1.5s" }}
      />

      <div className="relative w-full max-w-5xl">
        {/* Navigation dots */}
        <div className="flex justify-center gap-3 mb-8">
          {cards.map((card, idx) => (
            <button
              key={card.id}
              onClick={() => setShowMission(idx === 0)}
              className="group relative"
            >
              <div
                className={`w-12 h-1.5 rounded-full transition-all duration-300 ${
                  (idx === 0 && showMission) || (idx === 1 && !showMission)
                    ? card.accent
                    : "bg-gray-300"
                }`}
              >
                {((idx === 0 && showMission) || (idx === 1 && !showMission)) && (
                  <motion.div
                    className="h-full bg-white rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.1 }}
                  />
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Cards container */}
        <div
          className="relative w-full h-auto min-h-[500px] flex items-center justify-center"
          style={{ perspective: "2000px" }}
        >
          <AnimatePresence mode="wait" custom={showMission ? 1 : -1}>
            <motion.div
              key={activeCard.id}
              custom={showMission ? 1 : -1}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="relative w-full"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* Card glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-b ${activeCard.gradient} rounded-3xl blur-2xl opacity-30`}
              />

              {/* Main card */}
              <div
                className={`relative rounded-3xl p-8 sm:p-10 lg:p-14 shadow-2xl border border-gray-200 overflow-hidden ${
                  activeCard.id === "mission"
                    ? "bg-black"
                    : "bg-gradient-to-b from-[#49A6B9]/90 to-[#0B3950]/90"
                }`}
              >
                {/* Decorative gradient bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-b ${activeCard.gradient}`}
                />

                {/* Corner accent */}
                <div
                  className={`absolute top-8 right-8 w-20 h-20 bg-gradient-to-b ${activeCard.gradient} rounded-full opacity-10 blur-xl`}
                />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <h2
                    className={`text-4xl sm:text-5xl lg:text-6xl font-bold ${
                      activeCard.id === "mission"
                        ? "text-white"
                        : "bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-200"
                    } mb-6`}
                  >
                    {activeCard.title}
                  </h2>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className={`${
                    activeCard.textColor
                  } text-base sm:text-lg lg:text-xl leading-relaxed sm:leading-9`}
                >
                  {activeCard.content}
                </motion.p>

                {/* Bottom line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  className={`mt-8 h-1 bg-gradient-to-b ${activeCard.gradient} rounded-full origin-left`}
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Next Card Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-gray-500 mb-2">Next up</p>
          <button
            onClick={() => setShowMission(!showMission)}
            className={`text-lg font-semibold bg-gradient-to-b ${inactiveCard.gradient} bg-clip-text text-transparent hover:opacity-70 transition-opacity`}
          >
            {inactiveCard.title} →
          </button>
        </motion.div>
      </div>
    </div>
  );
}
