// src/components/PropertiesShowcase.jsx
import React, { useEffect, useRef, useState } from "react";

/* ---------------- Card Component ---------------- */
function PropertyCard({ image, title, metaLeft, metaRight, index }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, index * 100); // Stagger animation based on card index
          }
        });
      },
      { threshold: 0.5}
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [index]);

  return (
    <div
      ref={cardRef}
      className={`relative w-full overflow-hidden rounded-xl shadow-lg transition-all duration-700 transform ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
      style={{ aspectRatio: "375.85/333.37" }}
    >
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      <div className="absolute left-4 bottom-4 text-white">
        <h2 className="font-bold text-lg sm:text-xl mb-1">{title}</h2>
        <div className="flex gap-3 text-xs sm:text-sm">
          {metaLeft && <div>{metaLeft}</div>}
          {metaRight && <div>{metaRight}</div>}
        </div>
      </div>
    </div>
  );
}

/* ---------------- Showcase ---------------- */
export default function PropertiesShowcase() {
  const propertyImage =
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80";

  const properties = [
    { title: "Starlight Enclave", metaLeft: "Residence", metaRight: "Tower" },
    { title: "Starlight Enclave", metaLeft: "Residence", metaRight: "Tower" },
    { title: "Starlight Enclave", metaLeft: "Residence", metaRight: "Tower" },
    { title: "Starlight Enclave", metaLeft: "Residence", metaRight: "Tower" },
    { title: "Starlight Enclave", metaLeft: "Residence", metaRight: "Tower" },
    { title: "Starlight Enclave", metaLeft: "Residence", metaRight: "Tower" },
    { title: "Starlight Enclave", metaLeft: "Residence", metaRight: "Tower" },
    { title: "Starlight Enclave", metaLeft: "Residence", metaRight: "Tower" },
    { title: "Starlight Enclave", metaLeft: "Residence", metaRight: "Tower" },
  ];

  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHeaderVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  return (
    <section
      className="max-w-full mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-12 sm:py-16 md:py-20 lg:py-24 bg-backgound"
      style={{ scrollMarginTop: "100px" }}
    >
      <div className="bg-transparent rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-lg">
        {/* Section Header */}
        <header
          ref={headerRef}
          className={`mb-8 sm:mb-10 md:mb-12 text-start transition-all duration-700 transform ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-5"
          }`}
        >
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold
          bg-gradient-to-r from-[#4DAEC1] to-[#0A374E] text-transparent bg-clip-text">
            View Our Off-Plan Properties Here
          </h1>
          <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-gray-600 max-w-full lg:max-w-3xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the
          </p>
        </header>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {properties.map((property, index) => (
            <PropertyCard
              key={index}
              index={index}
              image={propertyImage}
              title={property.title}
              metaLeft={property.metaLeft}
              metaRight={property.metaRight}
            />
          ))}
        </div>
      </div>
    </section>
  );
}