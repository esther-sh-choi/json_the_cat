const request = require("request");

const fetchBreedDescription = (breedName, callback) => {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (error, response, body) => {
      const data = JSON.parse(body);
      if (data.length > 1) {
        throw new Error("multiple cat breeds found");
      }
      if (error) {
        return callback((error, null));
      }

      const breed = data[0];
      if (breed) {
        callback(null, breed.description);
      } else {
        callback("breed not found");
      }
    }
  );
};

module.exports = { fetchBreedDescription };
