import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Landing from './Pages/Landing-page/Landing';
import Startpage from './Pages/Start-page/Startpage';
import Loading from './Pages/Loading-page/Loading';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/"  element={<Landing />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/startpage" element={<Startpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
