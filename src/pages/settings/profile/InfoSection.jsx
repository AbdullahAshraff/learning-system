import Avatar from '@mui/material/Avatar';
import { Button, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import EditButton from './EditButton';
import ShowMoreText from 'react-show-more-text';

const InfoSection = ({ user }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] max-w-[800px]">
        <div className="field-name">Name</div>
        <div className="field-value text-xl font-bold flex flex-wrap gap-4 items-center">
          <div>{user.name}</div>

          <EditButton label="edit" />
        </div>
        <div className="field-name">Username</div>
        <div className="field-value text-xl font-bold flex flex-wrap gap-4 items-center">
          <div>@{user.username}</div>

          <EditButton label="edit" />
        </div>
        <div className="field-name">Biography</div>
        <div className="field-value text-sm flex flex-wrap gap-4 items-center">
          <ShowMoreText
            className=""
            lines={4}
            more={
              <span className="text-indigo-700 font-bold cursor-pointer">
                Show More
              </span>
            }
            less={
              <span className="text-indigo-700 font-bold cursor-pointer">
                Show Less
              </span>
            }
          >
            {user.bio}
          </ShowMoreText>
          <div className="">
            <EditButton label="edit" />
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoSection;
