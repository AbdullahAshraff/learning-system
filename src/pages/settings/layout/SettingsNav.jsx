import { NavLink } from 'react-router-dom';

const SettingsNav = () => {
  const navItems = [
    { name: 'Profile', id: 1, to: 'profile' },
    { name: 'Account', id: 4, to: 'account' },
    // { name: 'Support', id: 6, to: 'Support' },
  ];

  const renderMenuItems = () => {
    return navItems.map((item, idx) => (
      <NavLink
        to={item.to}
        title=""
        className={({ isActive }) =>
          `inline-flex p-3 rounded-lg text-base font-medium text-black transition-all duration-200 hover:bg-orange-200  active:bg-orange-300 ${
            isActive
              ? 'bg-orange-800 text-white hover:bg-orange-800  active:bg-orange-800'
              : ''
          }`
        }
        key={idx}
      >
        {item.name}
      </NavLink>
    ));
  };

  return (
    <>
      <div className="lg:grid hidden gap-2 bg-orange-100 p-4 pl-3 w-60 rounded-lg">
        {renderMenuItems()}
      </div>
      <div className="flex flex-row lg:hidden gap-2 bg-orange-100 p-2 pl-3 w-full rounded-lg overflow-auto">
        {renderMenuItems()}
      </div>
    </>
  );
};

export default SettingsNav;
