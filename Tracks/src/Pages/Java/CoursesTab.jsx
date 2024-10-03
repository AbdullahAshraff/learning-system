import React from "react";
import { MdCode, MdBuild, MdSettings } from "react-icons/md"; 
import { FiPackage } from "react-icons/fi";

const JavaTrack = () => {
  return (
    <div className="relative bg-gradient-to-br from-[#DEB041] via-[#998443] to-[#0f0f0f] p-10 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-500 ease-in-out transform ">
      {/* Layered Background for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-30 pointer-events-none rounded-3xl"></div>
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#998443] opacity-40 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#0f0f0f] opacity-40 rounded-full blur-3xl"></div>

      {/* Title and Description */}
      <h1 className="relative text-5xl font-extrabold text-white mb-6 z-10 transform transition-transform duration-500 hover:scale-110 text-center">
        Java Track
      </h1>
      <p className="relative text-lg text-gray-200 mb-8 z-10 transform transition-opacity duration-500 hover:opacity-90">
        Join the Java Track to master Java, Spring, Hibernate, and Maven to build powerful and efficient server-side applications.
      </p>

      {/* Java Language/Framework List with Icons, Titles, and Descriptions */}
      <div className="relative grid grid-cols-2 gap-6 z-10 cursor-pointer">
        {/* Java */}
        <div className="group p-4 bg-white bg-opacity-10 rounded-xl shadow-inner transform transition-all duration-500 hover:bg-opacity-20 hover:scale-105">
          <div className="flex items-center space-x-4">
            <MdCode className="text-orange-500 text-4xl group-hover:animate-bounce" />
            <span className="text-2xl text-white">Java</span>
          </div>
          <p className="text-sm text-gray-300 mt-2">
            Java is a versatile, high-level programming language that enables developers to build platform-independent applications.
          </p>
        </div>

        {/* Spring */}
        <div className="group p-4 bg-white bg-opacity-10 rounded-xl shadow-inner transform transition-all duration-500 hover:bg-opacity-20 hover:scale-105">
          <div className="flex items-center space-x-4">
            <MdBuild className="text-green-500 text-4xl group-hover:animate-bounce" />
            <span className="text-2xl text-white">Spring</span>
          </div>
          <p className="text-sm text-gray-300 mt-2">
            Spring is a powerful framework for building Java applications, providing comprehensive infrastructure support.
          </p>
        </div>

        {/* Hibernate */}
        <div className="group p-4 bg-white bg-opacity-10 rounded-xl shadow-inner transform transition-all duration-500 hover:bg-opacity-20 hover:scale-105">
          <div className="flex items-center space-x-4">
            <MdSettings className="text-red-500 text-4xl group-hover:animate-bounce" />
            <span className="text-2xl text-white">Hibernate</span>
          </div>
          <p className="text-sm text-gray-300 mt-2">
            Hibernate is an object-relational mapping (ORM) framework for Java that simplifies database interactions.
          </p>
        </div>

        {/* Maven */}
        <div className="group p-4 bg-white bg-opacity-10 rounded-xl shadow-inner transform transition-all duration-500 hover:bg-opacity-20 hover:scale-105">
          <div className="flex items-center space-x-4">
            <FiPackage className="text-purple-500 text-4xl group-hover:animate-bounce" />
            <span className="text-2xl text-white">Maven</span>
          </div>
          <p className="text-sm text-gray-300 mt-2">
            Maven is a build automation tool used primarily for Java projects, managing dependencies and project lifecycles.
          </p>
        </div>
      </div>
    </div>
  );
};

export default JavaTrack;
