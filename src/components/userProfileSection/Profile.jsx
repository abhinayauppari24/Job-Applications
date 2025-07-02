import React, { useRef, useState } from 'react';
import { profileFields } from '../../assets/assets';

const Profile = () => {

  const [formData, setFormData] = useState(
  Object.fromEntries(profileFields.map((field) => [field.key, '']))
  );

  const fileInputRef = useRef(null);
  const [resumeName, setResumeName] = useState('');
  const [resumeFile, setResumeFile] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});


  const handleFileClick = () => {
    fileInputRef.current.click();
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setResumeFile(file); 
      setResumeName(file.name);
    }
  };

  // updates form state when a user types into an input field.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // check if all required fields input entered or not.
  const validate = () => {
  const errors = {};
    profileFields.forEach((field) => {
      if (field.required && !formData[field.key].trim()) {
        errors[field.key] = `${field.label} is required`;
      }
    });

    if (!resumeFile) {
      errors.resume = 'Resume is required';
    }

    setValidationErrors(errors);
  return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Profile Data:', formData, resumeFile);
      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 3000);
    } 
    else {
      setSubmitSuccess(false);
    }
  };
  

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-xl font-semibold text-sky-700 mb-6">Basic Details</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-md rounded-2xl p-4 border border-gray-200">
       
        {profileFields.map((field) => (
          <div key={field.key}>
            <label className="block text-base font-medium text-gray-700">
              {field.label}
              {field.required && <span className="text-red-500"> *</span>}
            </label>

            <input
              type={field.type}
              name={field.key}
              value={formData[field.key]}
              onChange={handleChange}
              placeholder={field.placeholder}
              className={`mt-1 block w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-gray-500 focus:ring-2 ${
                validationErrors?.[field.key]
                  ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                  : 'border-gray-300 focus:ring-sky-500 focus:border-sky-500'
              }`}
            />
            {validationErrors?.[field.key] && (
              <p className="text-red-500 text-sm mt-1">
                {validationErrors[field.key]}
              </p>
            )}

          </div>
        ))}

        {/* Resume Upload */}
        <div className="md:col-span-2">
            <label className="block text-base font-medium text-gray-700 mb-1">
              Upload Resume <span className="text-red-500">*</span>
            </label>

            {/* Hidden file input */}
            <input
              type="file"
              accept=".pdf"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
            />

            {/* Custom button */}
            <button
              type="button"
              onClick={handleFileClick}
              className={`border px-4 py-2 mt-2 rounded-xl hover:bg-gray-200 ${
                validationErrors.resume
                  ? 'border-red-500 text-red-700'
                  : 'border-gray-300 text-sky-800'
              }`}
              >
              Choose File
            </button>
            {validationErrors.resume && (
              <p className="text-red-500 text-sm mt-1">
                {validationErrors.resume}
              </p>
            )}
            {resumeName && <p className="mt-2 text-sm text-gray-600">{resumeName}</p>} {/* Show selected file name */}
        </div>

      </form>
        {/* Submit */}
        <div className="md:col-span-2 flex justify-end pt-5">
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-2 rounded-xl"
          >
            Save Changes
          </button>
        </div>
      {submitSuccess && (
        <p className="text-green-600 font-medium mt-4">
          Profile details saved successfully!
        </p>
      )}
    </div>
  );
};

export default Profile;
