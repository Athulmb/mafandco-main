import React, { useState, useEffect, useRef } from 'react';
import { MessageCircleMore, ArrowRight } from 'lucide-react';

const MeetOurTeam = () => {
  const defaultTeamImage = "/team1.png";
  const [visibleElements, setVisibleElements] = useState({
    header: false,
    teamCards: [],
    teamImage: false,
  });

  const headerRef = useRef(null);
  const teamCardsRefs = useRef([]);
  const teamImageRef = useRef(null);

  const teamMembers = [
    { id: 1, name: "Pravin Manokaran", position: "Associate Director", image: "/team1.png", description: "Lorem ipsum is simply dummy text of the printing and typesetting industry." },
    { id: 2, name: "Muhammed Sulaiman", position: "Associate Director", image: "/api/placeholder/300/400", description: "Lorem ipsum is simply dummy text of the printing and typesetting industry." },
    { id: 3, name: "Aman Samith", position: "Associate Director", image: "/api/placeholder/300/400", description: "Lorem ipsum is simply dummy text of the printing and typesetting industry." },
    { id: 4, name: "Muhammed Rihan", position: "Marketing", image: "/api/placeholder/300/400", description: "Lorem ipsum is simply dummy text of the printing and typesetting industry." },
    { id: 5, name: "Maham Rasool", position: "HR", image: "/api/placeholder/300/400", description: "Lorem ipsum is simply dummy text of the printing and typesetting industry." },
    { id: 6, name: "Mohamed Yasir", position: "Admin", image: "/api/placeholder/300/400", description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.Lorem ipsum is simply dummy text of the printing and typesetting industry.Lorem ipsum is simply dummy text of the printing and typesetting industry." },
    { id: 7, name: "Mohamed Yasir", position: "Admin", image: "/api/placeholder/300/400", description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.Lorem ipsum is simply dummy text of the printing and typesetting industry.Lorem ipsum is simply dummy text of the printing and typesetting industry." },
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px',
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const section = entry.target.dataset.section;
          
          if (section === 'header') {
            setVisibleElements(prev => ({ ...prev, header: true }));
          } else if (section === 'teamImage') {
            setVisibleElements(prev => ({ ...prev, teamImage: true }));
          } else if (section?.startsWith('card-')) {
            const cardIndex = parseInt(section.split('-')[1]);
            setVisibleElements(prev => ({
              ...prev,
              teamCards: [...new Set([...prev.teamCards, cardIndex])]
            }));
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (headerRef.current) observer.observe(headerRef.current);
    if (teamImageRef.current) observer.observe(teamImageRef.current);
    
    teamCardsRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-backgound py-20 px-6 sm:px-10 lg:px-20">
      {/* Header */}
      <div
        ref={headerRef}
        data-section="header"
        className="text-center mb-16"
        style={{
          opacity: visibleElements.header ? 1 : 0,
          transform: visibleElements.header ? 'translateY(0) scale(1)' : 'translateY(-20px) scale(0.95)',
          transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
        }}
      >
        <p className="text-gray-600 text-base sm:text-lg font-medium mb-4">
          Your Partners in Real Estate
        </p>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl tracking-wide font-extrabold mb-6 leading-tight 
          bg-gradient-to-r from-[#4DAEC1] to-[#0A374E] text-transparent bg-clip-text">
          Meet Our Team
        </h2>
      </div>

      {/* Team Grid */}
      <div className="w-full mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-20">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              ref={(el) => (teamCardsRefs.current[index] = el)}
              data-section={`card-${index}`}
              className="bg-white rounded-3xl hover:shadow-xl border-[3px] border-gray-200 transition-all duration-300 w-full flex flex-col p-2 sm:p-3 aspect-[371/604]"
              style={{
                opacity: visibleElements.teamCards.includes(index) ? 1 : 0,
                transform: visibleElements.teamCards.includes(index)
                  ? 'translateY(0) rotateX(0deg)'
                  : 'translateY(30px) rotateX(10deg)',
                transition: `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`,
              }}
            >
              {/* Image Section */}
              <div className="relative m-4 overflow-hidden bg-gradient-to-b from-[#4DAEC1] to-[#0A374E] aspect-[330/340] flex items-center justify-center ">
                <img
                  src={member.image || defaultTeamImage}
                  alt={member.name}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-primary/70 font-semibold text-sm sm:text-base mb-3">
                  {member.position}
                </p>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                  {member.description}
                </p>

                <div className="mt-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button className="flex items-center justify-center gap-2 bg-primary hover:bg-teal-700 text-white px-5 py-3 rounded-full transition-colors duration-200 text-sm sm:text-base font-medium">
                    Contact
                    <MessageCircleMore className="w-5 h-5" />
                  </button>
                  <button className="flex items-center justify-center gap-2 text-primary hover:text-teal-700 transition-colors duration-200 group text-sm sm:text-base font-medium px-5 py-3">
                    Learn More
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Team Image */}
      <div
        ref={teamImageRef}
        data-section="teamImage"
        className="flex justify-center"
        style={{
          opacity: visibleElements.teamImage ? 1 : 0,
          transform: visibleElements.teamImage ? 'scale(1)' : 'scale(0.9)',
          transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
        }}
      >
        <img
          src="/teamgroup.png"
          alt="Team Group"
          className="w-[95%] h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default MeetOurTeam;