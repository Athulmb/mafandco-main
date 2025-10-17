// src/components/PropertyCard.jsx
import React from 'react';

const PropertyCard = ({ imageUrl, title, description }) => {
  return (
    <div className="flex flex-col items-start w-full max-w-sm mx-auto my-16">
      {/* Image Container */}
      <div className="w-full aspect-[1/1] rounded-xl overflow-hidden ">
        <img
          src={imageUrl}
          alt={title}
          // The 'object-cover' and 'duration-300' ensure the image fills the container and provides a subtle hover effect
          className="w-full h-full object-cover transition duration-300 ease-in-out hover:scale-[1.03]"
        />
      </div>

      {/* Text Content */}
      <h3 className="mt-6 text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900">
        {title}
      </h3>
      <p className="mt-2 text-lg text-gray-600">
        {description}
      </p>
    </div>
  );
};

export default PropertyCard;