import React, { useState, useEffect, useRef } from 'react';

export default function MissionVision() {
  const [visibleCards, setVisibleCards] = useState({
    mission: false,
    vision: false,
  });

  const missionRef = useRef(null);
  const visionRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px',
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const section = entry.target.dataset.section;
          setVisibleCards((prev) => ({ ...prev, [section]: true }));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (missionRef.current) observer.observe(missionRef.current);
    if (visionRef.current) observer.observe(visionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full bg-backgound py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="w-full mx-auto flex flex-col gap-12 lg:gap-20 max-w-6xl">

        {/* Mission Card */}
        <div
          ref={missionRef}
          data-section="mission"
          className="bg-white rounded-3xl shadow-lg p-6 sm:p-8 lg:p-12 w-full"
          style={{
            opacity: visibleCards.mission ? 1 : 0,
            transform: visibleCards.mission ? 'translateX(0)' : 'translateX(-80px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
          }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-lufga text-gray-900 mb-6 sm:mb-8">
            Our Mission
          </h2>
          <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed sm:leading-8">
            At MAF & Co Properties LLC, our mission is to deliver exceptional real estate experiences by connecting clients with Dubai’s most exclusive off-plan developments and premium secondary market properties.
            We strive to provide a seamless, transparent, and rewarding property journey—whether you’re searching for your dream home, a high-ROI investment, or prime commercial real estate.
            Rooted in trust, integrity, and market expertise, we empower investors, homeowners, and agents through strategic real estate solutions, ensuring lasting value, comfort, and client satisfaction.
          </p>
        </div>

        {/* Vision Card */}
        <div
          ref={visionRef}
          data-section="vision"
          className="bg-transparent rounded-3xl border border-gray-300 p-6 sm:p-8 lg:p-12 w-full"
          style={{
            opacity: visibleCards.vision ? 1 : 0,
            transform: visibleCards.vision ? 'translateX(0)' : 'translateX(80px)',
            transition: 'opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s',
          }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-lufga text-gray-900 mb-6 sm:mb-8">
            Our Vision
          </h2>
          <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed sm:leading-8">
            Our vision is to establish MAF & Co Properties LLC as the most trusted name in Dubai’s real estate market, recognized for excellence, elegance, and client success.
            We aspire to be the first choice for property investors and buyers, offering innovative solutions, data-driven insights, and unmatched service quality.
            By continuously expanding our portfolio across Dubai’s most sought-after communities—including Downtown Dubai, Palm Jumeirah, Dubai Marina, Business Bay, Dubai South, and Dubailand—we aim to shape the future of luxury living and investment in the UAE.
          </p>
        </div>
      </div>
    </div>
  );
}
