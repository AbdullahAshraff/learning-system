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
    <>
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
    </>
  );
};

export default Page;
