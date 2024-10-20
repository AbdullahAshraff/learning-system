import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBook, FaArrowRight, FaEnvelope, FaGamepad } from 'react-icons/fa';
import { MdSchool, MdComputer, MdConnectWithoutContact } from 'react-icons/md';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { RiAccountPinCircleFill } from 'react-icons/ri';
import { AuthContext } from '../../contexts/AuthContext'; 
import { UserContext } from '../../contexts/UserContext';
import { learn, nlogo } from '../../assets';
import { PiNetworkFill } from 'react-icons/pi';

const Header = () => {
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
          <img src={nlogo} alt="Logo" className="h-16 md:h-20 transition-transform transform hover:scale-110 duration-300" />
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
              <a href={link.href} className="flex items-center hover:text-[#fabf2f] transition-colors duration-300">
                {link.icon} {link.text}
              </a>
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
              <RiAccountPinCircleFill className="text-white text-3xl" />
              // <p>arwa</p>
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
              <a href={link.href} className="text-white flex items-center hover:text-[#fabf2f] transition-colors duration-300">
                {link.icon} {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>

    {/* Hero Section */}
        <section id="hero" className="bg-white text-gray-800 h-[75vh] px-4 md:px-0">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-8 md:py-16">
            {/* Left: Hero Text and CTA */}
            <div data-aos="fade-right" data-aos-duration="2000" className="space-y-6 mt-[30px] md:mt-[50px]">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#DEB041] leading-tight">
                Empower Your <br /> Learning Journey
              </h1>
              <p className="text-base md:text-lg text-gray-700">
                Join thousands of learners and unlock skills with our expert-curated courses, available anytime, anywhere.
              </p>
              <a href="#course" className="w-56 bg-[#DEB041] hover:bg-[#d6a92e] text-white font-bold py-2 md:py-3 px-4 md:px-6 rounded-full shadow-md transition-transform transform hover:scale-105 duration-300 flex items-center">
                Explore Courses <FaArrowRight className="ml-2 text-lg" />
              </a>
            </div>

            {/* Right: Circular Hero Image with Floating Icons */}
            <div data-aos="fade-left" data-aos-duration="2000" className="relative flex justify-center items-center mt-8 md:mt-[50px]">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-[#0f0f0f] shadow-2xl shadow-[#DEB041] transition-transform transform hover:scale-105 duration-500 flex justify-center items-center bg-[#F2F2F2]">
                <img src={learn} alt="Interactive Learning" className="w-52 h-52 md:w-64 md:h-64 object-contain" />
                {floatingIcons.map((icon) => (
                  <div key={icon.id} className={icon.position}>
                    {icon.component}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </header>

  );
};

const navLinks = [
  {
    href: '#course',
    text: 'Courses',
    icon: <FaBook className="mr-2 text-lg" />,
  },
  {
    href: '#about',
    text: 'About',
    icon: <BsFillInfoCircleFill className="mr-2 text-lg" />,
  },
  {
    href: '#services',
    text: 'Services',
    icon: <PiNetworkFill className="mr-2 text-lg" />,
  },
  {
    href: '#footer',
    text: 'Contact',
    icon: <MdConnectWithoutContact className="mr-2 text-lg" />,
  },
  {
    href: '/games',
    text: 'Games',
    icon: <FaGamepad className="mr-2 text-lg" />,
  },
];

const floatingIcons = [
  {
    id: 'school',
    position: 'absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
    component: <MdSchool className="text-[#DEB041] text-3xl md:text-4xl bg-white p-1.5 rounded-full shadow-lg" />,
  },
  {
    id: 'arrow',
    position: 'absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2',
    component: <FaArrowRight className="text-[#0f0f0f] text-3xl md:text-4xl bg-white p-1.5 rounded-full shadow-lg" />,
  },
  {
    id: 'computer',
    position: 'absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2',
    component: <MdComputer className="text-[#DEB041] text-3xl md:text-4xl bg-white p-1.5 rounded-full shadow-lg" />,
  },
  {
    id: 'envelope',
    position: 'absolute bottom-1/2 left-0 transform -translate-x-1/2 translate-y-1/2',
    component: <FaEnvelope className="text-[#0f0f0f] text-3xl md:text-4xl bg-white p-1.5 rounded-full shadow-lg" />,
  },
];

export default Header;