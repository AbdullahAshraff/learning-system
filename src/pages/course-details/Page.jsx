import { useLocation, useNavigate } from 'react-router-dom';
import courses from '../../constants/courses.js';
import NavBar from '../../components/NavBar.jsx';
import Footer from '../../components/Footer.jsx';
import ProfileData from '../../constants/instructors.js';
import Profile from '../../components/Beginner/Profile.jsx';
import { FaBook } from 'react-icons/fa';

function CourseDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const handleCourseClick = (courseId, firstLessonId) => {
    // Navigate to learn page with courseId and first lessonId
    navigate(`/learn/?courseId=${courseId}&lessonId=${firstLessonId}`);
  };
  const queryParams = new URLSearchParams(location.search);
  const courseId = queryParams.get('id');

  const course = courses.find(course => course.id === courseId);

  if (!course) {
    return <p>Course not found</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* <NavBar /> */}
      <div className="container px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {/* Course Details - 3/4 of the page */}
        <div className="md:col-span-3 bg-white p-6 shadow-lg rounded-lg">
          <img
            src={course.image}
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
            <span className="font-bold pl-1">{course.lessons.length}</span>
            <p className="font-bold pl-1">lessons</p>.
          </p>
          <div className="text-center mt-6">
            <div className="mt-6 flex justify-start">
              <button
                onClick={() =>
                  handleCourseClick(course.id, course.lessons[0]?.lessonId)
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
        <div className="bg-white p-6 shadow-lg rounded-lg md:sticky md:top-24 ">
          <Profile profileData={ProfileData[0]} />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default CourseDetails;
