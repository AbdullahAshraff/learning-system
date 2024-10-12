import SettingsNav from './SettingsNav';
import { Outlet } from 'react-router-dom';

const SettingsLayout = () => {
  return (
    <>
      <div
        className="grid  m-4 gap-5"
        style={{
          gridTemplateColumns: 'auto 3fr',
        }}
      >
        <div className="">
          <SettingsNav />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default SettingsLayout;
