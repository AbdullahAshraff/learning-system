import { BrowserRouter as Router } from 'react-router-dom'; 
import Footer from './../../components/Footer.jsx'
import NavBar from './../../components/TracksHeader.jsx';
import CourseList from '../../pages/Beginner/CourseList.jsx';
import CourseSection from '../../pages/Beginner/CoursesSection.jsx';

function BeginnerCourses() {
  return (
      <div className="App">
        <NavBar />
        <CourseSection />
        <CourseList />
        <Footer />
      </div>
  );
}

export default BeginnerCourses;
