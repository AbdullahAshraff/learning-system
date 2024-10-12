import { RouterProvider } from 'react-router-dom/dist';
import './index.css';
import router from './Routes/router';
import { UserProvider } from './contexts/UserContext';

function App() {
  return (
    <>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </>
  );
}

export default App;
