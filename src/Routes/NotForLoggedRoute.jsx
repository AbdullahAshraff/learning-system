import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const NotForLoggedRoute = ({ children }) => {
  const { userLogged } = useContext(AuthContext).authData;
  if (userLogged) {
    toast.success('You are already logged in!');
    return <Navigate to="/" replace={true} />;
  }

  return children;
};

export default NotForLoggedRoute;
