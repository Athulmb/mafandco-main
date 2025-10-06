import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function RealEstateNewsSlider() {
  const articles = [
    {
      id: 1,
      category: "PROPERTY",
      date: "Jun 30, 2025",
      title: "Lorem Ipsum Is Simply Dummy Text Of The Printing",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      category: "MINIMAL",
      date: "Jun 30, 2025",
      title: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typeset",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop",
    },
    {
      id: 3,
      category: "LUXURY",
      date: "Jun 30, 2025",
      title: "Lorem Ipsum Is Simply Dummy Text Of The Printing",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop",
    },
    {
      id: 4,
      category: "MODERN",
      date: "Jul 05, 2025",
      title: "Another Example of Modern Property News",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop",
    },
  ];

  const sliderRef = useRef(null);

  const cardWidth = 424; // px
  const gap = 24; // px

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -(cardWidth + gap), behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: cardWidth + gap, behavior: "smooth" });
  };

  return (
    <section className="min-h-screen bg-backgound py-12 px-4 sm:px-6 lg:px-20">
      <div className="max-w-full mx-auto">

        {/* Top Section */}
        <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
          <p className="text-sm sm:text-base text-gray-600 whitespace-nowrap">News & Insights</p>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Lorem Ipsum Is Simply<br />Dummy Text Of The Printing
            </h1>
          </div>
          <button className="bg-primary hover:bg-black text-white px-6 py-3 rounded font-semibold transition-colors whitespace-nowrap">
            More News
          </button>
        </div>

        {/* Slider */}
        <div className="relative">
          {/* Arrow Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 z-10">
            <button
              onClick={scrollLeft}
              className="p-2 bg-white rounded-full shadow hover:bg-gray-100 transition"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-0 z-10">
            <button
              onClick={scrollRight}
              className="p-2 bg-white rounded-full shadow hover:bg-gray-100 transition"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>

          {/* Cards */}
          <div
            ref={sliderRef}
            className="flex overflow-x-auto scrollbar-hide py-4"
            style={{ gap: `${gap}px` }}
          >
            {articles.map((article) => (
         <motion.div
         key={article.id}
         className="flex-shrink-0 w-[32%] bg-white rounded-3xl transition-shadow relative"
         style={{ aspectRatio: 437.66 / 504.41 }} // maintain ratio
       >
         {/* Image Wrapper */}
         <div className="w-full h-3/5 overflow-hidden rounded-2xl relative">
           <motion.img
             src={article.image}
             alt={article.title}
             initial={{ width: "30%", height: "40%", top: "2%", left: "2%", position: "absolute" }}
             whileHover={{ width: "96%", height: "96%", top: "2%", left: "2%" }}
             transition={{ duration: 0.5, ease: "easeOut" }}
             className="object-cover rounded-2xl"
           />
         </div>
       
         {/* Content */}
         <div className="p-6 h-2/5 pt-16">
           <div className="flex items-center gap-3 mb-3">
             <span className="text-xs font-semibold text-gray-900 uppercase tracking-wider">
               {article.category}
             </span>
             <span className="text-xs text-gray-500">{article.date}</span>
           </div>
           <h3 className="text-lg font-bold text-gray-900 mb-4">{article.title}</h3>
           <button className="text-teal-700 hover:text-teal-800 text-sm font-semibold transition-colors">
             Read More
           </button>
         </div>
       </motion.div>
       

           
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
