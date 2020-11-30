const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

const scraper = async () => {
  const browser = await puppeteer.launch({
    args: ['--proxy-server=socks5://127.0.0.1:9050'],
    headless: false,
  });

  const page = await browser.newPage();
  await page.goto('http://nzxj65x32vh2fkhk.onion/all');

  const content = await page.content();
  const $ = cheerio.load(content);
  const postsCheerio = $('section#list > div.row');

  const posts = [];

  postsCheerio.map((i, post) => {
    const title = $(post).find('h4').text().trim();
    const content = $(post).find('.text').text().trim();
    let footer = $(post).find('.pre-footer').text().trim();
    footer = footer.substring(0, footer.indexOf('UTC')).substring(10).trim();
    const date = new Date(
      Date.parse(footer.substring(footer.length - 21) + ' UTC')
    );
    const author = footer.substring(0, footer.length - 25);
    posts.push({ title, content, author, date });
  });

  // Remove search bar
  posts.shift();

  await browser.close();

  return posts;
};

module.exports = scraper;
