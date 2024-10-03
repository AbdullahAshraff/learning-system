import React, { useState } from "react";
import { FaBook, FaArrowRight, FaEnvelope } from "react-icons/fa";
import { MdSchool, MdComputer, MdConnectWithoutContact } from "react-icons/md";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { PiNetworkFill } from "react-icons/pi";
import About from "./About";
import Courses from "./Courses";
import Footer from "./Footer";
import Services from "./Services";
import { learn, nlogo } from "../../assets";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="bg-gradient-to-r from-[#DEB041] via-[#998443] to-[#0f0f0f] shadow-md">
        {/* Navbar */}
        <nav className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={nlogo}
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
              menuOpen ? "block" : "hidden"
            } md:flex space-x-6 text-white md:space-y-0 space-y-4 mt-10 md:mt-0 absolute md:static left-0 right-0 p-4 md:p-0 z-50 md:bg-transparent`}
          >
            <li>
              <a
                href="#course"
                className="hover:text-[#fabf2f] transition-colors duration-300 flex items-center"
              >
                <FaBook className="mr-2 text-lg" /> Courses
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-[#fabf2f] transition-colors duration-300 flex items-center"
              >
                <BsFillInfoCircleFill className="mr-2 text-lg" /> About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-[#fabf2f] transition-colors duration-300 flex items-center"
              >
                <PiNetworkFill className="mr-2 text-lg" /> Services
              </a>
            </li>
            <li>
              <a
                href="#footer"
                className="hover:text-[#fabf2f] transition-colors duration-300 flex items-center"
              >
                <MdConnectWithoutContact className="mr-2 text-lg" /> Contact
              </a>
            </li>
          </ul>


          {/* Call to Action */}
          <button className="hidden md:block bg-[#b89748] hover:bg-[#0f0f0f] text-white font-bold py-2 px-4 rounded-full shadow-lg flex items-center transition-transform transform hover:scale-105 duration-300">
            <RiAccountPinCircleFill className="text-2xl" />
          </button>
        </nav>

        {/* Hero Section */}
        <section className="bg-white text-gray-800 h-[75vh] px-4 md:px-0">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-8 md:py-16">
            {/* Left: Hero Text and CTA */}
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              className="space-y-6 mt-[30px] md:mt-[50px]"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#DEB041] leading-tight">
                Empower Your <br /> Learning Journey
              </h1>
              <p className="text-base md:text-lg text-gray-700">
                Join thousands of learners and unlock skills with our
                expert-curated courses, available anytime, anywhere.
              </p>

              <a
                href="#course"
                className=" w-56 bg-[#DEB041] hover:bg-[#d6a92e] text-white font-bold py-2 md:py-3 px-4 md:px-6 rounded-full shadow-md transition-transform transform hover:scale-105 duration-300 flex items-center"
              >
                Explore Courses <FaArrowRight className="ml-2 text-lg" />
              </a>
            </div>

            {/* Right: Circular Hero Image with Floating Icons */}
            <div
              data-aos="fade-left"
              data-aos-duration="2000"
              className="relative flex justify-center items-center mt-8 md:mt-[50px]"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-[#0f0f0f] shadow-2xl shadow-[#DEB041] transition-transform transform hover:scale-105 duration-500 flex justify-center items-center bg-[#F2F2F2]">
                <img
                  src={learn}
                  alt="Interactive Learning"
                  className="w-52 h-52 md:w-64 md:h-64 object-contain"
                />

                {/* Floating Icons */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <MdSchool className="text-[#DEB041] text-3xl md:text-4xl bg-white p-1.5 rounded-full shadow-lg" />
                </div>

                <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <FaArrowRight className="text-[#0f0f0f] text-3xl md:text-4xl bg-white p-1.5 rounded-full shadow-lg" />
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                  <MdComputer className="text-[#DEB041] text-3xl md:text-4xl bg-white p-1.5 rounded-full shadow-lg" />
                </div>

                <div className="absolute bottom-1/2 left-0 transform -translate-x-1/2 translate-y-1/2">
                  <FaEnvelope className="text-[#0f0f0f] text-3xl md:text-4xl bg-white p-1.5 rounded-full shadow-lg" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
