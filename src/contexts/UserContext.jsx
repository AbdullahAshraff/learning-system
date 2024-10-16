import { createContext, useContext, useEffect, useState } from 'react';
import axiosInstance from '../lib/axiosInstance';
import { AuthContext } from './AuthContext';

const UserContext = createContext();

function UserProvider({ children }) {
  const initialUser = {
    name: '',
    username: '',
    email: '',
    phone: '',
    bio: '',
    picture: '',
    links: {
      github: {
        username: '',
        url: '',
      },
      linkedin: {
        username: '',
        url: '',
      },
      website: {
        username: '',
        url: '',
      },
    },
  };
  const [user, setUser] = useState(initialUser);
  const { authData } = useContext(AuthContext);

  useEffect(() => {
    if (!authData.userLogged) return;
    const fetchInfo = async () => {
      const res = await axiosInstance.get('users/getLoggedUserData');
      setUser({ ...initialUser, ...res.data });
    };
    fetchInfo();
  }, [authData]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
