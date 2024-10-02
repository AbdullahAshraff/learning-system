import Avatar from '@mui/material/Avatar';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import EditButton from './EditButton';

const PictureSection = ({ user }) => {
  return (
    <>
      <div className="flex flex-row flex-wrap gap-5">
        <div className="field-name no-after">
          <Avatar
            alt={`${user.name} profile picture`}
            src={user.picture}
            sx={{ height: 200, width: 200, maxWidth: '100%' }}
          />
        </div>

        <div className="flex flex-row items-center">
          <EditButton label="View and Edit Picture"/>
        </div>
      </div>
    </>
  );
};

export default PictureSection;
