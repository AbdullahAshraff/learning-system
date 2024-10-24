import { Link, useNavigate } from 'react-router-dom';
import {
  UserIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  HomeIcon,
  UsersIcon,
} from '@heroicons/react/24/solid';
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext'; // Adjust the import path as necessary
import { AuthContext } from '../contexts/AuthContext';
import { RiAccountPinCircleFill } from 'react-icons/ri';

const CoursesNavbar = ({ handlePrevVideo, handleNextVideo }) => {
  const { user } = useContext(UserContext); // Ensure UserContext is accessed correctly
  const { authData } = useContext(AuthContext);
  const { userLogged } = authData || {};
  const navigate = useNavigate();

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
    <div className="fixed top-0 left-0 w-full bg-white text-customBronze h-16 flex items-center justify-between px-4 z-50">
      {/* User Info Section */}
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

      {/* Navigation Buttons */}
      <div className="flex items-center space-x-2 lg:space-x-4">
        <button
          onClick={handlePrevVideo}
          className="bg-yellow-50 hover:bg-yellow-100 px-2 py-1 lg:px-3 lg:py-2 rounded"
        >
          <ChevronLeftIcon className="w-4 h-4 lg:w-5 lg:h-5" />
        </button>

        <button
          onClick={handleNextVideo}
          className="bg-yellow-50 hover:bg-yellow-100 px-2 py-1 lg:px-3 lg:py-2 rounded"
        >
          <ChevronRightIcon className="w-4 h-4 lg:w-5 lg:h-5" />
        </button>

        {/* Home Link */}
        <Link
          to="/"
          className="flex items-center px-2 py-1 lg:px-4 lg:py-2 hover:bg-yellow-100 rounded"
        >
          <HomeIcon className="w-5 h-5 lg:w-6 lg:h-6 mr-2 lg:mr-3 text-customBronze" />
          <span className="text-black text-xs lg:text-base">Home</span>
        </Link>
      </div>
    </div>
  );
};

export default CoursesNavbar;
