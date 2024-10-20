import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBook, FaGamepad, FaEnvelope } from 'react-icons/fa';
import { MdConnectWithoutContact } from 'react-icons/md';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { RiAccountPinCircleFill } from 'react-icons/ri';
import { AuthContext } from '../contexts/AuthContext';
import { UserContext } from '../contexts/UserContext';
import { nlogo } from '../assets';
import { PiNetworkFill } from 'react-icons/pi';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const { authData, handleLogout } = useContext(AuthContext);
  const { user } = useContext(UserContext);
  const { userLogged } = authData || {};
  const navigate = useNavigate();

  const handleMenuToggle = () => setMenuOpen(prev => !prev);

  const handleProfileNavigation = () => {
    const profileUsername =
      user.username || user.name.replace(/\s+/g, '-').toLowerCase();
    navigate(`/profile/${profileUsername}`);
  };

  return (
    <header className="bg-gradient-to-r from-[#DEB041] via-[#998443] to-[#0f0f0f] shadow-md">
      <nav className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={nlogo}
            alt="Logo"
            className="h-16 md:h-20 transition-transform transform hover:scale-110 duration-300"
          />
          <span className="text-white text-2xl md:text-3xl font-bold ml-2 hover:text-[#0f0f0f] transition-colors duration-300">
            Basatha
          </span>
        </Link>
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
                d={
                  menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'
                }
              ></path>
            </svg>
          </button>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-6 text-white">
          {navLinks.map(link => (
            <li key={link.text}>
              <Link
                to={link.to}
                className="flex items-center hover:text-[#fabf2f] transition-colors duration-300"
              >
                {link.icon} {link.text}
              </Link>
            </li>
          ))}
        </ul>

        {/* User Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center space-x-2 focus:outline-none"
          >
            {userLogged && user ? (
              <>
                <img
                  src={user.profileImage || '/default-profile.png'}
                  alt="User Profile"
                  className="h-8 w-8 rounded-full shadow-md border-2 border-white"
                />
                <span className="text-white font-bold">
                  {user.username || user.name}
                </span>
              </>
            ) : (
              <RiAccountPinCircleFill className="text-white text-3xl" />
            )}
          </button>
          {/* Dropdown for Logged-In Users */}
          {showDropdown && userLogged && (
            <div
              className="absolute right-0 mt-2 w-60 bg-white rounded-xl shadow-lg py-5 px-3 z-50 
            transition-all duration-300 ease-in-out transform origin-top-right scale-95 hover:scale-100"
            >
              <button
                className="w-full flex items-center space-x-4 py-4 hover:text-customgold rounded-md transition duration-200"
                onClick={handleProfileNavigation}
              >
                <img
                  src={user.profileImage || '/default-profile.png'}
                  alt="User"
                  className="h-10 w-10 rounded-full"
                />
                <div>
                  <p className="font-bold text-gray-800">
                    {user.name || user.username}
                  </p>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>
              </button>
              <button
                className="mt-3 w-full text-left px-4 py-2 bg-gradient-to-r from-yellow-300 to-yellow-500 hover:from-yellow-400 hover:to-yellow-600 text-white rounded-md shadow-md transition-all duration-300"
                onClick={() => navigate('/settings')}
              >
                Settings
              </button>
              <button
                className="mt-2 w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md transition"
                onClick={() => {
                  handleLogout();
                  navigate('/');
                }}
              >
                Logout
              </button>
            </div>
          )}

          {/* Dropdown for Logged-Out Users */}
          {showDropdown && !userLogged && (
            <div
              className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-4 z-50 
              transition-all duration-300 ease-in-out transform origin-top-right scale-95 hover:scale-100"
            >
              <button
                className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition"
                onClick={() => navigate('/auth/login')}
              >
                Login
              </button>
              <button
                className="mt-2 w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition"
                onClick={() => navigate('/auth/signup')}
              >
                Signup
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`${
          menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } transition-all duration-500 overflow-hidden bg-gradient-to-b from-[#0f0f0f] via-[#998443] to-[#0f0f0f] z-40`}
      >
        <ul className="flex flex-col space-y-4 py-6 px-4">
          {navLinks.map(link => (
            <li key={link.text}>
              <Link
                to={link.to}
                className="text-white flex items-center hover:text-[#fabf2f] transition-colors duration-300"
              >
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
  { to: '#course', text: 'Courses', icon: <FaBook className="mr-2 text-lg" /> },
  {
    to: '#about',
    text: 'About',
    icon: <BsFillInfoCircleFill className="mr-2 text-lg" />,
  },
  {
    to: '#services',
    text: 'Services',
    icon: <PiNetworkFill className="mr-2 text-lg" />,
  },
  {
    to: '#footer',
    text: 'Contact',
    icon: <MdConnectWithoutContact className="mr-2 text-lg" />,
  },
  { to: '/games', text: 'Games', icon: <FaGamepad className="mr-2 text-lg" /> },
];

export default NavBar;
