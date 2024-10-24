import { createContext, useState } from 'react';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';

const AuthContext = createContext();

function AuthProvider({ children }) {
  let initAuthData = {
    userLogged: false,
    token: '',
    data: {
      id: '',
      email: '',
      name: '',
      role: '',
    },
  };

  const token = Cookies.get('token');
  if (token) {
    initAuthData.userLogged = true;
    initAuthData.token = token;
  }

  const [authData, setAuthData] = useState(initAuthData);

  const handleLogin = data => {
    setAuthData({ userLogged: true, token: data.token, data: data.data });
    Cookies.set('token', data.token, { expires: 7 });
  };

  const handleLogout = () => {
    setAuthData({
      userLogged: false,
      token: '',
      data: {
        id: '',
        email: '',
        name: '',
        role: '',
      },
    }); // Reset auth data
    Cookies.remove('token');
    toast.success('Logged out successfully!');
  };

  return (
    <AuthContext.Provider
      value={{ authData, setAuthData, handleLogout, handleLogin }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
