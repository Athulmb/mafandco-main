import React from "react";
import { motion } from "framer-motion";

const aboutHeroData = {
  backgroundImage: "AboutHero.jpg", // 🔹 Replace with your image path
  title: "About the Company",
  underline: true,
};

// Variants for each letter
const letterAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// 🔹 Vertical line animation
const lineAnimation = {
  hidden: { scaleY: 0, opacity: 0, originY: 0 },
  visible: { scaleY: 1, opacity: 1, originY: 0, transition: { duration: 1, ease: "easeOut" } },
};

const AboutHero = () => {
  return (
    <section className="w-full flex relative overflow-hidden">
      {/* Background Image */}
      <div className="w-full relative">
        <img
          src={aboutHeroData.backgroundImage}
          alt={aboutHeroData.title}
          className="w-full h-screen bg-cover filter"        />

        {/* 🔹 Vertical Lines with animation */}
        <div className="absolute inset-0 flex justify-between pointer-events-none px-4 sm:px-6 md:px-10 lg:px-20">
          {/* Left edge line */}
          <motion.div
            variants={lineAnimation}
            initial="hidden"
            animate="visible"
            className="w-px h-full bg-white/10"
          ></motion.div>

          {/* Inner lines — divide into 3 equal parts */}
          <div className="relative flex-1">
            <motion.div
              variants={lineAnimation}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1, delay: 0.3 }}
              className="absolute left-1/4 top-0 w-px h-full bg-white/10"
            ></motion.div>

            <motion.div
              variants={lineAnimation}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute left-3/4 top-0 w-px h-full bg-white/10"
            ></motion.div>
          </div>

          {/* Right edge line */}
          <motion.div
            variants={lineAnimation}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 0.7 }}
            className="w-px h-full bg-white/10"
          ></motion.div>
        </div>

        {/* Content */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 max-w-6xl px-4 sm:px-6 md:px-10 lg:px-20">
          {/* Animated Heading */}
          <motion.h1
            className="text-white text-2xl pt-4 sm:text-4xl md:text-5xl lg:text-6xl font-lufga font-bold text-left flex flex-wrap"
            initial="hidden"
            animate="visible"
          >
            {aboutHeroData.title.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={letterAnimation}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  mass: 0.5,
                  delay: index * 0.03,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>

          {/* Underline Animation */}
          {aboutHeroData.underline && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "50%", opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
              className="mt-2 h-1 bg-white"
            ></motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
