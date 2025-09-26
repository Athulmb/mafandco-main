import React from "react";

const aboutHeroData = {
  backgroundImage: "AboutHero.png", // 🔹 Replace with your image path
  title: "About the Company",
  underline: true,
};

const AboutHero = () => {
  return (
    <section className="w-full flex">
      {/* Image */}
      <div className="w-full relative">
        <img
          src={aboutHeroData.backgroundImage}
          alt={aboutHeroData.title}
          className="w-full h-auto filter brightness-150" // 🔹 brighten the image
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 max-w-6xl px-4 sm:px-6 md:px-10 lg:px-20">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-left">
            {aboutHeroData.title}
          </h1>
          {aboutHeroData.underline && (
            <div className="mt-2 w-32 h-1 bg-white"></div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
