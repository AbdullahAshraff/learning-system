import { RouterProvider } from 'react-router-dom/dist';
import './index.css';
import router from './Routing/router';

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;