import { createBrowserRouter } from 'react-router-dom';
import Landing from '../pages/landing';
import Home from '../pages/home';
import About from '../pages/About';
import NotFound from '../pages/Notfound';
import Learn from '../pages/learn';
import TracksList from '../pages/tracks-list/Page';
import TrackDetails from '../pages/track-details/Page';

const routes = [
  {
    path: '/',
    children: [
      { index: true, element: <Home /> },
      { path: 'landing', element: <Landing /> },
      { path: 'about', element: <About /> },
      { path: 'learn', element: <Learn /> },
      { path: 'tracks_list', element: <TracksList/> },
      { path: 'track', element: <TrackDetails /> },
      { path: '*', element: <NotFound /> },
    ],
  },
];
const router = createBrowserRouter(routes);
export default router;
