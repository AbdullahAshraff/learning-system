import {React} from "react";
import { FaBook, FaArrowRight, FaEnvelope ,FaUserGraduate,FaClock,FaDollarSign}  from "react-icons/fa";
import { MdSchool, MdComputer, MdMenu, MdConnectWithoutContact } from "react-icons/md";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { PiNetworkFill } from "react-icons/pi";
import { FaRegFaceGrinBeam } from "react-icons/fa6";


import About from './About'
import Courses from './Courses'
import Footer from './Footer'
import Services from "./Services";





const Header = () => {



  return (
    <>
      <header className="bg-gradient-to-r from-[#DEB041] via-[#998443] to-[#0f0f0f] shadow-md">
        {/* Navbar */}
        <nav className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
          {/* Logo  */}
          <div className="flex items-center">
            <img
              src="images/nlogo.png"
              alt="Logo"
              className="h-20 transition-transform transform hover:scale-110 duration-300"
            />
            <span className="text-white text-3xl font-bold ml-2 hover:text-[#0f0f0f] transition-colors duration-300">
              Basatha
            </span>
          </div>
          {/* Nav Links */}
          <ul className="flex space-x-6 text-white">
            <li>
              <a
               onClick={<Courses/>} 
               href="#course"
                className="hover:text-[#fabf2f] transition-colors duration-300 flex items-center"
              >
                <FaBook className="mr-2 text-lg" /> Courses
              </a>
            </li>
            <li>
              <a
                onClick={<About/>} 
                href="#about"
                className="hover:text-[#fabf2f] transition-colors duration-300 flex items-center"
              >
                <BsFillInfoCircleFill className="mr-2 text-lg" /> About
              </a>
            </li>

            <li>
              <a
               onClick={<Services/>}
                href="#services"
                className="hover:text-[#fabf2f] transition-colors duration-300 flex items-center"
              >
                <PiNetworkFill className="mr-2 text-lg" /> Services
              </a>
            </li>

            <li>
              <a
               onClick={<Footer/>}
                href="#footer"
                className="hover:text-[#fabf2f] transition-colors duration-300 flex items-center"
              >
                <MdConnectWithoutContact className="mr-2 text-lg" /> Contact
              </a>
            </li>
          </ul>
          {/* Call to Action */}
          <button className="bg-[#b89748]  hover:bg-[#0f0f0f] text-white font-bold py-2 px-4 rounded-full shadow-lg flex items-center transition-transform transform hover:scale-105 duration-300">
            <RiAccountPinCircleFill className=" text-2xl" />
          </button>
        </nav>

        {/* Hero Section */}
        <section className="bg-white text-gray-800 h-[75vh]">
          <div  className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-16 px-6">
            {/* Left: Hero Text and CTA */}
            <div data-aos="fade-right" data-aos-duration="2000" className="space-y-6 animate-fadeInLeft mt-[50px]">
              <h1 className="text-5xl md:text-6xl font-bold text-[#DEB041] leading-tight">
                Empower Your <br /> Learning Journey
              </h1>
              <p className="text-lg text-gray-700">
                Join thousands of learners and unlock skills with our
                expert-curated courses, available anytime, anywhere.
              </p>

              <button >
                <a 
                  href="#course"
                  onClick={<Courses/>} // Replace handleClick with your function for any additional behavior
                  className="bg-[#DEB041] hover:bg-[#d6a92e] text-white font-bold py-3 px-6 rounded-full shadow-md transition-transform transform hover:scale-105 duration-300 flex items-center"
                >
                  Explore Courses <FaArrowRight className="ml-2 text-lg" />
                </a>

              </button>
              

            </div>
          {/* Right: Circular Hero Image with Floating Icons */}
          <div data-aos="fade-left" data-aos-duration="2000"  className="relative flex justify-center items-center mt-8 mt-[50px]">
            {/* Circular Hero Image */}
            <div className="relative w-80 h-80 rounded-full border-4 border-[#0f0f0f] shadow-2xl shadow-[#DEB041] transition-transform transform hover:scale-105 duration-500 flex justify-center items-center bg-[#F2F2F2]">
              {/* Central Image */}
              <img
                src="images/learn.png" // Replace with your image
                alt="Interactive Learning"
                className="w-64 h-64 object-contain"
              />
          
              {/* Floating Icons */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                <MdSchool className="text-[#DEB041] text-4xl bg-white p-1.5 rounded-full shadow-lg" />
              </div>

                        <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 ">
                <FaArrowRight className="text-[#0f0f0f] text-4xl bg-white p-1.5 rounded-full shadow-lg" />
             </div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 ">
                <MdComputer className="text-[#DEB041] text-4xl bg-white p-1.5 rounded-full shadow-lg" />
              </div>

              <div className="absolute bottom-1/2 left-0 transform -translate-x-1/2 translate-y-1/2 ">
               <FaEnvelope className="text-[#0f0f0f] text-4xl bg-white p-1.5 rounded-full shadow-lg" />
             </div>
          
           </div>
          </div>

          </div>
        </section>
      </header>

      <section className="mt-[12rem]">
      <h2 className="text-4xl font-bold text-center text-[#0f0f0f] mb-12">
        Why Choose Us
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 m-8">
        {/* Reason 1 */}
        <div data-aos="zoom-in-up" className="bg-[#fff] rounded-2xl shadow-sm shadow-[#DEB041]">
          <div className="cursor-pointer group overflow-hidden relative after:duration-500 before:duration-500 duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-[#DEB041] after:rounded-full after:blur-xl after:bottom-32 after:right-16 before:absolute before:w-20 before:h-20 before:bg-[#DEB041] before:rounded-full before:blur-xl before:top-20 before:right-16 hover:rotate-12 flex justify-center items-center h-56 w-80 origin-bottom-right bg-900 bg-[#fad987] rounded-2xl outline-[#fad987] outline-white-400 -outline-8">
            <div data-aos="fade-down-right" className="z-10 flex flex-col items-center gap-2 p-5 m-2">
              <div className="flex items-center">
                <FaUserGraduate className="text-4xl text-[#fff] mr-4" />
                <div>
                  <span className="text-100 text-[#0f0f0f] text-xl font-bold">Expert Instructors</span>
                  <p className="text-black-50">Learn from industry professionals with real-world experience.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reason 2 */}
        <div data-aos="zoom-in-down" className="bg-[#fff] rounded-2xl shadow-sm shadow-[#DEB041]">
          <div className="cursor-pointer group overflow-hidden relative after:duration-500 before:duration-500 duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-[#DEB041] after:rounded-full after:blur-xl after:bottom-32 after:right-16 before:absolute before:w-20 before:h-20 before:bg-[#DEB041] before:rounded-full before:blur-xl before:top-20 before:right-16 hover:rotate-12 flex justify-center items-center h-56 w-80 origin-bottom-right bg-900 bg-[#fad987] rounded-2xl outline-[#fad987] outline-white-400 -outline-8">
            <div data-aos="fade-down-right" className="z-10 flex flex-col items-center gap-2 p-5 m-2">
              <div className="flex items-center">
                <FaClock className="text-4xl text-[#fff] mr-4" />
                <div>
                  <span className="text-100 text-[#0f0f0f] text-xl font-bold">Flexible Learning</span>
                  <p className="text-black-50">Learn at your own pace, anytime and anywhere.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reason 3 */}
        <div data-aos="zoom-in-up" className="bg-[#fff] rounded-2xl shadow-sm shadow-[#DEB041]">
          <div className="cursor-pointer group overflow-hidden relative after:duration-500 before:duration-500 duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-[#DEB041] after:rounded-full after:blur-xl after:bottom-32 after:right-16 before:absolute before:w-20 before:h-20 before:bg-[#DEB041] before:rounded-full before:blur-xl before:top-20 before:right-16 hover:rotate-12 flex justify-center items-center h-56 w-80 origin-bottom-right bg-900 bg-[#fad987] rounded-2xl outline-[#fad987] outline-white-400 -outline-8">
            <div data-aos="fade-down-right" className="z-10 flex flex-col items-center gap-2 p-5 m-2">
              <div className="flex items-center">
                <FaDollarSign className="text-4xl text-[#fff] mr-4" />
                <div>
                  <span className="text-100 text-[#0f0f0f] text-xl font-bold">Affordable Pricing</span>
                  <p className="text-black-50">Quality education accessible to everyone with competitive pricing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reason 4 */}
        <div data-aos="zoom-in-down" className="bg-[#fff] rounded-2xl shadow-sm shadow-[#DEB041]">
          <div className="cursor-pointer group overflow-hidden relative after:duration-500 before:duration-500 duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-[#DEB041] after:rounded-full after:blur-xl after:bottom-32 after:right-16 before:absolute before:w-20 before:h-20 before:bg-[#DEB041] before:rounded-full before:blur-xl before:top-20 before:right-16 hover:rotate-12 flex justify-center items-center h-56 w-80 origin-bottom-right bg-900 bg-[#fad987] rounded-2xl outline-[#fad987] outline-white-400 -outline-8">
            <div data-aos="fade-down-right" className="z-10 flex flex-col items-center gap-2 p-5 m-2">
              <div className="flex items-center">
                <FaRegFaceGrinBeam className="text-4xl text-[#fff] mr-4" />
                <div>
                  <span className="text-100 text-[#0f0f0f] text-xl font-bold">Supportive Community</span>
                  <p className="text-black-50">Join a vibrant community of learners and professionals.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
     
    </>

  );
};

export default Header;


















