import React from "react";

// 🔹 Data object
const aboutLandingData = {
  image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80",
  companyLabel: "About our company",
  title: "Explore Dubai's Finest Properties With MAF & Co Properties LLC",
  teamAvatars: [
    "from-blue-400 to-blue-600",
    "from-pink-400 to-pink-600",
    "from-purple-400 to-purple-600",
    "from-green-400 to-green-600",
  ],
  userReviewCount: "1200+",
  reviewLabel: "users review",
  description: [
    "Discover Unmatched Excellence with MAF & Co Properties LLC. At MAF & Co Properties LLC, we are your trusted partner in navigating Dubai's dynamic real estate market. Established in 2024 and strategically located in Business Bay, one of Dubai's most prestigious and sought-after neighborhoods, we specialize in offering luxury real estate solutions tailored to discerning clients worldwide.",
    "Our portfolio includes an exclusive selection of high-end residences, waterfront villas, and prime commercial properties in Dubai's top communities, such as Downtown Dubai, Palm Jumeirah, and Dubai Marina. Whether you're an investor looking for high ROI real estate opportunities or searching for your dream home, we combine professionalism, market expertise, and a personalized approach to deliver unparalleled results.",
    "At MAF & Co Properties LLC, we are committed to helping you explore the best real estate investment opportunities in Dubai. With a reputation for integrity, reliability, and exceptional service, we ensure that your journey into Dubai's luxury property market is seamless and rewarding.",
  ],
  buttonText: "Contact Us",
};

const AboutLanding = () => {
  const data = aboutLandingData;

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
            {/* Image Section */}
            <div className="relative overflow-hidden">
              <img
                src={data.image}
                alt={data.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content Section */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              {/* Company Label */}
              <p className="text-gray-500 text-sm uppercase tracking-wide mb-4">
                {data.companyLabel}
              </p>

              {/* Main Heading */}
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                {data.title}
              </h1>

              {/* Team Avatars and Review */}
              <div className="flex items-center mb-6">
                <div className="flex -space-x-2 mr-4">
                  {data.teamAvatars.map((gradient, index) => (
                    <div
                      key={index}
                      className={`w-9 h-9 bg-gradient-to-br ${gradient} rounded-full border-2 border-white`}
                    ></div>
                  ))}
                </div>
                <div className="text-sm">
                  <div className="font-semibold text-gray-900">
                    {data.userReviewCount}
                  </div>
                  <div className="text-gray-500">{data.reviewLabel}</div>
                </div>
              </div>

              {/* Description Paragraphs */}
              <div className="space-y-4 text-gray-600 text-sm leading-relaxed mb-8">
                {data.description.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {/* Contact Button */}
              <button className="bg-slate-700 hover:bg-slate-800 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 self-start">
                {data.buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutLanding;
