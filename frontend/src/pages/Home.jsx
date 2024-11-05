import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import FriendsOnline from '../components/FriendsOnline';
import MemeCard from '../components/MemeCard';
import api from '../utils/api';

const Home = () => {
  const [meme, setMeme] = useState(null);

  const fetchNextMeme = async () => {
    try {
      const { data } = await api.get('/meme/next', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setMeme(data);
    } catch (error) {
      console.error('Error fetching meme:', error);
    }
  };

  const likeMeme = async (id) => {
    await api.post('/meme/like', { memeId: id });
    fetchNextMeme();
  };

  const dislikeMeme = async (id) => {
    await api.post('/meme/dislike', { memeId: id });
    fetchNextMeme();
  };

  useEffect(() => {
    fetchNextMeme();
  }, []);

  return (
    <div className="h-screen bg-pink-100 grid grid-cols-4">
      <div className="col-span-1">
        <Sidebar />
      </div>
      <div className="col-span-2 flex items-center justify-center p-6">
        {meme ? (
          <MemeCard meme={meme} onLike={likeMeme} onDislike={dislikeMeme} />
        ) : (
          <div className="text-gray-500">Loading...</div>
        )}
      </div>
      <div className="col-span-1 p-6">
        <FriendsOnline />
      </div>
    </div>
  );
};

export default Home;
