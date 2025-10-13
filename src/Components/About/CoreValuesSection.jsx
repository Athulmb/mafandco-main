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

          if (section === 'heading') setIsHeadingVisible(true);
          else if (section === 'paragraph')
            setVisibleElements((prev) => ({ ...prev, paragraph: true }));
          else if (section === 'centerImage')
            setVisibleElements((prev) => ({ ...prev, centerImage: true }));
          else if (section?.startsWith('leftCard-')) {
            const index = parseInt(section.split('-')[1]);
            setVisibleElements((prev) => ({
              ...prev,
              leftCards: [...new Set([...prev.leftCards, index])],
            }));
          } else if (section?.startsWith('rightCard-')) {
            const index = parseInt(section.split('-')[1]);
            setVisibleElements((prev) => ({
              ...prev,
              rightCards: [...new Set([...prev.rightCards, index])],
            }));
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (headingRef.current) observer.observe(headingRef.current);
    if (paragraphRef.current) observer.observe(paragraphRef.current);
    if (centerImageRef.current) observer.observe(centerImageRef.current);

    leftCardsRefs.current.forEach((ref) => ref && observer.observe(ref));
    rightCardsRefs.current.forEach((ref) => ref && observer.observe(ref));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full bg-backgound py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="w-full mx-auto flex flex-col gap-12 lg:gap-20 ">

        {/* Section Header */}
        <div className="flex items-center gap-4 mb-10">
          <p className="text-slate-600 text-sm font-medium">Dummy Text</p>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Heading + Paragraph */}
        <div className="flex flex-col lg:flex-row items-start gap-8">
          <div className="w-full lg:w-1/3"></div>

          <div className="w-full lg:w-2/3">
            <h1
              ref={headingRef}
              data-section="heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-12"
            >
              {headingText.split('').map((char, i) => (
                <span
                  key={i}
                  className="bg-gradient-to-b from-[#4DAEC1] to-[#0A374E] text-transparent bg-clip-text inline-block"
                  style={{
                    opacity: isHeadingVisible ? 1 : 0,
                    transform: isHeadingVisible ? 'translateY(0)' : 'translateY(-20px)',
                    transition: `opacity 0.05s ease-out ${i * 0.03}s, transform 0.05s ease-out ${i * 0.03}s`,
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
              Home buying can be a stressful process, but we take the guesswork out of finding a real estate
              agent. Our mission is to connect you with professionals who understand your needs, ensuring
              that your home buying journey is smooth, transparent, and successful.
            </p>
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 items-stretch w-full overflow-hidden">

          {/* Left Cards */}
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
                description="We uphold the highest standards of ethical conduct, ensuring transparency, honesty, and fairness in every client interaction."
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
                description="Our pursuit of excellence drives us to deliver superior results, exceeding expectations with quality and precision."
                Icon={Box}
                iconPosition="start"
              />
            </div>
          </div>

          {/* Center Image */}
          <div className="flex items-center justify-center lg:order-none order-first overflow-hidden">
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

          {/* Right Cards */}
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
                description="We embrace new technologies and creative solutions, adapting swiftly to meet the evolving needs of our clients."
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
                description="We are committed to sustainable practices, promoting eco-friendly development and contributing positively to communities."
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
const Card = ({ title, description, Icon, iconPosition = 'start' }) => (
  <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg flex flex-col justify-between min-h-[18rem] md:min-h-[20rem] overflow-hidden">
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

export default CoreValuesSection;
