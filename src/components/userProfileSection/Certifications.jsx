import React, { useState } from 'react';
import { certificationFields } from '../../assets/assets';

const Certifications = () => {
  const [certList, setCertList] = useState([
    Object.fromEntries(certificationFields.map((field) => [field.key, field.type === 'file' ? null : ''])),
  ]);
  const [validationErrors, setValidationErrors] = useState([]);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (index, fieldKey, value) => {
    const updated = [...certList];
    updated[index][fieldKey] = value;
    setCertList(updated);
  };

  const handleFileChange = (index, file) => {
    const updated = [...certList];
    updated[index].file = file;
    updated[index].fileName = file?.name || '';
    setCertList(updated);
  };

  const handleRemoveFile = (index) => {
    const updated = [...certList];
    updated[index].file = null;
    updated[index].fileName = '';
    setCertList(updated);
  };

  const handleAdd = () => {
    const newEntry = Object.fromEntries(
      certificationFields.map((field) => [field.key, field.type === 'file' ? null : ''])
    );
    setCertList([...certList, newEntry]);
  };

  const validate = () => {
    const errors = [];
    certList.forEach((entry) => {
      const entryErrors = {};
      certificationFields.forEach((field) => {
        if (field.required && !String(entry[field.key]).trim()) {
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
      console.log('Submitted Certifications:', certList);
      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 3000);
    } else {
      setSubmitSuccess(false);
    }
  };

  return (
    <div className="space-y-6 px-4 sm:px-6 lg:px-8">
      <h2 className="text-xl font-semibold text-sky-700">Certifications</h2>

      {certList.map((cert, index) => (
        <div
          key={index}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white shadow-md rounded-2xl p-4 border border-gray-200"
        >
          {certificationFields.map((field) =>
            field.type !== 'file' ? (
              <div key={field.key} className="flex flex-col">
                <label className="text-base font-medium text-gray-700 mb-1">
                  {field.label}
                  {field.required && <span className="text-red-500"> *</span>}
                </label>

                <input
                  type="text"
                  value={cert[field.key]}
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
            ) : null
          )}

          {/* Custom Certificate Upload */}
          <div className="flex flex-col md:col-span-2">
            <label className="text-base font-medium text-gray-700 mb-1">Upload Certificate</label>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              
              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                id={`fileInput-${index}`}
                onChange={(e) => handleFileChange(index, e.target.files[0])}
                className="hidden"
              />

              <button
                type="button"
                onClick={() => document.getElementById(`fileInput-${index}`).click()}
                className={`border px-4 py-2 rounded-xl hover:bg-gray-200 ${
                  cert.fileName ? 'border-gray-300 text-sky-800' : 'border-gray-300 text-sky-800'
                }`}
              >
                Choose File
              </button>


              {cert.fileName && (
                <button
                  type="button"
                  onClick={() => handleRemoveFile(index)}
                  className="text-red-600 text-sm hover:underline"
                >
                  Remove File
                </button>
              )}
            </div>

            {cert.fileName && (
              <p className="text-sm text-gray-600 mt-1">{cert.fileName}</p>
            )}
          </div>
        </div>
      ))}

     
      <div className="flex flex-col md:flex-row justify-between gap-3 pt-4">
        <button
          onClick={handleAdd}
          className="bg-sky-700 hover:bg-sky-800 text-white font-medium px-4 py-2 rounded-xl w-full md:w-auto"
        >
          + Add Certification
        </button>

        <button
          onClick={handleSubmit}
          className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-2 rounded-xl w-full md:w-auto"
        >
          Save Changes
        </button>
      </div>

      {submitSuccess && (
        <p className="text-green-600 font-medium mt-2">
          Certifications submitted successfully!
        </p>
      )}
    </div>
  );
};

export default Certifications;
