import React, { useState } from 'react';
import axios from 'axios';
import OtpInput from './OtpInput';

const Signup = ({ onClose, switchToLogin }) => {

  const [showOtpInput, setShowOtpInput] = useState(false)
  const onOtpSubmit= (otp) => {
      console.log("signin successful",otp);
  }

  const [formData, setFormData] = useState({   //
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // const res = await axios.post("http://localhost:8080/api/signup", {
       
      //   email: formData.email,
      //   password: formData.password
      // });
      // alert("Signup successful!");
      // onClose(); // close modal

      setShowOtpInput(true); 

    } catch (err) {
      console.error(err);
      alert("Error during signup");
    }
  };     //

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md relative shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-xl font-bold text-gray-600 hover:text-black"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>

        {/* Bind form submit */}
       
         { !showOtpInput ? (
          <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          
          <button
            type="submit"
            className="w-full bg-gray-400 text-white py-2 rounded hover:bg-sky-900"
          >
            Sign Up
          </button>

          <p className="text-center">
            Already have an account?{" "}
            <button
              type="button"
              onClick={switchToLogin}
              className="text-sky-700 underline"
            >
              Login
            </button>
          </p>
        </form> 
          ) : ( 
          <div className="flex flex-col items-center gap-4">
                 <p className="text-center text-gray-700 text-sm">Enter OTP sent to your mail</p>
                 <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
          </div>
         )}

      </div>
    </div>
  );
};

export default Signup;
