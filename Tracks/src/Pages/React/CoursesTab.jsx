import React from "react";
import { SiReact, SiRedux, SiWebpack, SiTailwindcss } from "react-icons/si"; // React-related icons

const ReactTrack = () => {
  return (
    <div className="relative bg-gradient-to-br from-[#DEB041] via-[#998443] to-[#0f0f0f] p-10 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-500 ease-in-out transform ">
      {/* Layered Background for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-30 pointer-events-none rounded-3xl"></div>
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#998443] opacity-40 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#0f0f0f] opacity-40 rounded-full blur-3xl"></div>

      {/* Title and Description */}
      <h1 className="relative text-5xl font-extrabold text-white mb-6 z-10 transform transition-transform duration-500 hover:scale-110 text-center">
        React Track
      </h1>
      <p className="relative text-lg text-gray-200 mb-8 z-10 transform transition-opacity duration-500 hover:opacity-90">
        Join the React Track to master React.js, Redux, Webpack, and Tailwind CSS to build modern and interactive web applications.
      </p>

      {/* React Language/Framework List with Icons, Titles, and Descriptions */}
      <div className="relative grid grid-cols-2 gap-6 z-10 cursor-pointer">
        {/* React */}
        <div className="group p-4 bg-white bg-opacity-10 rounded-xl shadow-inner transform transition-all duration-500 hover:bg-opacity-20 hover:scale-105">
          <div className="flex items-center space-x-4">
            <SiReact className="text-blue-500 text-4xl group-hover:animate-bounce" />
            <span className="text-2xl text-white">React.js</span>
          </div>
          <p className="text-sm text-gray-300 mt-2">
            React.js is a JavaScript library for building user interfaces by creating reusable UI components.
          </p>
        </div>

        {/* Redux */}
        <div className="group p-4 bg-white bg-opacity-10 rounded-xl shadow-inner transform transition-all duration-500 hover:bg-opacity-20 hover:scale-105">
          <div className="flex items-center space-x-4">
            <SiRedux className="text-purple-500 text-4xl group-hover:animate-bounce" />
            <span className="text-2xl text-white">Redux</span>
          </div>
          <p className="text-sm text-gray-300 mt-2">
            Redux is a predictable state container for JavaScript apps, enabling easy state management across components.
          </p>
        </div>

        {/* Webpack */}
        <div className="group p-4 bg-white bg-opacity-10 rounded-xl shadow-inner transform transition-all duration-500 hover:bg-opacity-20 hover:scale-105">
          <div className="flex items-center space-x-4">
            <SiWebpack className="text-gray-500 text-4xl group-hover:animate-bounce" />
            <span className="text-2xl text-white">Webpack</span>
          </div>
          <p className="text-sm text-gray-300 mt-2">
            Webpack is a module bundler that helps manage dependencies in your JavaScript applications.
          </p>
        </div>

        {/* Tailwind CSS */}
        <div className="group p-4 bg-white bg-opacity-10 rounded-xl shadow-inner transform transition-all duration-500 hover:bg-opacity-20 hover:scale-105">
          <div className="flex items-center space-x-4">
            <SiTailwindcss className="text-cyan-500 text-4xl group-hover:animate-bounce" />
            <span className="text-2xl text-white">Tailwind CSS</span>
          </div>
          <p className="text-sm text-gray-300 mt-2">
            Tailwind CSS is a utility-first CSS framework that provides low-level utility classes for building custom designs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReactTrack;
