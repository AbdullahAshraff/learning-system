import React, { useEffect, useState } from 'react';
import Profile from './Profile'; // Reusable component to display each instructor.

const ProfileList = () => {
  const [instructors, setInstructors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch course data from the API to extract instructors.
  useEffect(() => {
    const fetchInstructors = async () => {
      try {
        const response = await fetch('https://basatha-khaki.vercel.app/api/v1/courses');
        if (!response.ok) throw new Error('Failed to fetch instructors.');

        const { data: courses } = await response.json();

        // Extract unique instructors from courses.
        const uniqueInstructors = courses.map((course) => ({
          name: course.instructorName,
          job: course.instructorJob,
          image: course.instructorImage,
          description: course.description,
          links: course.instructorLinks?.split(',') || [],
        }));

        setInstructors(uniqueInstructors);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchInstructors();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {instructors.map((instructor, index) => (
        <Profile key={index} profileData={instructor} />
      ))}
    </div>
  );
};

export default ProfileList;
