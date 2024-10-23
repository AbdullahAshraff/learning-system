import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function CourseCard({ courseInfo, handleUnenroll }) {


  return (
    <div className="bg-yellow-100 p-3 rounded-md relative flex flex-col justify-between">
      <div className="text-lg font-semibold mb-2">{courseInfo.title}</div>
      <div className="text-gray-600 mb-4 rounded-md pl-2">
        {courseInfo.description}
      </div>
      <div className="flex flex-row flex-wrap justify-between items-end gap-4">
        <Button
          variant="outlined"
          className="!text-red-700 !border-red-700 !border-1 !text-sm !py-1 sm:py-2"
          sx={{
            height: 'fit-content',
            fontSize: '10px',
            fontWeight: 'bold',
            textTransform: 'capitalize',
            borderRadius: '10px',
          }}
          onClick={()=>handleUnenroll(courseInfo)}
        >
          Unenroll
        </Button>
        <Link to={`/learn?courseId=${courseInfo._id}`}>
          <Button
            className="!bg-yellow-700"
            style={{ textTransform: 'none', borderRadius: '10px' }}
            variant="contained"
            endIcon={<ArrowForwardIcon />}
          >
            Go to course
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default CourseCard;
