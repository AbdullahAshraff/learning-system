// Page.jsx
import { useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axiosInstance from '../../lib/axiosInstance'; // Import your axios instance
import ProfileTabs from './ProfileTabs';
import CourseList from './CourseList';

const Page = () => {
  const location = useLocation();
  const [track, setTrack] = useState(null); // Store the fetched track
  const [courses, setCourses] = useState([]); // Store courses related to the track
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Helper function to extract the 'id' parameter from the query string
  const getTrackIdFromQuery = () => {
    const params = new URLSearchParams(location.search);
    return params.get('id'); // Extract 'id' from query
  };

  const trackId = getTrackIdFromQuery(); // Get the track ID

  // Fetch track and related courses from the API
  useEffect(() => {
    const fetchTrackData = async () => {
      try {
        setLoading(true);
  
        // Fetch track data
        const trackResponse = await axiosInstance.get('/trackes');
        console.log(trackResponse.data); // Log response to check structure
        const trackData = trackResponse.data.data;
  
        // Check if trackData is an array
        if (!Array.isArray(trackData)) {
          throw new Error('Unexpected track data structure');
        }
  
        const selectedTrack = trackData.find(t => t._id === trackId);
        if (!selectedTrack) throw new Error('Track not found.');
  
        // Fetch courses data
        const courseResponse = await axiosInstance.get('/courses');
        const courseData = courseResponse.data.data;
  
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
  

  // Render loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="spinner"></div>
      </div>
    );
  }

  // Render error message
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  // Render if no tracks available
  if (!track) return <p className="text-center mt-10">Track not found.</p>;

  return (
    <div className="flex flex-col min-h-screen">

      <div className="flex-grow flex justify-center items-start pt-4">
        <div className="w-full p-4">
          {track ? <ProfileTabs track={track} /> : <p>Track not found</p>}
        </div>
      </div>
      <CourseList courses={courses} className="mt-8 lg:mb-16" />

    </div>
  );
};

export default Page;
