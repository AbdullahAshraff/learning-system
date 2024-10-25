import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loading from '../../components/LoadingCircularProgress';

const AuthLayout = () => {
  return (
    <Suspense
      fallback={
        <div className="h-screen">
          <Loading />
        </div>
      }
    >
      <Outlet />
    </Suspense>
  );
};

export default AuthLayout;
