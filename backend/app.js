const express = require('express');
const { Post } = require('./models');
const { Op } = require('sequelize');

const app = express();
app.use(express.json());

const dayInMilliseconds = 1000 * 60 * 60 * 24;
const weekInMilliseconds = dayInMilliseconds * 7;

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
    const search = `%${req.params.search}%`;
    const allPosts = await Post.findAll({
      where: {
        [Op.or]: [
          {
            title: {
              [Op.like]: search,
            },
          },
          {
            content: {
              [Op.like]: search,
            },
          },
          {
            author: {
              [Op.like]: search,
            },
          },
          {
            date: {
              [Op.like]: search,
            },
          },
        ],
      },
    });
    res.json(allPosts);
  } catch (error) {
    console.log('Error occurred: ', error);
  }
});

app.get('/filter/byDay/:offset', async (req, res) => {
  try {
    const offset = parseInt(req.params.offset);

    const afterWeek = new Date(offset).getTime() + weekInMilliseconds;

    const byDayArr = [];

    for (let i = offset; i < afterWeek; i += dayInMilliseconds) {
      const postsBetweenDates = await Post.findAll({
        where: {
          date: {
            [Op.between]: [new Date(i), new Date(i + dayInMilliseconds)],
          },
        },
        raw: true,
      });

      byDayArr.push({
        date: new Date(i).toLocaleDateString(),
        posts: postsBetweenDates.length,
      });
    }

    console.log(byDayArr);

    res.json(byDayArr);
  } catch (error) {
    console.log('Error occurred: ', error);
  }
});

module.exports = app;
