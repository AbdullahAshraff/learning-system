import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Backend from './Pages/Backend/Backend';
import Frontend from './Pages/Frontend/Frontend';
import React from './Pages/React/React';
import Mobile from './Pages/Mobile/Mobile';
import Java from './Pages/Java/Java'



function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/"  element={<Frontend />} />
        <Route path="/Backend" element={<Backend/>} />
        <Route path="/Frontend" element={<Frontend/>} />
        <Route path="/React" element={<React/>} />
        <Route path="/Mobile" element={<Mobile/>} />
        <Route path="/Java" element={<Java/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
