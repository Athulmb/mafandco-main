"use client";
import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";

const eventsHeroData = {
  backgroundImage: "/AboutHero.jpg",
  title: "Our upcoming News",
  underline: true,
};

const TRAIL_IMAGES = [
  "/image1.jpg",
  "/image2.jpg",
  "/image3.jpg",
  "/image4.jpg",
  "/image5.jpg",
  "/image6.jpg",
  "/image7.jpg",
];

const TOTAL_IMAGES = 7;
const SPAWN_DELAY = 40;
const TRAIL_DURATION = 0.8;
const VELOCITY_DAMPENING = 0.85; // How much velocity slows down

const NewsHero = () => {
  const containerRef = useRef(null);
  const trailRef = useRef([]);
  const lastSpawnTime = useRef(0);
  const cursorVelocity = useRef({ x: 0, y: 0 });
  const lastCursorPos = useRef({ x: 0, y: 0 });
  const idCounter = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const now = Date.now();
      
      // Calculate velocity
      const deltaX = e.clientX - lastCursorPos.current.x;
      const deltaY = e.clientY - lastCursorPos.current.y;
      cursorVelocity.current = { x: deltaX, y: deltaY };
      lastCursorPos.current = { x: e.clientX, y: e.clientY };

      if (now - lastSpawnTime.current < SPAWN_DELAY) return;
      lastSpawnTime.current = now;

      const x = e.clientX;
      const y = e.clientY;
      const id = `trail-${idCounter.current++}`;
      const rotation = (Math.random() - 0.5) * 30;
      const scale = 0.8 + Math.random() * 0.4;
      const imgSrc = TRAIL_IMAGES[Math.floor(Math.random() * TRAIL_IMAGES.length)];

      // Create image element
      const img = document.createElement("img");
      img.src = imgSrc;
      img.id = id;
      img.style.position = "fixed";
      img.style.width = "120px";
      img.style.height = "auto";
      img.style.borderRadius = "16px";
      img.style.pointerEvents = "none";
      img.style.filter = "blur(2px) brightness(1.2)";
      img.style.mixBlendMode = "screen";
      img.style.zIndex = "10";

      containerRef.current?.appendChild(img);

      // Calculate end position based on velocity
      const velocityMultiplier = 120;
      const endX = x + cursorVelocity.current.x * velocityMultiplier;
      const endY = y + cursorVelocity.current.y * velocityMultiplier;

      // Animate with GSAP
      gsap.fromTo(
        img,
        {
          x: x - 60,
          y: y - 60,
          scale: scale,
          opacity: 1,
          rotation: rotation,
        },
        {
          x: endX - 60,
          y: endY - 60,
          scale: 0.2,
          opacity: 0,
          rotation: rotation + 45,
          duration: TRAIL_DURATION,
          ease: "power2.out",
          onComplete: () => {
            img.remove();
            trailRef.current = trailRef.current.filter((item) => item.id !== id);
          },
        }
      );

      // Track trail item
      trailRef.current.push({ id, element: img });

      // Limit total images on screen
      if (trailRef.current.length > TOTAL_IMAGES) {
        const oldest = trailRef.current.shift();
        gsap.to(oldest.element, {
          opacity: 0,
          duration: 0.3,
          onComplete: () => oldest.element.remove(),
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative w-full flex overflow-hidden">
      {/* Background */}
      <img
        src={eventsHeroData.backgroundImage}
        alt={eventsHeroData.title}
        className="w-full h-screen object-cover"
      />

      {/* Trail Container */}
      <div ref={containerRef} className="fixed top-0 left-0 w-full h-full" />

      {/* Heading */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20 max-w-6xl px-6 lg:px-20">
        <h1 className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-lufga font-bold flex flex-wrap">
          {eventsHeroData.title.split("").map((char, i) => (
            <span key={i}>
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        {eventsHeroData.underline && (
          <div className="mt-2 h-1 bg-white w-1/2" />
        )}
      </div>
    </section>
  );
};

export default NewsHero;