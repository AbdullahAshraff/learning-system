import CircularProgress from '@mui/material/CircularProgress';

const Loading = (props) => {
  console.log('Loading render');
  return (
    <div className="w-full h-full flex justify-center items-center">
      <svg width={0} height={0}>
        <defs>
          <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="orange" />
            <stop offset="100%" stopColor="gold" />
          </linearGradient>
        </defs>
      </svg>
      <CircularProgress
        variant="indeterminate"
        disableShrink
        sx={{ 'svg circle': { stroke: 'url(#my_gradient)' } }}
        size={50}
        thickness={5}
        style={{ animationDuration: '0.5s' }}
        {...props}
      />
    </div>
  );
};

export default Loading;
