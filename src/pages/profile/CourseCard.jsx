import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function CourseCard({ courseInfo, enrolledCourse }) {
  return (
    <div className="bg-yellow-100 p-3 rounded-md relative flex flex-col justify-between">
      <div className="text-lg font-semibold mb-5">{courseInfo.title}</div>
      <div className="bg-yellow-200">{enrolledCourse.description}</div>
      <div className="flex flex-row flex-wrap justify-between items-end gap-4">
        <div className="text-xs text-start text-gray-600">
          Enrolled in {enrolledCourse.dateEnrolled}
        </div>
        <Link to={`/learn?courseId=${courseInfo.id}`}>
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