import { RouterProvider } from 'react-router-dom/dist';
import './index.css';
import router from './Routes/router';
import { UserProvider } from './contexts/UserContext';
import { AuthProvider } from './contexts/AuthContext';
import InterceptorsProvider from './providers/InterceptorsProvider';

function App() {
  return (
    <>
      <AuthProvider>
        <InterceptorsProvider>
          <UserProvider>
            <RouterProvider router={router} />
          </UserProvider>
        </InterceptorsProvider>
      </AuthProvider>
    </>
  );
}

export default App;
