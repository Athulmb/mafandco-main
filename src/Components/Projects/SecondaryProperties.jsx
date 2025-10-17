// src/components/SecondaryProperties.jsx
import React from 'react';
import PropertyCard from '../Ui/PropertyCard';

// Dummy Data to represent the three cards
const propertiesData = [
    {
      id: 1,
      imageUrl:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80",
      title: "Harmony House",
      description:
        "A modern, eco-friendly home designed with sustainable materials and elegant architecture.",
    },
    {
      id: 2,
      imageUrl:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      title: "Serenity Villa",
      description:
        "A peaceful residence surrounded by greenery, blending luxury and comfort effortlessly.",
    },
    {
      id: 3,
      imageUrl:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      title: "Sunset Residence",
      description:
        "A contemporary home offering panoramic views and spacious interiors filled with natural light.",
    },
  ];
  

const SecondaryProperties = () => {
  return (
    // Outer container with padding
    <section
    className="max-w-full mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-12 sm:py-16 md:py-20 lg:py-24 bg-backgound"
    style={{ scrollMarginTop: "100px" }}
  >      <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-lg">
        
        {/* Header */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center text-gray-900 mb-12 md:mb-16">
          Secondary Properties
        </h2>

        {/* Responsive Grid Layout */}
        <div 
          className="grid gap-8  col-1
                     sm:grid-cols-2 
                     lg:grid-cols-3 
                     justify-items-center"
        >
          {propertiesData.map((property) => (
            <PropertyCard
              key={property.id}
              imageUrl={property.imageUrl}
              title={property.title}
              description={property.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecondaryProperties;