import React from "react";

function ArchitecturalLayout() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left Panel - Dark Blue Navigation */}
      <div className="w-full lg:w-1/2 bg-primary text-white px-6 lg:pl-20 py-16 sm:py-20 lg:py-28 flex flex-col">
        <div className="space-y-10 lg:space-y-28">
          {/* Navigation Items */}
          <div>
            <h2 className="text-2xl lg:text-3xl xl:text-5xl font-semibold tracking-tight">
              Lorem Ipsum Is Simply Dummy Text
            </h2>
            <div className="w-full lg:w-4/5 h-px bg-gray-400 mt-4"></div>
          </div>
          <div>
            <h2 className="text-2xl lg:text-3xl xl:text-5xl font-semibold tracking-tight">
              Lorem Ipsum Is
            </h2>
            <div className="w-full lg:w-4/5 h-px bg-gray-400 mt-4"></div>
          </div>
          <div>
            <h2 className="text-2xl lg:text-3xl xl:text-5xl font-semibold tracking-tight">
              Lorem Ipsum
            </h2>
            <div className="w-full lg:w-4/5 h-px bg-gray-400 mt-4"></div>
          </div>
          <div>
            <h2 className="text-2xl lg:text-3xl xl:text-5xl font-semibold tracking-tight">
              Lorem Ipsum Is Simply Dummy Text
            </h2>
            <div className="w-full lg:w-4/5 h-px bg-gray-400 mt-4"></div>
          </div>
        </div>
      </div>

      {/* Right Panel - Hero Image */}
      <div className="w-full lg:w-1/2 relative min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-screen">
        {/* Actual Image */}
        <img
          src="/Container.png"
          alt="Modern architectural building"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Bottom Text Overlay - Centered Glass Container */}
        <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 w-full px-4">
          <div className="bg-gray-900/30 backdrop-blur-md rounded-xl px-6 sm:px-10 py-6 flex flex-wrap justify-center sm:justify-between items-center gap-4 text-white text-sm lg:text-base max-w-[90%] lg:max-w-3xl mx-auto text-center">
            <span>Lorem Ipsum is s</span>
            <span>Lorem Ipsum is simple</span>
            <span>Lorem Ipsum is</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArchitecturalLayout;
