const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        args: ['--proxy-server=socks5://127.0.0.1:9050'],
        headless: false
      })

      const page = await browser.newPage();
      await page.goto('https://api.ipify.org');
      setTimeout(() => {
        browser.close();
      }, 3000);
})();