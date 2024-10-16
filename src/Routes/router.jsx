import { createBrowserRouter } from 'react-router-dom';
import Landing from '../pages/landing';
import About from '../pages/About';
import Profile from '../pages/profile';
import NotFound from '../pages/Notfound';
import Learn from '../pages/learn';
import SettingsLayout from '../pages/settings/layout/settingsLayout';
import ProfileSettings from '../pages/settings/profile';
import Login from '../pages/auth/Login';
import Signup from '../pages/auth/Signup';
import ForgotPassword from '../pages/auth/ForgotPassword';
import ResetPassword from '../pages/auth/ResetPassword';
import VerifyEmail from '../pages/auth/VerifyEmail';
import TracksList from '../pages/tracks-list/Page';
import TrackDetails from '../pages/track-details/Page';
import AccountSettings from '../pages/settings/account';
import LoadingPage from  '../pages/loading/LoadingPage'
import StartPage from '../pages/start/StartPage'
import GamesPage from '../pages/games-page/Page'
import BeginnerCourses from '../pages/beginner-list/BeginnerCourses'
import BeginnerInfo from '../pages/course-details/BeginnerInfo';

const routes = [
  {
    path: '/',
    children: [
      { index: true, element: <Landing />},
      { path: 'landing', element: <Landing /> },
      { path: 'about', element: <About /> },
      { path: 'profile/:username', element: <Profile /> },
      { path: 'learn', element: <Learn /> },
      { path: 'login', element: <Login /> },
      { path: 'signup', element: <Signup /> },
      { path: 'forgot-password', element: <ForgotPassword /> },
      { path: 'reset-password', element: <ResetPassword /> },
      { path: 'verify', element: <VerifyEmail /> },
      { path: 'tracks_list', element: <TracksList/> },
      { path: 'track', element: <TrackDetails /> },
      { path: '/beginner', element: <BeginnerCourses /> },
      { path: '/course', element: <BeginnerInfo /> },
      { path: '*', element: <NotFound /> },
      { path: '/loading', element: <LoadingPage /> },  
      { path: '/start', element: <StartPage /> },
      { path: '/games', element: <GamesPage /> },
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
