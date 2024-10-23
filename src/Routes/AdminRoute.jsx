import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import NoAccess from '../pages/error-pages/NoAccess';
import Loading from '../components/LoadingCircularProgress';

const AdminRoute = ({ children }) => {
  const { user, userDataLoading } = useContext(UserContext);

  if (userDataLoading) {
    return (
      <div className="h-screen w-screen">
        <Loading />
      </div>
    );
  }

  if (user.role !== 'admin') {
    return <NoAccess />;
  }

  return children;
};

export default AdminRoute;
