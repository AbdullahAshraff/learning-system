import React, { useState } from "react";
import { FaBook, FaEnvelope, FaArrowRight } from "react-icons/fa";
import { MdSchool, MdComputer, MdConnectWithoutContact } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { PiNetworkFill } from "react-icons/pi";
import logo from "./../assets/nlogo.png";
import { Link } from "react-router-dom"; // Import Link for navigation

function TracksHeader() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
      setMenuOpen(!menuOpen);
    };

  return (
    <div>
      <header className="bg-gradient-to-r from-[#DEB041] via-[#998443] to-[#0f0f0f] shadow-md">
        {/* Navbar */}
        <nav className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="h-16 md:h-20 transition-transform transform hover:scale-110 duration-300"
            />
            <span className="text-white text-2xl md:text-3xl font-bold ml-2 hover:text-[#0f0f0f] transition-colors duration-300">
              Basatha
            </span>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={handleMenuToggle}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                ></path>
              </svg>
            </button>
          </div>

          {/* Nav Links */}
          <ul
            className={`${
              menuOpen ? "hidden" : "hidden"
            } md:flex space-x-6 text-white md:space-y-0 space-y-0 mt-10 md:mt-0 absolute md:static right-10 p-4 md:p-0 z-50 md:bg-transparent`}
          >
            <li>
              <Link
                to="/"
                className="hover:text-[#fabf2f] transition-colors duration-300 flex items-center"
              >
                <FaHome className="mr-2 text-lg" /> Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-[#fabf2f] transition-colors duration-300 flex items-center"
              >
                <BsFillInfoCircleFill className="mr-2 text-lg" /> About
              </Link>
            </li>
            <li>
              <Link
                to="/tracks_list"
                className="hover:text-[#fabf2f] transition-colors duration-300 flex items-center"
              >
                <FaBook className="mr-2 text-lg" /> Tracks
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-[#fabf2f] transition-colors duration-300 flex items-center"
              >
                <PiNetworkFill className="mr-2 text-lg" /> Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-[#fabf2f] transition-colors duration-300 flex items-center"
              >
                <MdConnectWithoutContact className="mr-2 text-lg" /> Contact
              </Link>
            </li>
          </ul>

          {/* Call to Action */}
          <Link
            to="/account"
            className="hidden md:block bg-[#b89748] hover:bg-[#0f0f0f] text-white font-bold py-2 px-4 rounded-full shadow-lg flex items-center transition-transform transform hover:scale-105 duration-300"
          >
            <RiAccountPinCircleFill className="text-2xl" />
          </Link>
        </nav>
      </header>
    </div>
  );
}

export default TracksHeader;
