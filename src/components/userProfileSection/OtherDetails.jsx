import React, { useState } from 'react';
import { achievementFields, websiteFields } from '../../assets/assets';

const OtherDetails = () => {
  const [achievements, setAchievements] = useState([
    Object.fromEntries(achievementFields.map(field => [field.key, ''])),
  ]);
  const [websites, setWebsites] = useState([
    Object.fromEntries(websiteFields.map(field => [field.key, ''])),
  ]);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (list, setList, index, key, value) => {
    const updated = [...list];
    updated[index][key] = value;
    setList(updated);
  };

  const handleAdd = (list, setList, fields) => {
    setList([...list, Object.fromEntries(fields.map(field => [field.key, '']))]);
  };

  const handleRemove = (list, setList, index) => {
    const updated = list.filter((_, i) => i !== index);
    setList(updated);
  };

  const handleSubmit = () => {
    console.log('Achievements:', achievements);
    console.log('Websites:', websites);
    setSubmitSuccess(true);
    setTimeout(() => setSubmitSuccess(false), 3000);
  };

  return (
    <div className="space-y-6 px-4 sm:px-6 lg:px-8">
      <h2 className="text-xl font-semibold text-sky-700">Achievements</h2>

      {achievements.map((entry, index) => (
        <div
          key={index}
          className="grid md:grid-cols-2 gap-4 bg-white shadow-md rounded-2xl p-4 border border-gray-200"
        >
          {achievementFields.map(field => (
            <div key={field.key} className="flex flex-col">
              <label className="text-base font-medium text-gray-700 mb-1">{field.label}</label>
              
              <input
                type="text"
                value={entry[field.key]}
                onChange={(e) =>
                  handleChange(achievements, setAchievements, index, field.key, e.target.value)
                }
                placeholder={field.placeholder}
                className="border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
          ))}
          {achievements.length > 1 && (
            <div className="col-span-full flex justify-end">
              <button
                onClick={() => handleRemove(achievements, setAchievements, index)}
                className="text-red-600 text-sm hover:underline"
              >
                Remove
              </button>
            </div>
          )}
        </div>
      ))}

      <div className="flex justify-between flex-col md:flex-row gap-3">
        <button
          onClick={() => handleAdd(achievements, setAchievements, achievementFields)}
          className="bg-sky-700 hover:bg-sky-800 text-white font-medium px-4 py-2 rounded-xl"
        >
          + Add More Achievement
        </button>
      </div>

      <h2 className="text-xl font-semibold text-sky-700 pt-6">Website Links</h2>

      {websites.map((entry, index) => (
        <div
          key={index}
          className="grid md:grid-cols-2 gap-4 bg-white shadow-md rounded-2xl p-4 border border-gray-200"
        >
          {websiteFields.map(field => (
            <div key={field.key} className="flex flex-col">
              <label className="text-base font-medium text-gray-700 mb-1">{field.label}</label>
              
              <input
                type="text"
                value={entry[field.key]}
                onChange={(e) =>
                  handleChange(websites, setWebsites, index, field.key, e.target.value)
                }
                placeholder={field.placeholder}
                className="border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
          ))}
          {websites.length > 1 && (
            <div className="col-span-full flex justify-end">
              <button
                onClick={() => handleRemove(websites, setWebsites, index)}
                className="text-red-600 text-sm hover:underline"
              >
                Remove
              </button>
            </div>
          )}
        </div>
      ))}

      <div className="flex justify-between flex-col md:flex-row gap-3 pt-4">
        <button
          onClick={() => handleAdd(websites, setWebsites, websiteFields)}
          className="bg-sky-700 hover:bg-sky-800 text-white font-medium px-4 py-2 rounded-xl"
        >
          + Add Website
        </button>

        <button
          onClick={handleSubmit}
          className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-2 rounded-xl"
        >
          Save Changes
        </button>
      </div>

      {submitSuccess && (
        <p className="text-green-600 font-medium mt-2">Details submitted successfully!</p>
      )}
    </div>
  );
};

export default OtherDetails;
