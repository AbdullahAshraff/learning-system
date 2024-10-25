import { useState, useEffect, Suspense } from 'react';
import Sidebar from './components/Sidebar';
import NavBar from './components/Navbar';
import { Outlet } from 'react-router-dom';
import Loading from '../../components/LoadingCircularProgress';

const AdminDashboard = () => {
  const [photo, setPhoto] = useState('');
  const [name, setName] = useState(localStorage.getItem('name') || '');

  useEffect(() => {
    const storedPhoto = localStorage.getItem('photo');
    if (storedPhoto) {
      setPhoto(storedPhoto);
    }
  }, []);

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <NavBar photo={photo} name={name} />
        <div className="flex-1 p-4 overflow-y-auto mt-8">
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
      </div>
    </div>
  );
};

export default AdminDashboard;
