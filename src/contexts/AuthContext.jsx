import { createContext, useState } from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext();

function AuthProvider({ children }) {
  let initAuthData = { userLogged: false, token: '' };

  const token = Cookies.get('token');
  if (token) {
    initAuthData = { userLogged: true, token };
  }
  console.log('the auth data is', initAuthData);

  const [authData, setAuthData] = useState(initAuthData);

  return (
    <AuthContext.Provider value={{ authData, setAuthData }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
