import { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

export default function PropertyCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Maf & Co Shows A New Concept In Property Show",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop"
    },
    {
      title: "Innovative Urban Development",
      description: "Discover cutting-edge architectural designs that redefine modern living spaces with sustainability at its core",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop"
    },
    {
      title: "Luxury Real Estate Showcase",
      description: "Experience premium properties featuring world-class amenities and breathtaking designs for sophisticated living",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-backgound">
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 20s linear infinite;
          }
        `
      }} />

      {/* Auto-scrolling Header */}
      <div className="w-full overflow-hidden bg-backgound py-6 mb-8 sm:mb-12">
        <div className="flex animate-scroll whitespace-nowrap">
          <div className="flex gap-16 px-8">
            <span className="text-2xl sm:text-3xl font-medium text-gray-900">Lorem Ipsum E</span>
            <span className="text-2xl sm:text-3xl font-medium text-gray-900">Lorem Ipsum</span>
            <span className="text-2xl sm:text-3xl font-medium text-gray-900">Lorem Ipsum Em</span>
            <span className="text-2xl sm:text-3xl font-medium text-gray-900">Lorem Ipsum E</span>
            <span className="text-2xl sm:text-3xl font-medium text-gray-900">Lorem Ipsum</span>
            <span className="text-2xl sm:text-3xl font-medium text-gray-900">Lorem Ipsum Em</span>
          </div>
          <div className="flex gap-16 px-8">
            <span className="text-2xl sm:text-3xl font-medium text-gray-900">Lorem Ipsum E</span>
            <span className="text-2xl sm:text-3xl font-medium text-gray-900">Lorem Ipsum</span>
            <span className="text-2xl sm:text-3xl font-medium text-gray-900">Lorem Ipsum Em</span>
            <span className="text-2xl sm:text-3xl font-medium text-gray-900">Lorem Ipsum E</span>
            <span className="text-2xl sm:text-3xl font-medium text-gray-900">Lorem Ipsum</span>
            <span className="text-2xl sm:text-3xl font-medium text-gray-900">Lorem Ipsum Em</span>
          </div>
        </div>
      </div>

      {/* Main Carousel Container with Navbar-like padding */}
      <div className="px-3 sm:px-6 md:px-8 lg:px-20">
        <div className="bg-white p-5 rounded-2xl shadow-lg overflow-hidden h-5/6">
        <div className="grid grid-cols-1 lg:grid-cols-[41%_59%] gap-0 ">
  {/* Left Content Section */}
  <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-between bg-backgound">
    <div className="max-w-full">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
        {slides[currentSlide].title}
      </h2>
      <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
        {slides[currentSlide].description}
      </p>
      <button className="inline-flex items-center gap-2 bg-teal-700 hover:bg-teal-800 text-white px-6 py-3 rounded-md font-medium transition-colors">
        Learn More
        <ArrowRight size={20} />
      </button>

      {/* Navigation Arrows */}
      <div className="flex gap-4 mt-12">
        <button
          onClick={prevSlide}
          className="w-12 h-12 flex items-center justify-center border-2 border-gray-300 rounded-md hover:border-teal-700 hover:text-teal-700 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="w-12 h-12 flex items-center justify-center border-2 border-gray-300 rounded-md hover:border-teal-700 hover:text-teal-700 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  </div>

  {/* Right Image Section */}
  <div className="relative h-64 sm:h-96 lg:h-auto min-h-[400px] rounded-lg bg-backgound">
    <img
      src={slides[currentSlide].image}
      alt={slides[currentSlide].title}
      className="w-full h-full object-cover rounded-xl"
    />
  </div>
</div>


        </div>
      </div>
    </div>
  );
}