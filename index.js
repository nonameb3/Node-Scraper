const scrape = require('website-scraper');
const fs = require('fs-extra');

const path = './temp';
const urls = ['https://nodejs.org/en/'];

// remove old folder
if(fs.existsSync(path)) {
  fs.removeSync(path);
}

// website-scraper
const WSoptions = {
  urls: urls,
  directory: path,
};

scrape(WSoptions).then(() => {
  console.log('Succesfully downloaded!!');
}).catch(err => {
  console.log('error', err);
});
