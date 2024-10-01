//frontend course
import { AcademicCapIcon, ChevronDownIcon} from "@heroicons/react/24/solid";
import {  Navigate } from 'react-router-dom';
// import learn from '../../constants/learn.js'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { welcomeBack, nodeVideos, nodejsVideos, expressVideos, mongoVideo, authVideos, deployVideos } from '../../constants/Data/courses.js';
import useVideoCourse from "../../constants/useCourses.js";
import CoursesNavbar from "../../components/Coursesnavbar.jsx";
import VideoPlayer from "../../components/Videocourse.jsx";

function CourseBack() {
  const {
    videoUrl,notFound,username,videoIndex,currentCourse,isOpenWelcome,isOpenHtml,isOpenCss,isOpenJs,isOpenRouting,isOpenForm,isOpenRedux,watchedVideos,
    watchedHtml,watchedCss,watchedJs,isCourseCompleted,toggleCertificateMenu,markVideoAsWatched,
    handlePrevVideo,handleNextVideo,getCurrentVideos,handleVideoClick,setIsOpenWelcome,setIsOpenHtml,setIsOpenCss,setIsOpenJs,
    setIsOpenRouting,setIsOpenForm,setIsOpenRedux,setVideoUrl,setVideoIndex,watchedMobile,watchedKotlin,watchedSwift,watchedFirebase,watchedTest,watchedGit,
    handleMarkAsComplete,watchedfront,watchedes6,watchedReact, watchedHooks, watchedRouting, watchedForm, watchedRedux,watchedBAck,watchedauth,
    watcheddeploy,watchedexpress,watchedmongo,watchednodejs,watchedBeginner,watchedprog,watchedcode,watchedproglang,watchedpython,watchedcareer,watchedproblem,watchedJava,watchedjavacourse,watchedjavads,watchedjavaoop,
    watchedjavaprj,watchednode,isMenuExpanded,
  } = useVideoCourse();
  if (notFound) {
    return <Navigate to="/404" />; // Assuming you have a route for 404
  }
  return (
    <div className="flex header-course ">
      {/* Top Navbar next,prev,user */}
      <CoursesNavbar  username={username} handlePrevVideo={handlePrevVideo} handleNextVideo={handleNextVideo}/>
      {/* Sidebar */}
      <div className="h-screen bg-white text-gray-600 w-68 flex flex-col mt-16">
        <div className="flex items-center justify-center h-16 bg-white border-b-2 border-t-2">
          <h1 className="text-xl text-customBronze p-4">Backend Track</h1>
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
                        {welcomeBack.map((video,index) => (
                            <li key={index} className="flex">
                                 <button onClick={event=>{ handleVideoClick("welcomeback", index); markVideoAsWatched("welcomeback", index);}} className="block w-full text-gray-400 text-left px-4 py-2 hover:bg-gray-200 rounded">
                                   {video.title}
                                 </button>
                                 {watchedBAck[index] && (
                                  <span className="text-customGold flex items-center">
                                  <FontAwesomeIcon icon={faSquareCheck} />{/* Check icon */}
                                  </span>)}
                            </li>))}
                    </ul>)}
            </li>
            <li>
              <button onClick={() => setIsOpenHtml(!isOpenHtml)} className="flex items-center text-gray-600 px-4 py-2 hover:bg-gray-100 rounded w-full">
                <AcademicCapIcon className="w-6 h-6 mr-3" />
                <span>Nodejs Fundamentals</span>
                <ChevronDownIcon className={`w-5 h-5 ml-auto transition-transform ${isOpenHtml ? "rotate-180" : ""}`} />
              </button>
              {isOpenHtml && (
                <ul className="mt-2 space-y-1 pl-8">
                  {nodeVideos.map((video, index) => (
                    <li key={index} className="flex">
                      <button
                        onClick={event =>{ handleVideoClick("node", index);markVideoAsWatched("node",index)}}
                        className="block w-full text-gray-400 text-left px-4 py-2 hover:bg-gray-200 rounded">
                        {video.title}
                      </button>
                      {watchednode[index] && (
                                  <span className="text-customGold flex items-center">
                                  <FontAwesomeIcon icon={faSquareCheck} />{/* Check icon */}
                                  </span>)}
                    </li>))}
                </ul>)}
            </li>
            <li>
              <button onClick={() => setIsOpenCss(!isOpenCss)} className="flex items-center text-gray-600 px-4 py-2 hover:bg-gray-100 rounded w-full">
                <AcademicCapIcon className="w-6 h-6 mr-3" />
                <span>Node.js Core Concepts</span>
                <ChevronDownIcon className={`w-5 h-5 ml-auto transition-transform ${isOpenCss ? "rotate-180" : ""}`} />
              </button>
              {isOpenCss && (
                <ul className="mt-2 space-y-1 pl-8">
                  {nodejsVideos.map((video, index) => (
                    <li key={index} className="flex">
                      <button
                        onClick={event =>{ handleVideoClick("nodejs", index);markVideoAsWatched("nodejs",index)}}
                        className="block w-full text-gray-400 text-left px-4 py-2 hover:bg-gray-200 rounded">
                        {video.title}
                      </button>
                      {watchednodejs[index] && (
                                  <span className="text-customGold flex items-center">
                                  <FontAwesomeIcon icon={faSquareCheck} />{/* Check icon */}
                                  </span>)}
                    </li>))}
                </ul>)}
            </li>
            <li>
              <button onClick={() => setIsOpenJs(!isOpenJs)} className="flex items-center text-gray-600 px-4 py-2 hover:bg-gray-100 rounded w-full">
                <AcademicCapIcon className="w-6 h-6 mr-3" />
                <span>Express.js Framework</span>
                <ChevronDownIcon className={`w-5 h-5 ml-auto transition-transform ${isOpenJs ? "rotate-180" : ""}`} />
              </button>
              {isOpenJs && (
                <ul className="mt-2 space-y-1 pl-8">
                  {expressVideos.map((video, index) => (
                    <li key={index} className="flex">
                      <button
                        onClick={event=>{ handleVideoClick("express", index);markVideoAsWatched("express",index)}}
                        className="block w-full text-gray-400 text-left px-4 py-2 hover:bg-gray-200 rounded" >
                        {video.title}
                      </button>
                      {watchedexpress[index] && (
                                  <span className="text-customGold flex items-center">
                                  <FontAwesomeIcon icon={faSquareCheck} />{/* Check icon */}
                                  </span>)}
                    </li>))}
                </ul>)}
            </li>
            <li>
              <button onClick={() => setIsOpenRouting(!isOpenRouting)} className="flex items-center text-gray-600 px-4 py-2 hover:bg-gray-100 rounded w-full">
                <AcademicCapIcon className="w-6 h-6 mr-3" />
                <span>MongoDB & SQL</span>
                <ChevronDownIcon className={`w-5 h-5 ml-auto transition-transform ${isOpenRouting ? "rotate-180" : ""}`} />
              </button>
              {isOpenRouting && (
                <ul className="mt-2 space-y-1 pl-8">
                  {mongoVideo.map((video, index) => (
                    <li key={index} className="flex">
                      <button
                        onClick={event =>{ handleVideoClick("mongo", index);;markVideoAsWatched("mongo",index)}}
                        className="block w-full text-gray-400 text-left px-4 py-2 hover:bg-gray-200 rounded">
                        {video.title}
                      </button>
                      {watchedmongo[index] && (
                                  <span className="text-customGold items-center">
                                  <FontAwesomeIcon icon={faSquareCheck} />{/* Check icon */}
                                  </span> )}
                    </li>))}
                </ul>)}
            </li>
            <li>
              <button onClick={() => setIsOpenForm(!isOpenForm)} className="flex items-center text-gray-600 px-4 py-2 hover:bg-gray-100 rounded w-full">
                <AcademicCapIcon className="w-6 h-6 mr-3" />
                <span>Authentication & Authorization</span>
                <ChevronDownIcon className={`w-5 h-5 ml-auto transition-transform ${isOpenForm ? "rotate-180" : ""}`} />
              </button>
              {isOpenForm && (
                <ul className="mt-2 space-y-1 pl-8">
                  {authVideos.map((video, index) => (
                    <li key={index} className="flex">
                      <button
                        onClick={event =>{ handleVideoClick("auth", index);markVideoAsWatched("auth",index)}}
                        className="block w-full text-gray-400 text-left px-4 py-2 hover:bg-gray-200 rounded">
                        {video.title}
                      </button>
                      {watchedauth[index] && (
                                  <span className="text-customGold flex items-center">
                                  <FontAwesomeIcon icon={faSquareCheck} />{/* Check icon */}
                                  </span> )}
                    </li>))}
                </ul>)}
            </li>
            <li>
              <button onClick={() => setIsOpenRedux(!isOpenRedux)} className="flex items-center text-gray-600 px-4 py-2 hover:bg-gray-100 rounded w-full">
                <AcademicCapIcon className="w-6 h-6 mr-3" />
                <span>Deployment & Production</span>
                <ChevronDownIcon className={`w-5 h-5 ml-auto transition-transform ${isOpenRedux ? "rotate-180" : ""}`} />
              </button>
              {isOpenRedux && (
                <ul className="mt-2 space-y-1 pl-8">
                  {deployVideos.map((video, index) => (
                    <li key={index} className="flex">
                      <button
                        onClick={event =>{ handleVideoClick("deploy", index);markVideoAsWatched("deploy",index)}}
                        className="block w-full text-gray-400 text-left px-4 py-2 hover:bg-gray-200 rounded"
                      >
                        {video.title}
                      </button>
                      {watcheddeploy[index] && (
                                  <span className="text-customGold flex items-center">
                                  <FontAwesomeIcon icon={faSquareCheck} />{/* Check icon */}
                                  </span>)}
                    </li>))}
                </ul>)}
            </li>
           <li>
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
          <p className="text-sm text-gray-600">© 2024 Backend Track</p>
        </div>
      </div>
      {/* Main Content */}
      <div className="main flex-1 bg-gray-100 p-6 mt-16 justify-center ">
        <h2 className="text-2xl font-bold mb-4 text-center text-customBronze pt-2 transform transition-transform duration-500 hover:scale-110 animate-fade-in">
        Welcome to Backend track
        </h2>
        <VideoPlayer videoUrl={videoUrl}/>
      </div>  
    </div>
  );
}
export default CourseBack;