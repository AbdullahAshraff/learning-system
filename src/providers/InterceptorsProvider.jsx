import { useContext, useLayoutEffect } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import axiosInstance from '../lib/axiosInstance';

const InterceptorsProvider = ({ children }) => {
  const { authData, handleLogout } = useContext(AuthContext);

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

  useLayoutEffect(() => {
    const resInterceptor = axiosInstance.interceptors.response.use(
      response => response,
      error => {
        if (error.response.status === 401) {
          handleLogout();
          window.location.href = '/auth/login';
        }

        return Promise.reject(error);
      }
    );

    return () => {
      axiosInstance.interceptors.response.eject(resInterceptor);
    };
  }, []);

  return children;
};

export default InterceptorsProvider;
