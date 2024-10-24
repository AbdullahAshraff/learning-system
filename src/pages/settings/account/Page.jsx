import { Button, Divider } from '@mui/material';
import Section from '../hoc/Section';
import { useContext, useState } from 'react';
import { UserContext } from '../../../contexts/UserContext';
import './index.css';
import TextEasyEdit from '../components/TextEasyEdit';
import EditButton from '../components/buttons/EditButton';
import SaveButton from '../components/buttons/SaveButton';
import CancelButton from '../components/buttons/CancelButton';
import toast from 'react-hot-toast';
import axiosInstance from '../../../lib/axiosInstance';

const Page = () => {
  const { user } = useContext(UserContext);
  let email = user.email;
  const [passwordChanging, setPasswordChanging] = useState(false);
  const [passwords, setPasswords] = useState({
    currentPassword: '',
    password: '',
    passwordConfirm: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setPasswords(prevPasswords => ({ ...prevPasswords, [name]: value }));
  };

  const handlePasswordSubmit = async () => {
    setLoading(true);
    if (passwords.currentPassword === '') {
      toast.error('Enter your currentPassword!');
      return;
    }
    if (passwords.password === '') {
      toast.error('New password field is empty!');
      return;
    }
    if (passwords.password !== passwords.passwordConfirm) {
      toast.error('Password confirm does not match new password!');
      return;
    }
    try {
      await axiosInstance.put('users/updateMyPassword', passwords);
      setPasswords({ currentPassword: '', password: '', passwordConfirm: '' });
      setPasswordChanging(false);
      toast.success('Password changed successfully!');
    } catch (error) {
      toast.error(error.response.data.errors[0].msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Section title="Login Credintials">
        <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] max-w-[800px] gap-2 md:gap-5 items-baseline">
          <div className="field-name">Email</div>
          <div className="field-value text-lg md:text-xl font-bold flex flex-wrap items-center">
            <TextEasyEdit text={email} formKey="email" />
          </div>
          <div className="field-name">Password</div>
          <div className="field-value text-lg md:text-xl font-bold flex flex-wrap items-center">
            {passwordChanging ? (
              <form className="text-base flex flex-col">
                <div>
                  <div>old password</div>
                  <input
                    className="mr-4 mb-2"
                    type="password"
                    name="currentPassword"
                    value={passwords.currentPassword}
                    onChange={handleChange}
                  />
                  <div>new password</div>
                  <input
                    className="mr-4 mb-2"
                    type="password"
                    name="password"
                    value={passwords.password}
                    onChange={handleChange}
                  />
                  <div>confirm password</div>
                  <input
                    className="mr-4 mb-2"
                    type="password"
                    name="passwordConfirm"
                    value={passwords.passwordConfirm}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex gap-2 justify-end mt-2">
                  <SaveButton
                    label="Change Password"
                    onClick={handlePasswordSubmit}
                    disabled={loading}
                  />
                  <CancelButton
                    label="Cancel"
                    onClick={() => {
                      setPasswords({
                        currentPassword: '',
                        password: '',
                        passwordConfirm: '',
                      });
                      setPasswordChanging(false);
                    }}
                    disabled={loading}
                  />
                </div>
              </form>
            ) : (
              <>
                <div className="mr-4">********</div>
                <EditButton
                  label="Change Password"
                  onClick={() => setPasswordChanging(true)}
                />
              </>
            )}
          </div>
        </div>
      </Section>
      {/* <Divider sx={{ marginTop: '20px', marginBottom: '20px' }} />
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
      </Section> */}
    </>
  );
};

export default Page;
