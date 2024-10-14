import CourseCard from './CourseCard';
import tracks from './../../constants/tracks.js';

const CourseList = () => {
  // Filter the tracks to only include Frontend, Java, and Mobile tracks
  const filteredTracks = tracks.filter(
    track =>
      track.id === 'frontend-001' ||
      track.id === 'java-001' ||
      track.id === 'mobile-001'
  );

  return (
    <div className="container mx-auto py-8 mt-8 lg:mb-16">
      <h1 className="text-5xl font-mono text-center mb-8 bg-gradient-to-r from-[#e8b847] via-[#a79049] to-[#000000] bg-clip-text text-transparent animate-bounce">
        Tracks You May Like
      </h1>
      <div className="flex flex-wrap justify-center">
        {filteredTracks.map(track => (
          <CourseCard key={track.id} track={track} />
        ))}
      </div>
    </div>
  );
};

export default CourseList;
