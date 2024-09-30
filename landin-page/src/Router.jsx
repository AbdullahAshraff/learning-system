
import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import Landing from './Pages/Landing-page/Landing';
import Startpage from './Pages/Start-page/Startpage';
import Loading from './Pages/Loading-page/Loading';


const routes = [
  {
    path: '/',
    children: [
      { index: true, element: <Landing /> },
      { path: "/landing", element:<Landing /> },
      { path:"/loading",element:<Loading />},
      { path:"/startpage",element:<Startpage />},

    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
