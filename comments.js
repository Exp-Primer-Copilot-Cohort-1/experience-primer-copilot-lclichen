// Create web server
// Create a web server that listens on port 8080 and serves the comments.js file.
// The comments.js file should contain the following code:
// var comments = [“First!”, “Second”, “Hooray!”, “Fourth”, “Fifth”];
// module.exports = comments;
// Make sure to use the appropriate function from the http module to serve the comments.js file.

const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/javascript'});
  fs.readFile('./comments.js', (err, data) => {
    if (err) {
      console.log(err);
    }
    res.end(data);
  });
}).listen(8080);
console.log('Server is running at http://localhost:8080/');