import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../lib/axiosInstance'; // Import axios instance

const CoursesTab = ({ track }) => {
  const [courses, setCourses] = useState([]); // State to store fetched courses
  const [lessons, setLessons] = useState([]); // State to store fetched lessons
  const navigate = useNavigate(); // Hook to navigate to different routes

  // Fetch courses and lessons from the API using axios
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from API in parallel
        const [coursesResponse, lessonsResponse] = await Promise.all([
          axiosInstance.get('/courses'),
          axiosInstance.get('/lessions'),
        ]);

        // Set state with API response data
        setCourses(coursesResponse.data.data); // Assuming 'data' contains courses
        setLessons(lessonsResponse.data.data); // Assuming 'data' contains lessons
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call fetch function
  }, []);

  // Filter courses based on the passed track prop
  const filteredCourses = track ? courses.filter(course => course.trackId._id === track._id) : [];

  // Handle click to navigate to the selected course
  const handleTrackClick = (courseId) => {
    navigate(`/course?id=${courseId}`); // Navigate to /course?id=123
  };

  return (
    <div className="relative bg-gradient-to-br from-[#DEB041] via-[#998443] to-[#0f0f0f] p-10 rounded-3xl shadow-xl">
        <h1 className="relative text-5xl font-extrabold text-white mb-6 z-10 text-center">
        Track Content
      </h1>
      <p className="relative text-lg text-gray-200 mb-8 z-10">
        Join our track. Explore various tracks that empower you to master essential technologies. This track is designed to provide a solid foundation and practical skills to help you in the future.
      </p>

      <div className="relative grid grid-cols-2 gap-6 z-10 cursor-pointer">
        {filteredCourses.map(course => (
          <motion.div
            key={course._id} // Use course ID as the key
            className="group p-4 bg-white bg-opacity-50 rounded-xl shadow-inner transform transition-all duration-500 hover:bg-opacity-20"
            whileHover={{ scale: 1.05, rotate: 3 }} // Scale and rotate on hover
            onClick={() => handleTrackClick(course._id)} // Use the course ID for navigation
          >
            <h2 className="text-gray-800 text-2xl font-semibold">{course.title}</h2> {/* Display course title */}
            <p className="text-gray-500">{course.description}</p> {/* Display course description */}

            {/* Lessons Count */}
            <p className="text-sm text-white mt-1">
              {lessons.filter(lesson => lesson.courseId === course._id).length} lessons
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CoursesTab;
