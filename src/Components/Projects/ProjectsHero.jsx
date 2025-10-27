"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useLocation } from "react-router-dom";

// 🔹 Hero data by route
const heroDataMap = {
  "/projects": {
    title: "Off Plans",
    backgroundImage: "AboutHero.jpg",
    underline: true,
  },
  "/movein": {
    title: "Ready to Move-in",
    backgroundImage: "AboutHero.jpg",
    underline: true,
  },
};

// 🔹 Letter animation (from AboutHero)
const letterAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// 🔹 Vertical line animation
const lineAnimation = {
  hidden: { scaleY: 0, opacity: 0, originY: 0 },
  visible: {
    scaleY: 1,
    opacity: 1,
    originY: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const ProjectHero = () => {
  const location = useLocation();
  const projectHeroData =
    heroDataMap[location.pathname] || heroDataMap["/projects"];

  const [trails, setTrails] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const trailIdRef = useRef(0);

  // 🔹 Smooth cursor spring animation
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // 🔹 Intersection Observer (activate only when in view)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // 🔹 Cursor + Particle Trail (only active when visible)
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isVisible) return;

      const x = e.clientX;
      const y = e.clientY;

      cursorX.set(x);
      cursorY.set(y);

      const newTrail = { id: trailIdRef.current++, x, y, timestamp: Date.now() };
      setTrails((prev) => [...prev, newTrail]);
    };

    window.addEventListener("mousemove", handleMouseMove);

    const interval = setInterval(() => {
      setTrails((prev) => prev.filter((t) => Date.now() - t.timestamp < 1200));
    }, 50);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(interval);
    };
  }, [isVisible, cursorX, cursorY]);

  return (
    <section
      ref={sectionRef}
      id="project-hero-section"
      className="w-full flex relative overflow-hidden cursor-none"
    >
      {/* 🔹 Custom Cursor */}
      <motion.div
        className="fixed pointer-events-none z-50 w-6 h-6 rounded-full border-2 border-white mix-blend-difference"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          x: "-50%",
          y: "-50%",
        }}
        animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.5 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />

      {/* 🔹 Particle Trails */}
      {isVisible &&
        trails.map((trail) => <TrailParticle key={trail.id} trail={trail} />)}

      {/* 🔹 Background */}
      <div className="w-full relative">
        <img
          src={projectHeroData.backgroundImage}
          alt={projectHeroData.title}
          className="w-full h-screen object-cover brightness-75"
        />

        {/* 🔹 Vertical Divider Lines */}
        <div className="absolute inset-0 flex justify-between pointer-events-none px-4 sm:px-6 md:px-10 lg:px-20">
          <motion.div
            variants={lineAnimation}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="w-px h-full bg-white/10"
          />
          <div className="relative flex-1">
            <motion.div
              variants={lineAnimation}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              transition={{ duration: 1, delay: 0.3 }}
              className="absolute left-1/4 top-0 w-px h-full bg-white/10"
            />
            <motion.div
              variants={lineAnimation}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute left-3/4 top-0 w-px h-full bg-white/10"
            />
          </div>
          <motion.div
            variants={lineAnimation}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            transition={{ duration: 1, delay: 0.7 }}
            className="w-px h-full bg-white/10"
          />
        </div>

        {/* 🔹 Title Content */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 max-w-6xl px-4 sm:px-6 md:px-10 lg:px-20">
          <motion.h1
            className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-lufga font-bold text-left flex flex-wrap"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            {projectHeroData.title.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={letterAnimation}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  delay: index * 0.03,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>

          {projectHeroData.underline && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={
                isVisible ? { width: "50%", opacity: 1 } : { width: 0, opacity: 0 }
              }
              transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
              className="mt-2 h-1 bg-white"
            />
          )}
        </div>
      </div>
    </section>
  );
};

// 🔹 Trail Particle Component (same as AboutHero)
const TrailParticle = ({ trail }) => {
  const [offset] = useState({
    x: (Math.random() - 0.5) * 100,
    y: (Math.random() - 0.5) * 100,
  });

  const randomDuration = 0.8 + Math.random() * 0.7;
  const randomDelay = Math.random() * 0.2;
  const randomScale = 0.5 + Math.random() * 0.5;
  const randomRotation = Math.random() * 360;

  return (
    <motion.div
      className="fixed pointer-events-none z-40"
      style={{ left: trail.x, top: trail.y }}
      initial={{
        opacity: 0.8,
        scale: 0,
        x: 0,
        y: 0,
        rotate: 0,
      }}
      animate={{
        opacity: 0,
        scale: randomScale,
        x: offset.x,
        y: offset.y,
        rotate: randomRotation,
      }}
      transition={{
        duration: randomDuration,
        delay: randomDelay,
        ease: [0.43, 0.13, 0.23, 0.96],
      }}
    >
      <div className="w-3 h-3 rounded-full bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 blur-sm" />
    </motion.div>
  );
};

export default ProjectHero;
