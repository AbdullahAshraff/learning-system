import { useContext, useEffect, useState } from 'react';
import coursesList from './../../constants/courses';
import CourseCard from './CourseCard';
import axiosInstance from '../../lib/axiosInstance';
import Loading from '../../components/LoadingCircularProgress';
import { UserContext } from '../../contexts/UserContext';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function CoursesGrid() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user, userDataLoading } = useContext(UserContext);
  const [enrolledCourses, setEnrolledCourses] = useState(user.enrolled || []);

  useEffect(() => {
    const fetchEnrolledCourses = async () => {
      try {
        const response = await axiosInstance.get('/enrolled');
        setLoading(false);
        setEnrolledCourses(response.data.data);
      } catch (error) {
        console.error(error);
        setError(error);
        setLoading(false);
      }
    };
    if (userDataLoading) return;
    fetchEnrolledCourses();
  }, [userDataLoading]);

  if (error) return <div>Something went wrong</div>;
  if (loading) return <Loading />;
  if (enrolledCourses.length === 0)
    return (
      <div className="flex flex-col ">
        <div className="text-lg font-semibold mb-5">No courses enrolled</div>
        <Link to="/tracks_list" className="w-fit">
          <Button
            variant="contained"
            color="primary"
            className="mt-6 w-fit !bg-yellow-700"
          >
            Go to Courses
          </Button>
        </Link>
      </div>
    );
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-3">
      {enrolledCourses.map(courseInfo => {
        return (
          <CourseCard
            courseInfo={courseInfo}
            key={courseInfo._id}
          />
        );
      })}
    </div>
  );
}

export default CoursesGrid;
