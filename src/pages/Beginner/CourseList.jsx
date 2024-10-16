import React, { useEffect, useState } from 'react';
import CourseCard from './CourseCard';
import '../tracks-list/page.css';

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch courses, tracks, and lessons from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const courseResponse = await fetch('https://basatha-khaki.vercel.app/api/v1/courses');
        const trackResponse = await fetch('https://basatha-khaki.vercel.app/api/v1/trackes');

        if (!courseResponse.ok || !trackResponse.ok) throw new Error('Failed to fetch data.');

        const { data: coursesData } = await courseResponse.json();
        const { data: tracksData } = await trackResponse.json();

        setCourses(coursesData);
        setTracks(tracksData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="spinner"></div>
      </div>
    );
  }
  if (error) return <p>Error: {error}</p>;

  // Filter courses belonging to the beginner track
  const beginnerTrack = tracks.find(track => track.trackTitle.toLowerCase() === 'beginner');
  const beginnerCourses = courses.filter(course => course.trackId === beginnerTrack?._id);

  return (
    <div className="container mx-auto py-8 mt-8 lg:mb-16 px-4">
      <h1 className="text-5xl font-mono text-center mb-8 bg-gradient-to-r from-[#e8b847] via-[#a79049] to-[#000000] text-transparent bg-clip-text">
        Courses You May Like
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {beginnerCourses.map(course => (
          <div key={course._id} className="transition-transform duration-300 transform hover:scale-105">
            <CourseCard course={course} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
