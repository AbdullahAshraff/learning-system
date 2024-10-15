import { FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Profile = ({ profile }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-xs text-center cursor-pointer">
            <img
                src={profile.image}
                alt={profile.Name}
                className="mx-auto rounded-full object-cover w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 shadow-md"
            />
            <h2 className="mt-4 text-xl font-semibold cursor-pointer">{profile.Name}</h2>
            <p className="text-amber-500 uppercase text-sm">{profile.Job}</p>
            <p className="text-gray-600 mt-4 text-left">
                {profile.description}
            </p>
            <hr className="mt-6 border-gray-300" />
            <div className="mt-4 flex justify-center space-x-4">
                <a href={profile.Linkedin} className="text-amber-600" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={24} />
                </a>
                <a href={profile.GitHub} className="text-amber-600" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={24} />
                </a>
                <a href={profile.Youtube} className="text-amber-600" target="_blank" rel="noopener noreferrer">
                    <FaYoutube size={24} />
                </a>
            </div>
        </div>
    );
};

// Define prop types for the ProfileCard component
Profile.propTypes = {
    profile: PropTypes.shape({
        id: PropTypes.number.isRequired,
        Name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        Job: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        Linkedin: PropTypes.string,
        Youtube: PropTypes.string,
        GitHub: PropTypes.string,
    }).isRequired,
};

export default Profile;
