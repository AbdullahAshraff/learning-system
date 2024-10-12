import { Link } from 'react-router-dom';
import {
  UserIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  HomeIcon,
} from '@heroicons/react/24/solid';

const CoursesNavbar = ({ handlePrevVideo, handleNextVideo }) => {
  const username = 'Arwa Zakria';
  return (
    <div className="fixed top-0 left-0 w-full bg-white text-customBronze h-16 flex items-center justify-between px-4 z-50">
      {/* User Info Section */}
      <div className="flex items-center space-x-2 lg:space-x-4 text-xs lg:text-base">
        <UserIcon className="w-4 h-4 lg:w-6 lg:h-6" />
        <span className="font-bold">{username}</span>
      </div>

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
