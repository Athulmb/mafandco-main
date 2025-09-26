import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';

const MeetOurTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: "John Baby",
      position: "CEO",
      image: "/team1.png",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "CFO",
      image: "/team2.png",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      id: 3,
      name: "Indhu Lekha",
      position: "Manager",
      image: "/team3.png",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      id: 4,
      name: "John Doe",
      position: "Manager",
      image: "/team4.png",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    }
  ];

  return (
    <div className="bg-gray-50 py-8 sm:py-12 lg:py-16">
      <div className="max-w-full mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Left Side - Text Content */}
          <div className="w-full lg:w-2/5 lg:sticky lg:top-8 lg:self-start">
            <p className="text-gray-600 text-sm font-medium mb-3">Your Partners in Real Estate</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 leading-tight">
              <span className="text-teal-500">Meet Our</span>{' '}
              <span className="text-gray-900">Team</span>
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>

          {/* Right Side - Team Cards Grid */}
          <div className="w-full lg:w-3/5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {teamMembers.map((member) => (
                <div 
                  key={member.id} 
                  className="bg-white rounded-2xl shadow-sm hover:shadow-lg border border-gray-100 transition-all duration-300 mx-auto w-full max-w-sm flex flex-col min-h-[500px] lg:min-h-[580px]"
                >
                  {/* Image Container */}
                  <div className="relative bg-teal-50 h-64 sm:h-72 lg:h-80 flex items-center justify-center rounded-t-2xl overflow-hidden m-3 ">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-auto object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    {/* Fallback placeholder */}
                    <div className="hidden w-20 h-20 bg-teal-200 rounded-full items-center justify-center">
                      <span className="text-teal-600 text-2xl font-bold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-4 sm:p-6 lg:p-8 flex-1">
                    <div className="mb-4">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                      <p className="text-teal-600 font-semibold text-sm mb-3">{member.position}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {member.description}
                      </p>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
                      <button className="flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 text-sm font-medium">
                        <MessageCircle className="w-4 h-4" />
                        Contact
                      </button>
                      
                      <button className="flex items-center justify-center gap-1 text-teal-600 hover:text-teal-700 transition-colors duration-200 group text-sm font-medium px-4 py-2">
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MeetOurTeam;