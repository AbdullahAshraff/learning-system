import React from "react";
import { FaNodeJs } from "react-icons/fa"; // Node.js Icon
import { SiExpress, SiMongodb, SiPostgresql, SiDocker } from "react-icons/si"; // Backend related icons

const BackendTrack = () => {
  return (
    <div className="relative bg-gradient-to-br from-[#DEB041] via-[#998443] to-[#0f0f0f] p-10 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-500 ease-in-out transform ">
      {/* Layered Background for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-30 pointer-events-none rounded-3xl"></div>
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#998443] opacity-40 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#0f0f0f] opacity-40 rounded-full blur-3xl"></div>

      {/* Title and Description */}
      <h1 className="relative text-5xl font-extrabold text-white mb-6 z-10 transform transition-transform duration-500 hover:scale-110 text-center">
        Backend Track
      </h1>
      <p className="relative text-lg text-gray-200 mb-8 z-10 transform transition-opacity duration-500 hover:opacity-90">
        Join the Backend Track to master backend technologies like Node.js, Express, MongoDB, and PostgreSQL to build efficient and scalable server-side applications.
      </p>

      {/* Backend Language/Framework List with Icons, Titles, and Descriptions */}
      <div className="relative grid grid-cols-2 gap-6 z-10 cursor-pointer">
        {/* Node.js */}
        <div className="group p-4 bg-white bg-opacity-10 rounded-xl shadow-inner transform transition-all duration-500 hover:bg-opacity-20 hover:scale-105">
          <div className="flex items-center space-x-4">
            <FaNodeJs className="text-green-500 text-4xl group-hover:animate-bounce" />
            <span className="text-2xl text-white">Node.js</span>
          </div>
          <p className="text-sm text-gray-300 mt-2">
            Node.js is a JavaScript runtime that allows developers to use JavaScript to write server-side code and build full-stack applications.
          </p>
        </div>

        {/* Express */}
        <div className="group p-4 bg-white bg-opacity-10 rounded-xl shadow-inner transform transition-all duration-500 hover:bg-opacity-20 hover:scale-105">
          <div className="flex items-center space-x-4">
            <SiExpress className="text-gray-500 text-4xl group-hover:animate-bounce" />
            <span className="text-2xl text-white">Express</span>
          </div>
          <p className="text-sm text-gray-300 mt-2">
            Express is a minimal and flexible Node.js web application framework that provides a robust set of features for building web applications.
          </p>
        </div>

        {/* MongoDB */}
        <div className="group p-4 bg-white bg-opacity-10 rounded-xl shadow-inner transform transition-all duration-500 hover:bg-opacity-20 hover:scale-105">
          <div className="flex items-center space-x-4">
            <SiMongodb className="text-green-500 text-4xl group-hover:animate-bounce" />
            <span className="text-2xl text-white">MongoDB</span>
          </div>
          <p className="text-sm text-gray-300 mt-2">
            MongoDB is a NoSQL database used to store and retrieve large amounts of data in a flexible, document-oriented structure.
          </p>
        </div>

        {/* PostgreSQL */}
        <div className="group p-4 bg-white bg-opacity-10 rounded-xl shadow-inner transform transition-all duration-500 hover:bg-opacity-20 hover:scale-105">
          <div className="flex items-center space-x-4">
            <SiPostgresql className="text-blue-500 text-4xl group-hover:animate-bounce" />
            <span className="text-2xl text-white">PostgreSQL</span>
          </div>
          <p className="text-sm text-gray-300 mt-2">
            PostgreSQL is a powerful, open-source relational database system that offers advanced features for handling complex queries and large data sets.
          </p>
        </div>

        {/* Docker */}
        <div className="group p-4 bg-white bg-opacity-10 rounded-xl shadow-inner transform transition-all duration-500 hover:bg-opacity-20 hover:scale-105">
          <div className="flex items-center space-x-4">
            <SiDocker className="text-blue-500 text-4xl group-hover:animate-bounce" />
            <span className="text-2xl text-white">Docker</span>
          </div>
          <p className="text-sm text-gray-300 mt-2">
            Docker is a platform for developing, shipping, and running applications inside lightweight containers, making it easier to manage environments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BackendTrack;
