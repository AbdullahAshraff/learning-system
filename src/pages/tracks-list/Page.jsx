import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../lib/axiosInstance.js'; // Import Axios instance
import Footer from '../../components/Footer.jsx';
import NavBar from '../../components/NavBar.jsx';

function Page() {
  const navigate = useNavigate(); // Hook to navigate to different routes
  const [tracks, setTracks] = useState([]); // Initialize tracks as an empty array
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch tracks from API on component mount
  useEffect(() => {
    const fetchTracks = async () => {
      try {
        
        const response = await axiosInstance.get('/trackes'); // Adjust endpoint if necessary
        console.log('API Response:', response.data); // Log the response for debugging
  
        // Access the tracks from the correct property in the API response
        if (response.data?.data && Array.isArray(response.data.data)) {
          setTracks(response.data.data); // Store tracks in state
        } else {
          throw new Error('No tracks found'); // Handle unexpected API response
        }
      } catch (err) {
        console.error('Error fetching tracks:', err);
        setError('Failed to load tracks. Please try again.');
      } finally {
        setLoading(false); // Stop loading indicator
      }
    };
  
    fetchTracks();
  }, []);
  

  const handleTrackClick = (trackId) => {
    navigate(`/track?id=${trackId}`); // Navigate to the track details page
  };

  return (
    <div>
      {/* <NavBar /> */}
      <section id="track" className="my-12 mt-[100px] ml-[50px] mr-[50px]">
        <h2 className="text-3xl font-semibold text-[#DEB041] text-center mb-[20px]">
          Our Tracks
        </h2>
        <p className="text-center mb-[60px] text-gray-500">
          Learn about the technological tracks provided to you by the Basatha platform
        </p>

        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
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
        )}
      </section>
      {/* <Footer /> */}
    </div>
  );
}

export default Page;
