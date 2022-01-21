const request = require('request');
const args = process.argv.slice(2);
const breedSearch = args[0];
const website = `https://api.thecatapi.com/v1/breeds/search?q=${breedSearch}`;


request(website, (error, response, body) => {
  if (error) {
    console.error('error:', error);
    return;
  }

  const data = JSON.parse(body);

  if (data.length === 0) {
    console.log(`${breedSearch} breed not found`);
    return;
  }

  console.log(data[0].description);
});