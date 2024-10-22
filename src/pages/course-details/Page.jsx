import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axiosInstance from '../../lib/axiosInstance'; // Import your Axios instance
import Profile from '../../components/Beginner/Profile.jsx';
import { FaBook } from 'react-icons/fa';

function CourseDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [lessons, setLessons] = useState([]);
  const [instructor, setInstructor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Extract courseId from the URL parameters
  const queryParams = new URLSearchParams(location.search);
  const courseId = queryParams.get('id');

  // Fetch course, lessons, and instructor data on mount
  useEffect(() => {
    const fetchCourseDetails = async () => {
      if (!courseId) {
        setError('Course ID not provided.');
        setLoading(false);
        return;
      }
  
      try {
        setLoading(true);
  
        // Fetch course data
        const courseResponse = await axiosInstance.get(`/courses/${courseId}`);
        console.log('Course Data:', courseResponse.data.data); // Assuming courseResponse.data.data contains the actual course data
        setCourse(courseResponse.data.data); // Update this to courseResponse.data.data if that's where the actual data is
  
        // Fetch lessons data for this course
        const lessonsResponse = await axiosInstance.get('/lessions', {
          params: { courseId: courseId },
        });
        console.log('Lessons Data:', lessonsResponse.data.data);
        setLessons(lessonsResponse.data.data);
  
        // Fetch instructor data from the course response
        // const instructorData = courseResponse.data.instructor;
        const instructorData = courseResponse.data.data.instructor;
        setInstructor(instructorData);
  
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch course details.');
        setLoading(false);
      }
    };
  
    fetchCourseDetails();
  }, [courseId]);
  
  
  

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  if (!course) return <p>Course not found</p>;

  const handleCourseClick = (courseId, firstLessonId) => {
    // Navigate to learn page with courseId and first lessonId
    navigate(`/learn/?courseId=${courseId}&lessonId=${firstLessonId}`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {/* Course Details - 3/4 of the page */}
        <div className="md:col-span-3 bg-white p-6 shadow-lg rounded-lg">
          <img
            src={course.courseImg}
            alt={course.title}
            className="w-full h-85 object-cover rounded-lg mb-4 transition-transform duration-500 transform hover:scale-105"
          />
          <h2 className="text-3xl font-bold text-gray-800 mb-4 mt-4">
            {course.title}
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            {course.description}
          </p>
          <p className="text-gray-600 font-medium mb-6 flex">
          <FaBook className="mr-2 text-lg" /> This course contains
          <span className="font-bold pl-1">{lessons.length}</span>
          <span className="font-bold pl-1">lessons</span>.
          </p>

          <div className="text-center mt-6">
            <div className="mt-6 flex justify-start">
              <button
                onClick={() =>
                  handleCourseClick(courseId, lessons[0]?.lessonId)
                }
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-lg font-bold px-8 py-4 rounded-full
               shadow-md transition-all duration-300 ease-in-out transform hover:shadow-lg hover:scale-105
               active:scale-95"
              >
                Let’s Start
              </button>
            </div>
          </div>
        </div>

        {/* Profile Section - 1/4 of the page */}
        {instructor && (
          <div className="bg-white p-6 shadow-lg rounded-lg md:sticky md:top-24">
            <Profile profileData={instructor} />
          </div>
        )}
      </div>
    </div>
  );
}

export default CourseDetails;
