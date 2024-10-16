import 'animate.css';
import { GiStrong, GiGraduateCap, GiSkills } from 'react-icons/gi';
import {
  FaRegSmileWink,
  FaHandsHelping,
  FaBookReader,
  FaLaptopCode,
} from 'react-icons/fa';
import { IoRocketSharp } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom'; 
import { learning } from '../../assets';
function StartPage() {
  const navigate = useNavigate();
  return (
    <div
      id="start"
      className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-blue-50 p-4 relative"
    >
      {/* Background Illustration (Optional) */}
      <div className="absolute inset-0 opacity-5 bg-[url('/images/background-pattern.png')] bg-cover bg-center"></div>

      {/* Header Section */}
      <div className="text-center mb-8 z-10">
        <h1 className="text-6xl font-extrabold text-800 text-[#DEB041] mb-4 flex justify-center items-center gap-3 animate__animated animate__fadeInDown">
          Let&apos;s Start{' '}
          <GiStrong
            className="text-6xl text-500 text-black animate__animated animate__tada"
            aria-label="Strong Icon"
          />
        </h1>
        <p className="text-xl text-700 text-black mb-6 font-medium animate__animated animate__fadeInUp">
          Whether you&apos;re a beginner or already have experience, we have
          something for you!
        </p>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row justify-center items-center mt-8 w-full max-w-6xl gap-8 z-10">
        {/* Left Section - Image */}
        <div className="w-full lg:w-1/2 flex justify-center animate__animated animate__fadeInLeft">
          <img
            src={learning} // Replace with a suitable image
            alt="Learning Journey"
            className="w-3/4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:rotate-1 cursor-pointer"
          />
        </div>

        {/* Right Section - Buttons & Info */}
        <div className="w-full lg:w-1/2 flex flex-col items-center gap-6">
          {/* Beginner Button with Black Background */}
          <button
            style={{ backgroundColor: 'black' }}
            className=" relative flex w-[200px] h-[60px] items-center px-6 py-3 overflow-hidden font-semibold transition-all rounded-lg group shadow-lg hover:bg-gray-800 animate__animated animate__bounceIn"
            onClick={() => navigate('/beginner')}
          >
            <span className="absolute inset-0 w-full h-full transition-transform bg-indigo-600 rounded-lg group-hover:translate-x-full group-hover:animate-pulse"></span>
            <span className="relative z-10 text-white text-lg flex items-center gap-2 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3">
              <GiGraduateCap
                className="text-2xl"
                aria-label="Graduation Cap Icon"
              />{' '}
              Beginner
            </span>
          </button>

          {/* Experienced Button with #DEB041 Background */}
          <button
            style={{ backgroundColor: '#DEB041' }}
            className=" relative flex w-[200px] h-[60px] items-center px-6 py-3 overflow-hidden font-semibold transition-all rounded-lg group shadow-lg hover:bg-[#CDAA30] animate__animated animate__bounceIn"
            onClick={() => navigate('/tracks_list')}
          >
            <span className="absolute inset-0 w-full h-full transition-transform bg-green-600 rounded-lg group-hover:translate-x-full group-hover:animate-pulse"></span>
            <span className="relative z-10 text-white text-lg flex items-center gap-2 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3">
              <GiSkills className="text-2xl" aria-label="Skills Icon" /> Have
              Experience
            </span>
          </button>

          {/* Fun Icon Section */}
          <div className="text-center mt-4">
            <FaRegSmileWink
              className="text-4xl text-yellow-500 animate__animated animate__bounceIn"
              aria-label="Wink Icon"
            />
            <p className="text-lg text-gray-600 mt-2">
              Excited to start? Choose your path!
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-6xl text-600 z-10">
        <div className="flex flex-col items-center">
          <FaHandsHelping
            className="text-4xl animate__animated animate__fadeInUp text-[#DEB041]"
            aria-label="Helping Hands Icon"
          />
          <p className="text-lg font-medium mt-2">Guided Learning</p>
        </div>
        <div className="flex flex-col items-center">
          <FaBookReader
            className="text-4xl animate__animated animate__fadeInUp text-[#000]"
            aria-label="Book Reader Icon"
          />
          <p className="text-lg font-medium mt-2">Comprehensive Materials</p>
        </div>
        <div className="flex flex-col items-center">
          <FaLaptopCode
            className="text-4xl animate__animated animate__fadeInUp text-[#DEB041]"
            aria-label="Laptop Code Icon"
          />
          <p className="text-lg font-medium mt-2">Hands-on Projects</p>
        </div>
        <div className="flex flex-col items-center">
          <IoRocketSharp
            className="text-4xl animate__animated animate__fadeInUp text-[#000]"
            aria-label="Rocket Icon"
          />
          <p className="text-lg font-medium mt-2">Career Boost</p>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="mt-16 text-center text-600 text-[#DEB041] z-10">
        <p>&copy; 2024 Basatha | Empowering Your Learning Journey</p>
      </footer>
    </div>
  );
}

export default StartPage;
