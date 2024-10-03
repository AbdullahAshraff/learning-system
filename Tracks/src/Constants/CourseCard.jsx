import React from 'react';
import { FaStar, FaUsers, FaBookOpen } from 'react-icons/fa';

const CourseCard = ({ course }) => {
    // Function to render star icons based on the rating
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <FaStar
                    key={i}
                    className={`h-5 w-5 ${i < rating ? 'text-yellow-500' : 'text-gray-300'}`}
                />
            );
        }
        return stars;
    };

    return (
        <div className="border rounded-lg p-6 shadow-lg transition-transform transform hover:scale-100 hover:shadow-amber-700 relative bg-white overflow-hidden mx-5 max-w-xs group">
            <img 
                src={course.image} 
                alt={course.title} 
                className="w-full h-48 object-cover mb-4 rounded-md transition-transform duration-500 transform group-hover:scale-110" 
            />
            <h2 className="text-xl font-semibold text-gray-800 hover:text-[#DEB041] transition-colors duration-300">{course.title}</h2>
            <p className="text-gray-600 text-sm mb-2">{course.description}</p>
            <div className="mt-2 flex justify-between items-center text-sm">
                <div className="flex items-center space-x-1">
                    <FaBookOpen className="h-4 w-4 text-gray-500" />
                    <p className="text-gray-500">{course.classes}</p>
                </div>
                <div className="flex items-center space-x-1">
                    <FaUsers className="h-4 w-4 text-gray-500" />
                    <p className="text-gray-500">{course.students}</p>
                </div>
            </div>
            <div className="mt-2 flex items-center">
                {renderStars(course.rating)} {/* Render star icons */}
            </div>
            <div className="mt-3 flex justify-between items-center text-lg font-bold text-[#DEB041]">
                <p>${course.price}</p>
                <a 
                    href="#" 
                    className="bg-gradient-to-r from-[#DEB041] to-[#998443] text-white px-4 py-2 rounded-md 
                            transition-transform duration-300 
                            transform hover:scale-105">
                    Enroll Now
                </a>
    
            </div>
        </div>
    );
};

export default CourseCard;
