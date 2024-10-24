import { useState,useEffect } from 'react';
import axiosInstance from '../../lib/axiosInstance';
import axios from 'axios'
const Tracks = () => {
  const [tracks, setTracks] = useState([]);
  const [trackTitle, setTrackTitle] = useState('');
  const [trackImage, setTrackImage] = useState(null);
  const [description, setDescription] = useState('');//course,track
  const [alt, setAlt] = useState('');
  const [activeTrackId, setActiveTrackId] = useState(''); // Initialize with an empty string or default value
  const [activeTrack, setActiveTrack] = useState(null);
  const [activeCourse, setActiveCourse] = useState('');
  const [activeVideo, setActiveVideo] = useState(null);
  const [title, settitle] = useState('');
  const [courseImg, setcourseImg] = useState(null);
  const [instructorName, setinstructorName] = useState('');
  const [instructorJob, setinstructorJob] = useState('');
  const [instructorLinks, setinstructorLinks] = useState('');
  const [instructorImage, setinstructorImage] = useState('');
  const [videoTitle, setVideoTitle] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editVideoIndex, setEditVideoIndex] = useState(null);
    const [courses, setCourses] = useState([]);

  useEffect(() => {
    getAllCourses();
  }, []);

  const getAllCourses = async () => {
    try {
      const response = await axiosInstance.get('/courses');
      console.log('API Response:', response.data);
  
      const fetchedCourses = response.data?.data || [];
      setCourses(fetchedCourses);
  
      fetchedCourses.forEach((course, index) => {
        console.log(`Course ${index + 1}:`, course); // Inspect the course object
      });
    } catch (error) {
      console.error('Failed to fetch courses:', error);
    }
  };
  

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
      const url=`https://basatha-khaki.vercel.app/api/v1/trackes`
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
            Authorization: `Bearer ${token}`,
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
  const handleDeleteTrack = async (trackId) => {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="))
      ?.split("=")[1];
  
    console.log('Retrieved token:', token); // Log the token
  
    if (!token) {
      console.error('No token found');
      return;
    }
  
    try {
      const response = await axiosInstance.delete(`/trackes/${trackId}`, { // Ensure endpoint is correct
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      console.log('Track deleted successfully', response);
  
      // Update local state to remove the deleted track
      setTracks((prevTracks) => prevTracks.filter(track => track._id !== trackId)); // Use _id for filtering
    } catch (error) {
      if (error.response) {
        console.error('Error deleting track:', error.response.data);
        console.error('Error status:', error.response.status);
      } else {
        console.error('Error deleting track:', error.message);
      }
    }
  };
  
  

  const handleUpdateTrack=async()=>{
    const token = document.cookie
    .split("; ")
    .find((row) => row.startsWith("token="))
    .split("=")[1];

  const formData = new FormData();
  formData[activeTrack].append('trackTitle', trackTitle);
  formData[activeTrack].append('trackImage', trackImage);
  formData[activeTrack].append('description', description);
  formData[activeTrack].append('alt', alt);

  try {
    const trackId = tracks[activeTrack]._id; // Assuming each track has an _id field
    const response = await axiosInstance.put(`/trackes/${trackId}`, formData, {
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

  const handleUpdateCourse = async () => {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="))
      .split("=")[1];
  
    const formData = new FormData();
    formData.append('title', title);
    formData.append('image', courseImg);
    formData.append('description', description);
  
    try {
      const response = await axiosInstance.put(`/courses/${tracks[activeTrack].courses[activeCourse]._id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      
      console.log('Course updated successfully', response);
      const newTracks = [...tracks];
      newTracks[activeTrack].courses[activeCourse] = response.data.course; // Update the course in the active track's courses
      setTracks(newTracks);
  
      // Clear form fields
      settitle('');
      setDescription('');
      setcourseImg(null);
      setActiveCourse('');
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating course:', error);
    }
  };
  

  const handleAddCourse = async() => {
    if (activeTrack !== null && title && courseImg) {
      const token = document.cookie
    .split("; ")
    .find((row) => row.startsWith("token="))
    .split("=")[1];

  const formData = new FormData();
  formData.append('title', title);
  formData.append('image', courseImg);
  formData.append('description', description);
  formData.append('trackId', tracks[activeTrack]._id); // Assuming each track has an _id field

  try {
    const response = await axiosInstance.post('/courses', formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });
    
    console.log('Course added successfully', response);
    const newTracks = [...tracks];
    newTracks[activeTrack].courses.push(response.data.course); // Add the new course to the active track's courses
    setTracks(newTracks);

    // Clear form fields
    settitle('');
    setDescription('');
    setcourseImg(null);
  } catch (error) {
    console.error('Error adding course:', error);
  }}
  };

  const handleVideoChange = (event) => {
    setVideoUrl(event.target.value);
  };

  const handleSubmit =async (event) => {
    event.preventDefault();
    const token = document.cookie
    .split("; ")
    .find((row) => row.startsWith("token="))
    .split("=")[1];

  const formData = new FormData();
  formData.append('title', videoTitle);
  formData.append('url', videoUrl);
  formData.append('courseId', tracks[activeTrack].courses[activeCourse]._id); // Assuming each course has an _id field

  try {
    const response = await axiosInstance.post('/lessions', formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });
    
    console.log('Lesson added successfully', response);
    const newTracks = [...tracks];
    newTracks[activeTrack].courses[activeCourse].videos.push(response.data.lesson); // Assuming response contains the new lesson
    setTracks(newTracks);

    // Clear form fields
    setVideoTitle('');
    setVideoUrl('');
  } catch (error) {
    console.error('Error adding lesson:', error);
  }
  };

  const handleDeleteVideo = async() => {
    const token = document.cookie
    .split("; ")
    .find((row) => row.startsWith("token="))
    .split("=")[1];

  try {
    const lessonId = tracks[activeTrack].courses[activeCourse].videos[activeVideo]._id; // Assuming each video has an _id field
    await axiosInstance.delete(`/lessons/${lessonId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log('Lesson deleted successfully');
    const newTracks = [...tracks];
    newTracks[activeTrack].courses[activeCourse].videos.splice(activeVideo, 1); // Remove the lesson from the active course's videos
    setTracks(newTracks);

    // Clear active video
    setActiveVideo(null);
  } catch (error) {
    console.error('Error deleting lesson:', error);
  }
  };

  const handleEditVideo = async() => {
    const token = document.cookie
    .split("; ")
    .find((row) => row.startsWith("token="))
    .split("=")[1];

  const formData = new FormData();
  formData.append('title', videoTitle);
  formData.append('url', videoUrl);

  try {
    const lessonId = tracks[activeTrack].courses[activeCourse].videos[editVideoIndex]._id; // Assuming each video has an _id field
    const response = await axiosInstance.put(`/lessions/${lessonId}`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log('Lesson updated successfully', response);
    const newTracks = [...tracks];
    newTracks[activeTrack].courses[activeCourse].videos[editVideoIndex] = response.data.lesson; // Update the lesson in the active course's videos
    setTracks(newTracks);

    // Clear form fields
    setVideoTitle('');
    setVideoUrl('');
    setIsEditing(false);
    setEditVideoIndex(null);
  } catch (error) {
    console.error('Error updating lesson:', error);
  };
}

  return (
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
  value={activeTrackId} // Control the selected value
  className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
  onChange={(e) => {
    const selectedIndex = parseInt(e.target.value); // Get the selected index as an integer
    console.log('Selected Index:', selectedIndex); // Log selected index

    const selectedTrack = tracks[selectedIndex]; // Get the selected track object
    console.log('Selected Track:', selectedTrack); // Log selected track object

    if (selectedTrack) { // Ensure selectedTrack is valid
      setActiveTrackId(selectedTrack._id); // Set the active track ID correctly
      console.log('Active Track ID:', selectedTrack._id); // Log the active track ID
    } else {
      console.log('No track selected.');
    }
  }}
>
  <option value="">Choose a track</option>
  {tracks.map((track, index) => (
    <option key={index} value={index}>
      {track?.trackTitle}
    </option>
  ))}
</select>

      </div>

      {/* Delete Track Button */}
      <div className="mb-6">
      <button
  onClick={() => {
    console.log('Button clicked');
    console.log('Current activeTrackId:', activeTrackId); // Log the current activeTrackId
    if (activeTrackId) {
      const confirmDelete = window.confirm("Are you sure you want to delete this track?");
      if (confirmDelete) {
        console.log('Attempting to delete track with ID:', activeTrackId);
        handleDeleteTrack(activeTrackId);
      } else {
        console.log('Deletion cancelled.');
      }
    } else {
      console.log('No track selected for deletion.');
    }
  }}
  className="bg-red-600 text-white p-3 rounded-lg hover:bg-red-700 transition duration-200"
  // disabled={!activeTrackId}
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
          
{/* Add Course */}
{activeTrack !== null && (
  <div className="mb-6">
    <h3 className="text-lg font-semibold mb-4">Add Course</h3>
    <div className="flex flex-col space-y-4">
      <input
        type="text"
        placeholder="Course Title"
        value={title}
        onChange={(e) => settitle(e.target.value)}
        className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <textarea
        placeholder="Course Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows="3"
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setcourseImg(e.target.files[0])}
        className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Instructor Name */}
      <input
        type="text"
        placeholder="Instructor Name"
        className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => setinstructorName(e.target.value)}
      />

      {/* Instructor Job */}
      <input
        type="text"
        placeholder="Instructor Job"
        className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => setinstructorJob(e.target.value)}
      />

      {/* Instructor Image */}
      <input
        type="file"
        accept="image/*"
        className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => setinstructorImage(e.target.files[0])}
      />

      {/* Instructor Social Media Links */}
      <input
        type="text"
        placeholder="Instructor Social Media Links"
        className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => setinstructorLinks(e.target.value)}
      />

      <button
        onClick={handleAddCourse}
        className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-200"
      >
        Add Course
      </button>
    </div>
  </div>
)}



     {/* Edit course */}

     {activeCourse!== null && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4">Edit Course</h3>
          <div className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="New Course Name"
              value={title}
              onChange={(e) => settitle(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="New Course Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="3"
            />
            <input
              type=" Button" 
              value="Update course"
              onClick={handleUpdateCourse}
              className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-200"
            />
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setcourseImg(e.target.files[0])}
              className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      )}



      {/* Delete courses  */}

      {activeTrack!== null && (
        <div className="mb-6">
          <button
            onClick={() => {
              if (window.confirm('Are you sure you want to delete this course?')) {
                const newCourses = [...tracks[activeTrack].courses];
                newCourses.splice(activeCourse, 1);
                tracks[activeTrack].courses = newCourses;
                setTracks([...tracks]);
              }
            }}
            className="bg-red-600 text-white p-3 rounded-lg hover:bg-red-700 transition duration-200"
          >
            Delete Course
          </button>
        </div>
      )}

 

      {/* Course Selection for Video Upload */}
      {activeTrack !== null && (
        <div className="mb-6">
          <label htmlFor="course-select" className="block mb-2 text-gray-700 font-medium">
            Select Course to Add Video:
          </label>
          <select
            id="course-select"
            className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={activeCourse}
            onChange={(e) => setActiveCourse(e.target.value)}>
            <option value="">Choose a course</option>
            {activeTrack !== null && tracks[activeTrack]?.courses.map((course, index) => (
              <option key={index} value={course.title}>
                {course.title}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Video Upload */}
      {activeTrack !== null && activeCourse && (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <h3 className="text-lg font-semibold mb-4">Add Video</h3>
          <input
            type="text"
            placeholder="Video Title"
            value={videoTitle}
            onChange={(e) => setVideoTitle(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="url"
            placeholder="Video URL"
            value={videoUrl}
            onChange={handleVideoChange}
            className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-purple-600 text-white p-3 rounded-lg hover:bg-purple-700 transition duration-200"
          >
            {isEditing ? 'Update Video' : 'Add Video'}
          </button>
        </form>
      )}

      {/* Delete video  */}
      {activeTrack !== null && activeCourse && activeVideo !== null && (
         <div className="mb-6">
           <button
             onClick={() => {
               if (window.confirm('Are you sure you want to delete this video?')) {
                 const courseIndex = tracks[activeTrack].courses.findIndex(course => course.title === activeCourse);
                 const newVideos = [...tracks[activeTrack].courses[courseIndex].videos];
                 newVideos.splice(activeVideo, 1);
                 tracks[activeTrack].courses[courseIndex].videos = newVideos;
                 setTracks([...tracks]);
                 setActiveVideo(null); 
               }
             }}
             className="bg-red-600 text-white p-3 rounded-lg hover:bg-red-700 transition duration-200"
           >
             Delete Video
           </button>
         </div>
       )}
             {/* Display Tracks */}
   <div className="mt-6">
        <h3 className="text-lg font-semibold mb-4">Tracks Overview</h3>
        <div className="space-y-4">
          {tracks.map((track, trackIndex) => (
            <div key={trackIndex} className="border border-gray-300 rounded-lg p-4 shadow-sm">
              <div className="flex items-center">
                <img src={track?.trackImage} alt={track?.alt} className="w-16 h-16 rounded-full mr-4" />
                <div>
                  <h4 className="font-bold text-xl">{track?.trackTitle}</h4>
                  <p>{track?.description}</p>
                </div>
              </div>
              <h5 className="mt-4 font-semibold">Courses:</h5>
              {track?.courses && track.courses.length > 0 ? (
                track.courses.map((course, courseIndex) => (
                  <div key={courseIndex} className="border border-gray-300 rounded-lg p-4 mt-2 shadow-sm">
                    <div className="flex items-center">
                      <img src={course?.image}  className="w-16 h-16 rounded-full mr-4" />
                      <div>
                        <h5 className="font-bold text-lg">{course?.title}</h5>
                        <p>{course?.description}</p>
                      </div>
                    </div>
                    <h6 className="mt-2 font-semibold">Videos:</h6>
                    <table className="w-full mt-2 border border-gray-300">
                      <thead>
                        <tr>
                          <th className="border border-gray-300 p-2">ID</th>
                          <th className="border border-gray-300 p-2">Title</th>
                          <th className="border border-gray-300 p-2">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {course.videos.map((video, videoIndex) => (
                          <tr key={videoIndex}>
                            <td className="border border-gray-300 p-2">{video.id}</td>
                            <td className="border border-gray-300 p-2">{video?.videoTitle}</td>
                            <td className="border border-gray-300 p-2">
                              <button
                                onClick={() => handleEditVideo(trackIndex, courseIndex, videoIndex)}
                                className="bg-yellow-400 text-white rounded px-2 py-1 mr-2"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => handleDeleteVideo(trackIndex, courseIndex, videoIndex)}
                                className="bg-red-600 text-white rounded px-2 py-1 "
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ))
              ) : (
                <p>No courses available.</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Tracks;