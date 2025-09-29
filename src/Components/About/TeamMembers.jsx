import React from 'react';
import { MessageCircle, ArrowRight, MessageCircleMore } from 'lucide-react';

const MeetOurTeam = () => {
  const teamMembers = [
    { id: 1, name: "John Baby", position: "CEO", image: "/team1.png", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { id: 2, name: "Jane Smith", position: "CFO", image: "/team2.png", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { id: 3, name: "Indhu Lekha", position: "Manager", image: "/team3.png", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { id: 4, name: "John Doe", position: "Manager", image: "/team4.png", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." }
  ];

  return (
    <div className="bg-backgound py-16 px-6 sm:px-10 lg:px-40">
      <div className="flex flex-col lg:flex-row gap-12">

        {/* Left Section - Text (1/3 width) */}
        <div className="w-full lg:w-1/3">
          <p className="text-gray-600 text-base sm:text-lg font-medium mb-4">Your Partners in Real Estate</p>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl tracking-wide font-extrabold mb-6 leading-tight 
               bg-gradient-to-r from-[#4DAEC1] to-[#0A374E] text-transparent bg-clip-text">
  Meet Our Team
</h2>

          <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>

        {/* Right Section - Team Members (2/3 width) */}
        <div className="w-full lg:w-2/3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {teamMembers.map((member) => (
              <div 
                key={member.id} 
                className="bg-backgound rounded-3xl  hover:shadow-xl border-[3px] border-gray-200 transition-all duration-300 mx-auto w-full max-w-md flex flex-col min-h-[550px] lg:min-h-[620px]"
              >
                {/* Image */}
                <div className="relative bg-gradient-to-b from-[#4DAEC1] to-[#0A374E] h-72 sm:h-80 lg:h-96 flex items-center justify-center  overflow-hidden m-4">
                  {/* Fallback placeholder */}
                  <div className="hidden w-24 h-24 bg-teal-200 rounded-full items-center justify-center">
                    <span className="text-primary text-3xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 sm:p-8 lg:p-10 flex-1">
                  <div className="mb-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-primary/70 font-semibold text-sm sm:text-base mb-4">{member.position}</p>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                    <button className="flex items-center justify-center gap-2 bg-primary hover:bg-teal-700 text-white px-5 py-3 rounded-full transition-colors duration-200 text-sm sm:text-base font-medium">
                      <MessageCircleMore className="w-5 h-5" />
                      Contact
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

      </div>
    </div>
  );
};

export default MeetOurTeam;
