import { useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import tracks from '../../constants/tracks.js'; // Import your tracks data
import ProfileTabs from './ProfileTabs';
import CourseList from './CourseList';
import TracksFooter from '../../components/TracksFooter.jsx';
import TracksHeader from '../../components/TracksHeader.jsx';
import './page.css'

const Page = () => {
  const location = useLocation();
  const [track, setTrack] = useState(null); // Store the fetched track
  const [courses, setCourses] = useState([]); // Store courses related to the track
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  const getTrackIdFromQuery = () => {
    const params = new URLSearchParams(location.search);
    return params.get('id'); // Extract 'id' from query
  };

  const trackId = getTrackIdFromQuery();

  // Fetch the specific track and related courses
  useEffect(() => {
    const fetchTrackData = async () => {
      try {
        const trackResponse = await fetch('https://basatha-khaki.vercel.app/api/v1/trackes');
        const courseResponse = await fetch('https://basatha-khaki.vercel.app/api/v1/courses');

        if (!trackResponse.ok || !courseResponse.ok) {
          throw new Error('Failed to fetch track or courses data.');
        }

        const { data: trackData } = await trackResponse.json();
        const { data: courseData } = await courseResponse.json();

        const selectedTrack = trackData.find(t => t._id === trackId);
        if (!selectedTrack) throw new Error('Track not found.');

        // Filter courses belonging to the selected track
        const relatedCourses = courseData.filter(course => course.trackId === trackId);

        setTrack(selectedTrack);
        setCourses(relatedCourses);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTrackData();
  }, [trackId]);
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="spinner"></div>
      </div>
    );
  }  
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;
  if (tracks.length === 0) return <p className="text-center mt-10">No tracks available.</p>;

  return (
    <div className="flex flex-col min-h-screen">
      <TracksHeader />
      <div className="flex-grow flex justify-center items-start pt-4">
        <div className="w-full p-4">
          {track ? <ProfileTabs track={track} /> : <p>Track not found</p>}{' '}
          {/* Conditionally render the track */}
        </div>
      </div>
      <CourseList className="mt-8 lg:mb-16" />
      <TracksFooter className="mt-15" />
    </div>
  );
};

export default Page;
