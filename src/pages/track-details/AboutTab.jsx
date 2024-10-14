import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const AboutTab = ({ track, handleEnroll }) => {
  return (
    <div className="bg-white p-10 relative overflow-hidden rounded-2xl shadow-lg perspective-1500">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#bca14e] to-[#DEB041] opacity-30 rounded-2xl animate-pulse"></div>
      <div className="absolute inset-0 flex justify-center items-center">
        <svg
          className="w-full h-full"
          viewBox="0 0 200 200"
          preserveAspectRatio="none"
        >
          <polygon
            points="100,0 0,100 100,200 200,100"
            className="fill-current text-[#DEB041] opacity-10"
          />
        </svg>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto p-8 flex flex-col items-center">
        {/* Image with Hover Effect */}
        <motion.div
          className="w-full h-auto rounded-lg border-4 border-[#DEB041] object-cover shadow-lg cursor-pointer overflow-hidden"
          whileHover={{ scale: 1.05 }} // Scale and rotate image on hover
          whileTap={{ scale: 0.98 }} // Slightly shrink on tap/click
        >
          <motion.img
            src={track?.image}
            alt={track?.title}
            className="w-full h-auto rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
        </motion.div>

        {/* Heading with Animation */}
        <motion.h2
          className="mt-12 text-3xl font-bold text-[#0f0f0f] mb-4 text-shadow-lg transition font-serif duration-300 hover:text-[#DEB041]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          From Zero To Hero in {track?.title} With Us!
        </motion.h2>

        {/* Description with Subtle Entrance Animation */}
        <motion.div
          className="w-full text-center"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-lg text-gray-700 mb-6">{track?.description}</p>
        </motion.div>

        {/* Animated Enroll Button */}
        <motion.button
          className="px-8 py-3 bg-[#DEB041] text-white font-semibold rounded-full shadow-xl flex items-center justify-center transition-transform duration-300 transform hover:bg-[#998443] hover:scale-110"
          onClick={handleEnroll}
          whileHover={{ scale: 1.1, rotate: 1 }} // Subtle rotation on hover
          whileTap={{ scale: 0.95 }}
        >
          Enroll Now <FaArrowRight className="ml-2" />
        </motion.button>
      </div>
    </div>
  );
};

export default AboutTab;
