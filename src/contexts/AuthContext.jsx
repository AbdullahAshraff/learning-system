import { createContext, useState } from 'react';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [authData, setAuthData] = useState({userLogged: false, token: ''});

  return (
    <AuthContext.Provider
      value={{ authData, setAuthData }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
