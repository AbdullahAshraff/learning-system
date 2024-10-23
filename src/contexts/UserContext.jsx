import { createContext, useContext, useEffect, useState } from 'react';
import axiosInstance from '../lib/axiosInstance';
import { AuthContext } from './AuthContext';
import Loading from '../components/LoadingCircularProgress';

const UserContext = createContext();

function UserProvider({ children }) {
  const { authData } = useContext(AuthContext);

  const initialUser = {
    name: authData.data.name,
    email: authData.data.email,
    role: authData.data.role,
    bio: '',
    picture: '',
    links: {
      github: '',
      linkedin: '',
      website: '',
    },
  };
  const [user, setUser] = useState(initialUser);
  const [userDataLoading, setUserDataLoading] = useState(true);

  useEffect(() => {
    if (!authData.userLogged) {
      setUserDataLoading(false);
      return;
    }

    const fetchInfo = async () => {
      const res = await axiosInstance.get('users/getLoggedUserData');
      setUser({ ...initialUser, ...res.data.data });
      console.log('we fetched user data');
      setUserDataLoading(false);
    };

    fetchInfo();
  }, [authData]);

  console.log('rendered initial user data');
  return (
    <UserContext.Provider value={{ user, setUser, userDataLoading }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
