import { useContext } from 'react';
import { UserContext } from '../../../contexts/UserContext';
import SettingsNav from './SettingsNav';
import { Outlet } from 'react-router-dom';
import Loading from '../../../components/LoadingCircularProgress';

const SettingsLayout = () => {
  const { userDataLoading } = useContext(UserContext);
  return (
    <div
      className="flex flex-col justify-center lg:flex-row m-4 gap-5"
      style={{
        gridTemplateColumns: 'auto 3fr',
      }}
    >
      <div>
        <SettingsNav />
      </div>
      <div>{userDataLoading ? <Loading /> : <Outlet />}</div>
    </div>
  );
};

export default SettingsLayout;
