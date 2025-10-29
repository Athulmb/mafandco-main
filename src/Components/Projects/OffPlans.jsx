// src/components/PropertiesShowcase.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

/* ---------------- Card Component ---------------- */
function PropertyCard({
  image,
  title,
  metaLeft,
  metaRight,
  place,
  type,
  price,
  description,
  specifications,
  galleryImages,
  index,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setIsVisible(true), index * 120);
          }
        }),
      { threshold: 0.4 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, [index]);

  const handleCardClick = () => {
    navigate("/inner", {
      state: {
        title,
        metaLeft,
        metaRight,
        place,
        type,
        price,
        image,
        description,
        specifications,
        galleryImages,
      },
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 20,
      }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative w-full overflow-hidden rounded-xl shadow-lg cursor-pointer group"
      style={{ aspectRatio: "375.85/333.37" }}
    >
      {/* Background Image */}
      <motion.img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

      {/* Content Wrapper */}
      <motion.div
        className="absolute left-0 right-0 bottom-0 text-white p-5 md:p-6 flex flex-col justify-end"
        animate={{
          y: isHovered ? -10 : 0,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
      >
        <div>
          <h2 className="font-semibold text-lg md:text-xl mb-1">{title}</h2>
          <div className="flex gap-3 text-xs sm:text-sm opacity-90">
            {metaLeft && <div>{metaLeft}</div>}
            {metaRight && <div>{metaRight}</div>}
          </div>
        </div>

        {/* Hover Content */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{
            y: isHovered ? 0 : 50,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-3"
        >
          {place && <p className="text-xs sm:text-sm opacity-90">{place}</p>}
          {type && <p className="text-xs sm:text-sm opacity-90">{type}</p>}
          {price && (
            <div className="flex justify-between text-sm sm:text-base font-medium mt-1">
              <span>Starting Price</span>
              <span className="text-[#4DAEC1]">{price}</span>
            </div>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

/* ---------------- Showcase ---------------- */
export default function PropertiesShowcase() {
  const properties = [
    {
      title: "Starlight Enclave",
      metaLeft: "Residence",
      metaRight: "Tower",
      place: "MBR City, Dubai",
      type: "Type - Bedroom Villas",
      price: "11.2M AED",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      description:
        "Starlight Enclave offers premium living with modern amenities and stunning city views, blending luxury with comfort in the heart of Dubai.",
      specifications: [
        "3 & 4 Bedroom Units",
        "Infinity Pool",
        "Fitness Center",
        "Smart Home Integration",
        "24/7 Security & Concierge",
      ],
      galleryImages: [
        "https://images.unsplash.com/photo-1593696140826-c58b0218b725?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1570129477085-f3708f307f0f?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      ],
    },
    {
      title: "Palm View Villas",
      metaLeft: "Villa",
      metaRight: "Premium",
      place: "Dubai Hills Estate",
      type: "Type - 4BHK Villas",
      price: "8.9M AED",
      image:
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
      description:
        "Palm View Villas redefine luxury with private gardens, open living spaces, and serene surroundings near Dubai Hills Estate.",
      specifications: [
        "4 Bedrooms + Maid Room",
        "Private Garden & Pool",
        "Double Car Garage",
        "Solar Energy Ready",
      ],
      galleryImages: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1593696140826-c58b0218b725?auto=format&fit=crop&w=1200&q=80",
      ],
    },
  ];

  return (
    <section className="max-w-full mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-16 md:py-20 lg:py-24 bg-backgound">
      <div className="bg-transparent rounded-lg p-4 sm:p-6 md:p-8 lg:p-12">
        <motion.header className="mb-8 sm:mb-10 md:mb-12 text-start">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#4DAEC1] to-[#0A374E] text-transparent bg-clip-text">
            View Our Off-Plan Properties Here
          </h1>
          <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-gray-600 max-w-full lg:max-w-3xl">
            Discover our exclusive collection of off-plan residential projects
            with luxurious amenities and exceptional design.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {properties.map((property, index) => (
            <PropertyCard key={index} index={index} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
}
