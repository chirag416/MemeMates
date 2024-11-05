import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, X } from 'lucide-react';

const staticMemes = [
  { _id: '1', imageUrl: 'https://media.gettyimages.com/id/1318934931/photo/disloyal-young-woman-looking-another-man-and-her-angry-boyfriend-looking-at-her-on-the-street.jpg?s=612x612&w=0&k=20&c=4hK4jJC4H4j89mboPUh5ZGUCwpy5lF8HyBeejcVM_WM=' },
  { _id: '2', imageUrl: 'https://media.gettyimages.com/id/1236303518/photo/dogelon-mars-cryptocurrency-logo-displayed-on-a-phone-screen-and-representation-of-dogecoin.jpg?s=612x612&w=0&k=20&c=orILVxBZNgKbXiSF5GytOtQhgQqL7uxh4bFjM73oDGE=' },
  { _id: '3', imageUrl: 'https://media.gettyimages.com/id/1826707969/photo/kitty-cat.jpg?s=612x612&w=0&k=20&c=qfzkve3A286iFM6WknP_AU7TWnyBXoCBkU2QrlGe4kU=' }
];

const MemeCard = () => {
  const [memeIndex, setMemeIndex] = useState(0);
  const [meme, setMeme] = useState(staticMemes[0]);
  const [action, setAction] = useState('');

  useEffect(() => {
    setMeme(staticMemes[memeIndex]);
  }, [memeIndex]);

  const fetchNextMeme = () => {
    const nextIndex = (memeIndex + 1) % staticMemes.length;
    setMemeIndex(nextIndex);
    setAction(''); // Reset action after fetching the next meme
  };

  const handleLike = () => {
    setAction('liked');
    setTimeout(fetchNextMeme, 500); // Wait for animation to complete
  };

  const handleDislike = () => {
    setAction('disliked');
    setTimeout(fetchNextMeme, 500); // Wait for animation to complete
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }} // Smooth transition for the card
      className="meme-card p-4 rounded-lg shadow-lg bg-pink-150 relative" // Add relative positioning
      key={meme._id} // Ensures unique key for animation
    >
      <motion.img
        src={meme.imageUrl}
        alt="Meme"
        className="rounded-lg mb-4"
        animate={{ opacity: action ? 0.5 : 1 }} // Fades out when liked/disliked
        transition={{ duration: 0.5 }} // Smooth transition for image opacity
      />
      <div className="actions flex justify-around">
        <motion.button
          onClick={handleDislike}
          className="text-red-500"
          whileHover={{ scale: 1.3 }} // Scale effect on hover
          whileTap={{ scale: 0.9 }} // Scale effect on click
          transition={{ type: 'spring', stiffness: 300 }} // Spring effect for button interactions
        >
          <X size={32} /> {/* Increase size of the dislike icon */}
        </motion.button>
        <motion.button
          onClick={handleLike}
          className="text-pink-500"
          whileHover={{ scale: 1.3 }} // Scale effect on hover
          whileTap={{ scale: 0.9 }} // Scale effect on click
          transition={{ type: 'spring', stiffness: 300 }} // Spring effect for button interactions
        >
          <Heart size={32} /> {/* Increase size of the like icon */}
        </motion.button>
      </div>
      {action && (
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className={`text-8xl font-bold ${action === 'liked' ? 'text-pink-500' : 'text-red-500'}`} // Increased size of the action feedback
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.7, scale: 1 }} // Reduced opacity for fading effect
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.5 }} // Smooth transition for action feedback
          >
            {action === 'liked' ? '💖' : '💔'}
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default MemeCard;
