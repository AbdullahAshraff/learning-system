import React from 'react';
import { useNavigate } from 'react-router-dom';

const CourseCard = ({ track }) => {
  const navigate = useNavigate(); // Hook to navigate to different routes
  const handleTrackClick = trackId => {
    navigate(`/track?id=${trackId}`); // Navigate to the track details page
  };

  return (
    <div className="border rounded-lg p-6 shadow-lg transition-transform transform hover:scale-100 hover:shadow-amber-700 relative bg-white overflow-hidden mx-5 max-w-xs group">
      <img
        src={track.trackImage} // Adjusted for correct property name
        alt={track.trackTitle} // Adjusted for correct property name
        className="w-full h-48 object-cover mb-4 rounded-md transition-transform duration-500 transform group-hover:scale-110"
      />
      <h2 className="text-xl font-semibold text-gray-800 hover:text-[#DEB041] transition-colors duration-300">
        {track.trackTitle} {/* Adjusted for correct property name */}
      </h2>
      <p className="text-gray-600 text-sm mb-2">{track.description}</p>
      <div className="mt-3 flex justify-between items-center text-lg font-bold text-[#DEB041]" onClick={() => handleTrackClick(track._id)}>
        <span className="bg-gradient-to-r from-[#DEB041] to-[#998443] text-white px-4 py-2 rounded-md cursor-pointer transition-transform duration-300 transform hover:scale-105">
          Enroll Now
        </span>
      </div>
    </div>
  );
};

export default CourseCard;
