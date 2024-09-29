import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Courses from './components/Courses';
import Services from './components/Services';
import Footer from './components/Footer';
import Startpage from './components/Startpage';
import Loading from './components/Loading';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import './App.css';

function MainContent() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/loading');
  };

  // Initialize AOS inside a useEffect hook to ensure it runs after the DOM is ready
  useEffect(() => {
    AOS.init({
      once: false, // Set to true if you want animation to trigger only once
      duration: 1000,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <Header />
      <About />
      <Courses />
      <Services />
      <button
        data-aos="zoom-in-down" 
        onClick={handleClick} 
        className="ml-[40rem] w-full sm:w-auto mx-auto block mb-12 bg-[#DEB041] cursor-pointer inline-flex items-center justify-center rounded-full px-8 py-4 text-lg font-mono font-semibold text-white hover:text-[#DEB041] border-2 border-[#DEB041] transition ease-in-out duration-300 hover:bg-white hover:shadow-lg hover:-translate-y-1"
      >
          Let's Start
     </button>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/startpage" element={<Startpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
