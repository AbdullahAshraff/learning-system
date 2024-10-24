import { createBrowserRouter, Navigate } from 'react-router-dom';
import { lazy } from 'react';

const Landing = lazy(() => import('../pages/landing'));
const Profile = lazy(() => import('../pages/profile'));
const NotFound = lazy(() => import('../pages/error-pages/Notfound'));
const Learn = lazy(() => import('../pages/learn'));
const SettingsLayout = lazy(() => import('../pages/settings/layout/settingsLayout'));
const ProfileSettings = lazy(() => import('../pages/settings/profile'));
const AccountSettings = lazy(() => import('../pages/settings/account'));
const Login = lazy(() => import('../pages/auth/Login'));
const Signup = lazy(() => import('../pages/auth/Signup'));
const ForgotPassword = lazy(() => import('../pages/auth/ForgotPassword'));
const ResetPassword = lazy(() => import('../pages/auth/ResetPassword'));
const VerifyEmail = lazy(() => import('../pages/auth/VerifyEmail'));
const TracksList = lazy(() => import('../pages/tracks-list/Page'));
const TrackDetails = lazy(() => import('../pages/track-details/Page'));
const LoadingPage = lazy(() => import('../pages/loading/LoadingPage'));
const StartPage = lazy(() => import('../pages/start/StartPage'));
const GamesPage = lazy(() => import('../pages/games-page/Page'));
const AdminLayout = lazy(() => import('../pages/admin/Layout'));
const Dashboard = lazy(() => import('../pages/admin/Dashboard'));
const Users = lazy(() => import('../pages/admin/Users'));
const Tracks = lazy(() => import('../pages/admin/Tracks'));
const AdminProfileForm = lazy(() => import('../pages/admin/ProfileForm'));
const AdminRoute = lazy(() => import('./AdminRoute'));
const MustBeLoggedRoute = lazy(() => import('./MustBeLoggedRoute'));
const NotForLoggedRoute = lazy(() => import('./NotForLoggedRoute'));
const AuthLayout = lazy(() => import('../pages/auth/Layout'));
const BeginnerCourses = lazy(() => import('../pages/beginner-courses/Page'));
const CourseDetails = lazy(() => import('../pages/course-details/Page'));
const MainLayout = lazy(() => import('../pages/MainLayout'));
const Aiquiz = lazy(() => import('../pages/AI-quiz/Aiquiz'));

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Landing /> },
      { path: 'landing', element: <Landing /> },
      {
        path: 'profile',
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
