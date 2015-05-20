// HTTP server that only receives POST and converts POST body charactres to uppercase and returns it to client
// need to transform stream data as it's passing through
// through2-map allows you to create a transform stream via a single function
// it takes a chunk of data and returns a chunk of data
// designed to work with Array#map() but for streams
// file:///usr/local/lib/node_modules/learnyounode/node_modules/through2-map

var http = require('http');
var map = require('through2-map');

var server = http.createServer(function (req, res) {
	if (req.method != 'POST')
		return res.end('send me a POST\n');

	req.pipe(map(function(chunk) {
		return chink.toString().toUpperCase();
	})).pipe(res);
});

server.listen(Number(process.argv[2]));