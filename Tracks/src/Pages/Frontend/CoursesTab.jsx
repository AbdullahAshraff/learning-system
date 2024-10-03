import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const FrontendTrack = () => {
  return (
    <div className="relative bg-gradient-to-br from-[#DEB041] via-[#998443] to-[#0f0f0f] p-10 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-500 ease-in-out transform ">
      {/* Layered Background for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-30 pointer-events-none rounded-3xl"></div>
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#998443] opacity-40 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#0f0f0f] opacity-40 rounded-full blur-3xl"></div>

      {/* Title and Description */}
      <h1 className="relative text-5xl font-extrabold text-white mb-6 z-10 transform transition-transform duration-500 hover:scale-110 text-center">
        Track Content
      </h1>
      <p className="relative text-lg text-gray-200 mb-8 z-10 transform transition-opacity duration-500 hover:opacity-90">
        Join the Frontend Track and master web technologies like HTML, CSS, JavaScript, and React to build responsive and dynamic interfaces with a professional touch.
      </p>

      {/* Language List with Icons, Titles, and Descriptions */}
      <div className="relative grid grid-cols-2 gap-6 z-10 cursor-pointer">
        {/* HTML */}
        <div className="group p-4 bg-white bg-opacity-10 rounded-xl shadow-inner transform transition-all duration-500 hover:bg-opacity-20 hover:scale-105">
          <div className="flex items-center space-x-4">
            <FaHtml5 className="text-red-500 text-4xl group-hover:animate-bounce" />
            <span className="text-2xl text-white">HTML</span>
          </div>
          <p className="text-sm text-gray-300 mt-2">
            HTML (HyperText Markup Language) is the standard language used to create the structure of web pages.
          </p>
        </div>
        
        {/* CSS */}
        <div className="group p-4 bg-white bg-opacity-10 rounded-xl shadow-inner transform transition-all duration-500 hover:bg-opacity-20 hover:scale-105">
          <div className="flex items-center space-x-4">
            <FaCss3Alt className="text-blue-500 text-4xl group-hover:animate-bounce" />
            <span className="text-2xl text-white">CSS</span>
          </div>
          <p className="text-sm text-gray-300 mt-2">
            CSS (Cascading Style Sheets) is used to style and layout web pages, including colors, layouts, and fonts.
          </p>
        </div>

        {/* JavaScript */}
        <div className="group p-4 bg-white bg-opacity-10 rounded-xl shadow-inner transform transition-all duration-500 hover:bg-opacity-20 hover:scale-105">
          <div className="flex items-center space-x-4">
            <FaJs className="text-yellow-500 text-4xl group-hover:animate-bounce" />
            <span className="text-2xl text-white">JavaScript</span>
          </div>
          <p className="text-sm text-gray-300 mt-2">
            JavaScript is a programming language that allows you to implement complex features on web pages, like dynamic content.
          </p>
        </div>

        {/* React */}
        <div className="group p-4 bg-white bg-opacity-10 rounded-xl shadow-inner transform transition-all duration-500 hover:bg-opacity-20 hover:scale-105">
          <div className="flex items-center space-x-4">
            <FaReact className="text-cyan-500 text-4xl group-hover:animate-bounce" />
            <span className="text-2xl text-white">React</span>
          </div>
          <p className="text-sm text-gray-300 mt-2">
            React is a JavaScript library for building user interfaces, allowing developers to create reusable UI components.
          </p>
        </div>

        {/* Tailwind CSS */}
        <div className="group p-4 bg-white bg-opacity-10 rounded-xl shadow-inner transform transition-all duration-500 hover:bg-opacity-20 hover:scale-105">
          <div className="flex items-center space-x-4">
            <SiTailwindcss className="text-green-500 text-4xl group-hover:animate-bounce" /> {/* You can replace the icon with a Tailwind logo if needed */}
            <span className="text-2xl text-white">Tailwind CSS</span>
          </div>
          <p className="text-sm text-gray-300 mt-2">
            Tailwind CSS is a utility-first CSS framework that allows developers to rapidly build modern and responsive user interfaces by applying predefined classes directly in the HTML.
          </p>
        </div>

        </div>
      </div>
  );
};

export default FrontendTrack;
