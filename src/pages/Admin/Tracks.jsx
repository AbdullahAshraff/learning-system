import { useState } from 'react';

const Tracks = () => {
  const [tracks, setTracks] = useState([]);
  const [trackName, setTrackName] = useState('');
  const [trackImage, setTrackImage] = useState(null);
  const [trackDescription, setTrackDescription] = useState('');
  const [trackAlt, setTrackAlt] = useState('');
  const [activeTrack, setActiveTrack] = useState(null);
  const [activeCourse, setActiveCourse] = useState('');
  const [courseTitle, setCourseTitle] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [courseImage, setCourseImage] = useState(null);
  const [courseAlt, setCourseAlt] = useState('');
  const [videoTitle, setVideoTitle] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editVideoIndex, setEditVideoIndex] = useState(null);

  const handleAddTrack = () => {
    if (trackName && trackImage) {
      const newTrack = {
        name: trackName,
        image: URL.createObjectURL(trackImage),
        description: trackDescription,
        alt: trackAlt,
        courses: [],
      };
      setTracks([...tracks, newTrack]);
      setTrackName('');
      setTrackImage(null);
      setTrackDescription('');
      setTrackAlt('');
    }
  };

  const handleAddCourse = () => {
    if (activeTrack !== null && courseTitle && courseImage) {
      const newTracks = [...tracks];
      newTracks[activeTrack].courses.push({
        title: courseTitle,
        description: courseDescription,
        image: URL.createObjectURL(courseImage),
        alt: courseAlt,
        videos: [],
      });
      setTracks(newTracks);
      setCourseTitle('');
      setCourseDescription('');
      setCourseImage(null);
      setCourseAlt('');
    }
  };

  const handleVideoChange = (event) => {
    setVideoUrl(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTracks = [...tracks];

    if (isEditing && editVideoIndex !== null) {
      const courseIndex = newTracks[activeTrack].courses.findIndex(course => course.title === activeCourse);
      newTracks[activeTrack].courses[courseIndex].videos[editVideoIndex] = { id: editVideoIndex + 1, title: videoTitle, url: videoUrl };
    } else {
      if (activeTrack !== null && activeCourse) {
        const courseIndex = newTracks[activeTrack].courses.findIndex(course => course.title === activeCourse);
        const newVideo = { id: newTracks[activeTrack].courses[courseIndex].videos.length + 1, title: videoTitle, url: videoUrl };
        newTracks[activeTrack].courses[courseIndex].videos.push(newVideo);
      }
    }

    setTracks(newTracks);
    setVideoTitle('');
    setVideoUrl('');
    setIsEditing(false);
    setEditVideoIndex(null);
  };

  const handleDeleteVideo = (trackIndex, courseIndex, videoIndex) => {
    const newTracks = [...tracks];
    newTracks[trackIndex].courses[courseIndex].videos.splice(videoIndex, 1);
    setTracks(newTracks);
  };

  const handleEditVideo = (trackIndex, courseIndex, videoIndex) => {
    const videoToEdit = tracks[trackIndex].courses[courseIndex].videos[videoIndex];
    setVideoTitle(videoToEdit.title);
    setVideoUrl(videoToEdit.url);
    setIsEditing(true);
    setEditVideoIndex(videoIndex);
  };

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
            value={trackName}
            onChange={(e) => setTrackName(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Track Description"
            value={trackDescription}
            onChange={(e) => setTrackDescription(e.target.value)}
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
            value={trackAlt}
            onChange={(e) => setTrackAlt(e.target.value)}
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
            setActiveTrack(e.target.value);
            setActiveCourse('');
          }}
        >
          <option value="">Choose a track</option>
          {tracks.map((track, index) => (
            <option key={index} value={index}>
              {track.name}
            </option>
          ))}
        </select>
      </div>
{/* Add Course */}
{activeTrack !== null && (
  <div className="mb-6">
    <h3 className="text-lg font-semibold mb-4">Add Course</h3>
    <div className="flex flex-col space-y-4">
      <input
        type="text"
        placeholder="Course Title"
        value={courseTitle}
        onChange={(e) => setCourseTitle(e.target.value)}
        className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <textarea
        placeholder="Course Description"
        value={courseDescription}
        onChange={(e) => setCourseDescription(e.target.value)}
        className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows="3"
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setCourseImage(e.target.files[0])}
        className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        placeholder="Image Alt Text"
        value={courseAlt}
        onChange={(e) => setCourseAlt(e.target.value)}
        className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Instructor Name */}
      <input
        type="text"
        placeholder="Instructor Name"
        className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => setInstructorName(e.target.value)}
      />

      {/* Instructor Job */}
      <input
        type="text"
        placeholder="Instructor Job"
        className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => setInstructorJob(e.target.value)}
      />

      {/* Instructor Image */}
      <input
        type="file"
        accept="image/*"
        className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => setInstructorImage(e.target.files[0])}
      />

      {/* Instructor Social Media Links */}
      <input
        type="text"
        placeholder="Instructor Social Media Links"
        className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => setInstructorSocialMedia(e.target.value)}
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
            onChange={(e) => setActiveCourse(e.target.value)}
          >
            <option value="">Choose a course</option>
            {activeTrack !== null && tracks[activeTrack].courses.map((course, index) => (
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

      {/* Display Tracks */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-4">Tracks Overview</h3>
        <div className="space-y-4">
          {tracks.map((track, trackIndex) => (
            <div key={trackIndex} className="border border-gray-300 rounded-lg p-4 shadow-sm">
              <div className="flex items-center">
                <img src={track.image} alt={track.alt} className="w-16 h-16 rounded-full mr-4" />
                <div>
                  <h4 className="font-bold text-xl">{track.name}</h4>
                  <p>{track.description}</p>
                </div>
              </div>
              <h5 className="mt-4 font-semibold">Courses:</h5>
              {track.courses.length > 0 ? (
                track.courses.map((course, courseIndex) => (
                  <div key={courseIndex} className="border border-gray-300 rounded-lg p-4 mt-2 shadow-sm">
                    <div className="flex items-center">
                      <img src={course.image} alt={course.alt} className="w-16 h-16 rounded-full mr-4" />
                      <div>
                        <h5 className="font-bold text-lg">{course.title}</h5>
                        <p>{course.description}</p>
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
                            <td className="border border-gray-300 p-2">{video.title}</td>
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
