import { Link } from "react-router-dom";
import { FaBook,FaGamepad  } from "react-icons/fa";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { MdConnectWithoutContact } from "react-icons/md";
import { PiNetworkFill } from "react-icons/pi"; 
import { RiAccountPinCircleFill } from "react-icons/ri";
import logo  from '../../src/assets/nlogo.png'


const NavBar = () => {
  return (
    <header className="bg-gradient-to-r from-[#DEB041] via-[#998443] to-[#0f0f0f] shadow-md">
      <nav className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-20 transition-transform transform hover:scale-110 duration-300"
          />
          <span className="text-white text-3xl font-bold ml-2 hover:text-[#fabf2f] transition-colors duration-300">
            Basatha
          </span>
        </div>
        {/* Nav Links */}
        <ul className="flex space-x-6 text-white">
          <li>
            <a
              href="#course"
              className="flex items-center hover:text-[#fabf2f] transition-colors duration-300"
            >
              <FaBook className="mr-2 text-lg" /> Courses
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="flex items-center hover:text-[#fabf2f] transition-colors duration-300"
            >
              <BsFillInfoCircleFill className="mr-2 text-lg" /> About
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="flex items-center hover:text-[#fabf2f] transition-colors duration-300"
            >
              <PiNetworkFill className="mr-2 text-lg" /> Services
            </a>
          </li>
          <li>
            <a
              href="#footer"
              className="flex items-center hover:text-[#fabf2f] transition-colors duration-300"
            >
              <MdConnectWithoutContact className="mr-2 text-lg" /> Contact
            </a>
          </li>
        {/* New Games Link */}
        <li>
            <Link
              to="/games" // استخدم Link هنا
              className="hover:text-[#fabf2f] transition-colors duration-300 flex items-center"
            >
              <FaGamepad className="mr-2 text-lg" /> Games
            </Link>
          </li>
        </ul>
        {/* Call to Action Button */}
        <button className="bg-[#b89748] hover:bg-[#0f0f0f] text-white font-bold py-2 px-4 rounded-full shadow-lg flex items-center transition-transform transform hover:scale-105 duration-300">
          <RiAccountPinCircleFill className="text-2xl" />
        </button>
      </nav>
    </header>
  );
};

export default NavBar;