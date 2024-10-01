import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
// Import your video arrays
import { welcomeVideos, htmlVideos, cssVideos,jsVideos
  ,welcomeMobile,kotlinVideos,swiftVideos,firebaseVideos,gitVideos,testVideo,
  welcomeReact, reactVideos, es6Videos, hooksVideos, routingVideo, formvalidationVideos, reduxVideos,
  welcomeBeginner, progVideos, codeVideos, proglangVideos, pythonVideos, problemsVideos, careerVideos,
  welcomeJava, javaVideos, javaoopVideos, javadsVideos, javaprjVideo,
  welcomeBack, nodeVideos, nodejsVideos, expressVideos, mongoVideo, authVideos, deployVideos
 } from './Data/courses.js'; // Adjust the path as necessary
const useVideoCourse = () => {
  const [videoUrl, setVideoUrl] = useState(welcomeVideos[0].url); // Default video
  const [videoIndex, setVideoIndex] = useState(0); // Track the index of the current video
  const [currentCourse, setCurrentCourse] = useState("welcome"); // Track current course
  const [notFound, setNotFound] = useState(false); // Track if a course or lesson is not found

  const [isOpenWelcome, setIsOpenWelcome] = useState(false);
  const [isOpenHtml, setIsOpenHtml] = useState(false);
  const [isOpenCss, setIsOpenCss] = useState(false);
  const [isOpenJs, setIsOpenJs] = useState(false);
  const [isOpenRouting, setIsOpenRouting] = useState(false);
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [isOpenRedux, setIsOpenRedux] = useState(false);
////////////////////////////front//////
  const [watchedVideos, setWatchedVideos] = useState(Array(welcomeVideos.length).fill(false));
  const [watchedHtml, setWatchedHtml] = useState(Array(htmlVideos.length).fill(false));
  const [watchedCss, setWatchedCss] = useState(Array(cssVideos.length).fill(false));
  const [watchedJs, setWatchedJs] = useState(Array(jsVideos.length).fill(false));
////////////////////////mobile/////////
  const [watchedMobile, setWatchedMobile] = useState(Array(welcomeMobile.length).fill(false));
  const [watchedKotlin, setWatchedKotlin] = useState(Array(kotlinVideos.length).fill(false));
  const [watchedSwift, setWatchedSwift] = useState(Array(swiftVideos.length).fill(false));
  const [watchedFirebase, setWatchedFirebase] = useState(Array(firebaseVideos.length).fill(false));
  const [watchedTest, setWatchedTest] = useState(Array(testVideo.length).fill(false));
  const [watchedGit, setWatchedGit] = useState(Array(gitVideos.length).fill(false));
///////////////////////////////react///////////
const [watchedfront, setwatchedfront] = useState(Array(welcomeReact.length).fill(false));
const [watchedes6, setwatchedes6] = useState(Array(es6Videos.length).fill(false));
const [watchedReact, setwatchedReact] = useState(Array(reactVideos.length).fill(false));
const [watchedHooks, setwatchedHooks] = useState(Array(hooksVideos.length).fill(false));
const [watchedRouting, setWatchedRouting] = useState(Array(routingVideo.length).fill(false));
const [watchedForm, setWatchedForm] = useState(Array(formvalidationVideos.length).fill(false));
const [watchedRedux, setWatchedRedux] = useState(Array(reduxVideos.length).fill(false));
////////////////////begineer//////////
const [watchedBeginner, setwatchedBeginner] = useState(Array(welcomeBeginner.length).fill(false));
const [watchedprog, setWatchedprog] = useState(Array(progVideos.length).fill(false));
const [watchedcode, setWatchedcode] = useState(Array(codeVideos.length).fill(false));
const [watchedproglang, setWatchedproglang] = useState(Array(proglangVideos.length).fill(false));
const [watchedpython, setWatchedpython] = useState(Array(pythonVideos.length).fill(false));
const [watchedproblem, setWatchedproblem] = useState(Array(problemsVideos.length).fill(false));
const [watchedcareer, setWatchedcareer] = useState(Array(careerVideos.length).fill(false));
////////////////////////java////////
const [watchedJava, setwatchedJava] = useState(Array(welcomeJava.length).fill(false));
const [watchedjavacourse, setwatchedjavacourse] = useState(Array(javaVideos.length).fill(false));
const [watchedjavaoop, setwatchedjavaoop] = useState(Array(javaoopVideos.length).fill(false));
const [watchedjavads, setwatchedjavads] = useState(Array(javadsVideos.length).fill(false));
const [watchedjavaprj, setwatchedjavaprj] = useState(Array(javaprjVideo.length).fill(false));
///////////////////back////////
const [watchedBAck, setwatchedBAck] = useState(Array(welcomeBack.length).fill(false));
const [watchednode, setwatchednode] = useState(Array(nodeVideos.length).fill(false));
const [watchednodejs, setwatchednodejs] = useState(Array(nodejsVideos.length).fill(false));
const [watchedexpress, setwatchedexpress] = useState(Array(expressVideos.length).fill(false));
const [watchedmongo, setwatchedmongo] = useState(Array(mongoVideo.length).fill(false));
const [watchedauth, setwatchedauth] = useState(Array(authVideos.length).fill(false));
const [watcheddeploy, setwatcheddeploy] = useState(Array(deployVideos.length).fill(false));
//////
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const [isCourseCompleted, setIsCourseCompleted] = useState(false);

  const location = useLocation();
  const [searchParams] = useSearchParams(); 
  // Function Definitions
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
  const toggleCertificateMenu = () => {
    if (isCourseCompleted) {
        setIsMenuExpanded(true); // Toggle menu expansion
    } else {
      alert("Complete the course to access this section.");
    }
  };

  const markVideoAsWatched = (section, index) => {
    const updateWatchedState = {
      welcome: setWatchedVideos,
      html: setWatchedHtml,
      css: setWatchedCss,
      js: setWatchedJs,
      ////
      welcomemobile: setWatchedMobile,
      kotlin: setWatchedKotlin,
      swift: setWatchedSwift,
      firebase: setWatchedSwift,
      test: setWatchedTest,
      git: setWatchedGit,
      ////
      welcomereact: setwatchedfront,
      es6: setwatchedes6,
      react: setwatchedReact,
      hooks: setwatchedHooks,
      routing: setWatchedRouting,
      form: setWatchedForm,
      redux: setWatchedRedux,
      ////
      welcomejava: setwatchedJava,
      java: setwatchedjavacourse,
      javaoop: setwatchedjavaoop,
      javads: setwatchedjavads,
      javaprj: setwatchedjavaprj,
      ///
      welcomebeginner: setwatchedBeginner,
      programming: setWatchedprog,
      coding: setWatchedcode,
      proglang: setWatchedproglang,
      python: setWatchedpython,
      problems: setWatchedproblem,
      career: setWatchedcareer,
      ////
      welcomeback: setwatchedBAck,
      node: setwatchednode,
      nodejs: setwatchednodejs,
      express: setwatchedexpress,
      mongo: setwatchedmongo,
      auth: setwatchedauth,
      deploy: setwatcheddeploy,
      ////
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
      isAllVideosWatched(watchedJs)&&
      //////
      isAllVideosWatched(watchedMobile) && // All "welcome" videos watched
      isAllVideosWatched(watchedKotlin) && // All "html" videos watched
      isAllVideosWatched(watchedSwift) && // All "css" videos watched
      isAllVideosWatched(watchedFirebase) && // All "js" videos watched
      isAllVideosWatched(watchedTest) && // All "routing" videos watched
      isAllVideosWatched(watchedGit)&&
      //////
      isAllVideosWatched(watchedfront) && // All "welcome" videos watched
      isAllVideosWatched(watchedes6) && // All "html" videos watched
      isAllVideosWatched(watchedReact) && // All "css" videos watched
      isAllVideosWatched(watchedHooks) && // All "js" videos watched
      isAllVideosWatched(watchedRouting) && // All "routing" videos watched
      isAllVideosWatched(watchedForm) && // All "form" videos watched
      isAllVideosWatched(watchedRedux) &&
      /////
      isAllVideosWatched(watchedJava) && // All "welcome" videos watched
      isAllVideosWatched(watchedjavacourse) && // All "html" videos watched
      isAllVideosWatched(watchedjavaoop) && // All "css" videos watched
      isAllVideosWatched(watchedjavads) && // All "js" videos watched
      isAllVideosWatched(watchedjavaprj)&&
      /////
      isAllVideosWatched(watchedBeginner) && // All "welcome" videos watched
      isAllVideosWatched(watchedprog) && // All "html" videos watched
      isAllVideosWatched(watchedcode) && // All "css" videos watched
      isAllVideosWatched(watchedproglang) && // All "js" videos watched
      isAllVideosWatched(watchedpython) && // All "routing" videos watched
      isAllVideosWatched(watchedproblem) && // All "form" videos watched
      isAllVideosWatched(watchedcareer)&&
      /////
      isAllVideosWatched(watchedBAck) && // All "welcome" videos watched
      isAllVideosWatched(watchednode) && // All "html" videos watched
      isAllVideosWatched(nodejsVideos) && // All "css" videos watched
      isAllVideosWatched(watchedexpress) && // All "js" videos watched
      isAllVideosWatched(watchedmongo) && // All "routing" videos watched
      isAllVideosWatched(watchedauth) && // All "form" videos watched
      isAllVideosWatched(watcheddeploy)
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
    ////
    setWatchedMobile(Array(welcomeMobile.length).fill(true));
    setWatchedKotlin(Array(kotlinVideos.length).fill(true));
    setWatchedSwift(Array(swiftVideos.length).fill(true));
    setWatchedFirebase(Array(firebaseVideos.length).fill(true));
    setWatchedTest(Array(testVideo.length).fill(true));
    setWatchedGit(Array(gitVideos.length).fill(true));
    /////
    setwatchedfront(Array(welcomeReact.length).fill(true));
    setwatchedes6(Array(es6Videos.length).fill(true));
    setwatchedReact(Array(reactVideos.length).fill(true));
    setwatchedHooks(Array(hooksVideos.length).fill(true));
    setWatchedRouting(Array(routingVideo.length).fill(true));
    setWatchedForm(Array(formvalidationVideos.length).fill(true));
    setWatchedRedux(Array(reduxVideos.length).fill(true));
    /////
    setwatchedJava(Array(welcomeJava.length).fill(true));
    setwatchedjavacourse(Array(javaVideos.length).fill(true));
    setwatchedjavaoop(Array(javaoopVideos.length).fill(true));
    setwatchedjavads(Array(javadsVideos.length).fill(true));
    setwatchedjavaprj(Array(javaprjVideo.length).fill(true));
    /////
    setwatchedBeginner(Array(watchedBeginner.length).fill(true));
    setWatchedprog(Array(progVideos.length).fill(true));
    setWatchedcode(Array(codeVideos.length).fill(true));
    setWatchedproglang(Array(proglangVideos.length).fill(true));
    setWatchedpython(Array(pythonVideos.length).fill(true));
    setWatchedproblem(Array(problemsVideos.length).fill(true));
    setWatchedcareer(Array(careerVideos.length).fill(true));
    /////
    setwatchedBAck(Array(welcomeBack.length).fill(true));
    setwatchednode(Array(nodeVideos.length).fill(true));
    setwatchednodejs(Array(nodejsVideos.length).fill(true));
    setwatchedexpress(Array(expressVideos.length).fill(true));
    setwatchedmongo(Array(mongoVideo.length).fill(true));
    setwatchedauth(Array(authVideos.length).fill(true));
    setwatcheddeploy(Array(deployVideos.length).fill(true));
    ////
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
      case "html":
        return htmlVideos;
      case "css":
        return cssVideos;
      case "js":
        return jsVideos;
        ///
        case "welcomemobile":
          return welcomeMobile;
      case "kotlin":
          return kotlinVideos;
      case "swift":
          return swiftVideos;
      case "firebase":
          return firebaseVideos;
      case "test":
          return testVideo;
      case "git":
          return gitVideos;
          ///
    case "welcomereact":
        return welcomeReact;
    case "es6":
        return es6Videos;
    case "react":
        return reactVideos;
    case "hooks":
        return hooksVideos;
      case "routing":
        return routingVideo;
      case "form":
        return formvalidationVideos;
      case "redux":
        return reduxVideos;
      ///
      case "welcomejava":
        return welcomeJava;
    case "java":
        return javaVideos;
    case "javaoop":
        return javaoopVideos;
    case "javads":
        return javadsVideos;
      case "javaprj":
        return javaprjVideo;
      ////
      case "welcomebeginner":
        return welcomeBeginner;
      case "programming":
        return progVideos;
      case "coding":
        return codeVideos;
      case "proglang":
        return proglangVideos;
      case "python":
        return pythonVideos;
      case "problems":
        return problemsVideos;
      case "career":
            return careerVideos;
      ////
      case "welcomeback":
        return welcomeBack;
    case "node":
        return nodeVideos;
    case "nodejs":
        return nodejsVideos;
    case "express":
        return expressVideos;
      case "mongo":
        return mongoVideo;
      case "auth":
        return authVideos;
      case "deploy":
        return deployVideos;
      default:
        return [];
    }};
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
    watchedVideos,
    watchedHtml,
    watchedCss,
    watchedJs,
    isMenuExpanded,
    isCourseCompleted,
    notFound,
    setNotFound,
    setVideoUrl,
    setVideoIndex,
    handleVideoClick,
    markVideoAsWatched, 
    setIsOpenWelcome,
    setIsOpenHtml,
    setIsOpenCss,
    setIsOpenJs,
    toggleCertificateMenu,
    handleMarkAsComplete,
    handlePrevVideo,
    handleNextVideo,
    isOpenRouting,
    isOpenForm,
    isOpenRedux,
    setIsOpenRedux,
    ////
    watchedMobile,
    watchedKotlin,
    watchedSwift,
    watchedFirebase,
    watchedTest,
    watchedGit,
    ////
    watchedfront,
    watchedes6,
    watchedReact,
    watchedHooks,
    watchedRouting,
    watchedForm,
    watchedRedux,
    getCurrentVideos,
    setIsOpenRouting,
    setIsOpenForm,
    ////
    watchedJava,
    watchedjavacourse,
    watchedjavads,
    watchedjavaoop,
    watchedjavaprj,
    ////
    watchedBeginner,
    watchedprog,
    watchedcode,
    watchedproglang,
    watchedpython,
    watchedcareer,
    watchedproblem,
    ///
    watchedBAck,
    watchedauth,
    watcheddeploy,
    watchedexpress,
    watchedmongo,
    watchednodejs,
    watchednode,
  };
};
export default useVideoCourse;
