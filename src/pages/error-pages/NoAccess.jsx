import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NoAccess = () => {
  const navigate = useNavigate();

  const handleReturnHome = () => {
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center p-6 bg-white shadow-md rounded-md">
        <h1 className="text-3xl font-bold text-red-600">Access Denied</h1>
        <p className="mt-4 text-lg">
          You don&apos;t have access to view this page.
        </p>
        <Button
          variant="contained"
          color="primary"
          className="mt-6"
          onClick={handleReturnHome}
        >
          Return to Home
        </Button>
      </div>
    </div>
  );
};

export default NoAccess;
