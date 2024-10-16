import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const AlreadyLoggedRoute = ({ children }) => {
  const { userLogged } = useContext(AuthContext);
  if (userLogged) {
    toast.info('You are already logged in!');
    return <Navigate to="/" />;
  }

  return children;
};

export default AlreadyLoggedRoute;
