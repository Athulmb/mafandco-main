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
    { id: 1, name: "Pravin Manokaran", position: "Associate Director", image: "/member1.png", description: "Lorem ipsum...", phone: "919876543210" },
    { id: 2, name: "Muhammed Sulaiman", position: "Associate Director", image: "/member2.png", description: "Lorem ipsum...", phone: "919812345678" },
    { id: 3, name: "Aman Samith", position: "Associate Director", image: "/member3.png", description: "Lorem ipsum...", phone: "919876512345" },
    { id: 4, name: "Muhammed Rihan", position: "Marketing", image: "/member4.png", description: "Lorem ipsum...", phone: "919898765432" },
    { id: 5, name: "Maham Rasool", position: "HR", image: "/member5.png", description: "Lorem ipsum...", phone: "919812398765" },
    { id: 6, name: "Mohamed Yasir", position: "Admin", image: "/member6.png", description: "Lorem ipsum...", phone: "919876598712" },
    { id: 7, name: "Mohamed Yasir", position: "Admin", image: "/member7.png", description: "Lorem ipsum...", phone: "919812367890" },
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
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .team-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .team-card:hover {
          transform: translateY(-15px) scale(1.02);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }

        .team-card:hover .card-image {
          transform: scale(1.1);
        }

        .team-card:hover .card-gradient {
          opacity: 0.9;
        }

        .card-image {
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-gradient {
          transition: opacity 0.4s ease;
        }

        .button-hover {
          transition: all 0.3s ease;
        }

        .button-hover:hover {
          transform: scale(1.05);
        }

        .learn-more-arrow {
          transition: transform 0.3s ease;
        }

        .team-card:hover .learn-more-arrow {
          transform: translateX(5px);
        }
      `}</style>

      {/* Header */}
      <div
        ref={headerRef}
        data-section="header"
        className="text-center mb-16"
        style={{
          opacity: visibleElements.header ? 1 : 0,
          animation: visibleElements.header ? 'scaleIn 0.8s ease-out forwards' : 'none',
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
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 sm:gap-12 lg:gap-20">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              ref={(el) => (teamCardsRefs.current[index] = el)}
              data-section={`card-${index}`}
              className="team-card bg-white rounded-3xl border-[3px] border-gray-200 w-full flex flex-col p-2 sm:p-3 aspect-[371/604]"
              style={{
                opacity: visibleElements.teamCards.includes(index) ? 1 : 0,
                animation: visibleElements.teamCards.includes(index)
                  ? `fadeInUp 0.6s ease-out ${index * 0.15}s forwards`
                  : 'none',
              }}
            >
              {/* Image Section */}
              <div className="relative m-4 overflow-hidden bg-gradient-to-b from-[#4DAEC1] to-[#0A374E] aspect-[330/340] flex items-center justify-center rounded-2xl">
                <div className="card-gradient absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                <img
                  src={member.image || defaultTeamImage}
                  alt={member.name}
                  className="card-image w-full h-full object-cover"
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
                  <button
                    onClick={() => window.open(`https://wa.me/${member.phone}`, "_blank")}
                    className="button-hover flex items-center justify-center gap-4 bg-primary hover:bg-black text-white px-7 py-3 rounded-full transition-colors duration-200 text-sm sm:text-base font-medium"
                  >
                    Contact
                    <img src="/whatsapplogo.png" alt="WhatsApp" className="w-8 h-8 object-contain" />
                  </button>

                  <button className="flex items-center justify-center gap-2 text-primary hover:text-black transition-colors duration-200 group text-sm sm:text-base font-medium px-5 py-3">
                    Learn More
                    <ArrowRight className="learn-more-arrow w-5 h-5" />
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
          animation: visibleElements.teamImage ? 'scaleIn 1s ease-out forwards' : 'none',
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