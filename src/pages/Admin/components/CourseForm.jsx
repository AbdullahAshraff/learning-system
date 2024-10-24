import { useState } from 'react';

const CourseForm = ({ activeTrack, onAddCourse }) => {
  const [courseTitle, setCourseTitle] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [courseImage, setCourseImage] = useState(null);
  const [courseAlt, setCourseAlt] = useState('');

  const handleAddCourse = () => {
    if (courseTitle && courseImage) {
      const newCourse = {
        title: courseTitle,
        description: courseDescription,
        image: URL.createObjectURL(courseImage),
        alt: courseAlt,
        videos: [],
      };
      onAddCourse(activeTrack, newCourse);
      setCourseTitle('');
      setCourseDescription('');
      setCourseImage(null);
      setCourseAlt('');
    }
  };

  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-4">Add Course</h3>
      <div className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Course Title"
          value={courseTitle}
          onChange={(e) => setCourseTitle(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg shadow-sm"
        />
        <textarea
          placeholder="Course Description"
          value={courseDescription}
          onChange={(e) => setCourseDescription(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg shadow-sm"
          rows="3"
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setCourseImage(e.target.files[0])}
          className="p-3 border border-gray-300 rounded-lg shadow-sm"
        />
        <input
          type="text"
          placeholder="Image Alt Text"
          value={courseAlt}
          onChange={(e) => setCourseAlt(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg shadow-sm"
        />
        <button
          onClick={handleAddCourse}
          className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
        >
          Add Course
        </button>
      </div>
    </div>
  );
};

export default CourseForm;
