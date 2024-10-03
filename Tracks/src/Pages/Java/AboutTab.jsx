import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaClock, FaLaptop, FaBookOpen, FaGraduationCap } from 'react-icons/fa';
import Backend from '../../assets/Java.jpeg';

const AboutTab = ({ handleEnroll }) => {
  return (
    <div className="bg-white p-10 relative overflow-hidden rounded-2xl shadow-lg perspective-1500">
      {/* Animated Background with Layering */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#998443] to-[#DEB041] opacity-30 rounded-2xl animate-pulse"></div>
      <div className="absolute inset-0 flex justify-center items-center">
        <svg className="w-full h-full" viewBox="0 0 200 200" preserveAspectRatio="none">
          <polygon points="100,0 0,100 100,200 200,100" className="fill-current text-[#DEB041] opacity-10" />
        </svg>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto p-8 flex flex-col items-center">
        {/* 3D Card Effect with Layering */}
        <motion.div
          className="w-full mb-8 bg-white rounded-lg shadow-xl transform transition-transform duration-300 hover:shadow-2xl hover:scale-105"
          whileHover={{ rotateY: 5 }}
          style={{ perspective: '1000px' }} // Perspective for 3D effect
        >
          <div className="relative w-full h-full cursor-pointer">
            <motion.img
              src={Backend}
              alt="Frontend Track"
              className="w-full h-auto rounded-lg border-4 border-[#DEB041] object-cover shadow-lg transition-transform duration-300 cursor-pointer"
              style={{ maxHeight: '500px' }}
              whileHover={{ scale: 1.1, rotate: 3 }} // Increase scale and rotation on hover
            />
            <motion.div className="absolute inset-0 flex items-center justify-center text-center text-white bg-black bg-opacity-50 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-2xl font-bold cursor-pointer">Explore the Java Language</h3>
            </motion.div>
          </div>
        </motion.div>

        {/* Text Content */}
        <div className="w-full text-center">
          <motion.h2
            className="text-3xl font-bold text-[#0f0f0f] mb-4 text-shadow-lg transition font-serif duration-300 hover:text-[#DEB041]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Zero To Hero in Java Language With Mosh Hamedani
          </motion.h2>

          <motion.p
            className="text-lg text-gray-700 mb-6 leading-relaxed px-4 md:px-0 text-left"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
          The <span className="font-semibold text-[#DEB041]">Java Language</span> track is designed to equip you with essential skills in one of the most popular programming languages in the world. You will delve into core concepts such as object-oriented programming, data structures, and algorithms, building a solid foundation for software development.

          This track covers various Java frameworks like Spring and Hibernate, enabling you to create scalable and efficient web applications. You'll learn how to develop robust server-side applications, handle database connectivity with technologies like JDBC, and implement RESTful services to ensure seamless communication between the backend and frontend.

          By the end of the track, you will possess a comprehensive understanding of Java development, empowering you to build high-performance applications that meet industry standards and user expectations

          </motion.p>

          {/* Course Information */}
          <div className="flex flex-wrap space-x-8 mb-6 cursor-pointer">
            <div className="flex items-center">
              <FaClock className="text-[#DEB041] mr-2 text-2xl cursor-pointer" />
              <span className="text-sm">30 Hours</span>
            </div>
            <div className="flex items-center">
              <FaLaptop className="text-[#DEB041] mr-2 text-2xl cursor-pointer" />
              <span className="text-sm">Online Course</span>
            </div>
            <div className="flex items-center">
              <FaBookOpen className="text-[#DEB041] mr-2 text-2xl cursor-pointer" />
              <span className="text-sm">Resources Available</span>
            </div>
            <div className="flex items-center">
              <FaGraduationCap className="text-[#DEB041] mr-2 text-2xl cursor-pointer" />
              <span className="text-sm">Certificate of Completion</span>
            </div>
          </div>

          {/* Animated Enroll Button */}
          <motion.button
            className="px-8 py-3 bg-[#DEB041] text-white font-semibold rounded-full shadow-xl flex items-center justify-center transition-transform duration-300 transform hover:bg-[#998443] hover:scale-110"
            onClick={handleEnroll}
            whileHover={{ scale: 1.1, rotate: 2 }} // Subtle rotation on hover
            whileTap={{ scale: 0.95 }}
          >
            Enroll Now <FaArrowRight className="ml-2" />
          </motion.button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-[#DEB041] rounded-full filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#998443] rounded-full filter blur-xl opacity-20 animate-pulse"></div>

      {/* Additional Floating Decorative Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#0f0f0f] rounded-full filter blur-xl opacity-15 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#998443] rounded-full filter blur-xl opacity-15 animate-pulse"></div>

      {/* Background Particles Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-[#DEB041] rounded-full filter blur-xl opacity-25 animate-pulse"
          animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-32 h-32 bg-[#998443] rounded-full filter blur-xl opacity-30 animate-pulse"
          animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
        />
      </div>
    </div>
  );
};

export default AboutTab;
