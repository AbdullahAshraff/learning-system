import ProfileData from '../../constants/instructors.js';
import ProfileCard from './Profile';

const ProfileList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {ProfileData.map(profile => (
        <ProfileCard key={profile.id} profile={profile} />
      ))}
    </div>
  );
};

export default ProfileList;
