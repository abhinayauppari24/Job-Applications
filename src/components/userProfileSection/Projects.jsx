import React, { useState } from 'react';
import { projectFields } from '../../assets/assets';

const Projects = () => {
  const [projectsList, setProjectsList] = useState([
    Object.fromEntries(projectFields.map((field) => [field.key,''])),
  ]);
  const [validationErrors, setValidationErrors] = useState([]);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (index, field, value) => {
    const updatedList = [...projectsList];
    updatedList[index][field] = value;
    setProjectsList(updatedList);
  };

  const handleAdd = () => {
    setProjectsList([
      ...projectsList,
      Object.fromEntries(projectFields.map((field) => [field.key,''])),
    ]);
  };

  const handleRemove = (index) => {
    const updatedList = projectsList.filter((_, i) => i !== index);
    setProjectsList(updatedList);
    setValidationErrors((prev) => prev.filter((_, i) => i !== index));
  };

  const validate = () => {
    const errors = [];

    projectsList.forEach((entry, idx) => {
      const entryErrors = {};
      projectFields.forEach((field) => {
        if (field.required && !entry[field.key].trim()) {
          entryErrors[field.key] = `${field.label} is required`;
        }
      });
      errors.push(entryErrors);
    });

    const hasErrors = errors.some((entry) => Object.keys(entry).length > 0);
    setValidationErrors(errors);
    return !hasErrors;
  };

  const handleSubmit = () => {
    if (validate()) {
      console.log('Submitted Projects:', projectsList);
      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 3000);
    } else {
      setSubmitSuccess(false);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-sky-700">Project Details</h2>

      {projectsList.map((project, index) => (
        <div
          key={index}
          className="grid md:grid-cols-2 gap-4 bg-white shadow-md rounded-2xl p-4 border border-gray-200"
        >
          {projectFields.map((field) => (
            <div key={field.key} className="flex flex-col">
              <label className="text-base font-medium text-gray-700 mb-1">
                {field.label}
                {field.required && <span className="text-red-500"> *</span>}
              </label>

              <input
                type={field.type || 'text'}
                value={project[field.key]}
                onChange={(e) => handleChange(index, field.key, e.target.value)}
                placeholder={field.placeholder}
                className={`border rounded-xl px-3 py-2 focus:outline-none focus:ring-gray-500 focus:ring-2 ${
                  validationErrors[index]?.[field.key]
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-gray-300 focus:ring-sky-500'
                }`}
              />

              {validationErrors[index]?.[field.key] && (
                <p className="text-red-500 text-xs mt-1">
                  {validationErrors[index][field.key]}
                </p>
              )}
            </div>
          ))}

          {projectsList.length > 1 && (
            <div className="col-span-full flex justify-end">
              <button
                onClick={() => handleRemove(index)}
                className="text-red-600 text-sm hover:underline"
              >
                Remove
              </button>
            </div>
          )}
        </div>
      ))}

      <div className="flex flex-col md:flex-row justify-between gap-3 pt-4">
        <button
          onClick={handleAdd}
          className="bg-sky-700 hover:bg-sky-800 text-white font-medium px-4 py-2 rounded-xl"
        >
          + Add More Projects
        </button>

        <button
          onClick={handleSubmit}
          className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-2 rounded-xl"
        >
          Save changes
        </button>
      </div>

      {submitSuccess && (
        <p className="text-green-600 font-medium mt-2">
          Project details submitted successfully!
        </p>
      )}
    </div>
  );
};

export default Projects;
