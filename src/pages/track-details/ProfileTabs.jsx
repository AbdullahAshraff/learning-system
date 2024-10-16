import React, { useEffect, useState } from 'react';
import AboutTab from './AboutTab';
import CoursesTab from './CoursesTab';

const ProfileTabs = ({ track }) => {
  const [activeTab, setActiveTab] = useState('about');
  const [courses, setCourses] = useState([]); // State to store fetched courses
  const [lessons, setLessons] = useState([]); // State to store fetched lessons
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch courses and lessons from the APIs
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [coursesResponse, lessonsResponse] = await Promise.all([
          fetch('https://basatha-khaki.vercel.app/api/v1/courses'),
          fetch('https://basatha-khaki.vercel.app/api/v1/lessions'),
        ]);

        if (!coursesResponse.ok || !lessonsResponse.ok) {
          throw new Error('Failed to fetch courses or lessons');
        }

        const coursesData = await coursesResponse.json();
        const lessonsData = await lessonsResponse.json();

        setCourses(coursesData.data); // Assuming the response has a 'data' field
        setLessons(lessonsData.data); // Assuming the response has a 'data' field
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="flex justify-center space-x-4 mb-8">
        {['about', 'course Content'].map(tab => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-lg text-sm font-semibold ${
              activeTab === tab
                ? 'bg-gradient-to-r from-[#DEB041] via-[#998443] to-[#0f0f0f] shadow-md text-white'
                : 'border border-gray-300 text-gray-600'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg text-black">
        {loading && <p className="text-center">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        
        {activeTab === 'about' && <AboutTab track={track} />}
        
        {activeTab === 'course Content' && (
          <CoursesTab
            courseData={track?.courseIds ? courses.filter(course => track.courseIds.includes(course._id)) : []} // Safely access courseIds
            lessons={lessons}
          />
        )}
      </div>
    </div>
  );
};

export default ProfileTabs;
