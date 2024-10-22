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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!authData.userLogged) {
      setLoading(false);
      return;
    }

    const fetchInfo = async () => {
      const res = await axiosInstance.get('users/getLoggedUserData');
      setUser({ ...initialUser, ...res.data.data });
      console.log('we fetched user data');
      setLoading(false);
    };

    fetchInfo();
  }, [authData]);

  console.log('rendered initial user data');

  if (loading) return <Loading />;
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
