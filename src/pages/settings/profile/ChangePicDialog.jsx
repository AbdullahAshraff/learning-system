import { useState, useContext } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import EditButton from '../components/buttons/EditButton';
import Loading from '../../../components/LoadingCircularProgress';
import axiosInstance from '../../../lib/axiosInstance';
import toast from 'react-hot-toast';
import { UserContext } from '../../../contexts/UserContext';

const ChangePicDialog = ({buttonLabel}) => {
  const [file, setFile] = useState(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { handleUpdateData } = useContext(UserContext);

  const handleUpload = async () => {
    setLoading(true);
    try {
      console.log(file);
      const formData = new FormData();
      formData.append('profileImg', file);

      await axiosInstance.put('/users/updateMyData', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success('Profile picture uploaded successfully.');
      setOpen(false);
      setFile(null);
      handleUpdateData();
    } catch (error) {
      toast.error('An error occurred while uploading the profile picture.');
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = e => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <EditButton label={buttonLabel} onClick={handleClickOpen} />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
      >
        <DialogTitle id="alert-dialog-title">
          {'Change Profile Picture'}
        </DialogTitle>
        <input type="file" onChange={handleFileChange} />
        <DialogActions>
          <Button onClick={handleUpload} disabled={loading || file === null}>
            {loading ? <Loading /> : 'Upload'}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ChangePicDialog;
