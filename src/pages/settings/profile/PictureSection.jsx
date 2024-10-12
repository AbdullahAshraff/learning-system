import Avatar from '@mui/material/Avatar';
import EditButton from '../components/buttons/EditButton';

const PictureSection = ({ user }) => {
  return (
    <>
      <div className="flex flex-row flex-wrap gap-5">
        <div className="field-name no-after">
          <div className="h-[130px] w-[130px] md:h-[200px] md:w-[200px] rounded-full">
            <Avatar
              alt={`${user.name} profile picture`}
              src={user.picture}
              sx={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>

        <div className="flex flex-row items-center ml-3">
          <EditButton label="View and Edit Picture" />
        </div>
      </div>
    </>
  );
};

export default PictureSection;
