import { createBrowserRouter } from 'react-router-dom';
import Landing from '../pages/landing';
import Home from '../pages/home';
import About from '../pages/About';
import NotFound from '../pages/Notfound';
import Learn from '../pages/learn';
import MyTracks from '../pages/tracks_list/MyTracks';

const routes = [
  {
    path: '/',
    children: [
      { index: true, element: <Home /> },
      { path: 'landing', element: <Landing /> },
      { path: 'about', element: <About /> },
      { path: 'learn', element: <Learn /> },
      { path: 'tracks_list', element: <MyTracks/> },
      { path: '*', element: <NotFound /> },
    ],
  },
];
const router = createBrowserRouter(routes);
export default router;
