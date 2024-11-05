import React, { useState } from 'react';
import api from '../utils/api';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const { data } = await api.post('/auth/login', { username, password });
    localStorage.setItem('token', data.token);
    window.location.href = '/';
  };

  return (
    <div className="flex justify-center items-center h-screen bg-pink-100">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl text-pink-500 font-bold mb-6">Login</h2>
        <input 
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-3 mb-4 rounded bg-pink-50 border border-pink-200" 
          placeholder="Username" 
          required 
        />
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-6 rounded bg-pink-50 border border-pink-200" 
          placeholder="Password" 
          required 
        />
        <button 
          type="submit" 
          className="w-full bg-pink-500 text-white py-2 rounded-lg shadow-md hover:bg-pink-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
