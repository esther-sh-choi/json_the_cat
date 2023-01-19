const request = require("request");

const breed = process.argv[2];

let url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(url, (error, response, body) => {
  if (error) {
    console.error(error);
    process.exit();
  }
  const data = JSON.parse(body);
  console.log(data);
  console.log(typeof data);
});
