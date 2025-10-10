import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './CompanyOverview.css'; // blinking CSS

export default function CompanyOverview() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop",
      caption: "Lorem Ipsum Is Simply Dummy Text Of The Printing."
    },
    {
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop",
      caption: "Exceptional Architecture And Design Excellence."
    },
    {
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop",
      caption: "Luxury Living Spaces For Modern Lifestyles."
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  // Variants
  const fadeUpVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5 } }
  };

  const slideVariants = {
    initial: { opacity: 0, scale: 0.95, y: 20 },
    animate: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, scale: 0.95, y: -20, transition: { duration: 0.5 } }
  };

  const logoVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 0.8, y: 0, transition: { duration: 1, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-backgound py-12 sm:py-16 lg:py-16 px-3 sm:px-6 md:px-8 lg:px-20">

      {/* Top Header with Animation */}
      <motion.div
        variants={fadeUpVariants}
        initial="initial"
        animate="animate"
        className="mb-12 lg:mb-8"
      >
        <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
          <p className="text-sm sm:text-base text-gray-600 whitespace-nowrap">
            Company Overview
          </p>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight max-w-5xl
         bg-gradient-to-b from-[#4DAEC1] to-[#0A374E] text-transparent bg-clip-text">
          Exceptional Locations, Unrivaled
          <span className="block mt-1 sm:mt-2">Lifestyles. Exceptional Locations, Unrivaled Lifestyles.</span>
        </h1>
      </motion.div>

      {/* Carousel and Content */}
      <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12 lg:pt-20">

        {/* Column 1: Logo */}
        <div className="flex-shrink-0 w-full lg:w-[10%] flex justify-center lg:justify-start">
          <div className="w-full">
            <motion.img
              src="/awardslogo.png"
              alt="Company Logo"
              className="w-full h-full object-contain rounded-full p-1 sm:p-2"
              variants={fadeUpVariants}
              initial="initial"
              animate="animate"
            />
          </div>
        </div>

        {/* Column 2: Carousel */}
        <div className="w-full lg:w-[34%]">
          <div className="bg-white rounded-3xl shadow-xl p-4 sm:p-5 md:p-3 relative">

            {/* AnimatePresence for carousel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                variants={slideVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {/* Image */}
                <div className="relative overflow-hidden rounded-lg h-[220px] sm:h-[260px] md:h-[280px] lg:h-[300px]">
                  <img
                    src={slides[currentSlide].image}
                    alt="Property showcase"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Caption */}
                <p className="text-base w-[70%] sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 px-1 -mt-1 py-12">
                  {slides[currentSlide].caption}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-3 px-1">
              <button
                onClick={prevSlide}
                className="w-11 h-11 sm:w-16 sm:h-16 rounded-xl border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors bg-white shadow-sm"
                aria-label="Previous slide"
              >
                <ArrowLeft className="w-8 h-8 text-gray-700" />
              </button>
              <button
                onClick={nextSlide}
                className="w-11 h-11 sm:w-16 sm:h-16 rounded-xl border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors bg-white shadow-sm"
                aria-label="Next slide"
              >
                <ArrowRight className="w-8 h-8 text-gray-700" />
              </button>
            </div>

            {/* Logo at bottom right with initial animation + blinking */}
            <motion.img
              src="/logo2.png"
              alt="Company Logo"
              className="absolute bottom-4 right-8 w-16 sm:w-20 blinking-logo"
              variants={logoVariants}
              initial="initial"
              animate="animate"
            />
          </div>
        </div>

        {/* Column 3: Text Content */}
        <motion.div
          variants={fadeUpVariants}
          initial="initial"
          animate="animate"
          className="relative w-full lg:w-[38%]"
        >
          {/* Watermark */}
          <div className="absolute right-0 top-0 opacity-[0.03] pointer-events-none hidden lg:block">
            <svg width="300" height="300" viewBox="0 0 200 200" className="text-gray-900">
              <path
                d="M100 20 L120 60 L160 60 L130 85 L145 125 L100 100 L55 125 L70 85 L40 60 L80 60 Z"
                fill="currentColor"
              />
            </svg>
          </div>

          {/* Text */}
          <div className="space-y-5 sm:space-y-6 relative z-10">
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae risus eu leo volutpat volutpat. Vivamus egestas, ipsum nec ultrices accumsan, magna arcu blandit sapien, ac vulputate ipsum libero vitae mi. Duis vel sodales elit. Cras nec porttitor felis, vitae pretium magna. Suspendisse id justo non tortor imperdiet dictum in nec est.
            </p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a.Nullam feugiat, eros sit amet viverra egestas, lorem massa euismod velit, ac sollicitudin magna elit ut ligula. Aenean vitae sem ac nulla efficitur consequat. Maecenas faucibus tempor massa, in convallis nisl sagittis in. Fusce dignissim, justo at bibendum fermentum, lorem ex laoreet risus, sed luctus eros nisl sed nisi. Sed id tincidunt libero, vel consequat urna.
            </p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.Vestibulum consequat est eget nibh pulvinar, in iaculis orci varius. Nunc sit amet dolor metus. Cras malesuada, lacus non ultricies faucibus, turpis erat tincidunt nulla, ut tempus libero elit vel velit. Sed pharetra, mauris in rhoncus sagittis, magna justo viverra ligula, vel lacinia urna leo ac ligula.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
