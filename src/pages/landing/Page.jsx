import { useEffect } from 'react';
import About from './About';
import Courses from './Courses';
import Services from './Services';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../App.css';
import Button from '../../components/Button';
import LearnerChart from './LearnerChart';
import WhyChooseUs from './WhyChooseUs';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';

function Page() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 1000,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      {/* <NavBar /> */}
      <LearnerChart />
      <WhyChooseUs />
      <About />
      <Courses />
      <Services />
      <Button />
      {/* <Footer /> */}
    </>
  );
}

export default Page;
