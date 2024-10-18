import { useState } from 'react';
import AboutTab from '../Beginner/AboutTab'
import CoursesTab from '../Beginner/CoursesTab';

const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState("about");

  const tabs = [
    { id: 'about', label: 'About' },
    { id: 'course-content', label: 'Course Content' },
  ];

  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="flex justify-center space-x-4 mb-8">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`px-4 py-2 rounded-lg text-sm font-semibold ${
              activeTab === tab.id
                ? "bg-gradient-to-r from-[#DEB041] via-[#998443] to-[#0f0f0f] shadow-md text-white"
                : "border border-gray-300 text-gray-600"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        {activeTab === "about" && <AboutTab />}
        {activeTab === "Instructor" && <CoursesTab />}
      </div>
    </div>
  );
};

export default ProfileTabs;
