import Avatar from '@mui/material/Avatar';
import CoursesGrid from './CoursesGrid';
import LinksChips from './LinksChips';
import ShowMoreText from 'react-show-more-text';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

const Page = () => {
  const { user } = useContext(UserContext);

  return (
    <div
      className="  sm:px-8 md:px-16 px-6 sm:py-8 md:py-16 py-10 max-w-7xl mx-auto relative w-full h-full bg-yellow-50 min-h-screen text-left"
      style={{ textAlign: 'left' }}
    >
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row md:gap-10">
          <div className="sided-element flex md:justify-center">
            <Avatar
              alt={`${user.name} profile picture`}
              src={user.profileImg}
              sx={{ height: 200, width: 200 }}
            />
          </div>
          <div className="flex flex-col flex-1">
            <div className=" flex flex-row flex-wrap gap-3 justify-between items-start mt-5 md:mt-10">
              <div>
                <div className="text-3xl font-bold text-start md:text-start">
                  {user.name}
                </div>
                <div className="text-1xl mt-1 text-gray-500">{user.email}</div>
              </div>
              <Link to="/settings/profile">
                <Button
                  className="!bg-yellow-700"
                  style={{
                    textTransform: 'uppercase',
                    borderRadius: '10px',
                    padding: '10px 30px',
                    height: 'fit-content',
                  }}
                  variant="contained"
                  endIcon={<EditIcon />}
                >
                  Edit Profile
                </Button>
              </Link>
            </div>
            {user.bio ? (
              <ShowMoreText
                className="mt-5 bg-yellow-200 p-3 rounded-md"
                lines={4}
                more={
                  <span className="text-yellow-700 font-bold cursor-pointer">
                    Show More
                  </span>
                }
                less={
                  <span className="text-yellow-700 font-bold cursor-pointer">
                    Show Less
                  </span>
                }
              >
                {user.bio}
              </ShowMoreText>
            ) : (
              <div className="mt-5 bg-yellow-200 p-3 rounded-md italic">
                You didn&apos;t add a bio yet.{' '}
                <Link
                  to="/settings/profile"
                  className="text-yellow-700 underline font-bold"
                >
                  Add one!
                </Link>
              </div>
            )}
            <LinksChips links={user.links} />
          </div>
        </div>

        <span className="divider">&nbsp;</span>

        <h1 className="text-2xl font-bold mb-6 ">Enrolled Courses</h1>
        <CoursesGrid />
      </div>
    </div>
  );
};

export default Page;
