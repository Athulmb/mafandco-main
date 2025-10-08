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
        <div className="w-full min-h-screen bg-backgound py-16 px-4 sm:px-6 lg:px-8">
            <div className="w-full mx-auto space-y-8">
                {/* Our Mission Card - Filled background */}
                <div
                    ref={missionRef}
                    data-section="mission"
                    className="bg-white rounded-3xl shadow-lg p-8 lg:p-12 w-full max-w-[80%] mx-auto"
                    style={{
                        aspectRatio: '1010/328',
                        opacity: visibleCards.mission ? 1 : 0,
                        transform: visibleCards.mission
                            ? 'translateX(0)'
                            : 'translateX(-80px)',
                        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
                    }}
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Our Mission
                    </h2>
                    <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                        At MAF & Co Properties LLC, our mission is to provide exceptional real 
                        estate experiences by offering a curated selection of luxury properties 
                        that reflect excellence, comfort, and value. We specialize in connecting 
                        clients with the finest residential and commercial properties in Dubai's 
                        most sought-after locations, ensuring a seamless journey whether you're 
                        seeking your dream home or a high-return investment. With a client-
                        centric approach rooted in trust, integrity, and expertise, we aim to 
                        exceed expectations and build lasting relationships that stand the test 
                        of time.
                    </p>
                </div>

                {/* Our Vision Card - Transparent with border */}
                <div
                    ref={visionRef}
                    data-section="vision"
                    className="bg-transparent rounded-3xl border-2 border-gray-300 p-8 lg:p-12 w-full max-w-[80%] mx-auto"
                    style={{
                        aspectRatio: '1010/328',
                        opacity: visibleCards.vision ? 1 : 0,
                        transform: visibleCards.vision
                            ? 'translateX(0)'
                            : 'translateX(80px)',
                        transition: 'opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s',
                    }}
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Our Vision
                    </h2>
                    <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                        Our vision is to establish MAF & Co Properties LLC as a trusted leader 
                        in Dubai's real estate market, recognized for our exceptional service, 
                        innovative solutions, and unwavering dedication to enhancing the quality 
                        of life for our clients. We aspire to be the first choice for those 
                        seeking premium real estate opportunities, leveraging the latest 
                        technologies and market insights to deliver tailored solutions. By 
                        continually expanding our portfolio and embracing a forward-thinking 
                        approach, we strive to cater to the diverse needs of our clientele and 
                        shape the future of real estate in Dubai.
                    </p>
                </div>
            </div>
        </div>
    );
}