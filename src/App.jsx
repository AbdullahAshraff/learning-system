import { RouterProvider } from 'react-router-dom/dist';
import './index.css';
import router from './Routes/router';

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
