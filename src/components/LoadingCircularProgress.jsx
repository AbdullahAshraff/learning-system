import CircularProgress from '@mui/material/CircularProgress';

const Loading = () => {
  console.log('Loading render');
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <CircularProgress />
    </div>
  );
};

export default Loading;
