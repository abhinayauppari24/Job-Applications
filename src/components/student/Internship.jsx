import React, { useEffect, useState } from 'react';
import axios from 'axios';

const InternshipPage = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api')
      .then(res => setJobs(res.data))
      .catch(err => {
        console.error(err);
        alert("Failed to fetch internships");
      });
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Available Internships</h2>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job, index) => (
          <div key={index} className="border rounded p-4 shadow">
            <h3 className="text-lg font-semibold">{job.Role}</h3>
            <p className="text-gray-700 font-medium">Company: {job.Company}</p>
            <p className="text-gray-600">Location: {job.Location}</p>
            <p className="text-gray-600">Salary: ₹{job.Salary}</p>
            <button className="mt-3 px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-800">
              Apply
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InternshipPage;
