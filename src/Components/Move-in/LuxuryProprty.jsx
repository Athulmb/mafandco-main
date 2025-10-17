import React from 'react';

// ✅ Store all the content in a variable
const luxuryPropertyData = {
  tag: "Ready to move-in",
  title: "Luxurious Properties in the most Sought-after locations",
  description: [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    "Industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it"
  ],
  imageUrl: "/AboutLanding.png"
};

function LuxuryProperty() {
  return (
    <section className="bg-gray-100 py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
                    <p className="text-lg font-semibold text-primary whitespace-nowrap"> {luxuryPropertyData.tag}</p>
                    <div className="flex-1 h-px bg-primary"></div>
                </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Section: Text Content */}
          <div className="flex flex-col">
            <span className="text-sm font-medium uppercase text-gray-500 mb-2">
             
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-gray-900
                  bg-gradient-to-r from-[#4DAEC1] to-[#0A374E] text-transparent bg-clip-text">
              {luxuryPropertyData.title}
            </h1>
            <div className="space-y-4 text-base sm:text-lg text-gray-700 max-w-xl">
              {luxuryPropertyData.description.map((desc, index) => (
                <p key={index}>{desc}</p>
              ))}
            </div>
          </div>

          {/* Right Section: Image */}
          <div className="flex justify-center lg:justify-end bg-transparent ">
            <div className="relative w-full bg-transparent max-w-xl aspect-[1/1] rounded-2xl overflow-hidden shadow-2xl mt-12">
              <img
                src={luxuryPropertyData.imageUrl}
                alt="Luxurious Property"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default LuxuryProperty;
