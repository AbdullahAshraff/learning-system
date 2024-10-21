import { createContext, useState } from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext();

function AuthProvider({ children }) {
  let initAuthData = { userLogged: false, token: '' };

  const token = Cookies.get('token');
  if (token) {
    initAuthData = { userLogged: true, token };
  }

  const [authData, setAuthData] = useState(initAuthData);

  const handleLogout = () => {
    setAuthData({ userLogged: false, token: '' }); // Reset auth data
    Cookies.remove('token');
  };

  return (
    <AuthContext.Provider value={{ authData, setAuthData, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
