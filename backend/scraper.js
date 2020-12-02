const cheerio = require('cheerio');
const request = require('request-promise');
var Agent = require('socks5-http-client/lib/Agent');

const addLabels = require('./labelsScript');

const scraper = async () => {
  const url = 'http://nzxj65x32vh2fkhk.onion/all';

  const posts = [];
  await request({
    url: url,
    agentClass: Agent,
    agentOptions: {
      socksHost: 'localhost', // Defaults to 'localhost'.
      socksPort: 9050, // Defaults to 1080.
    },
  })
    .then((html) => {
      const $ = cheerio.load(html);
      const postsCheerio = $('section#list > div.row');
      postsCheerio.map(async (i, post) => {
        const title = $(post).find('h4').text().trim();
        const content = $(post).find('.text').text().trim();
        let footer = $(post).find('.pre-footer').text().trim();
        footer = footer
          .substring(0, footer.indexOf('UTC'))
          .substring(10)
          .trim();
        const date = new Date(
          Date.parse(footer.substring(footer.length - 21) + ' UTC')
        );
        const author = footer.substring(0, footer.length - 25);
        let labels = await addLabels(title, content);
        posts.push({ title, content, author, date, labels });
      });
    })
    .catch((error) => console.log('Error occurred: ', error));

  // Remove search bar
  posts.shift();

  return posts;
};

module.exports = scraper;
