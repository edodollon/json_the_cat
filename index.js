const { fetchBreedDescription } = require('./breedFetcher');
const args = process.argv.slice(2);
const breedSearch = args[0];

fetchBreedDescription(breedSearch, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});