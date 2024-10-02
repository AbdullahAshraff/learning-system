import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

function EditButton({ label, props }) {
  return (
    <Button
      variant="outlined"
      endIcon={<EditIcon />}
      className="!text-indigo-700 !border-indigo-700 !border-2 !rounded-full"
      sx={{
        height: 'fit-content',
        fontSize: '16px',
        fontWeight: 'bold',
        textTransform: 'capitalize',
      }}
      {...props}
    >
      {label}
    </Button>
  );
}

export default EditButton;
