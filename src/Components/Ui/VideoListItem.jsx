import React, { useState } from "react";
import { Play } from "lucide-react"; // Changed icon import

function VideoListItem({ imageUrl, videoUrl }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div
      className="relative w-full aspect-[316/459] overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      onClick={() => setIsPlaying(true)}
    >
      {!isPlaying ? (
        <>
          {/* Thumbnail Image */}
          <img
            src={imageUrl}
            alt="Off-Plan Project Preview"
            className="w-full h-full object-cover"
          />

          {/* Custom Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/20 transition-all duration-300">
            <div className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/50 transition">
              <Play className="w-8 h-8 text-white fill-white" />
            </div>
          </div>
        </>
      ) : (
        // Video Player
        <video
          src={videoUrl}
          controls
          autoPlay
          className="w-full h-full object-cover rounded-lg"
          onClick={(e) => e.stopPropagation()} // prevent click from closing while playing
        />
      )}
    </div>
  );
}

export default VideoListItem;
