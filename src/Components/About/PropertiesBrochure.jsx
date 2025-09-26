import React from 'react';

function PropertiesBrochure() {
  return (
    <div id="full" className="w-full bg-white shadow-2xl px-6 sm:px-8 md:px-12 lg:px-24 py-8">
      <div className="flex min-h-screen">
        {/* Left Side - Dummy Text Area (30%) - Hidden on md and below */}
        <div className="hidden lg:block w-[30%] bg-transparent p-10 flex-col justify-center">
          <div className="space-y-6">
            <p className="text-base text-gray-500 uppercase tracking-wider">Dummy Text</p>
            
            <div className="space-y-4">
              <div className="h-5 bg-gray-300 rounded opacity-60"></div>
              <div className="h-5 bg-gray-300 rounded opacity-50 w-4/5"></div>
              <div className="h-5 bg-gray-300 rounded opacity-40 w-3/5"></div>
            </div>
            
            <div className="space-y-4 mt-8">
              <div className="h-4 bg-gray-250 rounded opacity-50"></div>
              <div className="h-4 bg-gray-250 rounded opacity-40 w-5/6"></div>
              <div className="h-4 bg-gray-250 rounded opacity-30 w-4/5"></div>
              <div className="h-4 bg-gray-250 rounded opacity-40 w-3/4"></div>
            </div>
            
            <div className="space-y-4 mt-8">
              <div className="h-4 bg-gray-200 rounded opacity-60"></div>
              <div className="h-4 bg-gray-200 rounded opacity-50 w-4/5"></div>
              <div className="h-4 bg-gray-200 rounded opacity-40 w-2/3"></div>
            </div>
            
            <div className="space-y-3 mt-8">
              <div className="h-3 bg-gray-200 rounded opacity-50"></div>
              <div className="h-3 bg-gray-200 rounded opacity-40 w-5/6"></div>
              <div className="h-3 bg-gray-200 rounded opacity-30 w-3/4"></div>
              <div className="h-3 bg-gray-200 rounded opacity-40 w-4/5"></div>
              <div className="h-3 bg-gray-200 rounded opacity-30 w-2/3"></div>
            </div>
          </div>
        </div>

        {/* Right Side - Main Content (70% on lg+, 100% on md and below) */}
        <div className="w-full lg:w-[70%] bg-white">
          {/* Header */}
          <div className="bg-transparent px-4 sm:px-8 lg:px-12 py-8 lg:py-12 overflow-y-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Why Choose MAF & Co Properties LLC?
            </h1>
          </div>

          <div className="px-4 sm:px-8 lg:px-12 py-8 lg:py-12 overflow-y-auto">
            {/* Prime Location Expertise */}
            <div className="mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl font-semibold text-black/50 mb-4 lg:mb-6">
                Prime Location Expertise
              </h2>
              <p className="text-gray-700 leading-relaxed text-base lg:text-lg">
                Located in Business Bay, we offer unparalleled insights into Dubai's real estate landscape. Our strategic 
                position allows us to provide our clients with access to the most exclusive property investments and 
                market trends.
              </p>
            </div>

            {/* Luxury Property Specialists */}
            <div className="mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl font-semibold text-black/50 mb-4 lg:mb-6">
                Luxury Property Specialists
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6 lg:mb-8 text-base lg:text-lg">
                Our portfolio includes a wide range of luxury homes, high-end villas, and prestigious apartments in 
                Dubai's most desirable neighborhoods. Whether you are interested in waterfront properties, golf course 
                residences, or city-view apartments, we have something to match your lifestyle and preferences.
              </p>
              
              {/* Professional Images Section */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8 mb-6 lg:mb-8">
                {/* Professional Consultation Image */}
                <div className="relative overflow-hidden rounded-lg h-48 sm:h-56 md:h-64 lg:h-80 xl:h-96">
                  <img 
                    src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                    alt="Professional consultation"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Technology & Service Image */}
                <div className="relative overflow-hidden rounded-lg h-48 sm:h-56 md:h-64 lg:h-80 xl:h-96">
                  <img 
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                    alt="Professional service"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Client-Centric Approach */}
            <div className="mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl font-semibold text-black/50 mb-4 lg:mb-6">
                Client-Centric Approach
              </h2>
              <p className="text-gray-700 leading-relaxed text-base lg:text-lg">
                We prioritize your needs and work closely with you to provide tailored solutions for buying, selling, and 
                leasing properties. Our personalized service ensures that every aspect of your real estate journey is 
                handled with care and professionalism.
              </p>
            </div>

            {/* Innovative Solutions */}
            <div className="mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl font-semibold text-black/50 mb-4 lg:mb-6">
                Innovative Solutions
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6 lg:mb-8 text-base lg:text-lg">
                Leveraging the latest technology and market insights, we offer cutting-edge property management 
                services, investment strategies, and real estate solutions. Our innovative approach helps us stay ahead 
                of the competition and deliver superior results.
              </p>

              {/* Innovation Images */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8 mb-6 lg:mb-8">
                {/* Innovation Concept */}
                <div className="relative overflow-hidden rounded-lg h-48 sm:h-56 md:h-64 lg:h-80 xl:h-96">
                  <img 
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                    alt="Innovation and technology"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Client Consultation */}
                <div className="relative overflow-hidden rounded-lg h-48 sm:h-56 md:h-64 lg:h-80 xl:h-96">
                  <img 
                    src="https://images.unsplash.com/photo-1556484687-30636164638b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                    alt="Expert consultation"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Comprehensive Real Estate Services */}
            <div className="mb-8 lg:mb-12">
              <h2 className="text-2xl sm:text-3xl font-semibold text-black/50 mb-4 lg:mb-6">
                Comprehensive Real Estate Services
              </h2>
              <p className="text-gray-700 leading-relaxed text-base lg:text-lg">
                From property management and investment advisory to leasing and sales, our full spectrum of services 
                ensures that all your real estate needs are met under one roof. We handle everything from market 
                analysis to property maintenance, providing a hassle-free experience for our clients.
              </p>
            </div>
          </div>

          {/* Footer */}
        </div>
      </div>
    </div>
  );
}

export default PropertiesBrochure;