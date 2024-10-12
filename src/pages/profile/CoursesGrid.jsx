import coursesList from './../../constants/courses';
import CourseCard from './CourseCard';


function CoursesGrid({ enrolledCourses }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-3">
      {enrolledCourses.map(enrolledCourse => {
        const courseInfo = coursesList.find(c => c.id === enrolledCourse.id);
        return (
          courseInfo && (
            <CourseCard
              courseInfo={courseInfo}
              enrolledCourse={enrolledCourse}
              key={enrolledCourse.id}
            />
          )
        );
      })}
    </div>
  );
}

export default CoursesGrid;
