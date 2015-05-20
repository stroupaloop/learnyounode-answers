// listen to TCP connections > return current date & 24 hour time
// net module (file:///usr/local/lib/node_modules/learnyounode/node_apidoc/net.html)
// callback from net.createServer() is called more than once
// every connection received by the server triggers another call to the callback
// net.createServer() also returns an instance of the server > requireding server.listen(portNumber)

var net = require('net');

function zeroFill(i) {
	return ( i < 10 ? '0' : '' ) + i;
}

function now () {
	var d = new Date();
	return d.getFullYear() + '-'
		+ zeroFill(d.getMonth() + 1) + '-'
		+ zeroFill(d.getDate()) + ' '
		+ zeroFill(d.getHours()) + ':'
		+ zeroFill(d.getMinutes());
}

var server = net.createServer(function (socket) {
	socket.end(now() + '\n');
});

server.listen(Number(process.argv[2]));

// strftime package > strftime(fmt, date) function
// https://github.com/samsonjs/strftime