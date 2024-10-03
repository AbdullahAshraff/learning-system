import React from 'react';
import Profile from './Profile';
import ProfileTabs from './ProfileTabs';
import NavBar from './NavBar'; 
import Footer from './Footer';
import CourseList from './../Frontend/CourseList';

const Backend = () => {
  return (
    <div className="flex flex-col min-h-screen"> 
      <NavBar /> 
      <div className="flex-grow flex justify-center items-start pt-4"> 
        {/* Left Section: Profile */}
        <div className="w-1/4 p-4">
          <Profile />
        </div>
        {/* Right Section: ProfileTabs */}
        <div className="w-3/4 p-4">
          <ProfileTabs/>
        </div>
      </div>
      <CourseList className="mt-8 lg:mb-16" /> 
      <Footer className="mt-36" /> 
    </div>
  );
};

export default Backend;
