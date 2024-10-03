import React from 'react';
import CourseCard from '../../Constants/CourseCard';
import courses from '../../Constants/TracksCourses'

const CourseList = () => {
    return (
        <div className="container mx-auto py-8 mt-8 lg:mb-16">
            <h1 className="text-5xl font-mono text-center mb-8 bg-gradient-to-r from-[#e8b847] via-[#a79049] to-[#000000] bg-clip-text text-transparent animate-bounce">
                Tracks You May Like
            </h1>            
            <div className="flex flex-wrap justify-center">
                {courses.map((course) => (
                    <CourseCard key={course.title} course={course} />
                ))}
            </div>
        </div>
    );
};

export default CourseList;
