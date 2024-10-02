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
function CourseReact() {
  const [URLSearchParams, setURLsearch] = useSearchParams();
    const [isNotFound, setIsNotFound] = useState(false);
    const courseId = URLSearchParams.get('courseId');
    const lessonId = URLSearchParams.get('lessonId');
    const {videoUrl,notFound, videoIndex,isOpenWelcome,isOpenHtml,isOpenCss,isOpenJs,isOpenForm,isOpenRedux,isOpenRouting,watchedVideos,handleVideoClick, // Return this new function
      handleVideoChange,handlePrevVideo,handleNextVideo,markVideoAsWatched,setIsOpenWelcome,setVideoUrl,setVideoIndex,setIsOpenHtml,setIsOpenCss,setIsOpenJs,
      setIsOpenRedux,setIsOpenRouting,setIsOpenForm,setIsMenuExpanded, isMenuExpanded,toggleCertificateMenu,
    } = useVideoCourse(courseId, lessonId);
    useEffect(() => {
      const courses = coursesList.find(course => course.id === courseId);
      if (courses) {
        const lesson = courses.lessons.find(lesson => lesson.lessonId === lessonId); 
        if (lesson) {
          setVideoUrl(lesson.url);
          setVideoIndex(courses.lessons.indexOf(lesson));
        } else {
          setIsNotFound(true); // Lesson not found
        }
      } else {
        setIsNotFound(true); // Course not found
      }
    }, [courseId, lessonId]);

  if (isNotFound) {
      return <Navigate to="/404" />;
  }
    const username = 'Arwa';
    
    const onLessonSelect = (selectedCourse, index) => {
      const selectedLesson = selectedCourse.lessons[index];
        handleVideoClick(selectedCourse, index);
        markVideoAsWatched(selectedCourse, index);    
        URLSearchParams.set('courseId', selectedCourse.id);
        URLSearchParams.set('lessonId', selectedLesson.lessonId);
        setURLsearch(URLSearchParams);
  };
    return (
        <div className="flex header-course ">
            {/* Top Navbar */}
            <CoursesNavbar username={username} handlePrevVideo={handlePrevVideo} handleNextVideo={handleNextVideo} />
            {/* Sidebar */}
            <div className="h-screen bg-white text-gray-600 w-68 flex flex-col mt-16">
                <div className="flex items-center justify-center h-16 bg-white border-b-2 border-t-2">
                    <h1 className="text-xl text-customBronze p-4">React.Js</h1>
                </div>
                {/* Navigation Links */}
                <nav className="flex-1 px-4 py-6">
                    <ul className="space-y-2">
                        {/* Expandable Menu */}
                        <li>
                            <button onClick={() => setIsOpenWelcome(!isOpenWelcome)} className="flex items-center text-gray-600 px-4 py-2 hover:bg-gray-100 rounded w-full">
                                <AcademicCapIcon className="w-6 h-6 mr-3" />
                                <span className="text-gray-600">Welcome</span>
                                <ChevronDownIcon className={`w-5 h-5 ml-auto ${isOpenWelcome ? "rotate-180" : ""}`} />
                            </button>
                            {isOpenWelcome && (
                                <ul className="mt-2 space-y-1 pl-8">
                                    {coursesList[22].lessons.map((video, index) => (
                                        <li key={video.lessonId} className="flex">
                                            <button onClick={() => onLessonSelect(coursesList[22], index)} className="block w-full text-gray-400 text-left px-4 py-2 hover:bg-gray-200 rounded">
                                                {video.title}
                                            </button>
                                            {watchedVideos.includes(index) && (
                                                <span className="text-customGold flex items-center">
                                                    <FontAwesomeIcon icon={faSquareCheck} />
                                                </span>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                        {/* ES6 Course */}
                        <li>
                            <button onClick={() => setIsOpenHtml(!isOpenHtml)} className="flex items-center text-gray-600 px-4 py-2 hover:bg-gray-100 rounded w-full">
                                <AcademicCapIcon className="w-6 h-6 mr-3" />
                                <span>ES6 Course</span>
                                <ChevronDownIcon className={`w-5 h-5 ml-auto transition-transform ${isOpenHtml ? "rotate-180" : ""}`} />
                            </button>
                            {isOpenHtml && (
                                <ul className="mt-2 space-y-1 pl-8">
                                    {coursesList[23].lessons.map((video, index) => (
                                        <li key={video.lessonId} className="flex">
                                            <button onClick={() => onLessonSelect(coursesList[23], index)} className="block w-full text-gray-400 text-left px-4 py-2 hover:bg-gray-200 rounded">
                                                {video.title}
                                            </button>
                                            {watchedVideos.includes(index) && (
                                                <span className="text-customGold flex items-center">
                                                    <FontAwesomeIcon icon={faSquareCheck} />
                                                </span>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                        {/* React Course */}
                        <li>
                            <button onClick={() => setIsOpenCss(!isOpenCss)} className="flex items-center text-gray-600 px-4 py-2 hover:bg-gray-100 rounded w-full">
                                <AcademicCapIcon className="w-6 h-6 mr-3" />
                                <span>React Course</span>
                                <ChevronDownIcon className={`w-5 h-5 ml-auto transition-transform ${isOpenCss ? "rotate-180" : ""}`} />
                            </button>
                            {isOpenCss && (
                                <ul className="mt-2 space-y-1 pl-8">
                                    {coursesList[24].lessons.map((video, index) => (
                                        <li key={video.lessonId} className="flex">
                                            <button onClick={() => onLessonSelect(coursesList[24], index)} className="block w-full text-gray-400 text-left px-4 py-2 hover:bg-gray-200 rounded">
                                                {video.title}
                                            </button>
                                            {watchedVideos.includes(index) && (
                                                <span className="text-customGold flex items-center">
                                                    <FontAwesomeIcon icon={faSquareCheck} />
                                                </span>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                        {/* Hooks Course */}
                        <li>
                            <button onClick={() => setIsOpenJs(!isOpenJs)} className="flex items-center text-gray-600 px-4 py-2 hover:bg-gray-100 rounded w-full">
                                <AcademicCapIcon className="w-6 h-6 mr-3" />
                                <span>Hooks Course</span>
                                <ChevronDownIcon className={`w-5 h-5 ml-auto transition-transform ${isOpenJs ? "rotate-180" : ""}`} />
                            </button>
                            {isOpenJs && (
                                <ul className="mt-2 space-y-1 pl-8">
                                    {coursesList[25].lessons.map((video, index) => (
                                        <li key={video.lessonId} className="flex">
                                            <button onClick={() => onLessonSelect(coursesList[25], index)} className="block w-full text-gray-400 text-left px-4 py-2 hover:bg-gray-200 rounded">
                                                {video.title}
                                            </button>
                                            {watchedVideos.includes(index) && (
                                                <span className="text-customGold flex items-center">
                                                    <FontAwesomeIcon icon={faSquareCheck} />
                                                </span>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                        {/* Routing Course */}
                        <li>
                            <button onClick={() => setIsOpenRouting(!isOpenRouting)} className="flex items-center text-gray-600 px-4 py-2 hover:bg-gray-100 rounded w-full">
                                <AcademicCapIcon className="w-6 h-6 mr-3" />
                                <span>Routing Course</span>
                                <ChevronDownIcon className={`w-5 h-5 ml-auto transition-transform ${isOpenRouting ? "rotate-180" : ""}`} />
                            </button>
                            {isOpenRouting && (
                                <ul className="mt-2 space-y-1 pl-8">
                                    {coursesList[26].lessons.map((video, index) => (
                                        <li key={video.lessonId} className="flex">
                                            <button onClick={() => onLessonSelect(coursesList[26], index)} className="block w-full text-gray-400 text-left px-4 py-2 hover:bg-gray-200 rounded">
                                                {video.title}
                                            </button>
                                            {watchedVideos.includes(index) && (
                                                <span className="text-customGold flex items-center">
                                                    <FontAwesomeIcon icon={faSquareCheck} />
                                                </span>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                        {/* Form Validation Course */}
                        <li>
                            <button onClick={() => setIsOpenForm(!isOpenForm)} className="flex items-center text-gray-600 px-4 py-2 hover:bg-gray-100 rounded w-full">
                                <AcademicCapIcon className="w-6 h-6 mr-3" />
                                <span>Form Validation Course</span>
                                <ChevronDownIcon className={`w-5 h-5 ml-auto transition-transform ${isOpenForm ? "rotate-180" : ""}`} />
                            </button>
                            {isOpenForm && (
                                <ul className="mt-2 space-y-1 pl-8">
                                    {coursesList[27].lessons.map((video, index) => (
                                        <li key={video.lessonId} className="flex">
                                            <button onClick={() => onLessonSelect(coursesList[27], index)} className="block w-full text-gray-400 text-left px-4 py-2 hover:bg-gray-200 rounded">
                                                {video.title}
                                            </button>
                                            {watchedVideos.includes(index) && (
                                                <span className="text-customGold flex items-center">
                                                    <FontAwesomeIcon icon={faSquareCheck} />
                                                </span>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                        {/* Redux Course */}
                        <li>
                            <button onClick={() => setIsOpenRedux(!isOpenRedux)} className="flex items-center text-gray-600 px-4 py-2 hover:bg-gray-100 rounded w-full">
                                <AcademicCapIcon className="w-6 h-6 mr-3" />
                                <span>Redux Course</span>
                                <ChevronDownIcon className={`w-5 h-5 ml-auto transition-transform ${isOpenRedux ? "rotate-180" : ""}`} />
                            </button>
                            {isOpenRedux && (
                                <ul className="mt-2 space-y-1 pl-8">
                                    {coursesList[28].lessons.map((video, index) => (
                                        <li key={index} className="flex">
                                            <button onClick={() => onLessonSelect(coursesList[28], index)} className="block w-full text-gray-400 text-left px-4 py-2 hover:bg-gray-200 rounded">
                                                {video.lessonId.title}
                                            </button>
                                            {watchedVideos.includes(index) && (
                                                <span className="text-customGold flex items-center">
                                                    <FontAwesomeIcon icon={faSquareCheck} />
                                                </span>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                        {/* Course Certification */}
                        <li>
                            <button onClick={toggleCertificateMenu} className="flex items-center text-gray-600 px-4 py-2 hover:bg-gray-100 rounded w-full">
                                <AcademicCapIcon className="w-6 h-6 mr-3" />
                                <span>Course Certification</span>
                                <ChevronDownIcon className={`w-5 h-5 ml-auto transition-transform ${isMenuExpanded ? "rotate-180" : ""}`} />
                            </button>
                            {isMenuExpanded && (
                                <ul className="mt-2 space-y-1 pl-8">
                                    <li className="flex">
                                        <button className="block w-full text-gray-400 text-left px-4 py-2 hover:bg-gray-200 rounded">Exam</button>
                                    </li>
                                    <li className="flex">
                                        <button className="block w-full text-gray-400 text-left px-4 py-2 hover:bg-gray-200 rounded">Certificate</button>
                                    </li>
                                </ul>
                            )}
                        </li>
                    </ul>
                </nav>
                <div className="bg-gray-300 p-4">
                    <p className="text-sm text-gray-600">© 2024 Advanced Frontend</p>
                </div>
            </div>
            {/* Video Player Section */}
            <div className="main flex-1 bg-gray-100 p-6 mt-16 justify-center">
                <h2 className="text-2xl font-bold mb-4 text-center text-customBronze pt-2 transform transition-transform duration-500 hover:scale-110 animate-fade-in">
                    Welcome In Advanced Frontend Track
                </h2>
                {videoUrl ? (
        <VideoPlayer videoUrl={videoUrl} />
    ) : (
        <p className="text-center text-gray-500">No video selected. Please select a lesson to watch.</p>
    )}
            </div>
        </div>
    );
}

export default CourseReact;
