const mongoose = require('mongoose');

const RecipeRatingSchema = new mongoose.Schema({
  recipe: { type: mongoose.Schema.Types.ObjectId, ref: 'Recipe', required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  rating: { type: Number, min: 1, max: 5, required: true },
  feedback: { type: String },
  createdAt: { type: Date, default: Date.now }
});

RecipeRatingSchema.index({ recipe: 1, user: 1 }, { unique: true });

module.exports = mongoose.model('RecipeRating', RecipeRatingSchema);
