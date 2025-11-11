const mongoose = require('mongoose');

const MoodRecipeMappingSchema = new mongoose.Schema({
  mood: { type: mongoose.Schema.Types.ObjectId, ref: 'Mood', required: true },
  recipe: { type: mongoose.Schema.Types.ObjectId, ref: 'Recipe', required: true }
});

MoodRecipeMappingSchema.index({ mood: 1, recipe: 1 }, { unique: true });

module.exports = mongoose.model('MoodRecipeMapping', MoodRecipeMappingSchema);
