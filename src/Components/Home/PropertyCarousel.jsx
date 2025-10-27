import { useState, useRef, useEffect } from "react";
import { Play, Maximize2, Volume2 } from "lucide-react";
import { motion } from "framer-motion";

export default function PropertyCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const carouselRef = useRef(null);
  const scrollTimeout = useRef(null);

  const slides = [
    {
      title: "Maf & Co Shows A New Concept In Property Show",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&h=900&fit=crop",
      video: "/Introducing Grand Polo Club & Resort by Emaar.mp4",
    },
    {
      title: "Innovative Urban Development",
      description:
        "Discover cutting-edge architectural designs that redefine modern living spaces with sustainability at its core",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&h=900&fit=crop",
      video: "https://youtu.be/_S0HbgDDWRQ?si=9PTMNBfjpWW-GJ0p",
    },
    {
      title: "Luxury Real Estate Showcase",
      description:
        "Experience premium properties featuring world-class amenities and breathtaking designs for sophisticated living",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&h=900&fit=crop",
      video: "https://youtu.be/_S0HbgDDWRQ?si=9PTMNBfjpWW-GJ0p",
    },
  ];

  const isYouTube = (url) =>
    url.includes("youtube.com") || url.includes("youtu.be");

  const getEmbedUrl = (url) => {
    if (url.includes("youtu.be")) {
      const id = url.split("youtu.be/")[1].split("?")[0];
      return `https://www.youtube.com/embed/${id}?autoplay=1&mute=${
        isMuted ? 1 : 0
      }&fs=1&modestbranding=1&rel=0`;
    }
    if (url.includes("youtube.com/watch?v=")) {
      const id = new URL(url).searchParams.get("v");
      return `https://www.youtube.com/embed/${id}?autoplay=1&mute=${
        isMuted ? 1 : 0
      }&fs=1&modestbranding=1&rel=0`;
    }
    return url;
  };

  const handleFullScreen = () => {
    const videoEl = document.getElementById("video-player");
    if (videoEl && videoEl.requestFullscreen) {
      videoEl.requestFullscreen();
    }
  };

  // 🧭 Smooth snapping logic
  const handleScroll = () => {
    if (!carouselRef.current) return;
    const scrollLeft = carouselRef.current.scrollLeft;
    const width = carouselRef.current.offsetWidth;
    const index = Math.round(scrollLeft / width);

    setIsPlaying(false);
    setIsScrolling(true);

    clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => {
      smoothScrollTo(index * width);
      setCurrentSlide(index);
      setIsScrolling(false);
    }, 100);
  };

  const smoothScrollTo = (target) => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollTo({
      left: target,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    return () => clearTimeout(scrollTimeout.current);
  }, []);

  return (
    <div className="min-h-screen bg-backgound flex flex-col items-center justify-center">
      {/* 🔹 Auto-scrolling Text Section */}
      <div className="w-full overflow-hidden bg-transparent py-12 mb-20 relative px-3 sm:px-6 md:px-8 lg:px-20">
        <div className="relative flex whitespace-nowrap">
          <motion.div
            className="flex gap-32 text-4xl sm:text-6xl lg:text-8xl font-light text-[#0A374E] tracking-wide"
            style={{
              fontFamily: "Georgia, serif",
              whiteSpace: "nowrap",
            }}
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: 40,
              ease: "linear",
            }}
          >
            <span className="flex gap-32 items-center">
              <span>Next-Gen Living</span>
              <span>Seamless Home Connectivity</span>
              <span>Modern Luxury</span>
              <span>Future Ready Spaces</span>
            </span>
            <span className="flex gap-32 items-center ml-32">
              <span>Next-Gen Living</span>
              <span>Seamless Home Connectivity</span>
              <span>Modern Luxury</span>
              <span>Future Ready Spaces</span>
            </span>
          </motion.div>
        </div>
      </div>

      {/* 🔹 Property Carousel Section */}
      <div className="w-full px-3 sm:px-6 md:px-8 lg:px-20">
        <div className="bg-white p-5 rounded-2xl overflow-hidden w-full mx-auto relative xl:aspect-[1300/600]">
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 h-full scrollbar-none -mb-2 scroll-smooth"
          >
            {slides.map((slide, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-full grid grid-cols-1 lg:grid-cols-[37.7%_62.3%] gap-6 lg:gap-0 h-full rounded-xl bg-backgound snap-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: currentSlide === index ? 1 : 0.6 }}
                transition={{ duration: 0.6 }}
              >
                {/* Left Content */}
                <div className="flex flex-col justify-around p-4 sm:p-6 w-5/6">
                  <h2 className="text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-b from-[#4DAEC1] to-[#0A374E] text-transparent bg-clip-text">
                    {slide.title}
                  </h2>
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
                    {slide.description}
                  </p>
                  <button className="inline-flex items-center gap-2 bg-primary hover:bg-black text-white px-10 py-4 rounded-md font-semibold text-lg transition-colors">
                    Learn More
                  </button>
                </div>

                {/* Right Media */}
                <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-full flex items-center justify-center">
                  {!isPlaying ? (
                    <>
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover rounded-xl"
                      />
                      <button
                        onClick={() => setIsPlaying(true)}
                        className="absolute inset-0 m-auto w-20 h-20 flex items-center justify-center bg-white/40 text-white rounded-full hover:bg-white/60 transition"
                      >
                        <Play size={40} />
                      </button>
                    </>
                  ) : isYouTube(slide.video) ? (
                    <iframe
                      className="w-full h-full rounded-xl object-cover"
                      src={getEmbedUrl(slide.video)}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <div className="relative w-full h-full">
                      <video
                        id="video-player"
                        src={slide.video}
                        autoPlay
                        controls
                        muted={isMuted}
                        className="w-full h-full object-cover rounded-xl"
                      />
                      <div className="absolute bottom-4 right-4 flex gap-3">
                        <button
                          onClick={() => setIsMuted(!isMuted)}
                          className="p-2 bg-black/50 rounded-full text-white"
                        >
                          <Volume2 size={20} />
                        </button>
                        <button
                          onClick={handleFullScreen}
                          className="p-2 bg-black/50 rounded-full text-white"
                        >
                          <Maximize2 size={20} />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
