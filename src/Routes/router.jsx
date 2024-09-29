import { createBrowserRouter } from 'react-router-dom';
import Landing from '../pages/landing';
import Home from '../pages/home';
import About from '../pages/About';
import NotFound from '../pages/Notfound';
import '../pages/Courses/coursespage.css'

import CoursesFront from './../pages/Courses/CoursesFront';
import CourseBack from './../pages/Courses/CourseBack';
import CourseJava from './../pages/Courses/CourseJava';
import CourseReact from './../pages/Courses/CourseReact';
import CourseMobile from './../pages/Courses/CourseMobile';
import CourseBeginners from './../pages/Courses/CourseBeginners';

const routes = [
  {
    path: '/',
    children: [
      { index: true, element: <Home /> },
      { path: 'landing', element: <Landing /> },
      { path: 'about', element: <About /> },
       // Group all courses under /courses route
       {
        path: 'learn',
        children: [
          { path: 'frontend', element: <CoursesFront /> },
          { path: 'react', element: <CourseReact /> },
          { path: 'java', element: <CourseJava /> },
          { path: 'mobile', element: <CourseMobile /> },
          { path: 'backend', element: <CourseBack /> },
          { path: 'beginner', element: <CourseBeginners /> },
        ],
      },
      // Catch-all for 404 Not Found
      { path: '*', element: <NotFound /> },
    ],
  },
];
const router = createBrowserRouter(routes);
export default router;
