//frontend course
import { AcademicCapIcon,  ChevronDownIcon,} from "@heroicons/react/24/solid";
import {  Navigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { welcomeVideos,htmlVideos,cssVideos, jsVideos,getCurrentVideos } from '../../constants/Data/frontendData.js'; // Import the course data
import CoursesNavbar from "../../components/Coursesnavbar.jsx";
import VideoPlayer from './../../components/Videocourse';
import useVideoCourse from "../../constants/useFrontCourse.js";
function CoursesFront() {
  const {
    videoUrl,notFound,username,videoIndex,currentCourse,isOpenWelcome,isOpenHtml,isOpenCss,isOpenJs,isOpenRouting,isOpenForm,isOpenRedux,watchedVideos,
    watchedHtml,watchedCss,watchedJs,watchedRouting,watchedForm,watchedRedux,isMenuExpanded,isCourseCompleted,toggleCertificateMenu,markVideoAsWatched,
    handleMarkAsComplete,handlePrevVideo,handleNextVideo,getCurrentVideos,handleVideoClick,setIsOpenWelcome,setIsOpenHtml,setIsOpenCss,setIsOpenJs,
    setIsOpenRouting,setIsOpenForm,setIsOpenRedux,
  } = useVideoCourse();
  if (notFound) {
    return <Navigate to="/404" />; // Assuming you have a route for 404
  }
  return (
    <div className="flex header-course ">
      {/* Top Navbar next,prev,user */}
      <CoursesNavbar  username={username} handlePrevVideo={handlePrevVideo} handleNextVideo={handleNextVideo}/>
      {/* Sidebar */}
      <div className="h-screen bg-white text-gray-600 w-68  flex flex-col mt-16">
        <div className="flex items-center justify-center h-16 bg-white border-b-2 border-t-2">
          <h1 className="text-xl text-customBronze p-4">Frontend Track</h1>
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
                        {welcomeVideos.map((video,index) => (
                            <li key={index} className="flex">
                              
                                 <button onClick={event=>{ handleVideoClick("welcome", index); markVideoAsWatched("welcome", index);}} className="block w-full text-gray-400 text-left px-4 py-2 hover:bg-gray-200 rounded">
                                   {video.title}
                                 </button>
                                 {watchedVideos[index] && (
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
                <span>HTML</span>
                <ChevronDownIcon className={`w-5 h-5 ml-auto transition-transform ${isOpenHtml ? "rotate-180" : ""}`} />
              </button>
              {isOpenHtml && (
                <ul className="mt-2 space-y-1 pl-8">
                  {htmlVideos.map((video, index) => (
                    <li key={index} className="flex">
                      <button
                        onClick={event =>{ handleVideoClick("html", index);markVideoAsWatched("html",index)}}
                        className="block w-full text-gray-400 text-left px-4 py-2 hover:bg-gray-200 rounded"
                      >
                        {video.title}
                      </button>
                      {watchedHtml[index] && (
                                  <span className="text-customGold flex items-center">
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
                <span>CSS</span>
                <ChevronDownIcon className={`w-5 h-5 ml-auto transition-transform ${isOpenCss ? "rotate-180" : ""}`} />
              </button>
              {isOpenCss && (
                <ul className="mt-2 space-y-1 pl-8">
                  {cssVideos.map((video, index) => (
                    <li key={index} className="flex">
                      <button
                        onClick={event =>{ handleVideoClick("css", index);markVideoAsWatched("css",index)}}
                        className="block w-full text-gray-400 text-left px-4 py-2 hover:bg-gray-200 rounded"
                      >
                        {video.title}
                      </button>
                      {watchedCss[index] && (
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
                <span>JavaScript</span>
                <ChevronDownIcon className={`w-5 h-5 ml-auto transition-transform ${isOpenJs ? "rotate-180" : ""}`} />
              </button>
              {isOpenJs && (
                <ul className="mt-2 space-y-1 pl-8">
                  {jsVideos.map((video, index) => (
                    <li key={index} className="flex">
                      <button
                        onClick={event=>{ handleVideoClick("js", index);markVideoAsWatched("js",index)}}
                        className="block w-full text-gray-400 text-left px-4 py-2 hover:bg-gray-200 rounded"
                      >
                        {video.title}
                      </button>
                      {watchedJs[index] && (
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
          <p className="text-sm text-gray-600">© 2024 Frontend Track</p>
        </div>
      </div>
      {/* Main Content */}
      <div className="main flex-1 bg-gray-100 p-6 mt-16 justify-center ">
        <h2 className="text-2xl font-bold mb-4 text-center  text-customBronze pt-2 transform transition-transform duration-500 hover:scale-110 animate-fade-in">Welcome to the Frontend Track</h2>
        <VideoPlayer videoUrl={videoUrl}/>
      </div>
    </div>
  );
}
export default CoursesFront;