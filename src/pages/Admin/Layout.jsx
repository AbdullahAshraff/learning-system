import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import NavBar from './components/Navbar';
import { Outlet } from 'react-router-dom';

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
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
