import React, { useState } from "react";

/* ---------------- PropertyCard Component ---------------- */
function PropertyCard({ image, title, metaLeft, metaRight, place, type, price }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full overflow-hidden rounded-xl shadow-lg transition-all duration-300 transform hover:scale-[1.02] cursor-pointer"
      style={{ aspectRatio: "1 / 1" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <img src={image} alt={title} className="w-full h-full object-cover" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

      {/* Main Info */}
      <div className="absolute left-4 bottom-4 right-4 text-white transition-all duration-500">
        <h2 className="font-bold text-lg sm:text-xl mb-1">{title}</h2>
        <div className="flex gap-3 text-xs sm:text-sm font-medium opacity-80">
          {metaLeft && <div>{metaLeft}</div>}
          {metaRight && <div>{metaRight}</div>}
        </div>

        {/* Hover Info Section */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isHovered ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex justify-between items-end">
            {/* Left Side */}
            <div className="space-y-1 text-sm sm:text-base font-medium">
              {place && <p className="text-gray-100">{place}</p>}
              {type && <p className="text-gray-100">{type}</p>}
            </div>

            {/* Right Side (Price) */}
            {price && (
              <div className="text-right">
                <p className="text-xs sm:text-sm text-gray-300">Starting Price</p>
                <p className="text-white font-semibold text-base sm:text-lg">
                  {price}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Data ---------------- */
const propertiesData = [
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    title: "Starlight Enclave",
    metaLeft: "Residence",
    metaRight: "Tower",
    place: "MBR City",
    type: "Type - Bedroom Villas",
    price: "11.2M AED",
  },
  {
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80",
    title: "Riverfront Villas",
    metaLeft: "Villa",
    metaRight: "Luxury",
    place: "Palm Jumeirah",
    type: "Type - 4BHK Villas",
    price: "5.2M AED",
  },
  {
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
    title: "Greenwood Apartments",
    metaLeft: "Apartment",
    metaRight: "City",
    place: "Downtown Dubai",
    type: "Type - 2BHK Apartments",
    price: "2.8M AED",
  },
  {
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80",
    title: "Sunset Residency",
    metaLeft: "Condo",
    metaRight: "Premium",
    place: "Business Bay",
    type: "Type - 3BHK Condos",
    price: "3.9M AED",
  },
  {
    image: "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=800&q=80",
    title: "Oceanview Heights",
    metaLeft: "Penthouse",
    metaRight: "Sea",
    place: "Jumeirah Beach",
    type: "Type - 5BHK Penthouse",
    price: "8.5M AED",
  },
  {
    image: "https://images.unsplash.com/photo-1600585154154-7a27d3b9b42a?auto=format&fit=crop&w=800&q=80",
    title: "Maplewood Estates",
    metaLeft: "Villa",
    metaRight: "Modern",
    place: "Arabian Ranches",
    type: "Type - 3BHK Villas",
    price: "4.3M AED",
  },
  {
    image: "https://images.unsplash.com/photo-1586105251261-72a756497a12?auto=format&fit=crop&w=800&q=80",
    title: "Skyline Towers",
    metaLeft: "Apartment",
    metaRight: "Urban",
    place: "Dubai Marina",
    type: "Type - 2BHK Homes",
    price: "3.1M AED",
  },
  {
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80",
    title: "Cedar Park Homes",
    metaLeft: "Residence",
    metaRight: "Park",
    place: "Dubai Hills",
    type: "Type - 3BHK Homes",
    price: "3.7M AED",
  },
  {
    image: "https://images.unsplash.com/photo-1592595896551-12b371d546d4?auto=format&fit=crop&w=800&q=80",
    title: "Lakeside Villas",
    metaLeft: "Villa",
    metaRight: "Lake",
    place: "Emirates Hills",
    type: "Type - 4BHK Villas",
    price: "6.4M AED",
  },
  {
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=800&q=80",
    title: "Hilltop Residency",
    metaLeft: "Condo",
    metaRight: "Hill",
    place: "Al Barari",
    type: "Type - 3BHK Condos",
    price: "4.9M AED",
  },
  {
    image: "https://images.unsplash.com/photo-1599427303058-fb1a79e5d1c5?auto=format&fit=crop&w=800&q=80",
    title: "Maple Heights",
    metaLeft: "Apartment",
    metaRight: "Modern",
    place: "Dubai Creek",
    type: "Type - 2BHK Apartments",
    price: "2.5M AED",
  },
  {
    image: "https://images.unsplash.com/photo-1600585154600-59cfb0062b07?auto=format&fit=crop&w=800&q=80",
    title: "Aurora Residences",
    metaLeft: "Residence",
    metaRight: "Luxury",
    place: "Bluewaters Island",
    type: "Type - 4BHK Homes",
    price: "6.8M AED",
  },
  {
    image: "https://images.unsplash.com/photo-1600585153934-63430b14e7a7?auto=format&fit=crop&w=800&q=80",
    title: "Pearl Avenue",
    metaLeft: "Residence",
    metaRight: "Exclusive",
    place: "City Walk",
    type: "Type - 3BHK Homes",
    price: "4.6M AED",
  },
  {
    image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=800&q=80",
    title: "Golden Horizon",
    metaLeft: "Apartment",
    metaRight: "Skyline",
    place: "Downtown Dubai",
    type: "Type - 2BHK Apartments",
    price: "3.3M AED",
  },
  {
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80",
    title: "Emerald Bay",
    metaLeft: "Villa",
    metaRight: "Waterfront",
    place: "Dubai Harbour",
    type: "Type - 5BHK Villas",
    price: "9.6M AED",
  },
  {
    image: "https://images.unsplash.com/photo-1580587771509-8a3b3d5a5d3d?auto=format&fit=crop&w=800&q=80",
    title: "Palm Heights",
    metaLeft: "Penthouse",
    metaRight: "Luxury",
    place: "Palm Jumeirah",
    type: "Type - 4BHK Penthouse",
    price: "10.5M AED",
  },
];


/* ---------------- Grid Component ---------------- */
export default function PropertiesForSaleGrid() {
  return (
    <section className="bg-backgound py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 md:mb-12">
          Properties For Sale
        </h2>

        {/* Responsive Grid */}
        <div
          className="grid gap-4 sm:gap-6 lg:gap-10 
                     grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 
                     justify-items-center"
        >
          {propertiesData.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
}
