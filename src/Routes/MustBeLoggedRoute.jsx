import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const MustBeLoggedRoute = ({ children }) => {
  const { userLogged } = useContext(AuthContext).authData;
  if (!userLogged) {
    toast.error('You need to login first!', {
      duration: 3000,
      position: 'top-center',
    });
    return <Navigate to="/auth/login" replace={true} />;
  }

  return children;
};

export default MustBeLoggedRoute;
