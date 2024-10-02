import React, { useEffect } from 'react';
import Header from './Header';
import About from './About';
import Courses from './Courses';
import Services from './Services';
import Footer from './Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import '../../App.css';
import Button from '../../components/Button';
import LearnerChart from '../../components/LearnerChart';
import WhyChooseUs from './WhyChooseUs';

function Landing() {
     
 useEffect(() => {
    AOS.init({
      once: false,
      duration: 1000,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <Header />
      <LearnerChart/>
      <WhyChooseUs/>
      <About />
      <Courses />
      <Services />
      <Button/>
      <Footer />
    </>
  )
}

export default Landing;

  