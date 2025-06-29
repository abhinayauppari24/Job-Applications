import React from 'react';
import { Link } from "react-router-dom";
import Internship from './Internship';

const ApplicationSection = () => {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-b from-sky-900 to-sky-300 flex flex-col items-center px-4 py-10">
          {/* Quotation Section */}
          <div className="w-full text-center text-white mb-8 px-4 mt-7">
            <p className="text-3xl md:text-4xl font-semibold mb-2">
              The first step toward success is showing up — and clicking 'Apply'.
            </p>
            <p className="text-xl md:text-2xl opacity-90">
              Every click to apply is a commitment to growth.
            </p>
          </div>

        <div className="max-w-4xl w-full mt-10">
          {/* Card Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Internship Card */}
            <Link to="internshipspage" className="block">
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center transition-transform transform hover:scale-105 duration-300 cursor-pointer">
                <h2 className="text-2xl font-bold text-sky-800 mb-4">
                  Click here for Internships
                </h2>
                <p className="text-gray-600">
                  Explore top internship opportunities curated just for you.
                </p>
              </div>
            </Link>

            {/* Job Card */}
            <Link to="jobspage" className="block">
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center transition-transform transform hover:scale-105 duration-300  cursor-pointer">
                <h2 className="text-2xl font-bold text-sky-800 mb-4">
                  Click here for Jobs
                </h2>
                <p className="text-gray-600">
                  Discover job openings and start your career by applying today.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplicationSection;
