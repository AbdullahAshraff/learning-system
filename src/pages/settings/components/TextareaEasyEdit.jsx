import EditButton from './buttons/EditButton';
import EasyEdit, { Types } from 'react-easy-edit';
import CancelButton from './buttons/CancelButton';
import SaveButton from './buttons/SaveButton';
import './easy-edit.css';
import { useContext, useState } from 'react';
import axiosInstance from '../../../lib/axiosInstance';
import toast from 'react-hot-toast';
import { UserContext } from '../../../contexts/UserContext';

export default function TextareaEasyEdit({ text, formKey }) {
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
      type={Types.TEXTAREA}
      disableAutoSubmit
      cssClassPrefix="flex items-center justify-start gap-1 h-full flex-wrap "
      editButtonLabel={<EditButton label={text === '' ? 'add' : 'edit'} />}
      saveButtonLabel={<SaveButton />}
      cancelButtonLabel={<CancelButton />}
      placeholder={text}
      value={text}
      // cancelOnBlur
      hideEditButton={false}
      onSave={handleEdit}
      onCancel={() => {}}
    />
  );
}
