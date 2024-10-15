import { useLocation } from 'react-router-dom';
import courses from '../Constants/courses';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';

function BeginnerInfo() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const courseId = queryParams.get('id');

  const course = courses.find(course => course.id === courseId);

  if (!course) {
    return <p>Course not found</p>;
  }

  return (
    <div>
      <NavBar />
      <section className="my-12 mx-4">
        <h1 className="text-4xl font-semibold mb-4">{course.title}</h1>
        <img src={course.image} alt={course.title} className="w-full h-64 object-cover mb-4 rounded-md" />
        <p>{course.description}</p>
      </section>
      <Footer />
    </div>
  );
}

export default BeginnerInfo;
