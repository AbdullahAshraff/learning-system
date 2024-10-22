import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axiosInstance from '../../lib/axiosInstance'; // Ensure you import your Axios instance
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import CoursesNavbar from '../../components/LearnNavBar.jsx';
import VideoPlayer from '../../components/LearnVideoPlayer.jsx';
import './learn.css';

function Learn() {
  const [URLSearchParams, setURLsearch] = useSearchParams();
  const [courseId, setCourseId] = useState(URLSearchParams.get('courseId'));
  const [lessonId, setLessonId] = useState(URLSearchParams.get('lessonId'));
  const [currentCourse, setCurrentCourse] = useState(null);
  const [lessons, setLessons] = useState([]);
  const [videoUrl, setVideoUrl] = useState('');
  const [videoIndex, setVideoIndex] = useState(0);
  const [watchedVideos, setWatchedVideos] = useState([]);

  // Fetch course data and lessons based on courseId
  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const courseResponse = await axiosInstance.get(`/courses/${courseId}`);
        console.log('Course Data:', courseResponse.data); // Log course data

        setCurrentCourse(courseResponse.data.data); // Assuming the correct path is data.data

        const lessonsResponse = await axiosInstance.get('/lessions', {
          params: { courseId: courseId },
        });
        console.log('Lessons Data:', lessonsResponse.data); // Log lessons data

        // Set lessons data
        if (lessonsResponse.data.data && Array.isArray(lessonsResponse.data.data)) {
          setLessons(lessonsResponse.data.data); // Assuming lessons data is in data.data
        } else {
          console.warn('No lessons found for this course.');
          setLessons([]); // Set to empty if no lessons found
        }
        // Check if lessonId is defined in the URL and fetch initial video URL
        const initialLesson = lessonsResponse.data.data.find(lesson => lesson._id === lessonId);
        
        if (initialLesson) {
          setVideoUrl(initialLesson.videoUrl);
          setVideoIndex(lessonsResponse.data.data.indexOf(initialLesson));
        } else {
          // Fallback if lessonId is undefined or doesn't match any lessons
          const firstLesson = lessonsResponse.data.data[0];
          if (firstLesson) {
            setLessonId(firstLesson._id); // Set lessonId to the first lesson's ID
            setVideoUrl(firstLesson.videoUrl);
            setVideoIndex(0);
            setURLsearch({ courseId, lessonId: firstLesson._id }); // Update URL
          } else {
            setVideoUrl('');
            setVideoIndex(0);
          }
        }
      } catch (error) {
        console.error('Failed to fetch course or lessons', error);
      }
    };

    if (courseId) {
      fetchCourseData();
    }
  }, [courseId, lessonId]);

  // Handle lesson selection
  const onLessonSelect = (index) => {
    const selectedLesson = lessons[index];
    if (selectedLesson) {
      setVideoUrl(selectedLesson.videoUrl);
      setVideoIndex(index);
      setLessonId(selectedLesson._id); // Set the lessonId when selecting a lesson
      setURLsearch({ courseId, lessonId: selectedLesson._id }); // Update URL search params
    }
  };

  return (
    <div className="flex header-course">
      <CoursesNavbar />
      <div className="h-screen bg-white text-gray-600 w-68 flex flex-col mt-16">
        <div className="flex items-center justify-center h-16 bg-white border-b-2 border-t-2">
          <h1 className="text-xl text-customBronze p-4">
            {currentCourse?.title || 'Course Title'}
          </h1>
        </div>
        <nav className="flex-1 px-4 py-6">
          <ul className="space-y-2">
            {lessons.length === 0 ? (
              <li className="text-gray-500">No lessons available for this course.</li>
            ) : (
              lessons.map((lesson, index) => (
                <li key={lesson._id} className="flex">
                  <button
                    onClick={() => onLessonSelect(index)}
                    className="block w-full text-gray-400 text-left px-4 py-2 hover:bg-gray-200 rounded"
                  >
                    {lesson.videoTitle}
                  </button>
                  {watchedVideos.includes(index) && (
                    <span className="text-customGold flex items-center">
                      <FontAwesomeIcon icon={faSquareCheck} />
                    </span>
                  )}
                </li>
              ))
            )}
          </ul>
        </nav>
      </div>
      <div className="main flex-1 bg-gray-100 p-6 mt-16 justify-center">
        <h2 className="text-2xl font-bold mb-4 text-center text-customBronze pt-2">
          {lessons[videoIndex]?.videoTitle || 'No video selected'}
        </h2>
        <VideoPlayer videoUrl={videoUrl} />
      </div>
    </div>
  );
}

export default Learn;
