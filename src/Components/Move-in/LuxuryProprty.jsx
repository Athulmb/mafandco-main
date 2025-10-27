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
    <section className="bg-gray-100 py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-40">
      <div className="mx-auto">

        {/* Tag with line */}
        <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-12 lg:mb-20">
          <p className="text-lg font-semibold text-primary/80 whitespace-nowrap">{luxuryPropertyData.tag}</p>
          <div className="flex-1 h-px bg-primary/80"></div>
        </div>

        {/* Flex Layout: Left text 60%, Right image 40% */}
        <div className="flex flex-col lg:flex-row items-start gap-8">

          {/* Left Section: Text */}
          <div className="lg:w-[60%] flex flex-col">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-10 text-gray-900
                  bg-gradient-to-r from-[#4DAEC1] to-[#0A374E] text-transparent bg-clip-text">
              {luxuryPropertyData.title}
            </h1>
            <div className="space-y-6 sm:space-y-8 text-base sm:text-lg lg:text-2xl text-gray-500 w-[85%]">
              {luxuryPropertyData.description.map((desc, index) => (
                <p key={index}>{desc}</p>
              ))}
            </div>
          </div>

          {/* Right Section: Image */}
          <div className="lg:w-[40%] flex justify-center lg:justify-end">
            <div className="relative w-full aspect-[1/1] rounded-2xl overflow-hidden shadow-2xl">
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
