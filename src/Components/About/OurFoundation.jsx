import React from 'react';

const OurFoundation = () => {
  return (
    <div className="bg-white min-h-screen py-12 px-6 lg:px-12">
      <div className="max-w-8xl mx-auto">
        {/* Full Width Title */}
        <div className="w-full mb-16 flex justify-center">
          <h1 className="text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem] font-black text-black tracking-tight leading-none">
            Our Foundation
          </h1>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center px-4 sm:px-6 md:px-10 lg:px-20">
          {/* Left Content - Takes up 5 columns */}
          <div className="lg:col-span-5 space-y-8 pt-8 lg:pt-0">
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

          {/* Right Image - Takes up 7 columns */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              <img 
                src="/Founder.png" 
                alt="Founder" 
                className="w-full h-auto rounded-2xl  object-cover"
              />
            </div>
          </div>
        </div> {/* End of Grid */}
      </div>
    </div>
  );
};

export default OurFoundation;
