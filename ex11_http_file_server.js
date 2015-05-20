// https server that saves the same text file for each request received
// fs.createReadStream() to stream the file contents to the response
// file:///usr/local/lib/node_modules/learnyounode/node_apidoc/http.html

var fs = require('fs');
var http = require('http');

var server = http.createServer(function (req, res) {
	// request is used to fetch properties (e.g. header and query-string)
	// response sends data to the client, both headers and body
	// request & response are Node streams > use streaming abstractions to send and receive data

	res.writeHead(200, { 'content-type': 'text/plain' });

	fs.createReadStream(process.argv[3]).pipe(res);
})

server.listen(Number(process.argv[2]);