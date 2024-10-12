import { Button, Divider } from '@mui/material';
import Section from '../hoc/Section';
import { useContext } from 'react';
import { UserContext } from '../../../contexts/UserContext';
import './index.css';
import TextEasyEdit from '../components/TextEasyEdit';
import PageWrapper from '../hoc/PageWrapper';

const Page = () => {
  const { user, setUser } = useContext(UserContext);
  let email = user.email;

  return (
    <PageWrapper>
      <Section title="Login Credintials">
        <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] max-w-[800px] gap-2 md:gap-5 items-baseline">
          <div className="field-name">Email</div>
          <div className="field-value text-lg md:text-xl font-bold flex flex-wrap items-center">
            <TextEasyEdit text={email} />
          </div>
        </div>
      </Section>
      <Divider sx={{ marginTop: '20px', marginBottom: '20px' }} />
      <Section title="Delete Account">
        <div className="text-sm md:text-base mb-6">
          By deleting your account, all of your data will be removed from our
          servers. This includes all of your courses, progress, and other
          account information. This action is permanent and cannot be undone.
        </div>
        <div className="text-lg md:text-xl font-bold flex flex-wrap items-center">
          <Button
            variant="outlined"
            className="!text-red-700 !border-red-700 !border-1 !rounded-full !text-base sm:!text-lg !py-1 sm:py-2"
            sx={{
              height: 'fit-content',
              fontWeight: 'bold',
              textTransform: 'capitalize',
            }}
          >
            Delete My Account
          </Button>
        </div>
      </Section>
    </PageWrapper>
  );
};

export default Page;
