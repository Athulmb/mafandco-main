import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Team_API } from '../../config'; // same API endpoint as AdminTeamMembers

const MeetOurTeam = () => {
  const defaultTeamImage = "/member1.png";

  // ---------- STATE ----------
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  // ---------- DUMMY DATA ----------
  const dummyData = [
    { id: 1, name: "Pravin Manokaran", position: "Associate Director", image: "/member1.png", description: "Lorem ipsum...", phone: "919876543210" },
    { id: 2, name: "Muhammed Sulaiman", position: "Associate Director", image: "/member2.png", description: "Lorem ipsum...", phone: "919812345678" },
    { id: 3, name: "Aman Samith", position: "Associate Director", image: "/member3.png", description: "Lorem ipsum...", phone: "919876512345" },
    { id: 4, name: "Muhammed Rihan", position: "Marketing", image: "/member4.png", description: "Lorem ipsum...", phone: "919898765432" },
    { id: 5, name: "Maham Rasool", position: "HR", image: "/member5.png", description: "Lorem ipsum...", phone: "919812398765" },
    { id: 6, name: "Mohamed Yasir", position: "Admin", image: "/member6.png", description: "Lorem ipsum...", phone: "919876598712" },
    { id: 7, name: "Mohamed Yasir", position: "Admin", image: "/member7.png", description: "Lorem ipsum...", phone: "919812367890" },  ];
 

  // ---------- FETCH FROM API ----------
  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const res = await fetch(Team_API);
        const data = await res.json();

        if (res.ok && Array.isArray(data.members)) {
          // Sort by creation time (oldest → newest)
          const sorted = [...data.members].sort(
            (a, b) =>
              new Date(a.createdAt || 0) - new Date(b.createdAt || 0)
          );
          setTeamMembers(sorted);
        } else {
          setTeamMembers(dummyData);
        }
      } catch (err) {
        console.error("Error fetching team members:", err);
        setTeamMembers(dummyData);
      } finally {
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

  // ---------- ANIMATION / VISIBILITY ----------
  const [visibleElements, setVisibleElements] = useState({
    header: false,
    teamCards: [],
    teamImage: false,
  });

  const headerRef = useRef(null);
  const teamCardsRefs = useRef([]);
  const teamImageRef = useRef(null);

  useEffect(() => {
    const observerOptions = { threshold: 0.15, rootMargin: '0px 0px -50px 0px' };

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
              teamCards: [...new Set([...prev.teamCards, cardIndex])],
            }));
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    if (headerRef.current) observer.observe(headerRef.current);
    if (teamImageRef.current) observer.observe(teamImageRef.current);
    teamCardsRefs.current.forEach((ref) => ref && observer.observe(ref));

    return () => observer.disconnect();
  }, [teamMembers]);

  // ---------- UI ----------
  return (
    <div className="bg-background py-20 px-6 sm:px-10 lg:px-20">
      {/* Inline animations */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .team-card { transition: all 0.4s ease; }
        .team-card:hover { transform: translateY(-15px) scale(1.02); box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25); }
        .card-image { transition: transform 0.6s ease; }
        .team-card:hover .card-image { transform: scale(1.1); }
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

      {/* Team Members */}
      {loading ? (
        <p className="text-center text-gray-500 text-lg">Loading team members...</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 sm:gap-12 lg:gap-20 mb-20">
          {teamMembers.map((member, index) => (
            <div
              key={member._id || member.id}
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
              <div className="relative m-4 overflow-hidden bg-gradient-to-b from-[#4DAEC1] to-[#0A374E] aspect-[330/340] flex items-center justify-center rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                <img
                  src={
                    member.imageUrl
                      ? member.imageUrl.startsWith('http')
                        ? member.imageUrl
                        : `http://localhost:5000${member.imageUrl}`
                      : defaultTeamImage
                  }
                  alt={member.name}
                  className="card-image w-full h-full object-cover"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-primary/70 font-semibold text-sm sm:text-base mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                  {member.description}
                </p>

                <div className="mt-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    onClick={() => window.open(`https://wa.me/${member.whatsapp}`, "_blank")}
                    className="flex items-center justify-center gap-4 bg-primary hover:bg-black text-white px-7 py-3 rounded-full transition-colors duration-200 text-sm sm:text-base font-medium"
                  >
                    Contact
                    <img src="/whatsapplogo.png" alt="WhatsApp" className="w-8 h-8 object-contain" />
                  </button>
                  <button className="flex items-center justify-center gap-2 text-primary hover:text-black transition-colors duration-200 group text-sm sm:text-base font-medium px-5 py-3">
                    Learn More
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Team Group Image */}
      <div
        ref={teamImageRef}
        data-section="teamImage"
        className="flex justify-center"
        style={{
          opacity: visibleElements.teamImage ? 1 : 0,
          animation: visibleElements.teamImage ? 'scaleIn 1s ease-out forwards' : 'none',
        }}
      >
        <img src="/teamgroup.png" alt="Team Group" className="w-[95%] h-auto object-contain" />
      </div>
    </div>
  );
};

export default MeetOurTeam;
