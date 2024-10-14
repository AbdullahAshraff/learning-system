import React from 'react';
import {
  FaPython,
  FaJava,
  FaReact,
  FaLaptopCode,
  FaServer,
  FaMobileAlt,
  FaShieldAlt,
} from 'react-icons/fa';
import { SlOrganization } from "react-icons/sl";
import { GiStairsGoal } from "react-icons/gi";
import AOS from 'aos';
import 'aos/dist/aos.css';

const courses = [
  {
    name: 'Python',
    icon: <FaPython size={50} className="text-[#DEB041]" />,
    description: 'Learn Python programming from basics to advanced topics.',
  },
  {
    name: 'Java',
    icon: <FaJava size={50} className="text-[#DEB041]" />,
    description: 'Master Java and build powerful applications.',
  },
  {
    name: 'Problem Solving',
    icon: <SlOrganization size={50} className="text-[#DEB041]" />,
    description: 'Dive deep into Problem Solving concepts.',
  },
  {
    name: 'React',
    icon: <FaReact size={50} className="text-[#DEB041]" />,
    description: 'Build dynamic web interfaces with React.',
  },
];

const tracks = [
  {
    name: 'Frontend',
    icon: <FaLaptopCode size={50} className="text-[#DEB041]" />,
    description: 'Explore UI/UX design and frontend development.',
  },
  {
    name: 'Backend',
    icon: <FaServer size={50} className="text-[#DEB041]" />,
    description: 'Learn about server-side programming and databases.',
  },
  {
    name: 'Mobile Application',
    icon: <FaMobileAlt size={50} className="text-[#DEB041]" />,
    description: 'Develop mobile apps for Android and iOS.',
  },
  {
    name: 'Beginner',
    icon: <GiStairsGoal size={50} className="text-[#DEB041]" />,
    description: 'Great place to start your running journey.',
  },
];

function Courses() {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <>
      {/* Courses Section */}
      <section id="course" className="my-12 mt-[100px] ml-[50px] mr-[50px]">
        <h2 className="text-3xl font-semibold text-[#DEB041] mb-6 text-center mb-[50px]">
          Our Courses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="course-card bg-white rounded-lg shadow-lg shadow-[#DEB041] p-6 text-center text-[#0f0f0f] cursor-pointer overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="mb-4 flex justify-center">{course.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{course.name}</h3>
              <p>{course.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tracks Section */}
      <section id="track" className="my-12 mt-[100px] ml-[50px] mr-[50px]">
        <h2 className="text-3xl font-semibold text-[#DEB041] mb-6 text-center mb-[50px]">
          Our Tracks
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tracks.map((track, index) => (
            <div
              key={index}
              data-aos="zoom-in" // Different AOS animation for variety
              className="track-card bg-white rounded-lg shadow-lg shadow-[#DEB041] p-6 text-center text-[#0f0f0f] cursor-pointer overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="mb-4 flex justify-center">{track.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{track.name}</h3>
              <p>{track.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Courses;
