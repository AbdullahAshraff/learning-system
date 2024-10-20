import EasyEdit from 'react-easy-edit';
import SaveButton from './buttons/SaveButton';
import CancelButton from './buttons/CancelButton';
import EditIconButton from './buttons/EditIconButton';
import './easy-edit.css';

export default function LinkEasyEdit({ text }) {
  const handleEdit = value => {
    text = value;
    console.log(text);
  };

  return (
    <EasyEdit
      type="text"
      cssClassPrefix="flex items-center justify-start gap-1 h-full flex-wrap "
      editButtonLabel={<EditIconButton label="edit" />}
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
