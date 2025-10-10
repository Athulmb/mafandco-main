import React from 'react';

export default function ImageSlider() {
  const images = [
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
  ];

  return (
    <div className="bg-gray-50 mt-12">
      <div className="relative w-full overflow-x-auto flex gap-3 sm:gap-4 py-4 scrollbar-hide px-3 sm:px-0">
        {images.map((img, idx) => (
          <div 
            key={idx} 
            className="rounded-lg overflow-hidden shadow-md flex-shrink-0"
            style={{ 
              width: 'calc(80% - 8px)',
              aspectRatio: '573.33 / 409.52'
            }}
          >
            <img
              src={img}
              alt={`Gallery ${idx}`}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
      <style jsx>{`
        @media (min-width: 640px) {
          .overflow-x-auto > div {
            width: calc(50% - 8px) !important;
          }
        }
        @media (min-width: 1024px) {
          .overflow-x-auto > div {
            width: calc(33.333% - 10.67px) !important;
          }
        }
      `}</style>
    </div>
  );
}