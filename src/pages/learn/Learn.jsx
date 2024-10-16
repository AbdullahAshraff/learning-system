import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import CoursesNavbar from '../../components/LearnNavBar.jsx';
import VideoPlayer from '../../components/LearnVideoPlayer.jsx';
import useVideoCourse from '../../hooks/useCourses.js';
import './learn.css';
import '../tracks-list/page.css'

function Learn() {
  const {
    videoUrl,
    username,
    videoIndex,
    handleVideoClick,
    markVideoAsWatched,
    setVideoUrl,
    setVideoIndex,
    watchedVideos,
  } = useVideoCourse();

  const [URLSearchParams, setURLsearch] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);
  const [tracks, setTracks] = useState([]);
  const [lessons, setLessons] = useState([]);
  const [isNotFound, setIsNotFound] = useState(false);

  const courseId = URLSearchParams.get('courseId');
  const lessonId = URLSearchParams.get('lessonId');

  // Fetch course and lesson data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const courseResponse = await fetch('https://basatha-khaki.vercel.app/api/v1/courses');
        const lessonResponse = await fetch('https://basatha-khaki.vercel.app/api/v1/lessions');
        const trackResponse = await fetch('https://basatha-khaki.vercel.app/api/v1/trackes');

        if (!courseResponse.ok || !lessonResponse.ok || !trackResponse.ok) {
          throw new Error('Failed to fetch data.');
        }

        const { data: coursesData } = await courseResponse.json();
        const { data: lessonsData } = await lessonResponse.json();
        const { data: tracksData } = await trackResponse.json();

        setCourses(coursesData);
        setLessons(lessonsData);
        setTracks(tracksData);

        const currentCourse = coursesData.find(c => c._id === courseId);
        const currentLesson = currentCourse?.lessons.find(lesson => lesson._id === lessonId);

        if (currentLesson) {
          setVideoUrl(currentLesson.videoUrl);
          setVideoIndex(currentCourse.lessons.indexOf(currentLesson));
        } else {
          setIsNotFound(true);
        }
      } catch (err) {
        console.error(err);
        setIsNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [courseId, lessonId, setVideoUrl, setVideoIndex]);

  const onLessonSelect = (course, index) => {
    handleVideoClick(course, index);
    markVideoAsWatched(course, index);
    URLSearchParams.set('courseId', course._id);
    URLSearchParams.set('lessonId', course.lessons[index]._id);
  };

  // Current course videos
  const currentCourseVideos = courses.find(course => course._id === courseId)?.lessons || [];

  // Handle next video functionality
  const handleNext = () => {
    if (videoIndex < currentCourseVideos.length - 1) {
      const newIndex = videoIndex + 1;
      const nextVideo = currentCourseVideos[newIndex];

      if (nextVideo) {
        setVideoUrl(nextVideo.videoUrl);
        setVideoIndex(newIndex);
        markVideoAsWatched(newIndex);
        setURLsearch({ courseId, lessonId: nextVideo._id });
      }
    }
  };

  // Handle previous video functionality
  const handlePrev = () => {
    if (videoIndex > 0) {
      const newIndex = videoIndex - 1;
      const prevVideo = currentCourseVideos[newIndex];

      if (prevVideo) {
        setVideoUrl(prevVideo.videoUrl);
        setVideoIndex(newIndex);
        markVideoAsWatched(newIndex);
        setURLsearch({ courseId, lessonId: prevVideo._id });
      }
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="spinner"></div>
      </div>
    );
  }
  if (isNotFound) return <p>Video not found.</p>;

  return (
    <div className="flex header-course">
      {/* Top Navbar */}
      <CoursesNavbar
        username={username}
        handlePrevVideo={handlePrev}
        handleNextVideo={handleNext}
      />
      {/* Sidebar */}
      <div className="h-screen bg-white text-gray-600 w-68 flex flex-col mt-16">
        <div className="flex items-center justify-center h-16 bg-white border-b-2 border-t-2">
          <h1 className="text-xl text-customBronze p-4">
            {courses.find(c => c._id === courseId)?.title}
          </h1>
        </div>
        <nav className="flex-1 px-4 py-6">
          <ul className="space-y-2">
            {currentCourseVideos.map((lesson, index) => (
              <li key={lesson._id} className="flex">
                <button
                  onClick={() => onLessonSelect(courses.find(c => c._id === courseId), index)}
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
            ))}
          </ul>
        </nav>
      </div>
      {/* Main Content */}
      <div className="main flex-1 bg-gray-100 p-6 mt-16 justify-center">
        <h2 className="text-2xl font-bold mb-4 text-center text-customBronze pt-2">
          {currentCourseVideos[videoIndex]?.videoTitle || 'No video selected'}
        </h2>
        <VideoPlayer videoUrl={videoUrl} />
      </div>
    </div>
  );
}

export default Learn;
