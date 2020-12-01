const express = require('express');
const { Post } = require('./models');

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
app.get('/post/:id', async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    res.json(post);
  } catch (error) {
    console.log('Error occurred: ', error);
  }
});

// Get filtered posts
app.get('/search/:search', async (req, res) => {
  try {
      const search = req.params.search;
      const allPosts = await Post.findAll({where: {}});
  } catch (error) {
    console.log('Error occurred: ', error);
  }
});

module.exports = app;
