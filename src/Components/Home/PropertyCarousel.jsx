import { useState } from "react";
import { ArrowRight, ArrowLeft, Play } from "lucide-react";

export default function PropertyCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const slides = [
    {
      title: "Maf & Co Shows A New Concept In Property Show",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&h=900&fit=crop",
      video: "/Introducing Grand Polo Club & Resort by Emaar.mp4", // replace with your video URL
    },
    {
      title: "Innovative Urban Development",
      description:
        "Discover cutting-edge architectural designs that redefine modern living spaces with sustainability at its core",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600&h=900&fit=crop",
      video: "https://www.youtube.com/embed/VIDEO_ID_2",
    },
    {
      title: "Luxury Real Estate Showcase",
      description:
        "Experience premium properties featuring world-class amenities and breathtaking designs for sophisticated living",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&h=900&fit=crop",
      video: "https://www.youtube.com/embed/VIDEO_ID_3",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsPlaying(false); // reset video when changing slide
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsPlaying(false);
  };

  return (
    <div className="min-h-screen bg-backgound">
      {/* Auto-scrolling Header */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-scroll {
              animation: scroll 20s linear infinite;
            }
          `,
        }}
      />

      {/* Moving Header Section */}
      <div className="w-full overflow-hidden py-6 mb-12">
        <div className="bg-transparent mx-auto px-10 py-4 overflow-hidden w-full">
          <div className="flex animate-scroll whitespace-nowrap w-full items-center">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="flex items-center gap-12 sm:gap-16 lg:gap-20 mx-2 sm:mx-6"
              >
                {["Lorem Ipsum "].map((txt, idx) => (
                  <div
                    key={idx}
                    className="bg-white text-black px-12 sm:px-16 py-4 rounded-full shadow-lg"
                  >
                    <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide">
                      {txt}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Responsive Carousel Section */}
      <div className="w-full px-3 sm:px-6 md:px-8 lg:px-20">
        <div className="bg-white p-5 rounded-2xl shadow-lg overflow-hidden w-full mx-auto relative xl:aspect-[1300/600]">
          {/* Grid: two columns on lg, stacked on smaller screens */}
          <div className="grid grid-cols-1 lg:grid-cols-[37.7%_62.3%] gap-6 lg:gap-0 h-full bg-backgound rounded-xl">
            {/* Left Content */}
            <div className="flex flex-col justify-around p-4 sm:p-6 order-2 lg:order-1 w-5/6 ">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  {slides[currentSlide].title}
                </h2>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
                  {slides[currentSlide].description}
                </p>
                <button className="inline-flex items-center gap-2 bg-primary hover:bg-black text-white px-10 py-4 rounded-md font-semibold text-lg transition-colors">
                  Learn More
                  <ArrowRight size={20} />
                </button>
              </div>

              {/* Navigation Buttons */}
              <div className="flex gap-4 mt-8 justify-center lg:justify-start">
                <button
                  onClick={prevSlide}
                  className="w-12 h-12 flex items-center justify-center border-2 border-gray-300 rounded-md bg-white  transition-colors "
                  aria-label="Previous slide"
                >
                  <ArrowLeft size={24} />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-12 h-12 flex items-center justify-center border-2 border-gray-300 rounded-md bg-white  transition-colors "
                  aria-label="Next slide"
                >
                  <ArrowRight size={24} />
                </button>
              </div>
            </div>

            {/* Right Video/Image */}
            <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-full order-1 lg:order-2 flex items-center justify-center">
              {!isPlaying ? (
                <div className="relative w-full h-full">
                  <img
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].title}
                    className="w-full h-full object-cover rounded-xl transition-transform duration-500"
                  />
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="absolute inset-0 m-auto w-20 h-20 flex items-center justify-center bg-white/30 bg-opacity-50 text-white rounded-full hover:bg-opacity-70 transition-colors"
                  >
                    <Play size={40} />
                  </button>
                </div>
              ) : (
                <iframe
                  className="w-full h-full rounded-xl  "
                  src={`${slides[currentSlide].video}?autoplay=1`}
                  title="Video Player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture object-cover"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
