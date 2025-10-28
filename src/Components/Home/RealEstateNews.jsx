import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { NEWS_API, BASE_URL } from "../../config";

export default function RealEstateNewsSlider() {
  const [articles, setArticles] = useState([]);
  const [hoveredId, setHoveredId] = useState(null);
  const [visibleMiddleIndex, setVisibleMiddleIndex] = useState(1);
  const [loading, setLoading] = useState(true);

  const sliderRef = useRef(null);

  // ✅ Fallback Data (used only if API fails)
  const fallbackArticles = [
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
  ];

  // ✅ Fetch dynamic data from API
  const fetchProperties = async () => {
    const token = localStorage.getItem("token");
    console.log("🟢 Fetching properties from API:", NEWS_API);
    console.log("🔑 Using token:", token ? "Present ✅" : "Missing ❌");

    try {
      const res = await fetch(NEWS_API, {
        headers: { Authorization: `Bearer ${token}` },
      });

      console.log("📩 API Response Status:", res.status);

      if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
      const data = await res.json();
      console.log("📦 Raw API Data:", data);

      if (data?.properties?.length > 0) {
        console.log(`✅ ${data.properties.length} properties fetched successfully!`);

        const formatted = data.properties.map((item) => ({
          id: item._id,
          category: item.category || "PROPERTY",
          date: item.date ? new Date(item.date).toDateString() : "No Date",
          title: item.title || "Untitled Property",
          image: item.image
            ? item.image.startsWith("http")
              ? item.image
              : `${BASE_URL}${item.image}`
            : "https://via.placeholder.com/400x300?text=No+Image",
        }));

        setArticles(formatted);
      } else {
        console.warn("⚠️ No properties found — using fallback data.");
        setArticles(fallbackArticles);
      }
    } catch (err) {
      console.error("❌ Fetch properties failed:", err);
      setArticles(fallbackArticles);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  // ✅ Update middle index based on screen width
  const updateMiddleIndex = () => {
    setVisibleMiddleIndex(window.innerWidth >= 1024 ? 1 : 0);
  };

  useEffect(() => {
    updateMiddleIndex();
    window.addEventListener("resize", updateMiddleIndex);
    return () => window.removeEventListener("resize", updateMiddleIndex);
  }, []);

  // ✅ Scroll controls
  const scrollLeft = () => {
    const cardWidth = sliderRef.current.firstChild.offsetWidth + 24;
    sliderRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
  };

  const scrollRight = () => {
    const cardWidth = sliderRef.current.firstChild.offsetWidth + 24;
    sliderRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
  };

  if (loading) {
    return (
      <section className="min-h-screen flex justify-center items-center">
        <p className="text-gray-500 text-lg">Loading news...</p>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-backgound py-12 px-4 sm:px-6 lg:px-20">
      <div className="max-w-full mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
          <p className="text-sm sm:text-base text-gray-600 whitespace-nowrap">
            News & Insights
          </p>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight bg-gradient-to-b from-[#4DAEC1] to-[#0A374E] text-transparent bg-clip-text">
            Latest Property Updates
          </h1>
          <button className="bg-primary hover:bg-black text-white px-7 py-4 text-xl rounded-lg font-semibold transition-colors whitespace-nowrap">
            More News
          </button>
        </div>

        {/* Slider */}
        <div className="relative">
          {/* Navigation arrows */}
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
                        <span className="text-md uppercase tracking-wider px-2 py-1 border border-gray-300 rounded-full">
                          {article.category}
                        </span>
                        <span className="text-md text-gray-500">
                          {article.date}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {article.title}
                      </h3>
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
