import { useContext } from 'react';
import { UserContext } from '../../../contexts/UserContext';
import SettingsNav from './SettingsNav';
import { Outlet } from 'react-router-dom';
import Loading from '../../../components/LoadingCircularProgress';

const SettingsLayout = () => {
  const { userDataLoading } = useContext(UserContext);
  return (
    <div
      className="flex flex-col justify-center lg:flex-row m-4 gap-5 mx-auto px-3 "
      style={{
        gridTemplateColumns: 'auto 3fr',
      }}
    >
      <div>
        <SettingsNav />
      </div>
      <div className="sm:px-8 md:px-16 px-6 sm:py-8 md:py-16 py-10 max-w-[840px] relative w-full h-full bg-yellow-50 min-h-full text-start">
        <div className="flex flex-col">
          {userDataLoading ? <Loading /> : <Outlet />}
        </div>
      </div>
    </div>
  );
};

export default SettingsLayout;
