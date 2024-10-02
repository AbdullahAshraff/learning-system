import Avatar from '@mui/material/Avatar';
import { profilePic } from '../../../assets';
import { Button, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import PictureSection from './PictureSection';
import InfoSection from './InfoSection';
import LinksSection from './LinksSection';
import './index.css';

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
    picture: profilePic,
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

  return (
    <div className="  sm:px-8 md:px-16 px-6 sm:py-8 md:py-16 py-10 max-w-7xl mx-auto relative w-full h-full bg-indigo-50 min-h-screen ">
      <div className="flex flex-col">
        <PictureSection user={user} />
        <Divider sx={{ marginTop: '20px', marginBottom: '20px' }} />
        <InfoSection user={user} />
        <Divider sx={{ marginTop: '20px', marginBottom: '20px' }} />
        <LinksSection user={user} />
      </div>
    </div>
  );
};

export default Page;
