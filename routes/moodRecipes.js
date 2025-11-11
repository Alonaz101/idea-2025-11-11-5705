const express = require('express');
const MoodRecipeMapping = require('../models/MoodRecipeMapping');
const Mood = require('../models/Mood');
const Recipe = require('../models/Recipe');

const router = express.Router();

// POST /api/mood-recipes - input mood, return recipes
router.post('/', async (req, res) => {
  try {
    const { moodName, moodText } = req.body;
    // Basic direct moodName mapping for MVP
    let mood = null;
    if (moodName) {
      mood = await Mood.findOne({ name: moodName });
    }
    
    // TODO: SCRUM-284 Sentiment analysis to get mood from moodText
    
    if (!mood) {
      return res.status(400).json({ error: 'Mood not found' });
    }

    const mappings = await MoodRecipeMapping.find({ mood: mood._id }).populate('recipe');
    const recipes = mappings.map(rm => rm.recipe);

    res.json({ recipes });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
