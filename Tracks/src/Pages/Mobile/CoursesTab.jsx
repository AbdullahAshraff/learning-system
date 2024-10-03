import React from "react";
import { FaMobileAlt } from "react-icons/fa"; // Mobile icon
import { SiFlutter, SiReactrouter, SiIonic } from "react-icons/si"; // Mobile related icons

const MobileAppTrack = () => {
  return (
    <div className="relative bg-gradient-to-br from-[#DEB041] via-[#998443] to-[#0f0f0f] p-10 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-500 ease-in-out transform ">
      {/* Layered Background for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-30 pointer-events-none rounded-3xl"></div>
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#998443] opacity-40 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#0f0f0f] opacity-40 rounded-full blur-3xl"></div>

      {/* Title and Description */}
      <h1 className="relative text-5xl font-extrabold text-white mb-6 z-10 transform transition-transform duration-500 hover:scale-110 text-center">
        Mobile App Track
      </h1>
      <p className="relative text-lg text-gray-200 mb-8 z-10 transform transition-opacity duration-500 hover:opacity-90">
        Join the Mobile App Track to master mobile technologies like Flutter, React Native, and Ionic to create stunning cross-platform applications.
      </p>

      {/* Mobile Framework List with Icons, Titles, and Descriptions */}
      <div className="relative grid grid-cols-2 gap-6 z-10 cursor-pointer">
        {/* Flutter */}
        <div className="group p-4 bg-white bg-opacity-10 rounded-xl shadow-inner transform transition-all duration-500 hover:bg-opacity-20 hover:scale-105">
          <div className="flex items-center space-x-4">
            <SiFlutter className="text-blue-500 text-4xl group-hover:animate-bounce" />
            <span className="text-2xl text-white">Flutter</span>
          </div>
          <p className="text-sm text-gray-300 mt-2">
            Flutter is an open-source UI toolkit by Google for building natively compiled applications for mobile, web, and desktop from a single codebase.
          </p>
        </div>

        {/* React Native */}
        <div className="group p-4 bg-white bg-opacity-10 rounded-xl shadow-inner transform transition-all duration-500 hover:bg-opacity-20 hover:scale-105">
          <div className="flex items-center space-x-4">
            <FaMobileAlt className="text-blue-600 text-4xl group-hover:animate-bounce" />
            <span className="text-2xl text-white">React Native</span>
          </div>
          <p className="text-sm text-gray-300 mt-2">
            React Native is a framework for building native applications using React, allowing developers to use web development skills for mobile apps.
          </p>
        </div>

        {/* Ionic */}
        <div className="group p-4 bg-white bg-opacity-10 rounded-xl shadow-inner transform transition-all duration-500 hover:bg-opacity-20 hover:scale-105">
          <div className="flex items-center space-x-4">
            <SiIonic className="text-darkblue-500 text-4xl group-hover:animate-bounce" />
            <span className="text-2xl text-white">Ionic</span>
          </div>
          <p className="text-sm text-gray-300 mt-2">
            Ionic is a powerful HTML5 SDK that helps in building native mobile apps with web technologies like HTML, CSS, and JavaScript.
          </p>
        </div>

        {/* Additional technologies can be added below as needed */}
      </div>
    </div>
  );
};

export default MobileAppTrack;
