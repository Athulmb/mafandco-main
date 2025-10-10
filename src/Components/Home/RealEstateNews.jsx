import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function RealEstateNewsSlider() {
  const articles = [
    {
      id: 1,
      category: "PROPERTY",
      date: "Jun 30, 2025",
      title: "Lorem Ipsum Is Simply Dummy Text Of The Printing",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      category: "MINIMAL",
      date: "Jun 30, 2025",
      title: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typeset",
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop",
    },
    {
      id: 3,
      category: "LUXURY",
      date: "Jun 30, 2025",
      title: "Lorem Ipsum Is Simply Dummy Text Of The Printing",
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop",
    },
    {
      id: 4,
      category: "MODERN",
      date: "Jul 05, 2025",
      title: "Another Example of Modern Property News",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop",
    },
    {
      id: 5,
      category: "DESIGN",
      date: "Jul 08, 2025",
      title: "Modern Design Ideas for Urban Properties",
      image:
        "https://images.unsplash.com/photo-1599423300746-b62533397364?w=400&h=300&fit=crop",
    },
  ];

  const sliderRef = useRef(null);
  const [hoveredId, setHoveredId] = useState(null);
  const [visibleMiddleIndex, setVisibleMiddleIndex] = useState(1); // default to 2nd card visible

  // Calculate middle card based on screen size
  const updateMiddleIndex = () => {
    if (window.innerWidth >= 1024) {
      setVisibleMiddleIndex(1); // middle of 3 visible cards
    } else if (window.innerWidth >= 768) {
      setVisibleMiddleIndex(0); // middle of 2 visible cards
    } else {
      setVisibleMiddleIndex(0); // only 1 visible card
    }
  };

  useEffect(() => {
    updateMiddleIndex();
    window.addEventListener("resize", updateMiddleIndex);
    return () => window.removeEventListener("resize", updateMiddleIndex);
  }, []);

  const scrollLeft = () => {
    const cardWidth = sliderRef.current.firstChild.offsetWidth + 24;
    sliderRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
  };

  const scrollRight = () => {
    const cardWidth = sliderRef.current.firstChild.offsetWidth + 24;
    sliderRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
  };

  return (
    <section className="min-h-screen bg-backgound py-12 px-4 sm:px-6 lg:px-20">
      <div className="max-w-full mx-auto">
        {/* Top Section */}
        <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
          <p className="text-sm sm:text-base text-gray-600 whitespace-nowrap">
            News & Insights
          </p>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Header & Button */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight
             bg-gradient-to-b from-[#4DAEC1] to-[#0A374E] text-transparent bg-clip-text">
              Lorem Ipsum Is Simply
              <br />
              Dummy Text Of The Printing
            </h1>
          </div>
          <button className="bg-primary hover:bg-black text-white px-7 py-4 text-xl rounded-lg font-semibold transition-colors whitespace-nowrap">
            More News
          </button>
        </div>

        {/* Slider */}
        <div className="relative">
          {/* Arrows */}
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
            className="flex overflow-x-auto scrollbar-hide py-4 gap-6"
          >
            {articles.map((article, index) => {
              const isActive =
                hoveredId === article.id ||
                (hoveredId === null && index === visibleMiddleIndex);

              return (
                <motion.div
                  key={article.id}
                  className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 bg-white rounded-3xl shadow-lg relative transition-shadow flex flex-col"
                  style={{ aspectRatio: 437.66 / 504.41 }}
                  onMouseEnter={() => setHoveredId(article.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Image */}
                  <div className="w-full h-3/5 overflow-hidden rounded-2xl relative">
                    <motion.img
                      src={article.image}
                      alt={article.title}
                      animate={
                        isActive
                          ? {
                              width: "96%",
                              height: "96%",
                              top: "2%",
                              left: "2%",
                            }
                          : {
                              width: "30%",
                              height: "40%",
                              top: "2%",
                              left: "2%",
                            }
                      }
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="absolute object-cover rounded-2xl"
                    />
                  </div>

                  {/* Content */}
                  <div className="px-6 sm:px-8 h-auto flex-1 flex flex-col w-full justify-center">
                    <div className="flex flex-col gap-6">
                      <div className="flex items-center gap-8">
                        <span className="text-md font-lufga text-gray-900 uppercase tracking-wider px-2 py-1 border border-gray-300 rounded-full">
                          {article.category}
                        </span>
                        <span className="text-md text-gray-500">
                          {article.date}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900">
                          {article.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
