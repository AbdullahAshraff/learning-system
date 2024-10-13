import { createBrowserRouter } from 'react-router-dom';
import Landing from '../pages/landing';
import Startpage from '../pages/start';
import Loading from '../pages/loading';

const routes = [
  {
    path: '/',
    children: [
      { index: true, element: <Landing /> },
      { path: '/landing', element: <Landing /> },
      { path: '/loading', element: <Loading /> },
      { path: '/start', element: <Startpage /> },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
