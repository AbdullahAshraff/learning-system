import { BrowserRouter as Router } from 'react-router-dom'; 
import Footer from '../Components/Footer';
import NavBar from '../Components/NavBar';
import CourseList from '../Pages/Beginner/CourseList';
import CourseSection from '../Pages/Beginner/CoursesSection';

function BeginnerCourses() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <CourseSection />
        <CourseList />
        <Footer />
      </div>
    </Router>
  );
}

export default BeginnerCourses;
