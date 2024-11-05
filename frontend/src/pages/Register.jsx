import React, { useState } from 'react';
import api from '../utils/api';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    await api.post('/auth/register', { username, password, gender, age });
    window.location.href = '/login';
  };

  return (
    <div className="flex justify-center items-center h-screen bg-pink-100">
      <form onSubmit={handleRegister} className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl text-pink-500 font-bold mb-6">Register</h2>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}
          className="w-full p-3 mb-4 rounded bg-pink-50 border border-pink-200" placeholder="Username" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4 rounded bg-pink-50 border border-pink-200" placeholder="Password" required />
        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full p-3 mb-4 rounded bg-pink-50 border border-pink-200" placeholder="Confirm Password" required />
        <select value={gender} onChange={(e) => setGender(e.target.value)}
          className="w-full p-3 mb-4 rounded bg-pink-50 border border-pink-200" placeholder="Gender" required>
          <option value="">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)}
          className="w-full p-3 mb-6 rounded bg-pink-50 border border-pink-200" placeholder="Age" required />
        <button type="submit" className="w-full bg-pink-500 text-white py-2 rounded-lg shadow-md hover:bg-pink-600">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
