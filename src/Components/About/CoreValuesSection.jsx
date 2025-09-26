import React from 'react';
import { Users, Target, Box, Globe } from 'lucide-react';

const CoreValuesSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4 sm:p-8 lg:p-16">
      {/* Dummy Text */}
      <div className="mb-16">
        <p className="text-slate-600 text-sm font-medium">Dummy Text</p>
      </div>

      {/* Main Content */}
      <div className="w-full px-4 sm:px-8 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-24">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-12">
            Our Core Values
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
            Home Buying Can Be A Stressful Process, But We Take The Guess Work Out Of Finding A Real Estate 
            Agent. We'll Help You Find The Perfect Match To Purchase Your Ideal Home.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 items-stretch">
          {/* Left Column */}
          <div className="space-y-8">
            <Card
              title="Integrity"
              description="We uphold the highest standards of ethical conduct, ensuring transparency and honesty in every interaction with our clients and partners."
              color="blue"
              Icon={Users}
              iconPosition="start"
            />
            <Card
              title="Excellence"
              description="Our commitment to excellence drives us to deliver superior service and achieve the highest level of client satisfaction."
              color="green"
              Icon={Box}
              iconPosition="start"
            />
          </div>

          {/* Center Image */}
          <div className="flex items-center justify-center lg:order-none order-first">
            <div className="relative w-full max-w-lg aspect-square sm:h-[400px] md:h-[500px] lg:h-[672px]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-400 rounded-3xl opacity-90 shadow-2xl"></div>
              <div className="absolute inset-6 rounded-2xl border border-white/20"></div>
              <div className="absolute inset-12 rounded-xl border border-white/10"></div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <Card
              title="Innovation"
              description="We embrace new technologies and creative solutions to enhance our service offerings and stay ahead in the ever-evolving real estate market."
              color="purple"
              Icon={Target}
              iconPosition="end"
            />
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
  );
};

// Reusable Card Component
const Card = ({ title, description, color, Icon, iconPosition = 'start' }) => {
  return (
    <div className={`bg-white rounded-2xl p-6 sm:p-8 shadow-lg flex flex-col justify-between min-h-[18rem] md:min-h-[20rem]`}>
      <div>
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
          {title}
        </h3>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
          {description}
        </p>
      </div>
      <div className={`flex ${iconPosition === 'start' ? 'justify-start' : 'justify-end'} mt-4`}>
        <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-${color}-500 rounded-xl flex items-center justify-center`}>
          <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
        </div>
      </div>
    </div>
  );
};

export default CoreValuesSection;
