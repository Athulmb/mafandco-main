// src/components/PropertiesShowcase.jsx
import React from "react";

/* ---------------- Card Components ---------------- */
function LargeCard({ image, title, metaLeft, metaRight, customAspect }) {
  return (
    <div
      className="relative w-full overflow-hidden rounded-xl shadow-xl"
      style={{ aspectRatio: customAspect || "415/367" }}
    >
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      <div className="absolute left-3 bottom-3 text-white">
        <h2 className="font-extrabold text-lg">{title}</h2>
        <div className="flex gap-2 text-xs opacity-90">
          {metaLeft && <div>{metaLeft}</div>}
          {metaRight && <div>{metaRight}</div>}
        </div>
      </div>
    </div>
  );
}

function MediumCard({ image, title, metaLeft }) {
  return (
    <div
      className="relative w-full overflow-hidden rounded-xl shadow-lg"
      style={{ aspectRatio: "323/410" }}
    >
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
      <div className="absolute left-3 bottom-3 text-white">
        <h3 className="font-bold text-base">{title}</h3>
        {metaLeft && <div className="text-xs opacity-90">{metaLeft}</div>}
      </div>
    </div>
  );
}

function SmallCard({ image, title, metaLeft, avatars = [] }) {
  return (
    <div
      className="relative w-full overflow-hidden rounded-xl shadow-md"
      style={{ aspectRatio: "323/286.33" }}
    >
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      <div className="absolute left-2 bottom-2 text-white">
        <h3 className="font-semibold text-sm">{title}</h3>
        {metaLeft && <div className="text-[11px] opacity-90">{metaLeft}</div>}
      </div>
     
    </div>
  );
}

/* ---------------- Showcase ---------------- */
export default function PropertiesShowcase() {
  const images = {
    a: "https://images.unsplash.com/photo-1560185127-6b6b92f0e0c6?auto=format&fit=crop&w=600&q=80",
    b: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
    c: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=600&q=80",
    d: "https://images.unsplash.com/photo-1505691723518-36a0a2e1a2d8?auto=format&fit=crop&w=600&q=80",
    e: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=600&q=80",
    f: "https://images.unsplash.com/photo-1536614063561-4f52e4b26f90?auto=format&fit=crop&w=600&q=80",
  };

 

  return (
    <section
      className="max-w-full mx-auto px-6 sm:px-10 md:px-16 lg:px-20 py-[100px] md:py-[120px]"
      style={{ scrollMarginTop: "100px" }}
    >
      <div className="bg-white rounded-md p-6 md:p-12 shadow-lg">
      {/* Section Header */}
      <header className="mb-12 text-start">
        <h1 className="text-2xl md:text-3xl font-bold">
          View Our Off-Plan Properties Here
        </h1>
        <p className="mt-2 text-sm text-gray-600 max-w-2xl ">
          Explore premium residences with a perfect blend of luxury and comfort.
        </p>
      </header>

      {/* Row 1 */}
      <div className="grid grid-cols-12 gap-1 mb-6 ">
      <div className="col-span-3 pt-12">
          <MediumCard image={images.b} title="Azure Heights" metaLeft="Residence • Tower" />
        </div>
        <div className="col-span-6 p-12">
          <LargeCard image={images.e} title="Park Gate" metaLeft="Residence" metaRight="Tower" />
        </div>
       
        <div className="col-span-3 pt-12">
          <SmallCard image={images.c} title="Palm View"  metaLeft="Residence" />
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-12 gap-1 mb-6 ">
        
    
        <div className="col-span-3 pt-12">
          <SmallCard image={images.c} title="Palm View"  metaLeft="Residence" />
        </div>
        <div className="col-span-6 p-12">
          <LargeCard image={images.e} title="Park Gate" metaLeft="Residence" metaRight="Tower" />
        </div>
        <div className="col-span-3 pt-12">
          <MediumCard image={images.b} title="Azure Heights" metaLeft="Residence • Tower" />
        </div>
       

      </div>

      {/* Row 3 */}
      <div className="grid grid-cols-12 gap-1 mb-6 ">
      <div className="col-span-3 pt-12">
          <MediumCard image={images.b} title="Azure Heights" metaLeft="Residence • Tower" />
        </div>
        <div className="col-span-6 p-12">
          <LargeCard image={images.e} title="Park Gate" metaLeft="Residence" metaRight="Tower" />
        </div>
       
        <div className="col-span-3 pt-12">
          <SmallCard image={images.c} title="Palm View"  metaLeft="Residence" />
        </div>
      </div>
      </div>
    </section>
  );
}
