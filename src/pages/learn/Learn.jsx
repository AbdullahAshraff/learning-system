import { useSearchParams,useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import coursesList from '../../constants/courses.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import CoursesNavbar from '../../components/LearnNavBar.jsx';
import VideoPlayer from '../../components/LearnVideoPlayer.jsx';
import useVideoCourse from '../../hooks/useCourses.js';
import './learn.css';

function Learn() {
  const {
    videoUrl,
    notFound,
    username,
    videoIndex,
    handleVideoClick,
    markVideoAsWatched,
    setVideoUrl,
    setVideoIndex,
    watchedVideos,
  } = useVideoCourse();

  const [URLSearchParams, setURLsearch] = useSearchParams();
  const [isNotFound, setIsNotFound] = useState(false);
  const navigate = useNavigate();
  const courseId = URLSearchParams.get('courseId');
  const lessonId = URLSearchParams.get('lessonId');

  const currentCourse = coursesList.find(c => c.id === courseId);
  const currentLesson = currentCourse?.lessons.find(
    lesson => lesson.lessonId === lessonId
  );

  useEffect(() => {
    if (currentLesson) {
      setVideoUrl(currentLesson.url); // Set the video URL
      setVideoIndex(currentCourse.lessons.indexOf(currentLesson)); // Set the current video index
    } else {
      setIsNotFound(true); // Set not found if lesson doesn't exist
    }
  }, [currentLesson, currentCourse, setVideoUrl, setVideoIndex]);
  const onLessonSelect = (course, index) => {
    handleVideoClick(course, index); // Handles video click
    markVideoAsWatched(course, index); // Marks video as watched
    URLSearchParams.set('courseId', course.id); // Update URL search params
    URLSearchParams.set('lessonId', course.lessons[index].lessonId); // Update lesson ID
  };
  // Assuming currentCourseVideos is derived from your course's lessons
  const currentCourseVideos =
    coursesList.find(course => course.id === courseId)?.lessons || [];

  // Handle the Next video functionality
  const handleNext = () => {
    if (videoIndex < currentCourseVideos.length - 1) {
      const newIndex = videoIndex + 1;
      const nextVideo = currentCourseVideos[newIndex];

      if (nextVideo) {
        setVideoUrl(nextVideo.url);
        setVideoIndex(newIndex);
        markVideoAsWatched(newIndex);
        setURLsearch({ courseId: courseId, lessonId: nextVideo.lessonId });
      }
    } else {
      console.warn('No more videos to navigate to.');
    }
  };

  // Handle the Previous video functionality
  const handlePrev = () => {
    if (videoIndex > 0) {
      const newIndex = videoIndex - 1;
      const prevVideo = currentCourseVideos[newIndex];

      if (prevVideo) {
        setVideoUrl(prevVideo.url);
        setVideoIndex(newIndex);
        markVideoAsWatched(newIndex);
        setURLsearch({ courseId: courseId, lessonId: prevVideo.lessonId });
      }
    } else {
      console.warn('You are already at the first video.');
    }
  };
  const goToQuiz = () => {
    navigate('/quizes'); // Navigate to the quiz page
  };

  return (
    <div className="flex header-course" id='learn-page'>
      {/* Top Navbar for next, prev, and user info */}
      <CoursesNavbar
        username={username}
        handlePrevVideo={handlePrev}
        handleNextVideo={handleNext}
      />
      {/* Sidebar */}
      <div className="h-screen bg-white text-gray-600 w-68 flex flex-col mt-16">
        <div className="flex items-center justify-center h-16 bg-white border-b-2 border-t-2">
          <h1 className="text-xl text-customBronze p-4">
            {currentCourse?.title}
          </h1>
        </div>
        {/* Sidebar showing only the lessons for the selected course */}
        <nav className="flex-1 px-4 py-6">
          <ul className="space-y-2">
            {currentCourse?.lessons.map((lesson, index) => (
              <li key={index} className="flex">
                <button
                  onClick={() => onLessonSelect(currentCourse, index)}
                  className="block w-full text-gray-400 text-left px-4 py-2 hover:bg-gray-200 rounded"
                >
                  {lesson.title}
                </button>
                {watchedVideos.includes(index) && ( // Check if video is watched
                  <span className="text-customGold flex items-center">
                    <FontAwesomeIcon icon={faSquareCheck} />
                  </span>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <button
          onClick={goToQuiz}
          className="m-4 mt-auto bg-customGold hover:bg-customBronze text-white py-2 px-4 rounded-lg shadow-md transition-all duration-300 ease-in-out">
          Go to Quiz
        </button>
      </div>
      {/* Main Content */}
      <div className="main flex-1 bg-gray-100 p-6 mt-16 justify-center">
        <h2 className="text-2xl font-bold mb-4 text-center text-customBronze pt-2">
          {currentLesson?.title || 'No video selected'}
        </h2>
        <VideoPlayer videoUrl={videoUrl} />
      </div>
    </div>
  );
}

export default Learn;
