import { createContext, useContext, useEffect, useState } from 'react';
import axiosInstance from '../lib/axiosInstance';
import { AuthContext } from './AuthContext';

const UserContext = createContext();

function UserProvider({ children }) {
  const { authData } = useContext(AuthContext);

  const initialUser = {
    name: authData.data.name,
    email: authData.data.email,
    role: authData.data.role,
    bio: '',
    profileImg: '',
    links: {
      github: '',
      linkedin: '',
      website: '',
    },
  };
  const [user, setUser] = useState(initialUser);
  const [userDataLoading, setUserDataLoading] = useState(true);

  const fetchInfo = async () => {
    const res = await axiosInstance.get('users/getLoggedUserData');
    setUser({ ...initialUser, ...res.data.data });
    console.log('we fetched user data');
    setUserDataLoading(false);
  };

  useEffect(() => {
    if (!authData.userLogged) {
      setUserDataLoading(false);
      return;
    }
    fetchInfo();
  }, [authData]);

  const handleUpdateData = fetchInfo;

  console.log('rendered initial user data');
  return (
    <UserContext.Provider
      value={{ user, setUser, userDataLoading, handleUpdateData }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
