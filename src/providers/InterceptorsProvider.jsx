import { useContext, useLayoutEffect } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import axiosInstance from '../lib/axiosInstance';

const InterceptorsProvider = ({ children }) => {
  const { authData } = useContext(AuthContext);

  useLayoutEffect(() => {
    if (!authData.userLogged) return;

    const reqInterceptor = axiosInstance.interceptors.request.use(config => {
      config.headers.Authorization = `Bearer ${authData.token}`;

      return config;
    });

    return () => {
      axiosInstance.interceptors.request.eject(reqInterceptor);
    };
  }, [authData]);

  return children;
};

export default InterceptorsProvider;
