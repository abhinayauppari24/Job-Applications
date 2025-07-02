import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Login = ({ onClose, switchToSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setUserEmail } = useContext(UserContext);

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("login successful");
    setUserEmail(email);
    // alert('Login successful!');
    onClose();
    navigate('/');

    // try {
    //   const res = await axios.post('http://localhost:8080/api/login', {
    //     email,
    //     password
    //   });

    //   alert("Login successful!");
    //   console.log("Navigate to /")
    //   onClose();         // Close the modal
    //   navigate('/');     // Go to homepage
    // } catch (err) {
    //   if (err.response?.status === 404) {
    //     alert("You are not yet registered.");
    //   } else if (err.response?.status === 401) {
    //     alert("Incorrect password.");
    //   } else {
    //     alert("Login failed. Please try again.");
    //   }
    // }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md relative shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-xl font-bold text-gray-600 hover:text-black"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-gray-400 text-white py-2 rounded hover:bg-sky-900"
          >
            Login
          </button>
          <p className="text-center">
            Don't have an account?{' '}
            <button
              type="button"
              onClick={switchToSignup}
              className="text-sky-600 underline"
            >
              Sign Up
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
