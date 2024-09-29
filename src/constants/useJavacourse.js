import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { welcomeVideos, htmlVideos, cssVideos, jsVideos, routingVideo} from './Data/javaData.js';
const useVideoCourse = () => {
  // State Variables
  const [videoUrl, setVideoUrl] = useState(welcomeVideos[0].url); // Default video
  const [videoIndex, setVideoIndex] = useState(0); // Track the index of the current video
  const [currentCourse, setCurrentCourse] = useState("welcome"); // Track current course
  const [isOpenWelcome, setIsOpenWelcome] = useState(false);
  const [isOpenHtml, setIsOpenHtml] = useState(false);
  const [isOpenCss, setIsOpenCss] = useState(false);
  const [isOpenJs, setIsOpenJs] = useState(false);
  const [isOpenRouting, setIsOpenRouting] = useState(false);

  const [watchedVideos, setWatchedVideos] = useState(Array(welcomeVideos.length).fill(false));
  const [watchedHtml, setWatchedHtml] = useState(Array(htmlVideos.length).fill(false));
  const [watchedCss, setWatchedCss] = useState(Array(cssVideos.length).fill(false));
  const [watchedJs, setWatchedJs] = useState(Array(jsVideos.length).fill(false));
  const [watchedRouting, setWatchedRouting] = useState(Array(routingVideo.length).fill(false));

  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const [isCourseCompleted, setIsCourseCompleted] = useState(false);
  const [notFound, setNotFound] = useState(false); // Track if a course or lesson is not found
  const location = useLocation();
  const [searchParams] = useSearchParams(); 

  useEffect(() => {
    const courseId = searchParams.get('courseId');
    const lessonId = searchParams.get('lessonId');

    if (isValidCourseAndLesson(courseId, lessonId)) {
      const courseType = courseId.split('-')[0];
      const currentVideos = getCurrentVideos(courseType); // Memoize if necessary

      const index = currentVideos.findIndex(video => video.lessonId === lessonId);
      if (index !== -1) {
        setCurrentCourse(courseType);
        setVideoIndex(index);
        setVideoUrl(currentVideos[index].url);
        setNotFound(false);
      } else {
        console.error('Invalid lesson index:', lessonId);
        setNotFound(true);
      }
    } else {
      console.error('Invalid courseId or lessonId:', courseId, lessonId);
      setNotFound(true);
    }
  }, [searchParams, location]);

  const isValidCourseAndLesson = (courseId, lessonId) => {
    return courseId && lessonId;
  };
 

  // Function Definitions
  const toggleCertificateMenu = () => {
    if (isCourseCompleted) {
        setIsMenuExpanded(prev => !prev); // Toggle menu expansion
    } else {
      alert("Complete the course to access this section.");
    }
  };

  const markVideoAsWatched = (section, index) => {
    const updateWatchedState = {
      welcome: setWatchedVideos,
      java: setWatchedHtml,
      javaoop: setWatchedCss,
      javads: setWatchedJs,
      javaprj: setWatchedRouting,
    };

    updateWatchedState[section](prev => {
      const newWatched = [...prev];
      newWatched[index] = true; // Mark the clicked video as watched
      return newWatched;
    });

    const isAllVideosWatched = (watchedState) => watchedState.every(watched => watched);

    // Determine if we should open the certificate menu
    if (
        isAllVideosWatched(watchedVideos) && // All "welcome" videos watched
        isAllVideosWatched(watchedHtml) && // All "html" videos watched
        isAllVideosWatched(watchedCss) && // All "css" videos watched
        isAllVideosWatched(watchedJs) && // All "js" videos watched
        isAllVideosWatched(watchedRouting) // All "routing" videos watched
      ) {
        setIsCourseCompleted(true);
        setIsMenuExpanded(true); // Expand menu when all videos are watched
      }
    };
  const handleMarkAsComplete = () => {
    setWatchedVideos(Array(welcomeVideos.length).fill(true));
    setWatchedHtml(Array(htmlVideos.length).fill(true));
    setWatchedCss(Array(cssVideos.length).fill(true));
    setWatchedJs(Array(jsVideos.length).fill(true));
    setWatchedRouting(Array(routingVideo.length).fill(true));
    setIsCourseCompleted(true);
    setIsMenuExpanded(true); // Expand the menu
  };

  const handlePrevVideo = () => {
    const videos = getCurrentVideos(currentCourse);
    if (videoIndex > 0) {
      const newIndex = videoIndex - 1; // Calculate the new index
      setVideoIndex(newIndex);
      setVideoUrl(videos[newIndex].url);
      markVideoAsWatched(currentCourse, newIndex); // Use the updated index
    }
  };
  
  const handleNextVideo = () => {
    const videos = getCurrentVideos(currentCourse);
    if (videoIndex < videos.length - 1) {
      const newIndex = videoIndex + 1; // Calculate the new index
      setVideoIndex(newIndex);
      setVideoUrl(videos[newIndex].url);
      markVideoAsWatched(currentCourse, newIndex); // Use the updated index
    }
  };

  const getCurrentVideos = (currentCourse) => {
    switch (currentCourse) {
    case "welcome":
        return welcomeVideos;
    case "java":
        return htmlVideos;
    case "javaoop":
        return cssVideos;
    case "javads":
        return jsVideos;
      case "javaprj":
        return routingVideo;
      default:
        return [];
    }
  };

  const handleVideoClick = (course, index) => {
    setCurrentCourse(course);
    const videos = getCurrentVideos(course); // Get videos for the correct course
    setVideoIndex(index);
    setVideoUrl(videos[index].url); // Use the correct video for the course
    markVideoAsWatched(course, index);
  };

  return {
    videoUrl,
    videoIndex,
    currentCourse,
    isOpenWelcome,
    isOpenHtml,
    isOpenCss,
    isOpenJs,
    isOpenRouting,
    watchedVideos,
    watchedHtml,
    watchedCss,
    watchedJs,
    watchedRouting,
    isMenuExpanded,
    isCourseCompleted,
    toggleCertificateMenu,
    markVideoAsWatched,
    handleMarkAsComplete,
    handlePrevVideo,
    handleNextVideo,
    getCurrentVideos,
    handleVideoClick,
    setIsOpenWelcome,
    setIsOpenHtml,
    setIsOpenCss,
    setIsOpenJs,
    setIsOpenRouting,
    notFound,
  };
};

export default useVideoCourse;
