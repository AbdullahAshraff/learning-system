import { createBrowserRouter, Navigate } from 'react-router-dom';
import Landing from '../pages/landing';
import Profile from '../pages/profile';
import NotFound from '../pages/error-pages/Notfound';
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
import LoadingPage from '../pages/loading/LoadingPage';
import StartPage from '../pages/start/StartPage';
import GamesPage from '../pages/games-page/Page';
import AdminLayout from '../pages/admin/Layout';
import Dashboard from '../pages/admin/Dashboard';
import Users from '../pages/admin/Users';
import Tracks from '../pages/admin/Tracks';
import AdminProfileForm from '../pages/admin/ProfileForm';
import AdminRoute from './AdminRoute';
import MustBeLoggedRoute from './MustBeLoggedRoute';
import NotForLoggedRoute from './NotForLoggedRoute';
import AuthLayout from '../pages/auth/Layout';
import BeginnerCourses from '../pages/beginner-courses/Page';
import CourseDetails from '../pages/course-details/Page';
import MainLayout from '../pages/MainLayout';
import Aiquiz from '../pages/AI-quiz/Aiquiz';

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Landing /> },
      { path: 'landing', element: <Landing /> },
      {
        path: 'profile/:username',
        element: (
          <MustBeLoggedRoute>
            <Profile />
          </MustBeLoggedRoute>
        ),
      },
      { path: 'tracks_list', element: <TracksList /> },
      { path: 'track', element: <TrackDetails /> },
      { path: 'beginner', element: <BeginnerCourses /> },
      { path: 'course', element: <CourseDetails /> },
      { path: 'quizes', element: <Aiquiz /> },
      { path: '*', element: <NotFound /> },
      {
        path: 'games',
        element: (
          <MustBeLoggedRoute>
            <GamesPage />
          </MustBeLoggedRoute>
        ),
      },

      {
        path: 'settings',
        element: (
          <MustBeLoggedRoute>
            <SettingsLayout />
          </MustBeLoggedRoute>
        ),
        children: [
          { index: true, element: <Navigate to="profile" replace={true} /> },
          { path: 'profile', element: <ProfileSettings /> },
          { path: 'account', element: <AccountSettings /> },
        ],
      },
    ],
  },
  {
    path: 'loading',
    element: <LoadingPage />,
  },
  {
    path: 'start',
    element: <StartPage />,
  },
  {
    path: 'learn',
    element: (
      <MustBeLoggedRoute>
        <Learn />
      </MustBeLoggedRoute>
    ),
  },
  {
    path: 'admin',
    element: (
      <AdminRoute>
        <AdminLayout />
      </AdminRoute>
    ),
    children: [
      { index: true, element: <Navigate to="dashboard" replace={true} /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'users', element: <Users /> },
      { path: 'tracks', element: <Tracks /> },
      { path: 'profile', element: <AdminProfileForm /> },
    ],
  },
  {
    path: 'auth',
    element: (
      <NotForLoggedRoute>
        <AuthLayout />
      </NotForLoggedRoute>
    ),
    children: [
      { index: true, element: <Navigate to="login" replace={true} /> },
      { path: 'login', element: <Login /> },
      { path: 'signup', element: <Signup /> },
      { path: 'forgot-password', element: <ForgotPassword /> },
      { path: 'reset-password', element: <ResetPassword /> },
      { path: 'verify', element: <VerifyEmail /> },
    ],
  },
];

const router = createBrowserRouter(routes);
export default router;
