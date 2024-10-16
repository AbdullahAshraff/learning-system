import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const CoursesTab = ({ courseData = [] }) => {
  const [courses, setCourses] = useState([]); // State to store fetched courses
  const [lessons, setLessons] = useState([]); // State to store fetched lessons
  const [tracks, setTracks] = useState([]); // State to store fetched tracks
  const navigate = useNavigate(); // Hook to navigate to different routes

  // Fetch courses, lessons, and tracks from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [coursesResponse, lessonsResponse, tracksResponse] = await Promise.all([
          fetch('https://basatha-khaki.vercel.app/api/v1/courses'),
          fetch('https://basatha-khaki.vercel.app/api/v1/lessions'),
          fetch('https://basatha-khaki.vercel.app/api/v1/trackes'),
        ]);

        if (!coursesResponse.ok || !lessonsResponse.ok || !tracksResponse.ok) {
          throw new Error('Failed to fetch courses, lessons, or tracks');
        }

        const coursesData = await coursesResponse.json();
        const lessonsData = await lessonsResponse.json();
        const tracksData = await tracksResponse.json();

        setCourses(coursesData.data); // Assuming the structure has 'data' containing courses
        setLessons(lessonsData.data); // Assuming the structure has 'data' containing lessons
        setTracks(tracksData.data); // Assuming the structure has 'data' containing tracks
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  // Filter the courses based on the passed courseData
  const trackCourses = courses.filter(course => courseData.includes(course._id)); // Use _id if that's the ID format

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
        {trackCourses.map(course => (
          <motion.div
            key={course._id} // Use _id if that's the ID format
            className="group p-4 bg-white bg-opacity-50 rounded-xl shadow-inner transform transition-all duration-500 hover:bg-opacity-20"
            whileHover={{ scale: 1.05, rotate: 3 }} // Scale and rotate on hover
            whileTap={{ scale: 0.98 }} // Slight shrink on tap/click
            onClick={() => handleTrackClick(course._id)} // Use the course ID
          >
            {/* Course Title */}
            <motion.div
              className="flex items-center justify-center"
              whileHover={{ y: -5 }} // Slight lift on hover
            >
              <span className="text-gray-800 text-xl font-semibold">{course.title}</span>
            </motion.div>

            {/* Course Description */}
            <motion.div
              className="flex items-center justify-center mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-gray-500 text-left">{course.description}</span>
            </motion.div>

            {/* Lessons Count */}
            <motion.p
              className="text-sm text-white mt-4 text-center"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              {lessons.filter(lesson => lesson.courseId === course._id).length} lessons
            </motion.p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CoursesTab;
