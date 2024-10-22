import { FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa';

const Profile = ({ profileData }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-xs my-10 text-center cursor-pointer ">
            <img
                src={profileData.image}
                alt={profileData.name}
                className="mx-auto rounded-full object-cover w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 shadow-md"
            />
            <h2 className="mt-4 text-xl font-semibold">{profileData.name}</h2>
            <p className="text-amber-500 uppercase text-sm">{profileData.job}</p>
            <p className="text-gray-600 mt-4 text-left">
                {profileData.description}
            </p>
            <hr className="mt-6 border-gray-300" />
            <div className="mt-4 flex justify-center space-x-4">
                {profileData.links?.map((link, index) => (
                    <a
                        href={link}
                        key={index}
                        className="text-amber-600"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {index === 0 && <FaLinkedin size={24} />}
                        {index === 1 && <FaGithub size={24} />}
                        {index === 2 && <FaYoutube size={24} />}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Profile;
