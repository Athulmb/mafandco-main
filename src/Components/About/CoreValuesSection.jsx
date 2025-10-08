import React, { useState, useEffect, useRef } from 'react';
import { Users, Target, Box, Globe } from 'lucide-react';

const CoreValuesSection = () => {
  const [isHeadingVisible, setIsHeadingVisible] = useState(false);
  const [visibleElements, setVisibleElements] = useState({
    paragraph: false,
    centerImage: false,
    leftCards: [],
    rightCards: [],
  });

  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const centerImageRef = useRef(null);
  const leftCardsRefs = useRef([]);
  const rightCardsRefs = useRef([]);

  const headingText = "Our Core Values";

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
          } else if (section === 'paragraph') {
            setVisibleElements((prev) => ({ ...prev, paragraph: true }));
          } else if (section === 'centerImage') {
            setVisibleElements((prev) => ({ ...prev, centerImage: true }));
          } else if (section?.startsWith('leftCard-')) {
            const cardIndex = parseInt(section.split('-')[1]);
            setVisibleElements((prev) => ({
              ...prev,
              leftCards: [...new Set([...prev.leftCards, cardIndex])],
            }));
          } else if (section?.startsWith('rightCard-')) {
            const cardIndex = parseInt(section.split('-')[1]);
            setVisibleElements((prev) => ({
              ...prev,
              rightCards: [...new Set([...prev.rightCards, cardIndex])],
            }));
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (headingRef.current) observer.observe(headingRef.current);
    if (paragraphRef.current) observer.observe(paragraphRef.current);
    if (centerImageRef.current) observer.observe(centerImageRef.current);
    
    leftCardsRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    
    rightCardsRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-backgound p-4 sm:p-8 lg:p-16">

      {/* Dummy Text with Line */}
      <div className="mb-16 flex items-center gap-4">
        <p className="text-slate-600 text-sm font-medium">Dummy Text</p>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>

      {/* Header Section */}
      <div className="mb-16 sm:mb-24 flex flex-col lg:flex-row items-start gap-8 mx-auto max-w-8xl px-4 sm:px-8 lg:px-16">
        {/* Left Column - Empty */}
        <div className="w-full lg:w-1/3"></div>

        {/* Right Column - Paragraph */}
        <div className="w-full lg:w-2/3">
          <h1
            ref={headingRef}
            data-section="heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-12"
          >
            {headingText.split('').map((char, index) => (
              <span
                key={index}
                style={{
                  display: 'inline-block',
                  opacity: isHeadingVisible ? 1 : 0,
                  transform: isHeadingVisible ? 'translateY(0)' : 'translateY(-20px)',
                  transition: `opacity 0.05s ease-out ${index * 0.03}s, transform 0.05s ease-out ${index * 0.03}s`,
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </h1>
          <p
            ref={paragraphRef}
            data-section="paragraph"
            className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed text-left"
            style={{
              opacity: visibleElements.paragraph ? 1 : 0,
              transform: visibleElements.paragraph ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.6s ease-out 0.3s, transform 0.6s ease-out 0.3s',
            }}
          >
            Home Buying Can Be A Stressful Process, But We Take The Guess Work Out Of Finding A Real Estate
            Agent. We'll Help You Find The Perfect Match To Purchase Your Ideal Home.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full px-4 sm:px-8 lg:px-16">
        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 items-stretch">

          {/* Left Column */}
          <div className="space-y-8">
            <div
              ref={(el) => (leftCardsRefs.current[0] = el)}
              data-section="leftCard-0"
              style={{
                opacity: visibleElements.leftCards.includes(0) ? 1 : 0,
                transform: visibleElements.leftCards.includes(0)
                  ? 'translateX(0)'
                  : 'translateX(100px)',
                transition: 'opacity 0.7s ease-out 0.2s, transform 0.7s ease-out 0.2s',
              }}
            >
              <Card
                title="Integrity"
                description="We uphold the highest standards of ethical conduct, ensuring transparency and honesty in every interaction with our clients and partners."
                color="blue"
                Icon={Users}
                iconPosition="start"
              />
            </div>
            <div
              ref={(el) => (leftCardsRefs.current[1] = el)}
              data-section="leftCard-1"
              style={{
                opacity: visibleElements.leftCards.includes(1) ? 1 : 0,
                transform: visibleElements.leftCards.includes(1)
                  ? 'translateX(0)'
                  : 'translateX(100px)',
                transition: 'opacity 0.7s ease-out 0.4s, transform 0.7s ease-out 0.4s',
              }}
            >
              <Card
                title="Excellence"
                description="Our commitment to excellence drives us to deliver superior service and achieve the highest level of client satisfaction."
                color="green"
                Icon={Box}
                iconPosition="start"
              />
            </div>
          </div>

          {/* Center Image */}
          <div className="flex items-center justify-center lg:order-none order-first">
            <div
              ref={centerImageRef}
              data-section="centerImage"
              className="relative w-full max-w-lg aspect-square sm:h-[400px] md:h-[500px] lg:h-[672px]"
              style={{
                opacity: visibleElements.centerImage ? 1 : 0,
                transform: visibleElements.centerImage ? 'scale(1)' : 'scale(0.8)',
                transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
              }}
            >
              <img
                src="/Container.png"
                alt="Core Values Center"
                className="absolute inset-0 w-full h-full object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div
              ref={(el) => (rightCardsRefs.current[0] = el)}
              data-section="rightCard-0"
              style={{
                opacity: visibleElements.rightCards.includes(0) ? 1 : 0,
                transform: visibleElements.rightCards.includes(0)
                  ? 'translateX(0)'
                  : 'translateX(-100px)',
                transition: 'opacity 0.7s ease-out 0.2s, transform 0.7s ease-out 0.2s',
              }}
            >
              <Card
                title="Innovation"
                description="We embrace new technologies and creative solutions to enhance our service offerings and stay ahead in the ever-evolving real estate market."
                color="purple"
                Icon={Target}
                iconPosition="end"
              />
            </div>
            <div
              ref={(el) => (rightCardsRefs.current[1] = el)}
              data-section="rightCard-1"
              style={{
                opacity: visibleElements.rightCards.includes(1) ? 1 : 0,
                transform: visibleElements.rightCards.includes(1)
                  ? 'translateX(0)'
                  : 'translateX(-100px)',
                transition: 'opacity 0.7s ease-out 0.4s, transform 0.7s ease-out 0.4s',
              }}
            >
              <Card
                title="Sustainability"
                description="We are dedicated to promoting sustainable practices and contributing positively to the environment and the communities we serve."
                color="teal"
                Icon={Globe}
                iconPosition="end"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

// Reusable Card Component
const Card = ({ title, description, Icon, iconPosition = 'start' }) => {
  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg flex flex-col justify-between min-h-[18rem] md:min-h-[20rem]">
      <div>
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
          {title}
        </h3>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
          {description}
        </p>
      </div>
      <div className={`flex ${iconPosition === 'start' ? 'justify-start' : 'justify-end'} mt-4`}>
        <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
          <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-black" />
        </div>
      </div>
    </div>
  );
};


export default CoreValuesSection;