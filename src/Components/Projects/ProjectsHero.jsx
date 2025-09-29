import React from "react";

const projectHeroData = {
    backgroundImage: "AboutHero.png", // 🔹 Replace with your image path
    title: "Our Projects",
  underline: true,
};

const ProjectHero = () => {
  return (
    <section className="w-full flex">
      {/* Image */}
      <div className="w-full relative">
        <img
          src={projectHeroData.backgroundImage}
          alt={projectHeroData.title}
          className="w-full h-auto filter " // 🔹 brighten the image
        />
        {/* Overlay */}

        {/* Content */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 max-w-6xl px-4 sm:px-6 md:px-10 lg:px-20">
          <h1 className="text-white text-2xl pt-4 sm:text-4xl md:text-5xl lg:text-7xl font-lufga font-bold text-left">
            {projectHeroData.title}
          </h1>
          {projectHeroData.underline && (
            <div className="mt-2 w-1/2 h-1 bg-white"></div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectHero;
