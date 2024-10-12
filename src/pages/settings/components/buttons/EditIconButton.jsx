import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';


function EditIconButton() {
  return (
    <IconButton className="!text-yellow-700 !border-yellow-700 !border-2 !border-solid !p-1 md:!p-2">
      <EditIcon className=" !text-xl sm:!text-2xl " />
    </IconButton>
  );
}

export default EditIconButton;
