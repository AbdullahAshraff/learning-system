import EditButton from './buttons/EditButton';
import EasyEdit, { Types } from 'react-easy-edit';
import CancelButton from './buttons/CancelButton';
import SaveButton from './buttons/SaveButton';
import './easy-edit.css';

export default function TextareaEasyEdit({ text }) {
  const handleEdit = value => {
    text = value;
    console.log(text);
  };

  return (
    <EasyEdit
      type={Types.TEXTAREA}
      disableAutoSubmit
      cssClassPrefix="flex items-center justify-start gap-1 h-full flex-wrap "
      editButtonLabel={<EditButton label="edit" />}
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
