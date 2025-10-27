import React from 'react';

// Place ID for Statue of Liberty (from tool output)
const STATUE_OF_LIBERTY_PLACE_ID = "ChIJPTacEpBQwokRKwIlDXelxkA";
const STATUE_OF_LIBERTY_ADDRESS = "New York, NY 10004, USA";
const STATUE_OF_LIBERTY_NAME = "Statue of Liberty";
const RATING = "4.7";
const REVIEW_COUNT = "109,859";

/**
 * Generates a Google Maps directions URL.
 * The 'origin=Current+Location' parameter prompts Google Maps to use the user's current location.
 * @returns {string} The Google Maps directions URL.
 */
const getDirectionsUrl = () => {
  return `https://www.google.com/maps/dir/?api=1&origin=Current+Location&destination_place_id=${STATUE_OF_LIBERTY_PLACE_ID}`;
};

/**
 * Google Maps Embed URL for the Statue of Liberty area.
 * This clones the map's visual appearance and provides functionality.
 */
const getMapEmbedUrl = () => {
  // A link that centers on the Statue of Liberty (z=11 is a good zoom level for the area)
  return `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${STATUE_OF_LIBERTY_NAME},${STATUE_OF_LIBERTY_ADDRESS}&zoom=11`;
};

// Agent Card component to clone the bottom section
const AgentCard = () => (
    <div className="flex items-center justify-between p-3  rounded-xl  bg-transparent">
        <div className="flex items-center">
            {/* Agent Image - Placeholder */}
            {/* Note: The image in the original design looks like a headshot, so we use a placeholder that fits */}
            <img 
                src="https://via.placeholder.com/48x48?text=Agent"
                alt="Mateo R. Albright" 
                className="w-12 h-12 rounded-full object-cover mr-3"
            />
            <div>
                <p className="text-xs text-gray-500 font-normal">Call Us Our Agent</p>
                <h3 className="text-sm font-semibold text-gray-800">Mateo R. Albright</h3>
            </div>
        </div>
        {/* Call Button */}
        <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 transition duration-150 ease-in-out">
            Call Now
        </button>
    </div>
);


const ImageCloneComponent = () => {
    // Handler to open the directions link in a new tab
    const handleGetDirection = () => {
        window.open(getDirectionsUrl(), '_blank');
    };

    return (
        // The container matches the subtle background shadow/border of the original image
        <div className=" border border-gray-100 rounded-xl shadow-lg bg-backgound  px-6 sm:px-10 lg:px-20 py-10">
            
            {/* Main Layout: Responsive Grid (1 column on mobile, 2 columns on desktop) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white p-8 rounded-xl">
                
                {/* Left Column: Map Container (spans 6 columns) */}
                <div className="lg:col-span-6 min-h-[500px] relative">
                    {/* The iframe for the embedded map */}
                    <iframe
                        title="Statue of Liberty Map"
                        className="w-full h-full rounded-xl border border-gray-300"
                        src={getMapEmbedUrl()}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>

                    {/* ABSOLUTELY Positioned Map Info Box - CLONES THE IMAGE */}
                    <div className="absolute top-4 left-4 p-4 bg-white shadow-xl rounded-xl w-11/12 max-w-xs z-10">
                        <div className="flex justify-between items-start">
                            <div>
                                <h2 className="text-lg font-semibold text-gray-800">{STATUE_OF_LIBERTY_NAME}</h2>
                                <p className="text-sm text-gray-500">{STATUE_OF_LIBERTY_ADDRESS.split(',')[0]}, NY 10004</p>
                            </div>
                            <button 
                                onClick={handleGetDirection} 
                                className="text-blue-600 text-sm font-medium whitespace-nowrap ml-2 hover:underline"
                            >
                                Directions
                            </button>
                        </div>
                        <div className="flex items-center mt-2">
                            <span className="text-base font-bold text-yellow-500 mr-1">{RATING}</span>
                            <span className="text-sm text-gray-500">({REVIEW_COUNT} reviews)</span>
                        </div>
                        <a href={`https://www.google.com/maps/place/?q=place_id:${STATUE_OF_LIBERTY_PLACE_ID}`} 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           className="text-sm text-blue-600 font-medium mt-1 inline-block hover:underline"
                        >
                            View larger map
                        </a>
                    </div>
                    
                    {/* Note: The zoom controls are part of the embedded map and do not need to be manually added. 
                        The small inset image on the bottom left is a Google Maps feature that appears 
                        automatically when using the embed service.
                    */}
                </div>
                
                {/* Right Column: Content (spans 6 columns) */}
                <div className="lg:col-span-6 flex flex-col justify-between">
                    <div>
                        <h1 className="text-4xl font-semibold text-gray-800 mb-6">
                            What's Nearby
                        </h1>
                        
                        {/* Text Content */}
                        <p className="text-gray-600 mb-8 leading-relaxed text-base">
                            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
                        </p>

                        {/* Get Direction Button - CLONES THE IMAGE */}
                        {/* Note: The button's primary action now performs the required navigation. */}
                        <button 
                            onClick={handleGetDirection} 
                            className="px-6 py-3 mb-12 bg-primary text-white text-sm font-medium rounded-lg shadow-md hover:bg-gray-800 transition duration-150 ease-in-out"
                        >
                            Get Direction
                        </button>
                    </div>

                    {/* Agent Card */}
                    <AgentCard />
                </div>
            </div>
        </div>
    );
};

export default ImageCloneComponent;