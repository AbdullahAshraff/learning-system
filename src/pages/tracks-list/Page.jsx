import React, { useEffect, useState } from 'react';
import TracksHeader from '../../components/TracksHeader.jsx';
import TracksFooter from '../../components/TracksFooter.jsx';
import { useNavigate } from 'react-router-dom';
import './page.css'

function MyTracks() {
  const navigate = useNavigate();
  const [tracks, setTracks] = useState([]); // Store the fetched tracks
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch data from the API
  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const response = await fetch('https://basatha-khaki.vercel.app/api/v1/trackes');
        if (!response.ok) {
          throw new Error('Failed to fetch tracks');
        }
        const { data } = await response.json(); // Extract 'data' property

        console.log('Extracted Data:', data); // Confirm the extracted data

        setTracks(data); // Set the tracks array from the response
      } catch (err) {
        setError(err.message); // Handle API errors
      } finally {
        setLoading(false); // Stop loading after fetch
      }
    };

    fetchTracks();
  }, []);

  const handleTrackClick = (trackId) => {
    navigate(`/track?id=${trackId}`);
  };

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
    <div>
      <TracksHeader />
      <section id="track" className="my-12 mt-[100px] ml-[50px] mr-[50px]">
        <h2 className="text-3xl font-semibold text-[#DEB041] text-center mb-[20px]">
          Our Tracks
        </h2>
        <p className="text-center mb-[60px] text-gray-500">
          Learn about the technological tracks provided to you by the Basatha platform
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {tracks.map((track) => (
            <div
              key={track._id}
              className="track-card bg-white rounded-lg shadow-lg shadow-[#DEB041] p-6 text-center text-[#0f0f0f] cursor-pointer overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              onClick={() => handleTrackClick(track._id)}
            >
              <div className="mb-4 flex justify-center text-[#DEB041]">
                <img
                  src={track.trackImage}
                  alt={track.trackTitle}
                  className="w-full h-48 object-cover rounded-md"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">{track.trackTitle}</h3>
              <p>{track.description}</p>
            </div>
          ))}
        </div>
      </section>
      <TracksFooter />
    </div>
  );
}

export default MyTracks;
