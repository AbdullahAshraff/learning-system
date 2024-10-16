import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import NoAccess from '../pages/error-pages/NoAccess';

const AdminRoute = ({ children }) => {
  const { user } = useContext(UserContext);
  if (user.role !== 'admin') {
    return <NoAccess />;
  }

  return children;
};

export default AdminRoute;
