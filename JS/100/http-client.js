const http = require('http');

const url = process.argv[2];

http.get(url, (response) => {

  response.setEncoding('utf8');


  response.on('data', (chunk) => {
    console.log(chunk);
  });

  response.on('error', (error) => {
    console.error(`Error: ${error.message}`);
  });

  response.on('end', () => {

  });
}).on('error', (error) => {
  console.error(`Request Error: ${error.message}`);
});
