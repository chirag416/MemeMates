const Meme = require('../models/Meme');
const User = require('../models/User');

// Fetch the next meme for the user
exports.getNextMeme = async (req, res) => {
  try {
    const user = await User.findById(req.user);
    const viewedMemes = [...user.likedMemes, ...user.dislikedMemes];
    
    const meme = await Meme.findOne({ _id: { $nin: viewedMemes } });
    if (!meme) {
      return res.status(404).json({ message: 'No more memes available.' });
    }

    res.json(meme);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching meme.' });
  }
};

// Handle liking a meme
exports.likeMeme = async (req, res) => {
  try {
    const { memeId } = req.body;
    const user = await User.findById(req.user);

    if (!user.likedMemes.includes(memeId)) {
      user.likedMemes.push(memeId);
      await user.save();
    }

    res.status(200).json({ message: 'Meme liked successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Error liking meme.' });
  }
};

// Handle disliking a meme
exports.dislikeMeme = async (req, res) => {
  try {
    const { memeId } = req.body;
    const user = await User.findById(req.user);

    if (!user.dislikedMemes.includes(memeId)) {
      user.dislikedMemes.push(memeId);
      await user.save();
    }

    res.status(200).json({ message: 'Meme disliked successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Error disliking meme.' });
  }
};
