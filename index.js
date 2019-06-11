const scrape = require('website-scraper');
const options = {
  urls: ['https://madsparrow.me/emily/index.html'],
  directory: './temp',
};

scrape(options).then((result) => {
  console.log('Succesfully downloaded!!');
}).catch(err => {
  console.log('error', err);
});
