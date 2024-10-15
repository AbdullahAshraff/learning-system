import React, { useState, useEffect } from 'react';
import Sidebar from '../Admin/components/Sidebar'; // من مجلد components
import NavBar from '../Admin/components/Navbar'; // من مجلد components
import Dashboard from '../Admin/Dashboard';
import Users from '../Admin/Users';
import Tracks from '../Admin/Tracks';
import ProfileForm from '../Admin/ProfileForm'; // لو هو ملف الملف الشخصي

const AdminDashboard = () => {
  const [activeComponent, setActiveComponent] = useState('dashboard');
  const [photo, setPhoto] = useState('');
  const [name, setName] = useState(localStorage.getItem('name') || '');

  useEffect(() => {
    const storedPhoto = localStorage.getItem('photo');
    if (storedPhoto) {
      setPhoto(storedPhoto);
    }
  }, []);

  const renderComponent = () => {
    switch (activeComponent) {
      case 'dashboard':
        return <Dashboard />;
      case 'users':
        return <Users />;
      case 'tracks':
        return <Tracks />;
      case 'profile':
        return <ProfileForm photo={photo} setPhoto={setPhoto} />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar setActiveComponent={setActiveComponent} />
      <div className="flex-1 flex flex-col">
        <NavBar photo={photo} name={name} setActiveComponent={setActiveComponent} />
        <div className="flex-1 p-4 overflow-y-auto mt-8">
          {renderComponent()}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
