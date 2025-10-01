import React from 'react';

const EventCard = ({ image, title, description, date, badge }) => (
  <div className="bg-transparent overflow-hidden rounded-lg hover:shadow-md transition-shadow duration-300 h-full flex flex-col gap-8 min-h-[500px]">
    <div className="relative flex-shrink-0">
      <img 
        src={image} 
        alt={title}
        className="w-full h-72 sm:h-64 md:h-72 lg:h-72 xl:h-72 object-cover rounded-xl"
      />
      {date && (
        <div className="absolute top-3 right-3 bg-black bg-opacity-70 text-white px-3 py-1.5 rounded text-xs font-medium">
          {date}
        </div>
      )}
      {badge && (
        <div className="absolute top-3 left-3 bg-blue-600 text-white px-3 py-1.5 rounded text-xs font-bold">
          {badge}
        </div>
      )}
    </div>
    <div className="p-5 flex-grow flex flex-col">
      <h3 className="font-bold text-xl text-gray-900 mb-3 flex-shrink-0">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed flex-grow">{description}</p>
    </div>
  </div>
);


const UpcomingEvents = () => {
  const events = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Luxury Property Show 2025",
      description: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum",
      date: "25 Sept 2025",
      badge: "DUBAI PROPERTY SHOW"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Property Show",
      description: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum",
      date: "25 Sept 2025"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Luxury Property Show 2025",
      description: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum",
      date: "25 Sept 2025",
      badge: "ARCHIVES REALTY"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Luxury Property Show 2025",
      description: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum",
      date: "25 Sept 2025"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Luxury Property Show 2025",
      description: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum",
      date: "25 Sept 2025"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-6 md:px-10 lg:px-20 py-3">
      {/* Header */}
      <div className="bg-white">
        <div className="w-full">
          <div className="flex items-center text-sm text-gray-500">
            <span className="hover:text-gray-700 text-xl cursor-pointer">Events for you</span>
            <div className="ml-3 w-px h-4 bg-gray-300"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full pt-[70px]">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Upcoming Events</h1>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {events.map((event) => (
            <EventCard
              key={event.id}
              image={event.image}
              title={event.title}
              description={event.description}
              date={event.date}
              badge={event.badge}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
