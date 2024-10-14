import { useState } from 'react';
import AboutTab from './AboutTab';
import CoursesTab from './CoursesTab';

const ProfileTabs = ({ track }) => {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="flex justify-center space-x-4 mb-8">
        {['about', 'course Content'].map(tab => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-lg text-sm font-semibold ${
              activeTab === tab
                ? 'bg-gradient-to-r from-[#DEB041] via-[#998443] to-[#0f0f0f] shadow-md text-white'
                : 'border border-gray-300 text-gray-600'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg text-black">
        {activeTab === 'about' && <AboutTab track={track} />}{' '}
        {/* Pass track data */}
        {activeTab === 'course Content' && (
          <CoursesTab courseData={track?.courseIds} />
        )}{' '}
        {/* Pass course IDs */}
      </div>
    </div>
  );
};

export default ProfileTabs;
