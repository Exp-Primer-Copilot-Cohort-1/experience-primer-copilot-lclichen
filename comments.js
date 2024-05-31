//create web server
var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');

//create server
var server = http.createServer(function (req, res) {
    var pathname = url.parse(req.url).pathname;
    var filePath = path.join(__dirname, pathname);

    fs.readFile(filePath, function (err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('404 Not Found');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
});

server.listen(3000, function () {
    console.log('Server is running on port 3000');
});