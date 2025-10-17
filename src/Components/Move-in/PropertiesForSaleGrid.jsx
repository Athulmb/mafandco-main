// src/components/PropertiesForSaleGrid.jsx
import React from 'react';

// PropertyCard Component
function PropertyCard({ image, title, metaLeft, metaRight }) {
  return (
    <div
      className="relative w-full overflow-hidden rounded-xl shadow-lg transition-all duration-300 transform hover:scale-[1.02] cursor-pointer"
      style={{ aspectRatio: "1 / 1" }}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />
      {/* Dark Gradient Overlay for readability of text */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

      {/* Text Content at the bottom left */}
      <div className="absolute left-4 bottom-4 text-white">
        <h2 className="font-bold text-lg sm:text-xl mb-1">{title}</h2>
        <div className="flex gap-3 text-xs sm:text-sm font-medium opacity-80">
          {metaLeft && <div>{metaLeft}</div>}
          {metaRight && <div>{metaRight}</div>}
        </div>
      </div>
    </div>
  );
}

// Array of 12 unique property images
const propertiesData = [
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    title: "Starlight Enclave",
    metaLeft: "Residence",
    metaRight: "Tower"
  },
  {
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80",
    title: "Riverfront Villas",
    metaLeft: "Villa",
    metaRight: "Luxury"
  },
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    title: "Greenwood Apartments",
    metaLeft: "Apartment",
    metaRight: "City"
  },
  {
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80",
    title: "Sunset Residency",
    metaLeft: "Condo",
    metaRight: "Premium"
  },
  {
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80",
    title: "Oceanview Heights",
    metaLeft: "Penthouse",
    metaRight: "Sea"
  },
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    title: "Maplewood Estates",
    metaLeft: "Villa",
    metaRight: "Modern"
  },
  {
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80",
    title: "Skyline Towers",
    metaLeft: "Apartment",
    metaRight: "Urban"
  },
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    title: "Cedar Park Homes",
    metaLeft: "Residence",
    metaRight: "Park"
  },
  {
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
    title: "Lakeside Villas",
    metaLeft: "Villa",
    metaRight: "Lake"
  },
  {
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80",
    title: "Hilltop Residency",
    metaLeft: "Condo",
    metaRight: "Hill"
  },
  {
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
    title: "Maple Heights",
    metaLeft: "Apartment",
    metaRight: "Modern"
  },
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    title: "Aurora Residences",
    metaLeft: "Residence",
    metaRight: "Luxury"
  }
];

function PropertiesForSaleGrid() {
  return (
    <section className="bg-backgound py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 md:mb-12">
          Properties For Sale
        </h2>

        {/* Responsive Grid Layout */}
        <div
          className="grid gap-4 sm:gap-6 lg:gap-10 
                     grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 
                     justify-items-center"
        >
          {propertiesData.map((property, index) => (
            <PropertyCard
              key={index}
              image={property.image}
              title={property.title}
              metaLeft={property.metaLeft}
              metaRight={property.metaRight}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PropertiesForSaleGrid;
