

import React, { useState } from 'react';
import axios from 'axios';
import { backendUrl } from '../App'; 
import { toast } from 'react-toastify';

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault(); // move this to the top
    try {
      const response = await axios.post(`${backendUrl}/api/user/admin`, { email, password });

      if (response.data.success) {
        setToken(response.data.token);
         localStorage.setItem("token", response.data.token); // Store token in localStorage
        toast.success("Login successful!");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen w-full'>
      <div className='bg-white rounded-lg shadow-md px-8 py-6 max-w-md'>
        <h1 className='text-2xl font-bold mb-4'>Admin Panel</h1>
        
        <form onSubmit={onSubmitHandler}>
          <div className='mb-3 min-w-72'>
            <p className='text-sm font-medium text-gray-700 mb-2'>Email Address</p>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="rounded-md px-3 py-2 outline-none border border-gray-300 w-full"
              required
            />
          </div>

          <div className='mb-3 min-w-72'>
            <p className='text-sm font-medium text-gray-700 mb-2'>Password</p>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="rounded-md px-3 py-2 outline-none border border-gray-300 w-full"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded-md mt-2 w-full"
          >
            Login
          </button>

          <p className="text-sm text-gray-500 mt-2">Forgot Password?</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
