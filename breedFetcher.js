const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const website = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(website, (error, response, body) => {
    if (error) {
      callback(error);
    } else {
      const data = JSON.parse(body);
  
      if (data.length === 0) {
        let desc = null;
        return;
      }
    
      if (data[0]) {
        let desc = data[0].description;
        callback(error, desc);
      }
    }
  });
};

module.exports = { fetchBreedDescription };