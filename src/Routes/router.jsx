import { createBrowserRouter } from 'react-router-dom';
import Landing from '../pages/landing';
import Home from '../pages/home';
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
import AdminLayout from '../pages/admin/Layout';
import Dashboard from '../pages/admin/Dashboard';
import Users from '../pages/admin/Users';
import Tracks from '../pages/admin/Tracks';
import ProfileForm from '../pages/admin/ProfileForm';

const routes = [
  {
    path: '/',
    children: [
      { index: true, element: <Home /> },
      { path: 'landing', element: <Landing /> },
      { path: 'about', element: <About /> },
      { path: 'profile/:username', element: <Profile /> },
      { path: 'learn', element: <Learn /> },
      { path: 'tracks_list', element: <TracksList /> },
      { path: 'track', element: <TrackDetails /> },
      { path: '*', element: <NotFound /> },
      {
        path: 'settings',
        element: <SettingsLayout />,
        children: [
          { index: true, element: <div>Settings</div> },
          { path: 'profile', element: <ProfileSettings /> },
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
          { path: 'profile', element: <ProfileForm /> },
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
