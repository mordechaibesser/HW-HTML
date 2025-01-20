const http = require('http');
const urls = process.argv.slice(2); 
const results = new Array(urls.length).fill(null); 
let count = 0; 

urls.forEach((url, index) => {
  http.get(url, (response) => {
    let data = '';

    response.setEncoding('utf8');
    response.on('data', (chunk) => {
      data += chunk;
    });

    response.on('end', () => {
      results[index] = data; 
      count += 1;

    
      if (count === urls.length) {
        results.forEach((result) => console.log(result));
      }
    });

    response.on('error', (error) => {
      console.error(`Error with URL ${url}: ${error.message}`);
    });
  }).on('error', (error) => {
    console.error(`Request error with URL ${url}: ${error.message}`);
  });
});
