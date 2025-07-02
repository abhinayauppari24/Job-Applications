import React, { useState } from 'react';
import Profile from '../userProfileSection/Profile';
import Education from '../userProfileSection/Education';
import Address from '../userProfileSection/Address';
import Projects from '../userProfileSection/Projects';
import Experience from '../userProfileSection/Experience';
import Certifications from '../userProfileSection/Certifications';
import OtherDetails from '../userProfileSection/OtherDetails';

const sections = [
  'Profile',
  'Education',
  'Address',
  'Projects',
  'Experience',
  'Certifications',
  'Other Details',
];

const UserProfile = () => {
  const [selectedSection, setSelectedSection] = useState('Profile');

  const renderSection = () => {
    switch (selectedSection) {
      case 'Profile':
        return <Profile />;
      case 'Education':
        return <Education />;
      case 'Address':
        return <Address />;
      case 'Projects':
        return <Projects />;
      case 'Experience':
        return <Experience />;
      case 'Certifications':
        return <Certifications />;
      case 'Other Details':
        return <OtherDetails />;
      default:
        return <div>Select a section</div>;
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      
      {/* Sidebar: horizontal on mobile, vertical on desktop */}
      <div className="w-full md:w-1/5 bg-white p-4 border-b md:border-b-0 md:border-r">
        <ul className="flex overflow-x-auto md:overflow-visible md:flex-col gap-3 md:gap-2 md:text-lg text-base">
          {sections.map((section) => (
            <li
              key={section}
              onClick={() => setSelectedSection(section)}
              className={`whitespace-nowrap cursor-pointer px-4 py-2 rounded-md transition ${
                selectedSection === section
                  ? 'bg-sky-700 text-white'
                  : 'text-gray-700 hover:bg-gray-200'
              }`}
            >
              {section}
            </li>
          ))}
        </ul>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-6">
        {renderSection()}
      </div>
    </div>
  );
};

export default UserProfile;
