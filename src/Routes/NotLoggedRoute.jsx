import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const NotLoggedRoute = ({ children }) => {
  const { userLogged } = useContext(AuthContext);
  if (!userLogged) {
    toast.error('You need to login first!', {
      duration: 3000,
      position: 'top-center',
    });
    return <Navigate to="/auth/login" />;
  }

  return children;
};

export default NotLoggedRoute;
