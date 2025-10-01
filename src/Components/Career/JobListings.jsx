import React, { useState } from 'react';
import { Briefcase, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function JobListings() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const jobs = [
    { title: 'Real Estate Agent', tag: 'Full-Time', description: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Is Simply Dummy Text Of The Printing And' },
    { title: 'HR', tag: 'Full-Time', description: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Is Simply Dummy Text Of The Printing And' },
    { title: 'Team Leaders', tag: 'Full-Time', description: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Is Simply Dummy Text Of The Printing And' },
    { title: 'Marketing Intern', tag: 'Internship', description: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Is Simply Dummy Text Of The Printing And' },
    { title: 'Sales Manager', tag: 'Full-Time', description: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Is Simply Dummy Text Of The Printing And' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-3 sm:px-6 lg:px-20">
      <div className="max-w-full mx-auto">
        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {jobs.map((job, index) => {
            const isHovered = hoveredCard === index;

            const handleMouseMove = (e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left - rect.width / 2;
              const y = e.clientY - rect.top - rect.height / 2;
              setMousePos({ x, y });
            };

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                onMouseMove={handleMouseMove}
                className={`relative rounded-lg shadow-md p-8 flex flex-col cursor-pointer xl:min-h-[520px] transition-all duration-300 overflow-hidden ${
                  isHovered ? 'bg-gray-700 text-white' : 'bg-white'
                }`}
              >
                {/* Card content */}
                <div className={`transition-all duration-300 ${isHovered ? 'blur-sm' : 'blur-0'}`}>
                  {/* Icon */}
                  <div className="relative w-28 h-28 mb-8">
                    <div
                      className={`${
                        isHovered ? 'bg-gray-800' : 'bg-primary'
                      } rounded-2xl p-6 inline-block transition-colors duration-300`}
                    >
                      <Briefcase className="w-16 h-16 text-white" strokeWidth={2.5} />
                    </div>
                    <div
                      className={`${
                        isHovered ? 'bg-gray-800' : 'bg-primary'
                      } rounded-xl absolute bottom-1 right-1 p-3 transition-colors duration-300`}
                    >
                      <ArrowUpRight className="w-8 h-8 text-white" strokeWidth={3} />
                    </div>
                  </div>

                  {/* Title and Tag */}
                  <div className="flex items-start justify-between mb-4">
                    <h3
                      className={`text-2xl font-bold ${
                        isHovered ? 'text-white' : 'text-gray-900'
                      } transition-colors duration-300`}
                    >
                      {job.title}
                    </h3>
                    <span className="bg-primary/40 text-primary text-sm sm:text-base font-semibold px-3 py-1.5 rounded-full whitespace-nowrap ml-2">
                      {job.tag}
                    </span>
                  </div>

                  {/* Description */}
                  <p
                    className={`${
                      isHovered ? 'text-gray-300' : 'text-gray-600'
                    } text-base sm:text-lg mb-8 flex-grow leading-relaxed transition-colors duration-300`}
                  >
                    {job.description}
                  </p>

                  {/* Apply Button */}
                  <button className="bg-primary hover:bg-black text-white font-semibold py-3 px-7 rounded-full flex items-center justify-center gap-3 transition-colors self-start text-lg">
                    Apply Now
                    <ArrowUpRight className="w-5 h-5" strokeWidth={2.5} />
                  </button>
                </div>

                {/* WhatsApp Icon Overlay */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      style={{ x: mousePos.x * 0.2, y: mousePos.y * 0.2 }}
                      className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    >
                      <div className="bg-transparent rounded-full p-6">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="#ffffff"
                          className="w-10 h-10"
                        >
                          <path d="M16.6 14c-.2-.1-1.5-.7-1.7-.8c-.2-.1-.4-.1-.6.1c-.2.2-.6.8-.8 1c-.1.2-.3.2-.5.1c-.7-.3-1.4-.7-2-1.2c-.5-.5-1-1.1-1.4-1.7c-.1-.2 0-.4.1-.5c.1-.1.2-.3.4-.4c.1-.1.2-.3.2-.4c.1-.1.1-.3 0-.4c-.1-.1-.6-1.3-.8-1.8c-.1-.7-.3-.7-.5-.7h-.5c-.2 0-.5.2-.6.3c-.6.6-.9 1.3-.9 2.1c.1.9.4 1.8 1 2.6c1.1 1.6 2.5 2.9 4.2 3.7c.5.2.9.4 1.4.5c.5.2 1 .2 1.6.1c.7-.1 1.3-.6 1.7-1.2c.2-.4.2-.8.1-1.2l-.4-.2m2.5-9.1C15.2 1 8.9 1 5 4.9c-3.2 3.2-3.8 8.1-1.6 12L2 22l5.3-1.4c1.5.8 3.1 1.2 4.7 1.2c5.5 0 9.9-4.4 9.9-9.9c.1-2.6-1-5.1-2.8-7m-2.7 14c-1.3.8-2.8 1.3-4.4 1.3c-1.5 0-2.9-.4-4.2-1.1l-.3-.2l-3.1.8l.8-3l-.2-.3c-2.4-4-1.2-9 2.7-11.5S16.6 3.7 19 7.5c2.4 3.9 1.3 9-2.6 11.4" />
                        </svg>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Image Slider */}
        <div className="mt-12">
          <div className="relative w-full overflow-x-auto flex gap-4 py-4 scrollbar-hide">
            {[
              "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
              "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
              "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
              "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
                 "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
              "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
             
            ].map((img, idx) => (
              <div key={idx} className="min-w-[250px] sm:min-w-[300px] md:min-w-[350px] lg:min-w-[400px] rounded-lg overflow-hidden shadow-md flex-shrink-0">
                <img
                  src={img}
                  alt={`Gallery ${idx}`}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
