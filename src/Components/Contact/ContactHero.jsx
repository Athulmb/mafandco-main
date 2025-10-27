"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const contactHeroData = {
  backgroundImage: "AboutHero.jpg", // ✅ Replace with your actual image path
  title: "Tailored Real Estate Solutions To Meet Every Need",
  underline: true,
};

// ✅ Letter animation for title
const letterAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ContactHero = () => {
  const [trails, setTrails] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const trailIdRef = useRef(0);

  // ✅ Motion values for smooth cursor movement
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // ✅ Detect when ContactHero section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // ✅ Handle cursor + trail animation
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isVisible) return; // Only active when visible

      const x = e.clientX;
      const y = e.clientY;

      cursorX.set(x);
      cursorY.set(y);

      // Add a trail particle
      const newTrail = {
        id: trailIdRef.current++,
        x,
        y,
        timestamp: Date.now(),
      };
      setTrails((prev) => [...prev, newTrail]);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Remove old trails
    const interval = setInterval(() => {
      setTrails((prev) => prev.filter((trail) => Date.now() - trail.timestamp < 1500));
    }, 50);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(interval);
    };
  }, [isVisible, cursorX, cursorY]);

  return (
    <section
      ref={sectionRef}
      id="contact-hero-section"
      className="w-full flex relative overflow-hidden cursor-none"
    >
      {/* ✅ Custom Cursor */}
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

      {/* ✅ Trail Particles */}
      {isVisible &&
        trails.map((trail) => <TrailParticle key={trail.id} trail={trail} />)}

      {/* ✅ Background Image */}
      <div className="w-full relative">
        <img
          src={contactHeroData.backgroundImage}
          alt={contactHeroData.title}
          className="w-full h-screen object-cover filter brightness-75"
        />

        {/* ✅ Content */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 max-w-4xl px-4 sm:px-6 md:px-10 lg:px-20">
          {/* Animated Heading */}
          <motion.h1
            className="text-white text-2xl pt-4 sm:text-4xl md:text-5xl lg:text-7xl font-lufga font-bold text-left flex flex-wrap"
            initial="hidden"
            animate="visible"
          >
            {contactHeroData.title.split("").map((char, index) => (
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

          {/* ✅ Underline Animation */}
          {contactHeroData.underline && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "50%", opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
              className="mt-2 h-1 bg-white"
            />
          )}
        </div>
      </div>
    </section>
  );
};

// ✅ Trail Particle Component
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
      style={{
        left: trail.x,
        top: trail.y,
      }}
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

export default ContactHero;
