import React, { useEffect, useState } from 'react';
import axiosInstance from './../../lib/axiosInstance'; // Import Axios instance
import CourseCard from './CourseCard';

const CourseList = () => {
    const [courses, setCourses] = useState([]);
    const [tracks, setTracks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch tracks and courses on component mount
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
    
                // Fetch tracks and courses
                const tracksResponse = await axiosInstance.get('/trackes');
                const coursesResponse = await axiosInstance.get('/courses');
    
                console.log('Tracks Data:', tracksResponse.data.data); // Log tracks data
                console.log('Courses Data:', coursesResponse.data.data); // Log courses data
    
                // Set tracks and courses data
                setTracks(tracksResponse.data.data);
                setCourses(coursesResponse.data.data);
            } catch (error) {
                console.error('Error fetching data:', error); // Log any errors
                setError('Error fetching data.');
            } finally {
                setLoading(false);
            }
        };
    
        fetchData();
    }, []);
    

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    // Find the Beginner Track (you can change the track id accordingly)
    const beginnerTrack = tracks.find(track => track.trackTitle === 'frontend');//track not added now  'beginner'

    if (!beginnerTrack) return <div>No track found</div>;

    // Filter courses that belong to the Beginner Track
    // const filteredCourses = courses.filter(course =>
    //     beginnerTrack._id === course.trackId
    // );
    const filteredCourses = courses.filter(course => {
        console.log('Course Track ID:', course.trackId, 'Beginner Track ID:', beginnerTrack._id);
        return course.trackId._id === beginnerTrack._id ;
    });
    

    return (
        <div className="container py-8 mt-8 lg:mb-16 px-4 max-w-7xl mx-auto">
            <h1 className="text-5xl font-mono text-center mb-8 
                           bg-gradient-to-r from-[#e8b847] via-[#a79049] to-[#000000] 
                           bg-clip-text text-transparent animate-bounce">
                Courses You May Like
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCourses.map(course => (
                    <div key={course._id} className="transition-transform duration-300 transform hover:scale-105">
                        <CourseCard course={course} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CourseList;
