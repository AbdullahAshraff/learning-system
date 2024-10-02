import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
// Import your video arrays
import coursesList from '../constants/courses.js';
function useVideoCourse(courseId, lessonId) {
    const [URLSearchParams,setURLsearch] = useSearchParams();
  const [videoUrl, setVideoUrl] = useState('');
  const [notFound, setNotFound] = useState(false);
  const [videoIndex, setVideoIndex] = useState(null);
  const [watchedVideos, setWatchedVideos] = useState([]);

  const [isOpenWelcome, setIsOpenWelcome] = useState(false);
  const [isOpenHtml, setIsOpenHtml] = useState(false);
  const [isOpenCss, setIsOpenCss] = useState(false);
  const [isOpenJs, setIsOpenJs] = useState(false);
  const [isOpenRouting, setIsOpenRouting] = useState(false);
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [isOpenRedux, setIsOpenRedux] = useState(false);

    const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const [isCourseCompleted, setIsCourseCompleted] = useState(false);

  const currentCourseVideos = coursesList.find(course => course.id === courseId)?.lessons || [];

  useEffect(() => {
    const currentCourse = coursesList.find(course => course.id === courseId);

    if (currentCourse) {
      const currentLesson = currentCourse.lessons.find(lesson => lesson.lessonId === lessonId);
      
      if (currentLesson) {
        setVideoUrl(currentLesson.url);
        setVideoIndex(currentCourse.lessons.indexOf(currentLesson));
      } else {
        setNotFound(true); // Lesson not found
      }
    } else {
      setNotFound(true); // Course not found
    }
  }, [courseId, lessonId]);

  // Handle video click
  const handleVideoClick = (course, index) => {
    const newLesson = course.lessons[index];
  
    // Check if the lesson exists
    if (newLesson) {
      setVideoUrl(newLesson.url);
      setVideoIndex(index);
      
      // Mark the video as watched
      markVideoAsWatched(index); 
  
      // Update search parameters to reflect the current course and lesson
      setURLsearch({ courseId: course.id, lessonId: newLesson.lessonId });
    } else {
      console.warn("Selected lesson does not exist.");
    }
  };

  const handleVideoChange = (indexChange) => {
    const currentCourse = coursesList.find(course => course.id === courseId);
    const newVideoIndex = videoIndex + indexChange; // Calculate the new index
    if (currentCourse) {
      // Ensure the new index is within the bounds of the lessons array
      if (newVideoIndex >= 0 && newVideoIndex < currentCourse.lessons.length) {
        const newLesson = currentCourse.lessons[newVideoIndex];
        setVideoUrl(newLesson.url);
        setVideoIndex(newVideoIndex);
        // markVideoAsWatched(); // Optionally mark as watched
      } else {
        console.warn("Reached the boundary of the lesson list");
      }
    } else {
      console.error("Current course is not found");
    }
  };
  const markVideoAsWatched = (index) => {
    if (index !== null && !watchedVideos.includes(index)) {
      setWatchedVideos(prev => [...prev, index]);
    }
  };
  const handlePrevVideo = () => {
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
    console.warn("You are already at the first video.");
  }
  };
  
  const handleNextVideo = () => {
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
      console.warn("No more videos to navigate to.");
    }
  };

  // certificate 
    const toggleCertificateMenu = () => {
    if (isCourseCompleted) {
        setIsMenuExpanded(true); // Toggle menu expansion
    } else {
      alert("Complete the course to access this section.");
    }
  };
  return {
    videoUrl,
    notFound,
    videoIndex,
    isOpenWelcome,
    isOpenHtml,
    isOpenCss,
    isOpenJs,
    isOpenForm,
    isOpenRedux,
    isOpenRouting,
    watchedVideos,
    handleVideoClick, // Return this new function
    handleVideoChange,
    handlePrevVideo,
    handleNextVideo,
    markVideoAsWatched,
    setIsOpenWelcome,
    setVideoUrl,
    setVideoIndex,
    setIsOpenHtml,
    setIsOpenCss,
    setIsOpenJs,
    setIsOpenRedux,
    setIsOpenRouting,
    setIsOpenForm,
    setIsMenuExpanded,
    isMenuExpanded,
    toggleCertificateMenu,
    setNotFound,
  };
}

export default useVideoCourse;

