const express = require('express');
const Recipe = require('../models/Recipe');
const RecipeRating = require('../models/RecipeRating');

const router = express.Router();

// GET /api/recipes/:id - get recipe detail
router.get('/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ error: 'Recipe not found' });
    }
    res.json(recipe);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// POST /api/recipes/:id/rate - add rating and feedback
router.post('/:id/rate', async (req, res) => {
  try {
    const { userId, rating, feedback } = req.body;
    // In production, userId should be extracted from auth token

    const newRating = new RecipeRating({
      recipe: req.params.id,
      user: userId,
      rating,
      feedback
    });
    await newRating.save();
    res.status(201).json({ message: 'Rating submitted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
