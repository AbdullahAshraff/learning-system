import Footer from '../../components/Footer.jsx'
import NavBar from '../../components/NavBar.jsx';
import CourseList from '../../components/beginner/CourseList.jsx';
import CourseSection from '../../components/beginner/CoursesSection.jsx';

function BeginnerCourses() {
  return (
      <div className="App">
        {/* <NavBar /> */}
        <CourseSection />
        <CourseList />
        {/* <Footer /> */}
      </div>
  );
}

export default BeginnerCourses;
