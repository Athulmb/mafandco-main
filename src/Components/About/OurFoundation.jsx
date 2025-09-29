import React from 'react';

const OurFoundation = () => {
  return (
    <div className="bg-backgound min-h-screen py-12 px-6 lg:px-12">

      {/* 🔹 Heading Section - Same Width as Bottom Section */}
      <div className="w-4/6 mx-auto mb-16 flex justify-center">
        <h1
          className="font-black text-black tracking-tight leading-none text-center"
          style={{
            fontSize: '10vw',
            whiteSpace: 'nowrap',
          }}
        >
          Our Foundation
        </h1>
      </div>

      {/* 🔹 Bottom Section - Flex Container */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 px-4 sm:px-6 md:px-10 w-4/6 mx-auto">
        
        {/* Left Content - Text */}
        <div className="flex-1 space-y-4 text-center xl:text-left xl:flex xl:flex-col xl:justify-center">
          <p className="text-gray-600 text-lg leading-relaxed font-light">
            MAF & Co Properties LLC was established with a clear vision:
            to redefine excellence in real estate and deliver unparalleled
            value to our clients. Guided by the visionary leadership of
            John Baby, the company is built on a foundation of integrity,
            innovation, and a client-first approach.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed font-light">
            A globally accomplished entrepreneur with a proven track
            record of business success, John Baby brings decades of
            experience and strategic insight to this new endeavor in
            Dubai's dynamic real estate market. His forward-thinking
            vision and commitment to excellence ensure that MAF & Co
            Properties LLC sets new benchmarks in service,
            professionalism, and client satisfaction.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed font-light">
            At MAF & Co Properties LLC, we are driven to exceed
            expectations, offering bespoke real estate solutions that
            cater to the diverse needs of investors, homeowners, and
            businesses alike.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="/Founder.png"
            alt="Founder"
            className="w-full h-auto max-w-lg rounded-2xl object-cover"
          />
        </div>

      </div>

    </div>
  );
};

export default OurFoundation;
