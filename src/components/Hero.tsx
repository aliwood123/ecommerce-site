import React from 'react';
import backgroundVideo from '../assets/videos/hero.mp4';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[80vh] overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay with content */}
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Gear Up for the Trail and Town
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Premium outdoor apparel for every adventure
          </p>
          <button className="bg-white text-gray-900 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg 
            transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg 
            hover:translate-y-[-2px] active:translate-y-0 active:scale-100">
            Shop Collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero; 