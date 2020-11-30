const express = require('express');
const { Post } = require('./models');
require('dotenv').config();

const app = express();
app.use(express.json());

// Get all posts from db
app.get('/posts', async (req, res) => {
  try {
    
  } catch (error) {
    // Error!
    console.log('Error occurre:', error);
  }
});

app.get('/:search', (req, res) => {
  try {
    // Get all posts from db
  } catch (error) {
    // Error!
  }
});

app.post('/posts', (req, res) => {
  try {
    // Check if there are new posts and if yes, get theme
  } catch (error) {
    // Error!
  }
});

module.exports = app;
