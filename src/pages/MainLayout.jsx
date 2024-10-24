import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import { Suspense } from 'react';
import Loading from '../components/LoadingCircularProgress.jsx';

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="flex-1">
        <Suspense
          fallback={
            <div className="h-screen">
              <Loading />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
