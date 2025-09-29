import React from "react";

const eventsHeroData = {
  backgroundImage: "AboutHero.png", // 🔹 Replace with your image path
  title: "Our Events",
  underline: true,
};

const EventsHero = () => {
  return (
    <section className="w-full flex">
      {/* Image */}
      <div className="w-full relative">
        <img
          src={eventsHeroData.backgroundImage}
          alt={eventsHeroData.title}
          className="w-full h-auto filter " // slightly brighten image
        />
        {/* Overlay */}

        {/* Content */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 max-w-6xl px-4 sm:px-6 md:px-10 lg:px-20">
          <h1 className="text-white text-2xl pt-4 sm:text-4xl md:text-5xl lg:text-7xl font-lufga font-bold text-left">
            {eventsHeroData.title}
          </h1>
          {eventsHeroData.underline && (
            <div className="mt-2 w-1/2 h-1 bg-white"></div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EventsHero;
