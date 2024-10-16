import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import NavBar from './../../components/TracksHeader.jsx';
import Footer from './../../components/Footer.jsx';
import Profile from '../Beginner/Profile.jsx';
import { FaBook } from 'react-icons/fa';

function BeginnerInfo() {
  const location = useLocation();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const courseId = new URLSearchParams(location.search).get('id');

  // Fetch course and instructor data from API.
  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const courseResponse = await fetch(`https://basatha-khaki.vercel.app/api/v1/courses`);
        const lessonResponse = await fetch(`https://basatha-khaki.vercel.app/api/v1/lessions`);

        if (!courseResponse.ok || !lessonResponse.ok) {
          throw new Error('Failed to fetch course or lessons data.');
        }

        const { data: courses } = await courseResponse.json();
        const { data: lessons } = await lessonResponse.json();

        const selectedCourse = courses.find((course) => course._id === courseId);
        if (!selectedCourse) throw new Error('Course not found.');

        selectedCourse.lessons = lessons.filter((lesson) => lesson.courseId === courseId);
        setCourse(selectedCourse);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourseData();
  }, [courseId]);

  const handleTrackClick = (courseId, firstLessonId) => {
    navigate(`/learn/?courseId=${courseId}&lessonId=${firstLessonId}`);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!course) return <p>Course not found.</p>;

  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-3 bg-white p-6 shadow-lg rounded-lg">
          <img
            src={course.courseImg}
            alt={course.title}
            className="w-full h-85 object-cover rounded-lg mb-4"
          />
          <h2 className="text-3xl font-bold text-gray-800 mb-4 mt-4">{course.title}</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">{course.description}</p>
          <p className="text-gray-600 font-medium mb-6 flex">
            <FaBook className="mr-2 text-lg" /> This course contains{' '}
            <span className="font-bold pl-1">{course.lessons.length}</span> lessons.
          </p>

          <button
            onClick={() => handleTrackClick(course._id, course.lessons[0]?._id)}
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-8 py-4 rounded-full"
          >
            Let’s Start
          </button>
        </div>

        <div className="bg-white p-6 shadow-lg rounded-lg md:sticky md:top-24">
          <Profile profileData={course} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BeginnerInfo;
