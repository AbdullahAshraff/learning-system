import { AcademicCapIcon, ChevronDownIcon} from "@heroicons/react/24/solid";
import {  Navigate,useSearchParams } from 'react-router-dom';
import { useState,useEffect } from "react"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import coursesList from "../../constants/courses.js";
import useVideoCourse from "../../hooks/useCourses.js";
import CoursesNavbar from "../../components/Learnnavbar.jsx";
import VideoPlayer from "../../components/Learnbvideoplayer.jsx";
function CourseBeginners() {
  const [URLSearchParams, setURLsearch] = useSearchParams();
    const [isNotFound, setIsNotFound] = useState(false);
    const courseId = URLSearchParams.get('courseId');
    const lessonId = URLSearchParams.get('lessonId');
    const course = coursesList.find(course => course.id === courseId);
    const lesson = course ? course.lessons.find(lesson => lesson.lessonId === lessonId) : null;
    const {
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
    } = useVideoCourse(courseId, lessonId);
    useEffect(() => {
      if (!course || !lesson) {
          setIsNotFound(true);
      }
  }, [course, lesson]);

  if (isNotFound) {
      return <Navigate to="/404" />;
  }
    const username = 'Arwa';
    const onLessonSelect = (course, index) => {
        handleVideoClick(course, index);
        markVideoAsWatched(course, index);
        URLSearchParams.set('courseId', course.id);
        URLSearchParams.set('lessonId', course.lessons[index].lessonId);
        setURLsearch(URLSearchParams); // Update the URL search params
    };
  return (
    <div className="flex header-course ">
      {/* Top Navbar next,prev,user */}
      <CoursesNavbar  username={username} handlePrevVideo={handlePrevVideo} handleNextVideo={handleNextVideo}/>
      {/* Sidebar */}
      <div className="h-screen bg-white text-gray-600 w-68 flex flex-col mt-16">
        <div className="flex items-center justify-center h-16 bg-white border-b-2 border-t-2">
          <h1 className="text-xl text-customBronze p-4">For Beginners</h1>
        </div>
        {/* Navigation Links */}
        <nav className="flex-1 px-4 py-6">
          <ul className="space-y-2">
              {/* Expandable Menu */}
              <li>
                <button onClick={()=>setIsOpenWelcome(!isOpenWelcome)} className="flex items-center text-gray-600 px-4 py-2 hover:bg-gray-100 rounded w-full">
                    <AcademicCapIcon className="w-6 h-6 mr-3" />
                    <span className="text-gray-600">Welcome</span>
                    <ChevronDownIcon className={`w-5 h-5 ml-auto ${isOpenWelcome ? "rotate-180" :""}`} />
                </button>
                {isOpenWelcome && (
                    <ul className="mt-2 space-y-1 pl-8">
                        {coursesList[29].lessons.map((video,index) => (
                            <li key={index} className="flex">
                                 <button onClick={() => onLessonSelect(coursesList[29], index)} className="block w-full text-gray-400 text-left px-4 py-2 hover:bg-gray-200 rounded">
                                   {video.title}
                                 </button>
                                 {watchedVideos.includes(index) &&(
                                  <span className="text-customGold flex items-center">
                                  <FontAwesomeIcon icon={faSquareCheck} />{/* Check icon */}
                                  </span>)}
                            </li>))}
                    </ul>)}
            </li>
            <li>
              <button onClick={() => setIsOpenHtml(!isOpenHtml)} className="flex items-center text-gray-600 px-4 py-2 hover:bg-gray-100 rounded w-full">
                <AcademicCapIcon className="w-6 h-6 mr-3" />
                <span>Programming Languages</span>
                <ChevronDownIcon className={`w-5 h-5 ml-auto transition-transform ${isOpenHtml ? "rotate-180" : ""}`} />
              </button>
              {isOpenHtml && (
                <ul className="mt-2 space-y-1 pl-8">
                  {coursesList[30].lessons.map((video, index) => (
                    <li key={index} className="flex">
                      <button
                        onClick={() => onLessonSelect(coursesList[30], index)}
                        className="block w-full text-gray-400 text-left px-4 py-2 hover:bg-gray-200 rounded">
                        {video.title}
                      </button>
                      {watchedVideos.includes(index) && (
                                  <span className="text-customGold flex items-center">
                                  <FontAwesomeIcon icon={faSquareCheck} />{/* Check icon */}
                                  </span>)}
                    </li>))}
                </ul>)}
            </li>
            <li>
              <button onClick={() => setIsOpenCss(!isOpenCss)} className="flex items-center text-gray-600 px-4 py-2 hover:bg-gray-100 rounded w-full">
                <AcademicCapIcon className="w-6 h-6 mr-3" />
                <span>What is Coding?</span>
                <ChevronDownIcon className={`w-5 h-5 ml-auto transition-transform ${isOpenCss ? "rotate-180" : ""}`} />
              </button>
              {isOpenCss && (
                <ul className="mt-2 space-y-1 pl-8">
                  {coursesList[31].map((video, index) => (
                    <li key={index} className="flex">
                      <button
                        onClick={() => onLessonSelect(coursesList[31], index)}
                        className="block w-full text-gray-400 text-left px-4 py-2 hover:bg-gray-200 rounded" >
                        {video.title}
                      </button>
                      {watchedVideos.includes(index) &&(
                                  <span className="text-customGold flex items-center">
                                  <FontAwesomeIcon icon={faSquareCheck} />{/* Check icon */}
                                  </span>)}
                    </li> ))}
                </ul>)}
            </li>
            <li>
              <button onClick={() => setIsOpenJs(!isOpenJs)} className="flex items-center text-gray-600 px-4 py-2 hover:bg-gray-100 rounded w-full">
                <AcademicCapIcon className="w-6 h-6 mr-3" />
                <span>Choosing programming-languages</span>
                <ChevronDownIcon className={`w-5 h-5 ml-auto transition-transform ${isOpenJs ? "rotate-180" : ""}`} />
              </button>
              {isOpenJs && (
                <ul className="mt-2 space-y-1 pl-8">
                  {coursesList[32].lessons.map((video, index) => (
                    <li key={index} className="flex">
                      <button
                        onClick={() => onLessonSelect(coursesList[32], index)}
                        className="block w-full text-gray-400 text-left px-4 py-2 hover:bg-gray-200 rounded">
                        {video.title}
                      </button>
                      {watchedVideos.includes(index) && (
                                  <span className="text-customGold flex items-center">
                                  <FontAwesomeIcon icon={faSquareCheck} />{/* Check icon */}
                                  </span>)}
                    </li> ))}
                </ul>)}
            </li>
            <li>
              <button onClick={() => setIsOpenRouting(!isOpenRouting)} className="flex items-center text-gray-600 px-4 py-2 hover:bg-gray-100 rounded w-full">
                <AcademicCapIcon className="w-6 h-6 mr-3" />
                <span>Intro to Python</span>
                <ChevronDownIcon className={`w-5 h-5 ml-auto transition-transform ${isOpenRouting ? "rotate-180" : ""}`} />
              </button>
              {isOpenRouting && (
                <ul className="mt-2 space-y-1 pl-8">
                  {coursesList[33].lessons.map((video, index) => (
                    <li key={index} className="flex">
                      <button
                        onClick={ () => onLessonSelect(coursesList[33], index)}
                        className="block w-full text-gray-400 text-left px-4 py-2 hover:bg-gray-200 rounded">
                        {video.title}
                      </button>
                      {watchedVideos.includes(index) &&(
                                  <span className="text-customGold flex items-center">
                                  <FontAwesomeIcon icon={faSquareCheck} />{/* Check icon */}
                                  </span>)}
                    </li>))}
                </ul>)}
            </li>
            <li>
              <button onClick={() => setIsOpenForm(!isOpenForm)} className="flex items-center text-gray-600 px-4 py-2 hover:bg-gray-100 rounded w-full">
                <AcademicCapIcon className="w-6 h-6 mr-3" />
                <span>Logic and Problem-Solving</span>
                <ChevronDownIcon className={`w-5 h-5 ml-auto transition-transform ${isOpenForm ? "rotate-180" : ""}`} />
              </button>
              {isOpenForm && (
                <ul className="mt-2 space-y-1 pl-8">
                  {coursesList[34].lessons.map((video, index) => (
                    <li key={index} className="flex">
                      <button
                        onClick={() => onLessonSelect(coursesList[34], index)}
                        className="block w-full text-gray-400 text-left px-4 py-2 hover:bg-gray-200 rounded">
                        {video.title}
                      </button>
                      {watchedVideos.includes(index) && (
                                  <span className="text-customGold flex items-center">
                                  <FontAwesomeIcon icon={faSquareCheck} />{/* Check icon */}
                                  </span>)}
                    </li>))}
                </ul>)}
            </li>
            <li>
              <button onClick={() => setIsOpenRedux(!isOpenRedux)} className="flex items-center text-gray-600 px-4 py-2 hover:bg-gray-100 rounded w-full">
                <AcademicCapIcon className="w-6 h-6 mr-3" />
                <span>IT traks</span>
                <ChevronDownIcon className={`w-5 h-5 ml-auto transition-transform ${isOpenRedux ? "rotate-180" : ""}`} />
              </button>
              {isOpenRedux && (
                <ul className="mt-2 space-y-1 pl-8">
                  {coursesList[35].lessons.map((video, index) => (
                    <li key={index} className="flex">
                      <button
                        onClick={() => onLessonSelect(coursesList[35], index)}
                        className="block w-full text-gray-400 text-left px-4 py-2 hover:bg-gray-200 rounded">
                        {video.title}
                      </button>
                      {watchedVideos.includes(index) && (
                                  <span className="text-customGold flex items-center">
                                  <FontAwesomeIcon icon={faSquareCheck} />{/* Check icon */}
                                  </span>)}
                    </li>))}
                </ul>)}
            </li>
           <li>
              {/* certificate menu  */}
          <button onClick={toggleCertificateMenu} className="flex items-center text-gray-600 px-4 py-2 hover:bg-gray-100 rounded w-full">
            <AcademicCapIcon className="w-6 h-6 mr-3" />
            <span>Course Certification</span>
            <ChevronDownIcon className={`w-5 h-5 ml-auto transition-transform ${isMenuExpanded ? "rotate-180" : ""}`} />
          </button>
          {isMenuExpanded && (
            <ul className="mt-2 space-y-1 pl-8">
              <li className="flex">
                <button className="block w-full text-gray-400 text-left px-4 py-2 hover:bg-gray-200 rounded">
                  Exam
                </button>
              </li>
              <li className="flex">
                <button className="block w-full text-gray-400 text-left px-4 py-2 hover:bg-gray-200 rounded">
                  Certificate
                </button>
              </li>
            </ul>)}
            </li>
          </ul>
        </nav>
        {/* Sidebar Footer */}
        <div className="bg-gray-300 p-4 ">
          <p className="text-sm text-gray-600">© 2024 Beginners</p>
        </div>
      </div>
      {/* Main Content */}
      <div className="main flex-1 bg-gray-100 p-6 mt-16 justify-center ">
        <h2 className="text-2xl font-bold mb-4 text-center text-customBronze pt-2 transform transition-transform duration-500 hover:scale-110 animate-fade-in">
        Welcome to our course. Have a nice time!
        </h2>
        <VideoPlayer videoUrl={videoUrl}/>
      </div>   
    </div>
  );}
export default CourseBeginners;