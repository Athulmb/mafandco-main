import React, { useState, useEffect } from "react";
import { Briefcase, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { JOBS_API } from "../../config"; // ✅ Import your jobs endpoint

export default function JobListings() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch jobs using fetch()
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch(JOBS_API);
        const data = await res.json();

        if (data.success && Array.isArray(data.jobs)) {
          setJobs(data.jobs);
        } else {
          console.error("Invalid response format:", data);
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <p className="text-lg text-gray-600">Loading job listings...</p>
      </div>
    );
  }

  if (jobs.length === 0) {
    return (
      <div className="flex justify-center items-center py-20">
        <p className="text-lg text-gray-600">No jobs available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-12 px-3 sm:px-6 lg:px-20">
      <div className="max-w-full mx-auto">
        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                key={job._id || index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                onMouseMove={handleMouseMove}
                className={`relative rounded-lg shadow-md p-8 flex flex-col cursor-pointer xl:min-h-[520px] transition-all duration-300 overflow-hidden ${
                  isHovered ? "bg-gray-700 text-white" : "bg-white"
                }`}
              >
                {/* Card content */}
                <div
                  className={`transition-all duration-300 ${
                    isHovered ? "blur-sm" : "blur-0"
                  }`}
                >
                  {/* Icon */}
                  <div className="relative w-28 h-28 mb-8">
                    <div
                      className={`${
                        isHovered ? "bg-gray-800" : "bg-primary"
                      } rounded-2xl p-6 inline-block transition-colors duration-300`}
                    >
                      <Briefcase className="w-16 h-16 text-white" strokeWidth={2.5} />
                    </div>
                    <div
                      className={`${
                        isHovered ? "bg-gray-800" : "bg-primary"
                      } rounded-xl absolute bottom-1 right-1 p-3 transition-colors duration-300`}
                    >
                      <ArrowUpRight className="w-8 h-8 text-white" strokeWidth={3} />
                    </div>
                  </div>

                  {/* Title and Tag */}
                  <div className="flex items-start justify-between mb-4">
                    <h3
                      className={`text-2xl font-bold ${
                        isHovered ? "text-white" : "text-gray-900"
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
                      isHovered ? "text-gray-300" : "text-gray-600"
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
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      style={{ x: mousePos.x * 0.2, y: mousePos.y * 0.2 }}
                      className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    >
                      <div className="bg-transparent rounded-full p-6">
                        <img
                          src="/whatsapplogo.png"
                          alt="WhatsApp"
                          className="w-24 h-24 object-contain"
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
