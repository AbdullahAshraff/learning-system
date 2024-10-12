import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';


function EditIconButton() {
  return (
    <IconButton className="!text-indigo-700 !border-indigo-700 !border-2 !border-solid !p-1 md:!p-2">
      <EditIcon className=" !text-xl sm:!text-2xl " />
    </IconButton>
  );
}

export default EditIconButton;
