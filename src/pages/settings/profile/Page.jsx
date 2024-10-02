import { profilePic } from '../../../assets';
import { Divider } from '@mui/material';
import PictureSection from './PictureSection';
import InfoSection from './InfoSection';
import LinksSection from './LinksSection';
import './index.css';
import Section from './../hoc/Section';

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
    links: {
      github: {
        username: 'abdullahashraf',
        url: 'https://github.com/abdullahashraf',
      },
      linkedin: {
        username: 'abdullahashraf',
        url: 'https://www.linkedin.com/in/abdullahashraf/',
      },
      website: {
        username: 'mywebsite.com',
        url: 'https://abdullahashraf.web.app',
      },
    },
  };

  return (
    <div className="  sm:px-8 md:px-16 px-6 sm:py-8 md:py-16 py-10 max-w-7xl mx-auto relative w-full h-full bg-indigo-50 min-h-full ">
      <div className="flex flex-col">
        <Section title="Personal Picture">
          <PictureSection user={user} />
        </Section>
        <Divider sx={{ marginTop: '20px', marginBottom: '20px' }} />
        <Section title="Info">
          <InfoSection user={user} />
        </Section>
        <Divider sx={{ marginTop: '20px', marginBottom: '20px' }} />
        <Section title="Links">
          <LinksSection user={user} />
        </Section>
      </div>
    </div>
  );
};

export default Page;
