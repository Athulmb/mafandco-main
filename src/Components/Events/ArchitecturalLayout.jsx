import React from "react";

function ArchitecturalLayout() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left Panel - Dark Blue Navigation */}
      <div className="w-full lg:w-1/2 bg-primary text-white px-6 lg:px-28 py-28 flex flex-col">
        <div className="space-y-10 lg:space-y-28">
          {/* Navigation Items */}
          <div>
            <h2 className="text-2xl lg:text-3xl xl:text-5xl font-semibold">
               Lorem Ipsum Is Simply Dummy Text

            </h2>
            <div className="w-full lg:w-4/5 h-px bg-gray-400 mt-4"></div>
          </div>
          <div>
            <h2 className="text-2xl lg:text-3xl xl:text-5xl font-semibold">
              Lorem Ipsum Is 

            </h2>
            <div className="w-full lg:w-4/5 h-px bg-gray-400 mt-4"></div>
          </div>

          <div>
            <h2 className="text-2xl lg:text-3xl xl:text-5xl font-semibold">
              Lorem Ipsum
            </h2>
            <div className="w-full lg:w-4/5 h-px bg-gray-400 mt-4"></div>
          </div>

          <div>
            <h2 className="text-2xl lg:text-3xl xl:text-5xl font-semibold">
              Lorem Ipsum Is Simply Dummy Text
            </h2>
            <div className="w-full lg:w-4/5 h-px bg-gray-400 mt-4"></div>
          </div>
        </div>
      </div>

      {/* Right Panel - Hero Image */}
      <div className="w-full lg:w-1/2 relative min-h-96 lg:min-h-screen">
        {/* Actual Image */}
        <img
          src="/Container.png"
          alt="Modern architectural building"
          className="absolute inset-0 w-full h-full object-cover"
        />

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
