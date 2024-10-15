import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types'; // Import PropTypes

const CourseCard = ({ course }) => {
    const navigate = useNavigate(); // Hook to navigate to different routes

    const handleTrackClick = (courseId) => {
      if (navigate) {
        navigate(`/course?id=${courseId}`); // Navigate to the track details page if navigate exists
      }
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
            </div>
            <div className="mt-3 flex justify-between items-center text-lg font-bold text-[#DEB041]" onClick={() => handleTrackClick(course.id)}>
                <span 
                    className="bg-gradient-to-r from-[#DEB041] to-[#998443] text-white px-4 py-2 rounded-md cursor-pointer
                            transition-transform duration-300 
                            transform hover:scale-105">
                    Enroll Now
                </span>
            </div>
        </div>
    );
};

// Define prop types for validation
CourseCard.propTypes = {
  course: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // Validate id
    image: PropTypes.string.isRequired, // Validate image
    title: PropTypes.string.isRequired, // Validate title
    description: PropTypes.string.isRequired, // Validate description
  }).isRequired,
};

export default CourseCard;
