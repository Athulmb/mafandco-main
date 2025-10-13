import React, { useState, useEffect, useRef } from 'react';

const brochureContent = {
  heading: "Why Choose MAF & Co Properties LLC?",
  sections: [
    {
      key: 'prime',
      title: 'Prime Location Expertise',
      text: `Located in Business Bay, we offer unparalleled insights into Dubai's real estate landscape. 
      Our strategic position allows us to provide our clients with access to the most exclusive property investments and market trends.`,
      animation: { transform: 'translateX', from: '-30px' },
    },
    {
      key: 'luxury',
      title: 'Luxury Property Specialists',
      text: `Our portfolio includes a wide range of luxury homes, high-end villas, and prestigious apartments in Dubai's most desirable neighborhoods. 
      Whether you are interested in waterfront properties, golf course residences, or city-view apartments, we have something to match your lifestyle and preferences.`,
      images: [
        {
          src: "/abouus1.png",
          alt: "Professional consultation",
        },
        {
          src: "/aboutus2.png",
          alt: "Professional service",
        },
      ],
      animation: { transform: 'translateY', from: '30px' },
    },
    {
      key: 'client',
      title: 'Client-Centric Approach',
      text: `We prioritize your needs and work closely with you to provide tailored solutions for buying, selling, and leasing properties. 
      Our personalized service ensures that every aspect of your real estate journey is handled with care and professionalism.`,
      animation: { transform: 'translateX', from: '30px' },
    },
    {
      key: 'innovative',
      title: 'Innovative Solutions',
      text: `Leveraging the latest technology and market insights, we offer cutting-edge property management services, investment strategies, and real estate solutions. 
      Our innovative approach helps us stay ahead of the competition and deliver superior results.`,
      images: [
        {
          src: "/aboutus3.png",
          alt: "Innovation and technology",
        },
        {
          src: "/aboutus4.png",
          alt: "Expert consultation",
        },
      ],
      animation: { transform: 'scale', from: 0.95 },
    },
    {
      key: 'comprehensive',
      title: 'Comprehensive Real Estate Services',
      text: `From property management and investment advisory to leasing and sales, our full spectrum of services ensures that all your real estate needs are met under one roof. 
      We handle everything from market analysis to property maintenance, providing a hassle-free experience for our clients.`,
      animation: { transform: 'translateY', from: '30px' },
    },
  ],
};

function PropertiesBrochure() {
  const [isHeadingVisible, setIsHeadingVisible] = useState(false);
  const [visibleSections, setVisibleSections] = useState({});
  const headingRef = useRef(null);
  const sectionRefs = useRef({});

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px',
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const section = entry.target.dataset.section;
          if (section === 'heading') {
            setIsHeadingVisible(true);
          } else {
            setVisibleSections((prev) => ({ ...prev, [section]: true }));
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (headingRef.current) observer.observe(headingRef.current);
    Object.values(sectionRefs.current).forEach((ref) => ref && observer.observe(ref));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full bg-white shadow-2xl px-6 sm:px-8 md:px-12 lg:px-20 py-8">
      <div className="flex min-h-screen">
        <div className="hidden lg:block w-[30%]"></div>

        <div className="w-full lg:w-[70%] bg-white">
          {/* Heading */}
          <div className="pl-4 sm:pl-8 lg:pl-12 py-8 lg:py-12 overflow-y-auto">
            <h1
              ref={headingRef}
              data-section="heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              {brochureContent.heading.split('').map((char, index) => (
                <span
                  key={index}
                  className="bg-gradient-to-b from-[#4DAEC1] to-[#0A374E] text-transparent bg-clip-text inline-block"
                  style={{
                    opacity: isHeadingVisible ? 1 : 0,
                    transform: isHeadingVisible ? 'translateY(0)' : 'translateY(-20px)',
                    transition: `opacity 0.05s ease-out ${index * 0.03}s, transform 0.05s ease-out ${index * 0.03}s`,
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </h1>
          </div>

          {/* Sections */}
          <div className="pl sm:pl-8 lg:pl-12 py-8 lg:py-12 overflow-y-auto">
            {brochureContent.sections.map((section) => (
              <div
                key={section.key}
                ref={(el) => (sectionRefs.current[section.key] = el)}
                data-section={section.key}
                className="mb-12 lg:mb-16"
                style={{
                  opacity: visibleSections[section.key] ? 1 : 0,
                  transform:
                    section.animation.transform === 'scale'
                      ? visibleSections[section.key]
                        ? 'scale(1)'
                        : `scale(${section.animation.from})`
                      : visibleSections[section.key]
                      ? `${section.animation.transform}(0)`
                      : `${section.animation.transform}(${section.animation.from})`,
                  transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
                }}
              >
                <h2 className="text-2xl sm:text-3xl font-semibold text-black/50 mb-4 lg:mb-6">
                  {section.title}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6 lg:mb-8 text-base lg:text-lg">{section.text}</p>

                {section.images && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8 mb-6 lg:mb-8">
                    {section.images.map((img, i) => (
                      <div key={i} className="relative overflow-hidden rounded-lg h-48 sm:h-56 md:h-64 lg:h-80 xl:h-96">
                        <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertiesBrochure;
