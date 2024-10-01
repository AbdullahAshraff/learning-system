import React from 'react';
import { Link } from 'react-router-dom';
import { UserIcon, ChevronLeftIcon, ChevronRightIcon, HomeIcon } from "@heroicons/react/24/solid";
import useVideoCourse from '../constants/useCourses';

const CoursesNavbar = ({ handlePrevVideo, handleNextVideo }) => {
  const username = "Arwa Zakria";
  return (
    <div className="fixed top-0 left-0 w-full  bg-white text-customBronze h-16 flex items-center justify-between px-4 z-50">
      <div className="flex items-center space-x-4">
        <UserIcon className="w-6 h-6" />
        <span className="font-bold">{username}</span>
      </div>
      <div className="flex items-center space-x-4">
        <button onClick={handlePrevVideo} className="bg-yellow-50 hover:bg-yellow-100 px-3 py-2 rounded">
          <ChevronLeftIcon className="w-5 h-5" />
        </button>
        <button onClick={handleNextVideo} className="bg-yellow-50 hover:bg-yellow-100 px-3 py-2 rounded">
          <ChevronRightIcon className="w-5 h-5" />
        </button>
        <span>
          <Link to="/" className="flex items-center px-4 py-2 hover:bg-yellow-100 rounded">
            <HomeIcon className="w-6 h-6 mr-3 text-customBronze" />
            <span className="text-black">Home</span>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default CoursesNavbar;
