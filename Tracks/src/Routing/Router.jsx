
import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import Frontend from '../Pages/Frontend/Frontend';
import Backend from '../Pages/Backend/Backend';
import React from '../Pages/React/React';
import Mobile from '../Pages/Mobile/Mobile';
import Java from '../Pages/Java/Java';

const routes = [
  {
    path: '/',
    children: [
      { index: true, element: <Frontend /> },
      { path: "/Frontend", element:<Frontend /> },
      { path: "/Backend", element:<Backend/> },
      { path: "/React", element:<React/> },
      { path: "/Mobile", element:<Mobile/> },
      { path: "/Java", element:<Java/> },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
