const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const authRoutes = require('./routes/auth');
const recipeRoutes = require('./routes/recipes');
const moodRecipeRoutes = require('./routes/moodRecipes');

const app = express();
const PORT = process.env.PORT || 3000;
mongoose.connect('mongodb://localhost:27017/moodrecipe', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/recipes', recipeRoutes);
app.use('/api/mood-recipes', moodRecipeRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
