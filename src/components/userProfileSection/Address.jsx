import React, { useState } from 'react';
import { addressFields } from '../../assets/assets';

const Address = () => {
  const [addresses, setAddresses] = useState([
    Object.fromEntries(addressFields.map((field) => [field.key, ''])), // Permanent address
    Object.fromEntries(addressFields.map((field) => [field.key, ''])), // Current address
  ]);

  const [validationErrors, setValidationErrors] = useState([{}, {}]);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (index, fieldKey, value) => {
    const updated = [...addresses];
    updated[index][fieldKey] = value;
    setAddresses(updated);
  };

  const validate = () => {
    const errors = addresses.map((entry) => {
      const entryErrors = {};
      addressFields.forEach((field) => {
        if (field.required && !entry[field.key].trim()) {
          entryErrors[field.key] = `${field.label} is required`;
        }
      });
      return entryErrors;
    });

    setValidationErrors(errors);
    const hasErrors = errors.some((entry) => Object.keys(entry).length > 0);
    return !hasErrors;
  };

  const handleSubmit = () => {
    if (validate()) {
      console.log('Submitted Address Data:', addresses);
      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 3000);
    } else {
      setSubmitSuccess(false);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-sky-700">Address Details</h2>

      {['Permanent Address', 'Current Address'].map((title, index) => (
        <div
          key={index}
          className="grid md:grid-cols-2 gap-4 bg-white shadow-md rounded-2xl p-4 border border-gray-200"
        >
          <h3 className="md:col-span-2 text-lg font-medium text-black-800 mb-1">{title}</h3>

          {addressFields.map((field) => (
            <div key={field.key} className="flex flex-col">
              <label className="text-base font-medium text-gray-700 mb-1">
                {field.label}
                {field.required && <span className="text-red-500"> *</span>}
              </label>

              <input
                type="text"
                value={addresses[index][field.key]}
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
        </div>
      ))}

      <div className="flex justify-end pt-4">
        <button
          onClick={handleSubmit}
          className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-2 rounded-xl"
        >
          Save Changes
        </button>
      </div>

      {submitSuccess && (
        <p className="text-green-600 font-medium mt-2">
          Address details submitted successfully!
        </p>
      )}
    </div>
  );
};

export default Address;
