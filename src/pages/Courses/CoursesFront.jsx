import { useState,useEffect } from "react";
import { AcademicCapIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { Navigate, useSearchParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import coursesList from "../../constants/courses.js";
import CoursesNavbar from "../../components/Learnnavbar.jsx";
import VideoPlayer from '../../components/Learnbvideoplayer.jsx';
import useVideoCourse from "../../hooks/useCourses.js";

function CoursesFront() {
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
    if (notFound) {
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
        <div className="flex header-course">
            {/* Top Navbar next, prev, user */}
            <CoursesNavbar username={username} handleNextVideo={handleNextVideo} handlePrevVideo={handlePrevVideo} />
            {/* Sidebar */}
            <div className="h-screen bg-white text-gray-600 w-68 flex flex-col mt-16">
                <div className="flex items-center justify-center h-16 bg-white border-b-2 border-t-2">
                    <h1 className="text-xl text-customBronze p-4">Frontend Track</h1>
                </div>
                <nav className="flex-1 px-4 py-6">
                    <ul className="space-y-2">
                        {/* Expandable Welcome Menu */}
                        <li>
                            <button onClick={() => setIsOpenWelcome(!isOpenWelcome)} className="flex items-center text-gray-600 px-4 py-2 hover:bg-gray-100 rounded w-full">
                                <AcademicCapIcon className="w-6 h-6 mr-3" />
                                <span className="text-gray-600">Welcome</span>
                                <ChevronDownIcon className={`w-5 h-5 ml-auto ${isOpenWelcome ? "rotate-180" : ""}`} />
                            </button>
                            {isOpenWelcome && (
                                <ul className="mt-2 space-y-1 pl-8">
                                    {coursesList[0].lessons.map((video, index) => (
                                        <li key={video.lessonId} className="flex">
                                            <button onClick={() => onLessonSelect(coursesList[0], index)} className="block w-full text-gray-400 text-left px-4 py-2 hover:bg-gray-200 rounded">
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

                        {/* Repeat similar structure for other courses like HTML, CSS, JS */}
                        {/* Expandable HTML Menu */}
                        <li>
                            <button onClick={() => setIsOpenHtml(!isOpenHtml)} className="flex items-center text-gray-600 px-4 py-2 hover:bg-gray-100 rounded w-full">
                                <AcademicCapIcon className="w-6 h-6 mr-3" />
                                <span>HTML</span>
                                <ChevronDownIcon className={`w-5 h-5 ml-auto transition-transform ${isOpenHtml ? "rotate-180" : ""}`} />
                            </button>
                            {isOpenHtml && (
                                <ul className="mt-2 space-y-1 pl-8">
                                    {coursesList[1].lessons.map((video, index) => (
                                        <li key={video.lessonId} className="flex">
                                            <button onClick={() => onLessonSelect(coursesList[1], index)} className="block w-full text-gray-400 text-left px-4 py-2 hover:bg-gray-200 rounded">
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

                        {/* Repeat for CSS and JS similarly */}
                        {/* CSS Menu */}
                        <li>
                            <button onClick={() => setIsOpenCss(!isOpenCss)} className="flex items-center text-gray-600 px-4 py-2 hover:bg-gray-100 rounded w-full">
                                <AcademicCapIcon className="w-6 h-6 mr-3" />
                                <span>CSS</span>
                                <ChevronDownIcon className={`w-5 h-5 ml-auto transition-transform ${isOpenCss ? "rotate-180" : ""}`} />
                            </button>
                            {isOpenCss && (
                                <ul className="mt-2 space-y-1 pl-8">
                                    {coursesList[2].lessons.map((video, index) => (
                                        <li key={video.lessonId} className="flex">
                                            <button onClick={() => onLessonSelect(coursesList[2], index)} className="block w-full text-gray-400 text-left px-4 py-2 hover:bg-gray-200 rounded">
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

                        {/* JS Menu */}
                        <li>
                            <button onClick={() => setIsOpenJs(!isOpenJs)} className="flex items-center text-gray-600 px-4 py-2 hover:bg-gray-100 rounded w-full">
                                <AcademicCapIcon className="w-6 h-6 mr-3" />
                                <span>JavaScript</span>
                                <ChevronDownIcon className={`w-5 h-5 ml-auto transition-transform ${isOpenJs ? "rotate-180" : ""}`} />
                            </button>
                            {isOpenJs && (
                                <ul className="mt-2 space-y-1 pl-8">
                                    {coursesList[3].lessons.map((video, index) => (
                                        <li key={video.lessonId} className="flex">
                                            <button onClick={() => onLessonSelect(coursesList[3], index)} className="block w-full text-gray-400 text-left px-4 py-2 hover:bg-gray-200 rounded">
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

                        {/* Certificate menu */}
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
                    <p className="text-sm text-gray-600">© 2024 Frontend Track</p>
                </div>
            </div>

            {/* Main Content */}
            <div className="main flex-1 bg-gray-100 p-6 mt-16 justify-center">
                <h2 className="text-2xl font-bold mb-4 text-center text-customBronze pt-2 transform transition-transform duration-500 hover:scale-110 animate-fade-in">
                    Welcome to Frontend
                </h2>
                <VideoPlayer videoUrl={videoUrl} />
            </div>
        </div>
    );
}

export default CoursesFront;
