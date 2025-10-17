// src/components/OffPlanProjectsHeader.jsx
import React from 'react';
import VideoListItem from '../Ui/VideoListItem';

const videoData = [
    {
        id: 1,
        imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
        videoUrl: 'https://videos.pexels.com/video-files/857195/857195-hd_1920_1080_30fps.mp4'
    },
    {
        id: 2,
        imageUrl: 'https://images.unsplash.com/photo-1593696140826-c58b0218b725?auto=format&fit=crop&w=800&q=80',
        videoUrl: 'https://videos.pexels.com/video-files/2760028/2760028-hd_1920_1080_25fps.mp4'
    },
    {
        id: 3,
        imageUrl: 'https://images.unsplash.com/photo-1570129477085-f3708f307f0f?auto=format&fit=crop&w=800&q=80',
        videoUrl: 'https://videos.pexels.com/video-files/854113/854113-hd_1920_1080_30fps.mp4'
    },
];

function OffPlanProjectsHeader() {
    return (
        <section
            className="max-w-full mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-8 bg-transparent"
            style={{ scrollMarginTop: "100px" }}
        >
            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-lg">

                {/* Section Title */}
                <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
                    <p className="text-lg font-semibold text-primary whitespace-nowrap">Off-Plan</p>
                    <div className="flex-1 h-px bg-primary"></div>
                </div>

                {/* 12-column Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-20">

                    {/* Left Section — 4 columns */}
                    <div className="md:col-span-3 flex flex-col gap-4">
                        <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2 md:mb-0"></p>
                        <div className="flex flex-col gap-4">
                            {videoData.map((video) => (
                                <VideoListItem
                                    key={video.id}
                                    imageUrl={video.imageUrl}
                                    videoUrl={video.videoUrl}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right Section — remaining 8 columns */}
                   {/* Right Section — remaining 8 columns */}
                   <div className="md:col-span-8 relative">
  <div className="sticky top-20 flex flex-col pl-10 pt-0 md:pt-4">
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight
      bg-gradient-to-r from-[#4DAEC1] to-[#0A374E] text-transparent bg-clip-text">
      Light Up Your Way With Our Off-Plan Projects
    </h1>

    {/* Increased spacing between h1 and text */}
    <div className="mt-10 space-y-8 text-gray-400 lg:text-2xl">
      <p className="leading-loose">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it.
      </p>
      <p className="leading-loose">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it.
      </p>
      <p className="leading-loose">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it.
      </p>
    </div>
  </div>
</div>



                </div>
            </div>
        </section>
    );
}

export default OffPlanProjectsHeader;
