import React, { useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function CompanyFacts() {
  const facts = [
    { label: "Property deliver", value: 1000, suffix: "+" },
    { label: "Clients served worldwide", value: 2300, suffix: "+" },
    { label: "Have awards more", value: 5, suffix: "+" },
    { label: "Daily quote msg.", value: 12, suffix: "+" },
    { label: "Ratings out of 5.0", value: 4.9, suffix: "" },
  ];

  const logos = [
    { src: "/factlogo1.png" },
    { src: "/factlogo2.png" },
    { src: "/factlogo3.png" },
    { src: "/factlogo4.png" },
    { src: "/factlogo5.png" },
  ];

  // 🔹 Framer Motion fade-up variant
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  // 🔹 Counter component for animated numbers
  const AnimatedNumber = ({ value, duration = 1.5, suffix = "" }) => {
    const [count, setCount] = useState(0);
    const controls = useAnimation();
    const ref = React.useRef(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
      if (inView) {
        controls.start({ opacity: 1, y: 0 });
        let start = 0;
        const increment = value / (duration * 60); // 60fps
        const animate = () => {
          start += increment;
          if (start < value) {
            setCount(start);
            requestAnimationFrame(animate);
          } else {
            setCount(value);
          }
        };
        requestAnimationFrame(animate);
      }
    }, [inView, value, duration, controls]);

    return (
      <motion.p
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl xl:text-7xl font-bold text-primary mt-4"
      >
        {count.toFixed(value % 1 !== 0 ? 1 : 0)}
        {suffix}
      </motion.p>
    );
  };

  return (
    <div className="w-full bg-backgound py-16 md:py-20 px-4 sm:px-6 lg:px-20 overflow-hidden">
      <div className="max-w-full mx-auto">
        {/* Title */}
        <motion.p
          className="text-2xl md:text-xl text-center text-gray-700 mb-12 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          Some more fun facts about company
        </motion.p>

        {/* 🔹 Facts Grid */}
        <div
          className="
            grid 
            grid-cols-2 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4 
            xl:grid-cols-5 
            border-l-2 
            border-gray-300
          "
        >
          {facts.map((fact, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-center justify-center text-center px-6 py-6 border-r-2 border-gray-300"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <p className="text-gray-600 text-lg md:text-xl font-medium break-words leading-snug text-center">
                {fact.label}
              </p>
              {/* Animated number */}
              <AnimatedNumber value={fact.value} suffix={fact.suffix} />
            </motion.div>
          ))}
        </div>

        {/* Divider Line */}
        <motion.div
          className="flex justify-center my-12 md:my-16"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-full max-w-5xl h-[2px] bg-gray-300"></div>
        </motion.div>

        {/* 🔹 Logos Section with same fade animation */}
        <div className="pt-12 md:pt-16 overflow-hidden">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
            {logos.map((logo, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center h-16 md:h-20 px-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <img
                  src={logo.src}
                  alt={`Company logo ${index + 1}`}
                  className="h-12 md:h-14 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
