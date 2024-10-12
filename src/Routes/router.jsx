import { createBrowserRouter } from 'react-router-dom';
import Landing from '../pages/landing';
import Home from '../pages/home';
import About from '../pages/About';
import Profile from '../pages/profile';
import NotFound from '../pages/Notfound';
import Learn from '../pages/learn';
import SettingsLayout from '../pages/settings/layout/settingsLayout';
import ProfileSettings from '../pages/settings/profile';
import AccountSettings from '../pages/settings/account';

const routes = [
  {
    path: '/',
    children: [
      { index: true, element: <Home /> },
      { path: 'landing', element: <Landing /> },
      { path: 'about', element: <About /> },
      { path: 'profile/:username', element: <Profile /> },
      { path: 'learn', element: <Learn /> },
      { path: '*', element: <NotFound /> },
      {
        path: 'settings',
        element: <SettingsLayout />,
        children: [
          { index: true, element: <div>Settings</div> },
          { path: 'profile', element: <ProfileSettings /> },
          { path: 'account', element: <AccountSettings /> },
        ],
      },
    ],
  },
];
const router = createBrowserRouter(routes);
export default router;
