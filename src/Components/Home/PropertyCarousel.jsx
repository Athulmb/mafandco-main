import { useState } from "react";
import { ArrowRight, ArrowLeft, Play, Maximize2, Volume2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function PropertyCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

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
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600&h=900&fit=crop",
      video: "https://youtu.be/_S0HbgDDWRQ?si=9PTMNBfjpWW-GJ0p",
    },
    {
      title: "Luxury Real Estate Showcase",
      description:
        "Experience premium properties featuring world-class amenities and breathtaking designs for sophisticated living",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&h=900&fit=crop",
      video: "https://youtu.be/_S0HbgDDWRQ?si=9PTMNBfjpWW-GJ0p",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsPlaying(false);
  };

  const isYouTube = (url) =>
    url.includes("youtube.com") || url.includes("youtu.be");

  // ✅ Convert YouTube URL to embed format
  const getEmbedUrl = (url) => {
    if (url.includes("youtu.be")) {
      const id = url.split("youtu.be/")[1].split("?")[0];
      return `https://www.youtube.com/embed/${id}?autoplay=1&mute=${isMuted ? 1 : 0}&fs=1&modestbranding=1&rel=0`;
    }
    if (url.includes("youtube.com/watch?v=")) {
      const id = new URL(url).searchParams.get("v");
      return `https://www.youtube.com/embed/${id}?autoplay=1&mute=${isMuted ? 1 : 0}&fs=1&modestbranding=1&rel=0`;
    }
    return url;
  };

  const leftContentVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, x: 50, transition: { duration: 0.6 } },
  };

  const rightMediaVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, x: -50, transition: { duration: 0.6 } },
  };

  // ✅ Fullscreen toggle for local videos
  const handleFullScreen = () => {
    const videoEl = document.getElementById("video-player");
    if (videoEl && videoEl.requestFullscreen) {
      videoEl.requestFullscreen();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Carousel Section */}
      <div className="w-full px-3 sm:px-6 md:px-8 lg:px-20">
        <div className="bg-white p-5 rounded-2xl shadow-lg overflow-hidden w-full mx-auto relative xl:aspect-[1300/600]">
          <div className="grid grid-cols-1 lg:grid-cols-[37.7%_62.3%] gap-6 lg:gap-0 h-full rounded-xl">
            {/* Left Content */}
            <div className="flex flex-col justify-around p-4 sm:p-6 order-2 lg:order-1 w-5/6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  variants={leftContentVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <h2 className="text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-b from-[#4DAEC1] to-[#0A374E] text-transparent bg-clip-text">
                    {slides[currentSlide].title}
                  </h2>
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
                    {slides[currentSlide].description}
                  </p>
                  <button className="inline-flex items-center gap-2 bg-primary hover:bg-black text-white px-10 py-4 rounded-md font-semibold text-lg transition-colors">
                    Learn More
                    <ArrowRight size={20} />
                  </button>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex gap-4 mt-8 justify-center lg:justify-start">
                <button
                  onClick={prevSlide}
                  className="w-12 h-12 flex items-center justify-center border-2 border-gray-300 rounded-md bg-white"
                >
                  <ArrowLeft size={24} />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-12 h-12 flex items-center justify-center border-2 border-gray-300 rounded-md bg-white"
                >
                  <ArrowRight size={24} />
                </button>
              </div>
            </div>

            {/* Right Media */}
            <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-full order-1 lg:order-2 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide + "-media"}
                  variants={rightMediaVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="relative w-full h-full"
                >
                  {!isPlaying ? (
                    <>
                      <img
                        src={slides[currentSlide].image}
                        alt={slides[currentSlide].title}
                        className="w-full h-full object-cover rounded-xl"
                      />
                      <button
                        onClick={() => setIsPlaying(true)}
                        className="absolute inset-0 m-auto w-20 h-20 flex items-center justify-center bg-white/40 text-white rounded-full hover:bg-white/60 transition"
                      >
                        <Play size={40} />
                      </button>
                    </>
                  ) : isYouTube(slides[currentSlide].video) ? (
                    <iframe
                      className="w-full h-full rounded-xl object-cover"
                      src={getEmbedUrl(slides[currentSlide].video)}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <div className="relative w-full h-full">
                      <video
                        id="video-player"
                        src={slides[currentSlide].video}
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
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
