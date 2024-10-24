import { Button } from '@mui/material';


export default function SaveButton(props) {
  return (
    <Button
      variant="contained"
      className="!bg-green-800 !rounded-full !text-sm sm:!text-base !py-1 sm:py-2"
      sx={{
        height: 'fit-content',
        fontSize: '16px',
        fontWeight: 'bold',
        textTransform: 'capitalize',
      }}
      { ...props }
    >
      Save
    </Button>
  );
}