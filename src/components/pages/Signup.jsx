import React from 'react';

const Signup = ({ onClose, switchToLogin }) => {
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
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 border rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-2 border rounded"
          />
          <button className="w-full bg-gray-400 text-white py-2 rounded hover:bg-sky-900">
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
      </div>
    </div>
  );
};

export default Signup;
