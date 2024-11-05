const express = require('express');
const { getNextMeme, likeMeme, dislikeMeme } = require('../controllers/memeController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/next', authMiddleware, getNextMeme);
router.post('/like', authMiddleware, likeMeme);
router.post('/dislike', authMiddleware, dislikeMeme);

module.exports = router;
