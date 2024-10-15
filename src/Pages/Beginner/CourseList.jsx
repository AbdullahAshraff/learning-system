import CourseCard from './CourseCard';
import courses from './../../Constants/courses';

const CourseList = () => {
    // Filter the tracks to only include Frontend, Java, and Mobile tracks
    const filteredcourses = courses.filter((course) => 
        course.id === 'python-001' || 
        course.id === 'coding-001' || 
        course.id === 'programming-001'|| 
        course.id === 'career-001'|| 
        course.id === 'problems-001'|| 
        course.id === 'hooks-001'|| 
        course.id === 'redux-001'|| 
        course.id === 'react-001'|| 
        course.id === 'es6-001'|| 
        course.id === 'javaoop-001'|| 
        course.id === 'java-001'|| 
        course.id === 'git-001'
    );

    return (
        <div className="container mx-auto py-8 mt-8 lg:mb-16">
            <h1 className="text-5xl font-mono text-center mb-8 bg-gradient-to-r from-[#e8b847] via-[#a79049] to-[#000000] bg-clip-text text-transparent animate-bounce">
              courses You May Like
            </h1>
            <div className="flex flex-wrap justify-center">
                {filteredcourses.map((course) => (
                    <div className="m-4" key={course.id}> {/* Move key here */}
                        <CourseCard course={course} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CourseList;
