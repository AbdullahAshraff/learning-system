import { useLocation } from 'react-router-dom';
import tracks from '../../constants/tracks.js'; // Import your tracks data
import ProfileTabs from './ProfileTabs';
import CourseList from './CourseList';
import Footer from '../../components/Footer.jsx';
import NavBar from '../../components/NavBar.jsx';

const Page = () => {
  const location = useLocation();

  // Helper to get query parameters
  const getTrackIdFromQuery = () => {
    const params = new URLSearchParams(location.search);
    return params.get('id'); // Get 'id' from query string
  };

  const trackId = getTrackIdFromQuery(); // Get track ID from URL
  const track = tracks.find(t => t.id === trackId); // Find the selected track by its ID

  return (
    <div className="flex flex-col min-h-screen">
      {/* <NavBar /> */}
      <div className="flex-grow flex justify-center items-start pt-4">
        <div className="w-full p-4">
          {track ? <ProfileTabs track={track} /> : <p>Track not found</p>}{' '}
          {/* Conditionally render the track */}
        </div>
      </div>
      <CourseList className="mt-8 lg:mb-16" />
      {/* <Footer className="mt-15" /> */}
    </div>
  );
};

export default Page;
