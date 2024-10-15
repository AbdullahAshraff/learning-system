import { createBrowserRouter } from 'react-router-dom';
import BeginnerCourses from '../Pages/BeginnerCourses';
import BeginnerInfo from '../Pages/BeginnerInfo';

const routes = [
  {
    path: '/',
    children: [
      { index: true, element: <BeginnerCourses /> },
      { path: '/Beginner', element: <BeginnerCourses /> },
      { path: '/Courses', element: <BeginnerInfo /> },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
