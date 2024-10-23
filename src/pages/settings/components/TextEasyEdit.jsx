import EditButton from './buttons/EditButton';
import EasyEdit from 'react-easy-edit';
import SaveButton from './buttons/SaveButton';
import CancelButton from './buttons/CancelButton';
import './easy-edit.css';
import { useContext, useState } from 'react';
import axiosInstance from '../../../lib/axiosInstance';
import toast from 'react-hot-toast';
import { UserContext } from '../../../contexts/UserContext';

export default function TextEasyEdit({ text, formKey }) {
  const [loading, setLoading] = useState(false);
  const { handleUpdateData } = useContext(UserContext);

  const handleEdit = async value => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append(formKey, value);

      await axiosInstance.put('/users/updateMyData', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success(`${formKey} updated successfully.`);
      handleUpdateData();
    } catch (error) {
      toast.error(`An error occurred while updating ${formKey}.`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <EasyEdit
      type="text"
      cssClassPrefix="flex items-center justify-start gap-1 h-full flex-wrap "
      editButtonLabel={
        <EditButton label={text === '' ? 'add' : 'edit'} disabled={loading} />
      }
      saveButtonLabel={<SaveButton />}
      cancelButtonLabel={<CancelButton />}
      placeholder={text}
      value={text}
      hideEditButton={false}
      // cancelOnBlur
      onSave={handleEdit}
      onCancel={() => {}}
    />
  );
}
