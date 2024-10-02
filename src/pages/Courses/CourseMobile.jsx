import { AcademicCapIcon, ChevronDownIcon} from "@heroicons/react/24/solid";
import {  Navigate,useSearchParams } from 'react-router-dom';
import { useState,useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import coursesList from "../../constants/courses.js";
import useVideoCourse from "../../hooks/useCourses.js";
import CoursesNavbar from "../../components/Learnnavbar.jsx";
import VideoPlayer from "../../components/Learnbvideoplayer.jsx";
import courses from './../../../learning-system/src/constants/courses';
function CourseMobile() {
  const [URLSearchParams, setURLsearch] = useSearchParams();
    const courseId = URLSearchParams.get('courseId');
    const lessonId = URLSearchParams.get('lessonId');
    const {videoUrl,notFound, videoIndex,isOpenWelcome,isOpenHtml,isOpenCss,isOpenJs,isOpenForm,isOpenRedux,isOpenRouting,watchedVideos,handleVideoClick, // Return this new function
      handleVideoChange,handlePrevVideo,handleNextVideo,markVideoAsWatched,setIsOpenWelcome,setVideoUrl,setVideoIndex,setIsOpenHtml,setIsOpenCss,setIsOpenJs,
      setIsOpenRedux,setIsOpenRouting,setIsOpenForm,setIsMenuExpanded, isMenuExpanded,toggleCertificateMenu,setNotFound
    } = useVideoCourse(courseId, lessonId);
    useEffect(() => {
      const courses = coursesList.find(course => course.id === courseId);
      if (courses) {
        const lesson = courses.lessons.find(lesson => lesson.lessonId === lessonId); 
        if (lesson) {
          setVideoUrl(lesson.url);
          setVideoIndex(courses.lessons.indexOf(lesson));
        } else if (!lesson || courses){
          setNotFound(true); // Lesson not found
        }
      } else {
        setNotFound(true); // Course not found
      }
    }, [courseId, lessonId]);
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
          <h1 className="text-xl text-customBronze p-4">Mobile Application Track</h1>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-4 py-6">
          <ul className="space-y-2">
       {/* Expandable Welcome Menu */}
       <li>
                <button onClick={()=>setIsOpenWelcome(!isOpenWelcome)} className="flex items-center text-gray-600 px-4 py-2 hover:bg-gray-100 rounded w-full">
                    <AcademicCapIcon className="w-6 h-6 mr-3" />
                    <span className="text-gray-600">Welcome</span>
                    <ChevronDownIcon className={`w-5 h-5 ml-auto ${isOpenWelcome ? "rotate-180" :""}`} />
                </button>
                {isOpenWelcome && (
                    <ul className="mt-2 space-y-1 pl-8">
                        {coursesList[11].lessons.map((video,index) => (
                            <li key={video.lessonId} className="flex">            
                                 <button onClick={()=> onLessonSelect(coursesList[11], index)} className="block w-full text-gray-400 text-left px-4 py-2 hover:bg-gray-200 rounded">
                                   {video.title}
                                 </button>
                                 {watchedVideos.includes(index) && (
                                  <span className="text-customGold flex items-center">
                                  <FontAwesomeIcon icon={faSquareCheck} />{/* Check icon */}
                                  </span>
                                  )}
                            </li>
                        ))}
                    </ul>
                )}
            </li>
            {/* Expandable HTML Menu */}
            <li>
              <button onClick={() => setIsOpenHtml(!isOpenHtml)} className="flex items-center text-gray-600 px-4 py-2 hover:bg-gray-100 rounded w-full">
                <AcademicCapIcon className="w-6 h-6 mr-3" />
                <span>Android</span>
                <ChevronDownIcon className={`w-5 h-5 ml-auto transition-transform ${isOpenHtml ? "rotate-180" : ""}`} />
              </button>
              {isOpenHtml && (
                <ul className="mt-2 space-y-1 pl-8">
                  {coursesList[12].lessons.map((video, index) => (
                    <li key={video.lessonId} className="flex">
                      <button
                        onClick={() => onLessonSelect(coursesList[12], index)}
                        className="block w-full text-gray-400 text-left px-4 py-2 hover:bg-gray-200 rounded"
                      >
                        {video.title}
                      </button>
                      {watchedVideos.includes(index) && (
                                  <span className="text-customBronze flex items-center">
                                  <FontAwesomeIcon icon={faSquareCheck} />{/* Check icon */}
                                  </span>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
            {/* Expandable CSS Menu */}
            <li>
              <button onClick={() => setIsOpenCss(!isOpenCss)} className="flex items-center text-gray-600 px-4 py-2 hover:bg-gray-100 rounded w-full">
                <AcademicCapIcon className="w-6 h-6 mr-3" />
                <span>IOS</span>
                <ChevronDownIcon className={`w-5 h-5 ml-auto transition-transform ${isOpenCss ? "rotate-180" : ""}`} />
              </button>
              {isOpenCss && (
                <ul className="mt-2 space-y-1 pl-8">
                  {coursesList[13].lessons.map((video, index) => (
                    <li key={video.lessonId} className="flex">
                      <button
                        onClick={() => onLessonSelect(coursesList[13], index)}
                        className="block w-full text-gray-400 text-left px-4 py-2 hover:bg-gray-200 rounded"
                      >
                        {video.title}
                      </button>
                      {watchedVideos.includes(index) && (
                                  <span className="text-customGold flex items-center">
                                  <FontAwesomeIcon icon={faSquareCheck} />{/* Check icon */}
                                  </span>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
            {/* Expandable JavaScript hooks */}
            <li>
              <button onClick={() => setIsOpenJs(!isOpenJs)} className="flex items-center text-gray-600 px-4 py-2 hover:bg-gray-100 rounded w-full">
                <AcademicCapIcon className="w-6 h-6 mr-3" />
                <span>Firebase</span>
                <ChevronDownIcon className={`w-5 h-5 ml-auto transition-transform ${isOpenJs ? "rotate-180" : ""}`} />
              </button>
              {isOpenJs && (
                <ul className="mt-2 space-y-1 pl-8">
                  {coursesList[14].lessons.map((video, index) => (
                    <li key={video.lessonId} className="flex">
                      <button
                        onClick={() => onLessonSelect(coursesList[14], index)}
                        className="block w-full text-gray-400 text-left px-4 py-2 hover:bg-gray-200 rounded"
                      >
                        {video.title}
                      </button>
                      {watchedVideos.includes(index) &&(
                                  <span className="text-customGold flex items-center">
                                  <FontAwesomeIcon icon={faSquareCheck} />{/* Check icon */}
                                  </span>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
            {/* Expandable JavaScript routing */}
            <li>
              <button onClick={() => setIsOpenRouting(!isOpenRouting)} className="flex items-center text-gray-600 px-4 py-2 hover:bg-gray-100 rounded w-full">
                <AcademicCapIcon className="w-6 h-6 mr-3" />
                <span>Testing</span>
                <ChevronDownIcon className={`w-5 h-5 ml-auto transition-transform ${isOpenRouting ? "rotate-180" : ""}`} />
              </button>
              {isOpenRouting && (
                <ul className="mt-2 space-y-1 pl-8">
                  {coursesList[15].lessons.map((video, index) => (
                    <li key={video.lessonId} className="flex">
                      <button
                        onClick={() => onLessonSelect(coursesList[15], index)}
                        className="block w-full text-gray-400 text-left px-4 py-2 hover:bg-gray-200 rounded"
                      >
                        {video.title}
                      </button>
                      {watchedVideos.includes(index) &&(
                                  <span className="text-customGold flex items-center">
                                  <FontAwesomeIcon icon={faSquareCheck} />{/* Check icon */}
                                  </span>
                                  )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
            {/* Expandable JavaScript formvalidation */}
            <li>
              <button onClick={() => setIsOpenForm(!isOpenForm)} className="flex items-center text-gray-600 px-4 py-2 hover:bg-gray-100 rounded w-full">
                <AcademicCapIcon className="w-6 h-6 mr-3" />
                <span>Deployment</span>
                <ChevronDownIcon className={`w-5 h-5 ml-auto transition-transform ${isOpenForm ? "rotate-180" : ""}`} />
              </button>
              {isOpenForm && (
                <ul className="mt-2 space-y-1 pl-8">
                  {coursesList[16].lessons.map((video, index) => (
                    <li key={video.lessonId} className="flex">
                      <button
                        onClick={() => onLessonSelect(coursesList[16], index)}
                        className="block w-full text-gray-400 text-left px-4 py-2 hover:bg-gray-200 rounded"
                      >
                        {video.title}
                      </button>
                      {watchedVideos.includes(index) && (
                                  <span className="text-customGold flex items-center">
                                  <FontAwesomeIcon icon={faSquareCheck} />{/* Check icon */}
                                  </span>
                                  )}
                    </li>
                  ))}
                </ul>
              )}
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
            </ul>
          )}
            </li>
          </ul>
        </nav>
        {/* Sidebar Footer */}
        <div className="bg-gray-300 p-4 ">
          <p className="text-sm text-gray-600">© 2024 Mobile Application Track</p>
        </div>
      </div>
      {/* Main Content */}
      <div className="main flex-1 bg-gray-100 p-6 mt-16 justify-center ">
        <h2 className="text-2xl font-bold mb-4 text-center text-customBronze pt-2 transform transition-transform duration-500 hover:scale-110 animate-fade-in">   
               Welcome to Mobile Application course
        </h2>
        <VideoPlayer videoUrl={videoUrl}/>
      </div>
      
    </div>
  );
}

export default CourseMobile;