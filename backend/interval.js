const scraper = require('./scraper.js');
const { Post } = require('./models');

const fetchNewData = async () => {
  try {
    const posts = await scraper();
    for (const post of posts) {
      const check = await Post.findOne({
        where: { date: post.date },
      });
      if (!check) {
        await Post.create(post);
      }
    }
  } catch (error) {
    console.log('Error occurred: ', error);
  }
};

setInterval(fetchNewData, 120000);
