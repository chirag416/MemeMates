// src/pages/NotLoggedIn.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotLoggedIn = () => (
  <div className="flex items-center justify-center h-screen bg-pink-100">
    <motion.div
      className="bg-white p-8 rounded-lg shadow-xl text-center max-w-md"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <h1 className="text-4xl font-bold text-pink-500 mb-4">Welcome to MemeMates</h1>
      <p className="text-lg text-gray-600 mb-6">Discover and share memes with friends!</p>
      <Link to="/register" className="bg-pink-400 text-white py-2 px-4 rounded-lg shadow hover:bg-pink-500 mx-2">
        Register
      </Link>
      <Link to="/login" className="bg-pink-400 text-white py-2 px-4 rounded-lg shadow hover:bg-pink-500 mx-2">
        Login
      </Link>
    </motion.div>
  </div>
);

export default NotLoggedIn;
