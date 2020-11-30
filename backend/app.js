const express = require('express');
const scraper = require('./scraper.js');
const { Post } = require('./models');
require('dotenv').config();

const app = express();
app.use(express.json());

// Get all posts from db
app.get('/posts', async (req, res) => {
  try {
    const posts = await scraper();
    for (const post of posts) {
      // Implement here because an error
      post.date = new Date(Date.parse(post.date.substring(3)));
      const newPost = await Post.create(post);
      console.log(newPost);
    }
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
