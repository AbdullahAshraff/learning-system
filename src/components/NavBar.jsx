import React, { useState,useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { FaBook, FaEnvelope, FaArrowRight, FaGamepad } from "react-icons/fa";
import { MdSchool, MdComputer, MdConnectWithoutContact } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { PiNetworkFill } from "react-icons/pi";
import logo from "./../assets/nlogo.png";
import { AuthContext } from '../contexts/AuthContext'; 
import { UserContext } from '../contexts/UserContext';
function TracksHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const { authData } = useContext(AuthContext);
  const { user } = useContext(UserContext); // Ensure UserContext is accessed correctly
  const { userLogged } = authData || {};
  const navigate = useNavigate();

  const handleMenuToggle = () => setMenuOpen((prev) => !prev);
  const handleLogin = () => navigate('/auth/login');
  const handleSignup = () => navigate('/auth/signup');
  const handleUserAction = () => {
    if (user?.role === 'admin') {
      navigate('/admin/dashboard');
    } else if (user?.username) {
      navigate(`/profile/${user.username}`);
    } else if (user?.name) {
      const profileName = user.name.replace(/\s+/g, '-').toLowerCase(); // Fallback to name
      navigate(`/profile/${profileName}`);
    } else {
      console.error('No valid username or name for navigation');
    }
  };
  console.log('Auth Data:', authData); // Check if userLogged is true
  console.log('User from Context:', user);



  return (
    <header className="bg-gradient-to-r from-[#DEB041] via-[#998443] to-[#0f0f0f] shadow-md">
      <nav className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-16 md:h-20 transition-transform transform hover:scale-110 duration-300" />
          <span className="text-white text-2xl md:text-3xl font-bold ml-2 hover:text-[#0f0f0f] transition-colors duration-300">
            Basatha
          </span>
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={handleMenuToggle} className="text-white focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}></path>
            </svg>
          </button>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-6 text-white">
          {navLinks.map((link) => (
            <li key={link.text}>
              <Link to={link.to} className="flex items-center hover:text-[#fabf2f] transition-colors duration-300">
                {link.icon} {link.text}
              </Link>
            </li>
          ))}
        </ul>

        {/* User Profile / Admin Dashboard Button */}
        <div className="relative">
          <button onClick={() => setShowDropdown(!showDropdown)} className="flex items-center space-x-2 focus:outline-none">
            {userLogged && user ? (
              <div onClick={handleUserAction} className="cursor-pointer flex items-center">
                <img src={user.profileImage || '/default-profile.png'} alt="User Profile" className="h-8 w-8 rounded-full" />
                <span className="text-white font-bold">
                {user.username || user.name || 'User'} {/* Display username or name or fallback to 'User' */}
                </span>
              </div>
            ) : (
              // <RiAccountPinCircleFill className="text-white text-3xl" />
              <p>arwa</p>
            )}
          </button>

          {/* Dropdown for Login/Signup */}
          {showDropdown && !userLogged && (
            <div className="absolute right-1 mt-2 w-48 bg-[#DEB041] rounded-md shadow-lg py-2 z-50">
              <button className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100" onClick={handleLogin}>
                Login
              </button>
              <button className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100" onClick={handleSignup}>
                Signup
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Nav Links */}
      <div className={`${
        menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      } transition-all duration-500 overflow-hidden bg-gradient-to-b from-[#0f0f0f] via-[#998443] to-[#0f0f0f] z-40`}>
        <ul className="flex flex-col space-y-4 py-6 px-4">
          {navLinks.map((link) => (
            <li key={link.text}>
              <Link to={link.to} className="text-white flex items-center hover:text-[#fabf2f] transition-colors duration-300">
                {link.icon} {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      </header>
  );
};
const navLinks = [
  { to: '/', text: 'Home', icon: <FaHome className="mr-2 text-lg" /> },
  { to: '/tracks_list', text: 'Tracks', icon: <FaBook className="mr-2 text-lg" /> },
  { to: '#footer', text: 'Contact', icon: <MdConnectWithoutContact className="mr-2 text-lg" /> },
  { to: '/games', text: 'Games', icon: <FaGamepad className="mr-2 text-lg" /> },
];
export default TracksHeader;
