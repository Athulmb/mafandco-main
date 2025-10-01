import React from "react";
import { motion } from "framer-motion";

const eventsHeroData = {
  backgroundImage: "AboutHero.png", // 🔹 Replace with your image path
  title: "Our Events",
  underline: true,
};

// Variants for each letter
const letterAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const EventsHero = () => {
  return (
    <section className="w-full flex">
      {/* Image */}
      <div className="w-full relative">
        <img
          src={eventsHeroData.backgroundImage}
          alt={eventsHeroData.title}
          className="w-full h-auto filter"
        />

        {/* Content */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 max-w-6xl px-4 sm:px-6 md:px-10 lg:px-20">
          {/* Heading with smooth letter animation */}
          <motion.h1
            className="text-white text-2xl pt-4 sm:text-4xl md:text-5xl lg:text-7xl font-lufga font-bold text-left flex flex-wrap"
            initial="hidden"
            animate="visible"
          >
            {eventsHeroData.title.split("").map((char, index) => (
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
          {eventsHeroData.underline && (
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

export default EventsHero;
