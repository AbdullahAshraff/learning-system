import React, { useEffect, useState } from 'react';
import CourseCard from './CourseCard';
import './page.css'
const CourseList = () => {
  const [tracks, setTracks] = useState([]); // State to store fetched tracks
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch tracks from the API
  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const response = await fetch('https://basatha-khaki.vercel.app/api/v1/trackes');
        if (!response.ok) {
          throw new Error('Failed to fetch tracks');
        }
        const data = await response.json();
        setTracks(data.data); // Assuming the response has a 'data' field
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTracks();
  }, []);

  // Filter the tracks to only include Frontend, Java, and Mobile tracks
  const filteredTracks = tracks.filter(
    track =>
      track.id === 'frontend-001' ||
      track.id === 'java-001' ||
      track.id === 'mobile-001'
  );
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="spinner"></div>
      </div>
    );
  } 
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="container mx-auto py-8 mt-8 lg:mb-16">
      <h1 className="text-5xl font-mono text-center mb-8 bg-gradient-to-r from-[#e8b847] via-[#a79049] to-[#000000] bg-clip-text text-transparent animate-bounce">
        Tracks You May Like
      </h1>
      <div className="flex flex-wrap justify-center">
        {filteredTracks.map(track => (
          <CourseCard key={track._id} track={track} /> // Use _id if that's the ID format
        ))}
      </div>
    </div>
  );
};

export default CourseList;
