// src/pages/ProjectShowcasePage.jsx
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/* ------------------- Sub-Components ------------------- */

function ProjectStatsCard({ title, price }) {
  return (
    <div className="flex flex-col items-center justify-center p-6 text-center border-t-2 border-b-2 border-transparent hover:border-teal-600 transition duration-300 cursor-pointer">
      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm sm:text-base text-gray-600">{price}</p>
    </div>
  );
}

/* ------------------- Data ------------------- */

const DUMMY_IMAGES = {
  luxuriousProp:    'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',

  galleryImages: [
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1593696140826-c58b0218b725?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1570129477085-f3708f307f0f?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
  ],
};

const statsData = [
  { title: "1 BR Apartment", price: "Starting from AED 1.8M" },
  { title: "2 BR Apartment", price: "Starting from AED 2.5M" },
  { title: "3 BR Apartment", price: "Starting from AED 3.2M" },
];

/* ------------------- Main Component ------------------- */

export default function ProjectShowcasePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const galleryLength = DUMMY_IMAGES.galleryImages.length;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryLength - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === galleryLength - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">

      {/* --------------------- Section 5: Ultimate Phase + Stats --------------------- */}
      <section className="pt-12 sm:pt-20 pb-16 sm:pb-24 bg-white">
        {/* Off-Plan Title with Line */}
       

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl ">
        <div className="flex items-center gap-3 sm:gap-4 mb-20 ">
          <p className="text-lg font-semibold text-primary whitespace-nowrap">about</p>
          <div className="flex-1 h-px bg-primary"></div>
        </div> 
          
          {/* Top: Image + Description */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start mb-16">
            <div className="w-full rounded-xl overflow-hidden shadow-xl">
              <img
                src={DUMMY_IMAGES.luxuriousProp}
                alt="Luxury Home"
                className="w-full h-96 sm:h-[28rem] md:h-[32rem] lg:h-[36rem] object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6 text-teal-800">
                The Ultimate Phase Of Luxury Living
              </h2>
              <div className="space-y-4 text-base sm:text-lg text-gray-700">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </p>
                <p>
                  Industry standard dummy text has survived through centuries and remains a popular placeholder.
                </p>
                <p>
                  Lorem Ipsum continues to be used for demonstrating visual elements and typography.
                </p>
              </div>
            </div>
          </div>

          {/* Middle: Project Stats */}
          <div className="text-center mb-12 mt-6 sm:mt-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-10">The Projects</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
              {statsData.map((stat, index) => (
                <ProjectStatsCard key={index} title={stat.title} price={stat.price} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --------------------- Section 6: Gallery --------------------- */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-10">
            Gallery
          </h2>

          <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl">
            <div className="w-full h-96 sm:h-[28rem] md:h-[32rem] lg:h-[36rem]">
              <img
                src={DUMMY_IMAGES.galleryImages[currentIndex]}
                alt={`Gallery Image ${currentIndex + 1}`}
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>

            {/* Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white p-4 sm:p-5 rounded-full shadow-lg transition duration-300"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white p-4 sm:p-5 rounded-full shadow-lg transition duration-300"
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>

            {/* Dot Indicator */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {DUMMY_IMAGES.galleryImages.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-400'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
