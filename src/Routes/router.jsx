import { createBrowserRouter } from 'react-router-dom';
import Landing from '../pages/landing';
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
import AdminLayout from '../pages/admin/Layout';
import Dashboard from '../pages/admin/Dashboard';
import Users from '../pages/admin/Users';
import Tracks from '../pages/admin/Tracks';
import AdminProfileForm from '../pages/admin/ProfileForm';

const routes = [
  {
    path: '/',
    children: [
      { index: true, element: <Landing />},
      { path: 'landing', element: <Landing /> },
      { path: 'profile/:username', element: <Profile /> },
      { path: 'learn', element: <Learn /> },
      { path: 'tracks_list', element: <TracksList /> },
      { path: 'track', element: <TrackDetails /> },
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
      {
        path: 'admin',
        element: <AdminLayout />,
        children: [
          { index: true, element: <Dashboard /> },
          { path: 'dashboard', element: <Dashboard /> },
          { path: 'users', element: <Users /> },
          { path: 'tracks', element: <Tracks /> },
          { path: 'profile', element: <AdminProfileForm /> },
        ],
      },
      {
        path: 'auth',
        children: [
          { index: true, element: <Login /> },
          { path: 'login', element: <Login /> },
          { path: 'signup', element: <Signup /> },
          { path: 'forgot-password', element: <ForgotPassword /> },
          { path: 'reset-password', element: <ResetPassword /> },
          { path: 'verify', element: <VerifyEmail /> },
        ],
      },
    ],
  },
];

const router = createBrowserRouter(routes);
export default router;
