import { Button } from '@mui/material';

export default function CancelButton(props) {
  return (
    <Button
      variant="outlined"
      className="!text-red-700 !border-red-700 !border-1 !rounded-full !text-sm sm:!text-base !py-1 sm:py-2"
      sx={{
        height: 'fit-content',
        fontSize: '16px',
        fontWeight: 'bold',
        textTransform: 'capitalize',
      }}
      { ...props }
    >
      Cancel
    </Button>
  );
}
