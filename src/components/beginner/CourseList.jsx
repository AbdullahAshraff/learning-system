import CourseCard from './CourseCard';
import courses from './../../constants/courses.js';
import tracksList from './../../constants/tracks.js'; // Import the tracks list

const CourseList = () => {
    // Find the Beginner Track in the tracksList
    const beginnerTrack = tracksList.find(track => track.id === 'beginner-001');

    // Filter courses that belong to the Beginner Track
    const filteredCourses = courses.filter(course =>
        beginnerTrack.courseIds.includes(course.id)
    );

    return (
        <div className="container py-8 mt-8 lg:mb-16 px-4 max-w-7xl mx-auto">
            {/* Title with Animation */}
            <h1 className="text-5xl font-mono text-center mb-8 
                           bg-gradient-to-r from-[#e8b847] via-[#a79049] to-[#000000] 
                           bg-clip-text text-transparent animate-bounce">
                Courses You May Like
            </h1>

            {/* Course Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCourses.map(course => (
                    <div key={course.id} className="transition-transform duration-300 transform hover:scale-105">
                        <CourseCard course={course} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CourseList;
