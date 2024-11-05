// src/components/MemeCard.js
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, X } from 'lucide-react';

const MemeCard = ({ meme, onLike, onDislike }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    className="meme-card p-4 rounded-lg shadow-lg bg-pink-50"
  >
    <img src={meme.imageUrl} alt="Meme" className="rounded-lg mb-4" />
    <div className="actions flex justify-around">
      <button onClick={() => onDislike(meme._id)} className="text-red-500">
        <X size={24} />
      </button>
      <button onClick={() => onLike(meme._id)} className="text-pink-500">
        <Heart size={24} />
      </button>
    </div>
  </motion.div>
);

export default MemeCard;
