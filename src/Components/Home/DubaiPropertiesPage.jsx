import React from 'react';
import { Star } from 'lucide-react';

function DubaiPropertiesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left Side - Image */}
            <div className="relative h-full min-h-[400px] md:min-h-[600px]">
              <img
                src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=1000&fit=crop"
                alt="Dubai Skyline"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Right Side - Content */}
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <div className="space-y-6">
                {/* Header */}
                <p className="text-sm text-gray-600 uppercase tracking-wide">
                  About our company
                </p>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Explore Dubai's Finest Properties With MAF & Co Properties LLC
                </h1>

                {/* User Reviews */}
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white flex items-center justify-center text-white text-sm font-semibold">
                      JD
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 border-2 border-white flex items-center justify-center text-white text-sm font-semibold">
                      SA
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 border-2 border-white flex items-center justify-center text-white text-sm font-semibold">
                      MK
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white flex items-center justify-center text-white text-sm font-semibold">
                      AL
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    </div>
                    <p className="text-sm font-semibold text-gray-900">1200+</p>
                    <p className="text-xs text-gray-600">users review</p>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
                  <p className="font-semibold text-gray-900">
                    Discover Unmatched Excellence with MAF & Co Properties LLC
                  </p>
                  
                  <p>
                    At MAF & Co Properties LLC, we are your trusted partner in navigating Dubai's dynamic real 
                    estate market. Established in 2024 and strategically located in Business Bay, one of Dubai's 
                    most prestigious and sought-after neighborhoods, we specialize in offering luxury real estate 
                    solutions tailored to discerning clients worldwide.
                  </p>

                  <p>
                    Our portfolio includes an exclusive selection of high-end residences, waterfront villas, and 
                    prime commercial properties in Dubai's top communities, such as Downtown Dubai, Palm 
                    Jumeirah, and Dubai Marina. Whether you're an investor looking for high ROI real estate 
                    opportunities or searching for your dream home, we combine professionalism, market 
                    expertise, and a personalized approach to deliver unparalleled results.
                  </p>

                  <p>
                    At MAF & Co Properties LLC, we are committed to helping you explore the best real estate 
                    investment opportunities in Dubai. With a reputation for integrity, reliability, and exceptional 
                    service, we ensure that your journey into Dubai's luxury property market is seamless and 
                    rewarding.
                  </p>
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <button className="bg-blue-900 hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded-md transition-colors duration-200">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default  DubaiPropertiesPage;