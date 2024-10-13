import { createBrowserRouter } from 'react-router-dom';
import Landing from '../pages/landing';
import StartPage from '../pages/start';
import Loading from '../pages/loading';
import GamesPage from '../pages/games-page';

const routes = [
  {
    path: '/',
    children: [
      { index: true, element: <Landing /> },
      { path: '/landing', element: <Landing /> },
      { path: '/loading', element: <Loading /> },
      { path: '/start', element: <StartPage /> },
      { path: '/games', element: <GamesPage /> },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
