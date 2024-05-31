//create web server
var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');

var server = http.createServer(function(req, res) {
	var urlObj = url.parse(req.url, true);
	var pathname = urlObj.pathname;
	if (pathname == '/') {
		pathname = '/index.html';
	}
	var extname = path.extname(pathname);
	if (pathname != '/favicon.ico') {
		fs.readFile('./' + pathname, function(err, data) {
			if (err) {
				res.writeHead(404, {
					'Content-Type': 'text/html;charset=UTF-8'
				});
				res.end('404,Page Not Found.');
			}
			if (extname == '.html') {
				res.writeHead(200, {
					'Content-Type': 'text/html;charset=UTF-8'
				});
				res.end(data);
			}
			if (extname == '.css') {
				res.writeHead(200, {
					'Content-Type': 'text/css'
				});
				res.end(data);
			}
			if (extname == '.js') {
				res.writeHead(200, {
					'Content-Type': 'application/x-javascript'
				});
				res.end(data);
			}
		})
	}
})
server.listen(3000);