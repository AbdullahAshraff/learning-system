import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGithub, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import nlogo from '../assets/nlogo.png';

const Footer = () => {
  return (
    <footer id="footer" className="relative bg-gradient-to-br from-[#998443] via-[#DEB041] to-[#0f0f0f] text-white py-8 sm:py-10 lg:py-12 px-4">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none">
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0f0f0f] via-transparent"></div>
      </div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative z-10">
        
        {/* About Section */}
        <div className="space-y-4 sm:space-y-6">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">About Us</h3>
          <p className="text-xs sm:text-sm lg:text-base text-[#E5E7EB] leading-relaxed">
            We provide cutting-edge programming courses designed to empower individuals to thrive in today’s fast-paced tech world. From beginner to advanced, we tailor learning paths to suit your goals.
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-4 sm:space-y-6" >
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">Contact Information</h3>
          <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm lg:text-base">
            <li className="flex items-center space-x-2"><FaMapMarkerAlt /><span>Bani-Swief, Egypt</span></li>
            <li className="flex items-center space-x-2"><FaPhoneAlt /><span>+20 100 205 1752</span></li>
            <li className="flex items-center space-x-2"><FaEnvelope /><span>Basatha@gmail.com</span></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="space-y-4 sm:space-y-6" >
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">Follow Us</h3>
          <div className="flex space-x-3 sm:space-x-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="group hover:text-[#000] transition duration-300 transform hover:scale-110">
              <FaFacebookF size={22} className="sm:text-lg lg:text-xl" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="group hover:text-[#000] transition duration-300 transform hover:scale-110">
              <FaTwitter size={22} className="sm:text-lg lg:text-xl" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="group hover:text-[#000] transition duration-300 transform hover:scale-110">
              <FaLinkedinIn size={22} className="sm:text-lg lg:text-xl" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="group hover:text-[#000] transition duration-300 transform hover:scale-110">
              <FaInstagram size={22} className="sm:text-lg lg:text-xl" />
            </a>
            <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="group hover:text-[#000] transition duration-300 transform hover:scale-110">
              <FaGithub size={22} className="sm:text-lg lg:text-xl" />
            </a>
          </div>
        </div>

        {/* Logo Section */}
        <div className="space-y-4 sm:space-y-6 text-center lg:text-left" >
          <img src={nlogo} className="w-24 sm:w-32 lg:w-40 mx-auto lg:mx-0 transition-transform duration-300 hover:scale-110" alt="Logo" />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 sm:mt-10 lg:mt-12 border-t border-gray-600 pt-4 sm:pt-6 text-center text-xs sm:text-sm lg:text-base text-[#fff]">
        <p>&copy; 2024 Basatha. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
