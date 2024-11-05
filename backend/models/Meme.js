const mongoose = require('mongoose');

const memeSchema = new mongoose.Schema({
  imageUrl: { type: String, required: true },
  tags: { type: [String], default: [] }
});

module.exports = mongoose.model('Meme', memeSchema);
