// learn.js
import { useSearchParams, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { welcomeVideos, htmlVideos, cssVideos, jsVideos,welcomeReact,reactVideos,es6Videos,hooksVideos,routingVideo,formvalidationVideos,reduxVideos, welcomeMobile, kotlinVideos, swiftVideos, firebaseVideos, testVideo, gitVideos, welcomeBeginner, progVideos, codeVideos, proglangVideos, pythonVideos, careerVideos, welcomeJava, javaVideos, javadsVideos, javaprjVideo, welcomeBack, nodeVideos, nodejsVideos, expressVideos, mongoVideo, authVideos, deployVideos } from './Data/courses.js'; // Import data from your constants
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import CoursesNavbar from "../components/Coursesnavbar.jsx";
import VideoPlayer from '../components/Videocourse.jsx';
import useVideoCourse from "./useCourses.js";
import { javaoopVideos } from './Data/courses';
function Learn(){
  const {
    videoUrl,notFound,username,videoIndex,currentCourse,isOpenWelcome,isOpenHtml,isOpenCss,isOpenJs,isOpenRouting,isOpenForm,isOpenRedux,watchedVideos,
    watchedHtml,watchedCss,watchedJs,isCourseCompleted,toggleCertificateMenu,markVideoAsWatched,
    handlePrevVideo,handleNextVideo,getCurrentVideos,handleVideoClick,setIsOpenWelcome,setIsOpenHtml,setIsOpenCss,setIsOpenJs,
    setIsOpenRouting,setIsOpenForm,setIsOpenRedux,setVideoUrl,setVideoIndex,watchedMobile,watchedKotlin,watchedSwift,watchedFirebase,watchedTest,watchedGit,
    handleMarkAsComplete,watchedfront,watchedes6,watchedReact, watchedHooks, watchedRouting, watchedForm, watchedRedux,watchedBAck,watchedauth,
    watcheddeploy,watchedexpress,watchedmongo,watchednodejs,watchedBeginner,watchedprog,watchedcode,watchedproglang,watchedpython,watchedcareer,watchedproblem,watchedJava,watchedjavacourse,watchedjavads,watchedjavaoop,
    watchedjavaprj,watchednode
  } = useVideoCourse();

  const [searchParams, setSearchParams] = useSearchParams();
  const [isNotFound, setIsNotFound] = useState(false);
  const courseId = searchParams.get('courseId');
  const lessonId = searchParams.get('lessonId');

  let currentCourseVideos = [];
  let Videowatched=[];
  switch (courseId) {
    case 'welcome-001':
      currentCourseVideos= welcomeVideos;
      Videowatched=welcomeVideos;
      break;
    case 'html-001':
      currentCourseVideos= htmlVideos;
      Videowatched=watchedHtml;
      break;
    case 'css-001':
      currentCourseVideos= cssVideos;
      Videowatched=watchedCss;
      break;
    case 'js-001':
      currentCourseVideos= jsVideos;
      Videowatched=watchedJs;
      break;
    /////
    case 'welcomereact-002':
      currentCourseVideos= welcomeReact;
      Videowatched=watchedfront;
      break;
    case 'es6-001':
      currentCourseVideos= es6Videos;
      Videowatched=watchedes6;
      break;
    case 'react-001':
      currentCourseVideos= reactVideos;
      Videowatched=watchedReact;
      break;
    case 'hooks-001':
      currentCourseVideos= hooksVideos;
      Videowatched=watchedHooks;
      break;
    case 'routing-001':
      currentCourseVideos= routingVideo;
      Videowatched=watchedRouting;
      break
    case 'formvalidation-001':
      currentCourseVideos= formvalidationVideos;
      Videowatched=watchedForm;
      break;
    case 'redux-001':
      currentCourseVideos= reduxVideos;
      Videowatched=watchedRedux;
      break;
      /////
      case 'welcomemobile-003':
        currentCourseVideos= welcomeMobile;
        Videowatched=watchedMobile;
        break;
      case 'kotlin-001':
        currentCourseVideos= kotlinVideos;
        Videowatched=watchedKotlin;
        break;
      case 'swift-001':
        currentCourseVideos= swiftVideos;
        Videowatched=watchedSwift;
        break;
      case 'firebase-001':
        currentCourseVideos= firebaseVideos;
        Videowatched=watchedFirebase;
        break
      case 'test-001':
        currentCourseVideos= testVideo;
        Videowatched=watchedTest;
        break;
      case 'git-001':
        currentCourseVideos= gitVideos;
        Videowatched=watchedGit;
        break;
        //////
        case 'welcomebeginner-006':
          currentCourseVideos= welcomeBeginner;
          Videowatched=watchedBeginner;
          break;
        case 'programming-001':
          currentCourseVideos= progVideos;
          Videowatched=watchedprog;
          break;
        case 'coding-001':
          currentCourseVideos= codeVideos;
          Videowatched=watchedcode;
          break;
        case 'proglang-001':
          currentCourseVideos= proglangVideos;
          Videowatched=watchedproglang;
          break
        case 'python-001':
          currentCourseVideos= pythonVideos;
          Videowatched=watchedpython;
          break;
        case 'career-001':
          currentCourseVideos= careerVideos;
          Videowatched=watchedcareer;
          break;
          //////
          case 'welcomejava-005':
            currentCourseVideos= welcomeJava;
            Videowatched=watchedJava;
            break;
          case 'java-001':
            currentCourseVideos= javaVideos;
            Videowatched=watchedjavacourse;
            break;
          case 'javaoop-001':
            currentCourseVideos= javaoopVideos;
            Videowatched=watchedjavaoop;
            break
          case 'javads-001':
            currentCourseVideos= javadsVideos;
            Videowatched=watchedjavads;
            break;
          case 'javaprj-001':
            currentCourseVideos= javaprjVideo;
            Videowatched=javaprjVideo;
            break;
            /////
            case 'welcomeback-004':
              currentCourseVideos= welcomeBack;
              Videowatched=watchedBAck;
              break;
            case 'node-001':
              currentCourseVideos= nodeVideos;
              Videowatched=watchednode;
              break;
              case 'nodejs-001':
                currentCourseVideos= nodejsVideos;
                Videowatched=watchednodejs;
                break;
              case 'express-001':
                currentCourseVideos= expressVideos;
                Videowatched=watchedexpress;
                break;
              case 'mongo-001':
                currentCourseVideos= mongoVideo;
                Videowatched=watchedmongo;
                break
              case 'auth-001':
                currentCourseVideos= authVideos;
                Videowatched=watchedauth;
                break;
              case 'deploy-001':
                currentCourseVideos= deployVideos;
                Videowatched=watcheddeploy;
                break;
    default:
      return [];
  }

  // Find the current video based on lessonId
  const currentVideoIndex = currentCourseVideos.findIndex(video => video.lessonId === lessonId);
  const currentVideo = currentCourseVideos[currentVideoIndex];
  useEffect(() => {
    if (currentVideo) {
      setVideoUrl(currentVideo.url); // Update video URL for the main content
      setVideoIndex(currentVideoIndex); // Update the current video index
    } else {
      setIsNotFound(true); // Invalid lessonId triggers 404
    }
  }, [courseId, lessonId, currentVideo, setVideoUrl, setVideoIndex]);

  if (isNotFound) {
    return <Navigate to="/404" />;
  }
  // Handle lesson selection from sidebar
  const onLessonSelect = (course, index) => {
    handleVideoClick(course, index); // Handles video click
    setSearchParams({ courseId: courseId, lessonId: currentCourseVideos[index].lessonId });    
  };
  //handle prev,next-->to change title in main and search params
    // Handle the Next video functionality
    const handleNext = () => {
      if (videoIndex < currentCourseVideos.length - 1) {
        const newIndex = videoIndex + 1;
        const nextVideo = currentCourseVideos[newIndex];
        setVideoUrl(nextVideo.url);
        setVideoIndex(newIndex);
        markVideoAsWatched(currentCourse, newIndex);
        setSearchParams({ courseId: courseId, lessonId: nextVideo.lessonId });
      }
    };
  
    // Handle the Previous video functionality
    const handlePrev = () => {
      if (videoIndex > 0) {
        const newIndex = videoIndex - 1;
        const prevVideo = currentCourseVideos[newIndex];
        setVideoUrl(prevVideo.url);
        setVideoIndex(newIndex);
        markVideoAsWatched(currentCourse, newIndex);
        setSearchParams({ courseId: courseId, lessonId: prevVideo.lessonId });
      }
    };
  return(
<div className="flex header-course">
      {/* Top Navbar for next, prev, and user info */}
      <CoursesNavbar  username={username} handlePrevVideo={handlePrev} handleNextVideo={handleNext}/>
       {/* Sidebar */}
       <div className="h-screen bg-white text-gray-600 w-68  flex flex-col mt-16">
        <div className="flex items-center justify-center h-16 bg-white border-b-2 border-t-2">
          <h1 className="text-xl text-customBronze p-4">current course</h1>
        </div>
        {/* Sidebar showing only the lessons for the selected course */}
        <nav className="flex-1 px-4 py-6">
          <ul className="space-y-2">
            {currentCourseVideos.map((video, index) => (
              <li key={index} className="flex">
                <button
                  onClick={event=>{ handleVideoClick(currentCourse, index); markVideoAsWatched(currentCourse, index); onLessonSelect(currentCourse, index)}}
                  className="block w-full text-gray-400 text-left px-4 py-2 hover:bg-gray-200 rounded">
                  {video.title}
                </button>
                {Videowatched[index] && (
                  <span className="text-customGold flex items-center">
                    <FontAwesomeIcon icon={faSquareCheck} /> {/* Check icon */}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </nav>
        {/* Sidebar Footer */}
        <div className="bg-gray-300 p-4">
          <p className="text-sm text-gray-600">© 2024 Frontend Track</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="main flex-1 bg-gray-100 p-6 mt-16 justify-center">
        <h2 className="text-2xl font-bold mb-4 text-center text-customBronze pt-2">
          {currentVideo?.title || 'No video selected'}
        </h2>
        <VideoPlayer videoUrl={videoUrl} />
    </div>
    </div>
  );
}
export default Learn;
