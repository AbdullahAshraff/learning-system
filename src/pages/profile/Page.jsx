import Avatar from '@mui/material/Avatar';
import { profilePic } from '../../assets';
import CoursesGrid from './CoursesGrid';
import LinksChips from './LinksChips';
import ShowMoreText from 'react-show-more-text';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Page = () => {
  const user = {
    name: 'Abdullah Ashraf',
    username: 'abdullahashraf',
    email: 'xg8Iz@example.com',
    phone: '0123456789',
    bio: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          assumenda rerum reiciendis quia vero reprehenderit, nostrum, velit
          ea exercitationem quibusdam esse? Itaque, fugit sapiente esse
          voluptate enim labore laboriosam ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti assumenda rerum reiciendis quia vero reprehenderit, nostrum, velit
          ea exercitationem quibusdam esse? Itaque, fugit sapiente esse
          voluptate enim labore laboriosam ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti assumenda rerum reiciendis quia vero reprehenderit, nostrum, velit
          ea exercitationem quibusdam esse? Itaque, fugit sapiente esse
          voluptate enim labore laboriosam ipsa.`,
    links: [
      {
        platform: 'github',
        username: 'abdullahashraf',
        url: 'https://github.com/abdullahashraf',
      },
      {
        platform: 'linkedin',
        username: 'abdullahashraf',
        url: 'https://www.linkedin.com/in/abdullahashraf/',
      },
      {
        platform: 'website',
        username: 'mywebsite.com',
        url: 'https://abdullahashraf.web.app',
      },
    ],
  };

  const enrolledCourses = [
    { id: 'backend-001', dateEnrolled: '2022-01-01' },
    { id: 'frontend-001', dateEnrolled: '2022-02-01' },
    { id: 'html-114', dateEnrolled: '2022-03-01' },
    { id: 'css-114', dateEnrolled: '2022-04-01' },
    { id: 'js-114', dateEnrolled: '2022-05-01' },
    { id: 'routing-114', dateEnrolled: '2022-06-01' },
    { id: 'formvalidation-114', dateEnrolled: '2022-07-01' },
  ];

  return (
    <div className="  sm:px-8 md:px-16 px-6 sm:py-8 md:py-16 py-10 max-w-7xl mx-auto relative w-full h-full bg-indigo-50 min-h-screen ">
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row md:gap-10">
          <div className="sided-element flex md:justify-center">
            <Avatar
              alt={`${user.name} profile picture`}
              src={profilePic}
              sx={{ height: 200, width: 200 }}
            />
          </div>
          <div className="flex flex-col flex-1">
            <div className=" flex flex-row flex-wrap gap-3 justify-between items-start mt-5 md:mt-10">
              <div>
                <div className="text-3xl font-bold text-start md:text-start">
                  {user.name}
                </div>
                <div className="text-1xl mt-1">@{user.username}</div>
              </div>
              <Link to="/settings/profile">
                <Button
                  className="!bg-indigo-700"
                  style={{
                    textTransform: 'uppercase',
                    borderRadius: '10px',
                    padding: '10px 30px',
                    height: 'fit-content',
                  }}
                  variant="contained"
                >
                  Edit Profile
                </Button>
              </Link>
            </div>
            <ShowMoreText
              className="mt-5 bg-indigo-200 p-3 rounded-md"
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
            <LinksChips links={user.links} />
          </div>
        </div>

        <span className="divider">&nbsp;</span>

        <h1 className="text-2xl font-bold mb-6 ">Enrolled Courses</h1>
        <CoursesGrid enrolledCourses={enrolledCourses} />
      </div>
    </div>
  );
};

export default Page;