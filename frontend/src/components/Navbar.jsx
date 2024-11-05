// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, User } from 'lucide-react';

const Navbar = () => {
  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <nav className="flex justify-between items-center bg-gradient-to-r from-pink-200 to-pink-400 p-4 shadow-lg">
      <Link to="/" className="text-2xl font-bold text-white">
        MemeMates <Heart size={24} className="inline ml-1" />
      </Link>
      <div>
        {isAuthenticated ? (
          <>
            <Link to="/profile" className="text-white mx-6">Profile</Link>
            <button
              onClick={() => {
                localStorage.removeItem('token');
                window.location.href = '/not-logged-in';
              }}
              className="text-white mx-3"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="text-white mx-2">Login</Link>
            <Link to="/register" className="text-white mx-2">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
