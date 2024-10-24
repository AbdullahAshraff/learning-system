import { useState,useEffect } from 'react';
import axiosInstance from '../../../lib/axiosInstance';
import axios from 'axios'


const Trackss = () => {

  const [tracks, setTracks] = useState([]);
  const [trackTitle, setTrackTitle] = useState('');
  const [trackImage, setTrackImage] = useState(null);
  const [description, setDescription] = useState('');//course,track
  const [alt, setAlt] = useState('');
  const [activeTrackId, setActiveTrackId] = useState(null);
  const [activeTrack, setActiveTrack] = useState(null);

  // Fetch tracks on component mount
 useEffect(() => {
    getAllTracks();
 }, []);
 const getAllTracks = async () => {
    try {
      const response = await axiosInstance.get('/trackes');
      setTracks(response.data.data);
      response.data.data.map((track,index)=>{
        console.log(track.trackTitle);
        
      })
    } catch (error) {
        console.error("Failed track",error);
    }
  }


 const handleAddTrack = async (event) => {
  event.preventDefault();
  const url="https://basatha-khaki.vercel.app/api/v1/trackes"
    const token = document.cookie
    .split("; ")
    .find((row) => row.startsWith("token="))
    ?.split("=")[1]; // Optional chaining to avoid errors if token is not found
  
  const formData = new FormData();
  formData.append('trackTitle', trackTitle);
  formData.append('trackImage', trackImage);
  formData.append('description', description);
  formData.append('alt', alt);

  console.log('Sending data:', {
    trackTitle: trackTitle,
    trackImage: trackImage,
    description,
    alt
  });

  try {
    const response = await axios.post(url, formData, {
      headers: {
        Authorization:` Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });
    
    console.log('Track added successfully', response);
    setTracks([...tracks, response.data.track]);
    // Clear form fields
    setTrackTitle('');
    setTrackImage(null);
    setDescription('');
    setAlt('');
  } catch (error) {
    console.error('Error adding track:', error.response ? error.response.data.data : error.message);
  }
};




//  const handleDeleteTrack = async (trackId) => {
//     const token = document.cookie
//       .split("; ")
//       .find((row) => row.startsWith("token="))
//       ?.split("=")[1]; // Optional chaining to avoid errors if token is not found
  
//     try {
//       const response = await axios.delete(`/trackes/${trackId}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
  
//       console.log('Track deleted successfully', response);
  
//       // Update local state to remove the deleted track
//       setTracks(tracks.filter(track => track.id !== trackId)); // Adjust `id` according to your data structure
//     } catch (error) {
//       console.error('Error deleting track:', error.response ? error.response.data : error.message);
//     }
//  };



const handleDeleteTrack = async (trackId) => {
  // Extract token from cookies
  const token = document.cookie
    .split("; ")
    .find((row) => row.startsWith("token="))
    ?.split("=")[1];

  // Check if token is available
  if (!token) {
    setError('No authorization token found. Please log in.');
    return;
  }

  setLoading(true); // Set loading state
  setError(null); // Reset error state

  try {
    const response = await axios.delete(`/trackes/${trackId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log('Track deleted successfully', response);
    
    // Update local state to remove the deleted track
    setTracks(prevTracks => prevTracks.filter(track => track.id !== trackId));

  } catch (error) {
    // Enhanced error handling with fallback for network issues
    const errorMsg = error.response?.data?.message || 'Failed to delete track. Please try again later.';
    setError(errorMsg);
    console.error('Error deleting track:', errorMsg);
  } finally {
    setLoading(false); // Reset loading state
  }
};


 const handleUpdateTrack=async()=>{
    const token = document.cookie
    .split("; ")
    .find((row) => row.startsWith("token="))
    .split("=")[1];

    const formData = new FormData();
    formData.append('trackTitle', trackTitle);
    formData.append('trackImage', trackImage);
    formData.append('description', description);
    formData.append('alt', alt);

   try {
    const trackId = tracks[activeTrack]._id; // Assuming each track has an _id field
    const response = await axios.put(`/trackes/${trackId}`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log('Track updated successfully', response);
    
    const newTracks = [...tracks];
    newTracks[activeTrack] = response.data.track; // Update the track in the local state with the updated data
    setTracks(newTracks);

    // Clear form fields
    setTrackTitle('');
    setTrackImage(null);
    setDescription('');
    setAlt('');
    setIsEditing(false);
  } catch (error) {
    console.error('Error updating track:', error);
  }
 }



 return(

 <>



 <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
 <h2 className="text-2xl font-bold mb-6 text-center">Manage Tracks and Courses</h2>

 {/* Add Track */}
 <div className="mb-6">
  <h3 className="text-lg font-semibold mb-4">Add Track</h3>
  <div className="flex flex-col space-y-4">
    <input
      type="text"
      placeholder="Track Name"
      value={trackTitle}
      onChange={(e) => setTrackTitle(e.target.value)}
      className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <textarea
      placeholder="Track Description"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      rows="3"
    />
    <input
      type="file"
      accept="image/*"
      onChange={(e) => setTrackImage(e.target.files[0])}
      className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <input
      type="text"
      placeholder="Image Alt Text"
      value={alt}
      onChange={(e) => setAlt(e.target.value)}
      className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button
      onClick={handleAddTrack}
      className="bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition duration-200"
    >
      Add Track
    </button>
  </div>
 </div>



 {/* Track Selection */}
 <div className="mb-6">
 <label htmlFor="track-select" className="block mb-2 text-gray-700 font-medium">
   Select Track:
 </label>
 <select
  id="track-select"
  className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
  onChange={(e) => {
    const selectedIndex = e.target.value; // Get the selected index
    setActiveTrackId(tracks[selectedIndex]?.id); // Set the active track ID
    setActiveCourse('');
  }}>
  <option value="">Choose a track</option>
  {tracks.map((track, index) => (
    <option key={index} value={index}>
      {track?.trackTitle}
    </option>
  ))}
 </select>
 </div>

 {/* Delete tracks  */}
 <div className="mb-6">
 <button
  onClick={() => handleDeleteTrack(activeTrackId)} // Call with active track ID
  className="bg-red-600 text-white p-3 rounded-lg hover:bg-red-700 transition duration-200"
  disabled={!activeTrackId} // Disable button if no track is selected
 >
  Delete Track
 </button>

 </div>

 {/* Edit track */}

 {activeTrack!== null && (
  <div className="mb-6">
    <h3 className="text-lg font-semibold mb-4">Edit Track</h3>
    <div className="flex flex-col space-y-4">
      <input
        type="text"
        placeholder="New Track Name"
        value={trackTitle}
        onChange={(e) => setTrackTitle(e.target.value)}
        className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <textarea
        placeholder="New Track Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows="3"
      />
      <input
        type=" Button" 
        value="Update Track"
        onClick={handleUpdateTrack}
        className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-200 cursor-pointer text-center"
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setTrackImage(e.target.files[0])}
        className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  </div>
 )}


 </div>

 </>
 )
}
export default Trackss;
