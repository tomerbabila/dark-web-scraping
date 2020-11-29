const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

(async () => {
  const browser = await puppeteer.launch({
    args: ['--proxy-server=socks5://127.0.0.1:9050'],
    headless: false,
  });

  const page = await browser.newPage();
  await page.goto('http://nzxj65x32vh2fkhk.onion/all');
  // Use in cases that the site does not work
  // await page.goto('http://localhost:3000/');

  const content = await page.content();
  const $ = cheerio.load(content);
  const postsCheerio = $('section#list > div.row');

  const posts = [];

  postsCheerio.map((i, post) => {
    const title = $(post).find('h4').text().trim();
    const content = $(post).find('.text').text().trim();
    const footer = $(post).find('.pre-footer').text().split('UTC')[0].trim();
    posts.push({ title, content, footer });
  });

  // Remove search bar
  posts.shift();

  console.log(posts);

  await browser.close();
})();
