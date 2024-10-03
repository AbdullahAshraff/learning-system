import React from 'react';
import { FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa';
import ProfileImage from '../../assets/Mosh-Hamedani.jpeg';

const Profile = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-xs text-center cursor-pointer">
      <img
        src={ProfileImage} 
        alt="Beau Carnes"
        className="mx-auto rounded-full object-cover w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 shadow-md"
      />
      <h2 className="mt-4 text-xl font-semibold cursor-pointer">Mosh Hamedani</h2>
      <p className="text-amber-500 uppercase text-sm">programmer and educator</p>
      <p className="text-gray-600 mt-4 text-left">
      He is a popular  software developer, educator, and content creator, famous for his high-quality programming courses and tutorials,
      He is a full stack developer with over two decades of experience in software development. He specializes in technologies like JavaScript, React, Angular, Node.js, and .NET.      </p>
      <hr className="mt-6 border-gray-300" />
      <div className="mt-4 flex justify-center space-x-4">
        <a href="https://www.linkedin.com/school/codewithmosh/" className="text-amber-600">
          <FaLinkedin size={24} />
        </a>
        <a href="https://github.com/mosh-hamedani" className="text-amber-600">
          <FaGithub size={24} />
        </a>
        <a href="https://www.youtube.com/@programmingwithmosh" className="text-amber-600">
          <FaYoutube size={24} />
        </a>
      </div>
    </div>
  );
};

export default Profile;
