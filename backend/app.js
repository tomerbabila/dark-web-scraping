const express = require('express');
const { Post } = require('./models');
require('dotenv').config();

const app = express();
app.use(express.json());

// Get all posts from db
app.get('/posts', async (req, res) => {
  try {
    const allPosts = await Post.findAll();
    res.json(allPosts);
  } catch (error) {
    console.log('Error occurred: ', error);
  }
});

// Get post by id
app.get('/:id', (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    res.json(post);
  } catch (error) {
    console.log('Error occurred: ', error);
  }
});

module.exports = app;
