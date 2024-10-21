import { useNavigate } from 'react-router-dom';
import tracks from '../../constants/tracks.js';
import Footer from '../../components/Footer.jsx';
import NavBar from '../../components/NavBar.jsx';

function Page() {
  const navigate = useNavigate(); // Hook to navigate to different routes
  const handleTrackClick = trackId => {
    navigate(`/track?id=${trackId}`); // Navigate to the track details page
  };
  // Filter out the beginner track
  const filteredTracks = tracks.filter(track => track.id !== 'beginner-001');

  return (
    <div>
      {/* <NavBar /> */}
      {/* Tracks Section */}
      <section id="track" className="my-12 mt-[100px] ml-[50px] mr-[50px]">
        <h2 className="text-3xl font-semibold text-[#DEB041] text-center mb-[20px]">
          Our Tracks
        </h2>
        <p className="text-center mb-[60px] text-gray-500">
          Learn about the technological tracks provided to you by the Basatha
          platform
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredTracks.map((track, index) => {
            // Get the icon component reference from tracks.js
            return (
              <div
                key={index}
                className="track-card bg-white rounded-lg shadow-lg shadow-[#DEB041] p-6 text-center text-[#0f0f0f] cursor-pointer overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                onClick={() => handleTrackClick(track.id)} // Handle click
              >
                {/* Render the icon component dynamically */}
                <div className="mb-4 flex justify-center text-[#DEB041]">
                  <img
                    src={track.image}
                    alt={track.title}
                    className="w-full h-48 object-cover rounded-md"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">{track.title}</h3>
                <p>{track.description}</p>
              </div>
            );
          })}
        </div>
      </section>
      {/* <Footer /> */}
    </div>
  );
}

export default Page;
