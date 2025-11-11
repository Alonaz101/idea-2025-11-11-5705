const mongoose = require('mongoose');

const MoodSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  emoji: { type: String }
});

module.exports = mongoose.model('Mood', MoodSchema);
