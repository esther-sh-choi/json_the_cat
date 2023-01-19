const request = require("request");

const fetchBreedDescription = (breedName, callback) => {
  request(
    `https://api.thecaeeds/search?q=${breedName}`,
    (error, response, body) => {
      if (error) {
        return callback(error.message, null);
      }

      const data = JSON.parse(body);
      if (data.length > 1) {
        callback(Error("multiple cat breeds found").message, null);
        return;
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
