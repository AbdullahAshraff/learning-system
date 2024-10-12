import { Divider } from '@mui/material';
import PictureSection from './PictureSection';
import InfoSection from './InfoSection';
import LinksSection from './LinksSection';
import './index.css';
import Section from './../hoc/Section';
import { useContext } from 'react';
import { UserContext } from '../../../contexts/UserContext';

const Page = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div className="sm:px-8 md:px-16 px-6 sm:py-8 md:py-16 py-10 max-w-7xl mx-auto relative w-full h-full bg-indigo-50 min-h-full text-start ">
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
