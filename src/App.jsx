import { RouterProvider } from 'react-router-dom/dist';
import './index.css';
import router from './Routes/router';
import { UserProvider } from './contexts/UserContext';
import { AuthProvider } from './contexts/AuthContext';
import InterceptorsProvider from './providers/InterceptorsProvider';
import { ConfirmProvider } from 'material-ui-confirm';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Toaster />
      <AuthProvider>
        <InterceptorsProvider>
          <UserProvider>
            <ConfirmProvider>
              <RouterProvider router={router} />
            </ConfirmProvider>
          </UserProvider>
        </InterceptorsProvider>
      </AuthProvider>
    </>
  );
}

export default App;
