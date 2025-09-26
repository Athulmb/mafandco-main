import React from 'react';

 function ArchitecturalLayout() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen ">
      {/* Left Panel - Dark Blue Navigation */}
      <div className="w-full lg:w-2/5 bg-slate-700 text-white px-4 sm:px-6 md:px-10 lg:px-20 py-3 flex flex-col justify-center">
        <div className="space-y-8 lg:space-y-12">
          {/* Main Heading */}
          <div>
            <h1 className="text-2xl lg:text-3xl xl:text-4xl font-light leading-tight">
              Lorem Ipsum Is Simply Dummy Text
            </h1>
            <div className="w-16 lg:w-24 h-px bg-gray-400 mt-4"></div>
          </div>
          
          {/* Navigation Items */}
          <div className="space-y-6 lg:space-y-8">
            <div>
              <h2 className="text-xl lg:text-2xl font-light">Lorem Ipsum Is</h2>
              <div className="w-16 lg:w-24 h-px bg-gray-400 mt-3"></div>
            </div>
            
            <div>
              <h2 className="text-xl lg:text-2xl font-light">Lorem Ipsum</h2>
              <div className="w-16 lg:w-24 h-px bg-gray-400 mt-3"></div>
            </div>
            
            <div>
              <h2 className="text-xl lg:text-2xl font-light">Lorem Ipsum Is Simply Dummy Text</h2>
              <div className="w-16 lg:w-24 h-px bg-gray-400 mt-3"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Hero Image */}
      <div className="w-full lg:w-3/5 relative min-h-96 lg:min-h-screen">
        {/* Background Image Area */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-blue-100 to-gray-100">
          {/* Sky with clouds effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-300 to-blue-100 opacity-60"></div>
          
          {/* Cloud shapes */}
          <div className="absolute top-8 right-16 w-32 h-16 bg-white rounded-full opacity-70 blur-sm"></div>
          <div className="absolute top-12 right-24 w-24 h-12 bg-white rounded-full opacity-50 blur-sm"></div>
          <div className="absolute top-6 right-32 w-20 h-10 bg-white rounded-full opacity-60 blur-sm"></div>
        </div>

        {/* Architectural Structure */}
        <div className="absolute inset-0 flex items-center justify-center p-4 lg:p-8">
          <div className="relative">
            {/* Main concrete structure */}
            <div className="relative">
              {/* Upper horizontal beam */}
              <div className="w-48 lg:w-64 h-20 lg:h-24 bg-gradient-to-r from-gray-400 to-gray-500 shadow-2xl transform -rotate-1">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-300 to-gray-600 opacity-80"></div>
              </div>
              
              {/* Vertical support pillar */}
              <div className="absolute -bottom-32 lg:-bottom-40 right-8 w-16 lg:w-20 h-32 lg:h-40 bg-gradient-to-r from-gray-500 to-gray-600 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-700 opacity-70"></div>
              </div>
              
              {/* Lower horizontal element */}
              <div className="absolute -bottom-20 lg:-bottom-24 -left-8 w-40 lg:w-52 h-16 lg:h-20 bg-gradient-to-r from-amber-200 to-amber-300 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-b from-yellow-200 to-orange-300 opacity-60"></div>
                {/* Window/opening effect */}
                <div className="absolute inset-2 bg-gradient-to-r from-amber-800 to-amber-900 opacity-40"></div>
              </div>
            </div>
            
            {/* Steps/stairs */}
            <div className="absolute -bottom-48 lg:-bottom-60 -left-12 lg:-left-16">
              <div className="space-y-1">
                <div className="w-32 lg:w-40 h-3 bg-gray-300 shadow-md"></div>
                <div className="w-36 lg:w-44 h-3 bg-gray-300 shadow-md"></div>
                <div className="w-40 lg:w-48 h-3 bg-gray-300 shadow-md"></div>
                <div className="w-44 lg:w-52 h-3 bg-gray-300 shadow-md"></div>
              </div>
            </div>
            
            {/* Landscaping elements */}
            <div className="absolute -bottom-40 lg:-bottom-48 left-20 lg:left-24">
              {/* Grass patches */}
              <div className="w-8 h-4 bg-green-500 rounded-full opacity-70"></div>
              <div className="absolute top-2 left-4 w-6 h-3 bg-green-600 rounded-full opacity-60"></div>
              <div className="absolute -top-1 left-8 w-5 h-3 bg-green-400 rounded-full opacity-50"></div>
            </div>
            
            <div className="absolute -bottom-44 lg:-bottom-52 right-12 lg:right-16">
              <div className="w-10 h-5 bg-green-500 rounded-full opacity-70"></div>
              <div className="absolute top-1 left-3 w-7 h-4 bg-green-600 rounded-full opacity-60"></div>
            </div>
          </div>
        </div>

        {/* Bottom Text Overlay */}
        <div className="absolute bottom-4 lg:bottom-8 left-4 lg:left-8 right-4 lg:right-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end space-y-2 sm:space-y-0 text-white text-sm lg:text-base">
            <div className="bg-black bg-opacity-50 px-3 py-1 rounded backdrop-blur-sm">
              Lorem Ipsum is s
            </div>
            <div className="bg-black bg-opacity-50 px-3 py-1 rounded backdrop-blur-sm">
              Lorem Ipsum is simple
            </div>
            <div className="bg-black bg-opacity-50 px-3 py-1 rounded backdrop-blur-sm">
              Lorem Ipsum is
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArchitecturalLayout;