import React, { useState } from 'react';
import { ArrowLeft, arrowleft, ArrowRight, arrowright } from 'lucide-react';

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

  return (
    <div className="min-h-screen bg-backgound py-12 sm:py-16 lg:py-20 px-3 sm:px-6 md:px-8 lg:px-20">
      {/* <div className="w-full mx-auto"> */}
      {/* Top Header */}
      <div className="mb-12 lg:mb-16">
        <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
          <p className="text-sm sm:text-base text-gray-600 whitespace-nowrap">
            Company Overview
          </p>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight max-w-5xl">
          Exceptional Locations, Unrivaled
          <span className="block mt-1 sm:mt-2">Lifestyles. Exceptional Locations, Unrivaled Lifestyles.</span>
        </h1>
      </div>

      {/* === Full-width 3-column row === */}
      <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12 lg:pt-20">

        {/* Column 1: Logo */}
        <div className="flex-shrink-0 w-full lg:w-[8%] flex justify-center lg:justify-start">
          <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28">
            <div className="w-full h-full rounded-full border-2 border-yellow-700 flex items-center justify-center p-3 sm:p-4">
              <div className="text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-1 border border-yellow-700 rounded-full flex items-center justify-center">
                  <div className="text-yellow-700 text-xs font-serif">E</div>
                </div>
                <div className="text-[5px] sm:text-[6px] text-yellow-700 uppercase tracking-wider leading-tight">
                  Exceptional<br />Solutions<br />Since 1990
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[34%]">
          <div className="bg-white rounded-3xl shadow-xl p-4 sm:p-5 md:p-3 relative">
            {/* Reduced height image */}
            <div className="relative overflow-hidden rounded-lg h-[220px] sm:h-[260px] md:h-[280px] lg:h-[300px]">
              <img
                src={slides[currentSlide].image}
                alt="Property showcase"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Caption */}
            <p className="text-base w-[70%] sm:text-lg font-medium text-gray-900 mb-2 sm:mb-3 px-1 -mt-1 py-12">
              {slides[currentSlide].caption}
            </p>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-3 px-1">
              <button
                onClick={prevSlide}
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors bg-white shadow-sm"
                aria-label="Previous slide"
              >
                <ArrowLeft className="w-5 h-5 text-gray-700" />
              </button>
              <button
                onClick={nextSlide}
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors bg-white shadow-sm"
                aria-label="Next slide"
              >
                <ArrowRight className="w-5 h-5 text-gray-700" />
              </button>
            </div>

            {/* Logo at bottom right */}
            <img
              src="/logo2.png"
              alt="Company Logo"
              className="absolute bottom-4 right-8 w-16 sm:w-20 opacity-80"
            />
          </div>
        </div>



        {/* Column 3: Text Content */}
        <div className="relative w-full lg:w-[38%]">
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
        </div>
      </div>
    </div>
  );
}
