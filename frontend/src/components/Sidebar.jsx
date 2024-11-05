import React from 'react';
import { User, Heart, Image, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <div className="w-60 h-full bg-pink-100 p-5 shadow-lg rounded-r-lg">
    <div className="flex flex-col items-start space-y-4">
      <Link to="/profile" className="flex items-center space-x-2 text-pink-500">
        <User size={24} /> <span>Profile</span>
      </Link>
      <Link to="/matches" className="flex items-center space-x-2 text-pink-500">
        <Heart size={22} /> <span>Matches</span>
      </Link>
      <Link to="/memes" className="flex items-center space-x-2 text-pink-500">
        <Image size={24} /> <span>Memes</span>
      </Link>
      <button
        onClick={() => {
          localStorage.removeItem('token');
          window.location.href = '/';
        }}
        className="flex items-center space-x-2 text-pink-500"
      >
        <LogOut size={24} /> <span>Logout</span>
      </button>
    </div>
  </div>
);

export default Sidebar;
