// HTTP server that serves JSON data on receipt of GET request
// request contains query string with a key 'iso' and ISO-format time
// two endpoints for various time formatting
// request object has url property, used to route requests to endpoints
// url module needed to parse request.url and provide an object
// file:///usr/local/lib/node_modules/learnyounode/node_apidoc/url.html

var http = require('http');
var url = require('url');

function parsetime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixtime (time) {
  return { unixtime : time.getTime() }
}

var server = http.createServer(function(req, res) {
  var parsedUrl = url.parse(req.url, true);
  var time = new Date(parsedUrl.query.iso);
  var result

  if (/^\/api\/parsetime/.test(req.url))
    result = parsetime(time);
  else if (/^\/api\/unixtime/.test(req.url))
    result = unixtime(time);

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result));
  } else {
    res.writeHead(404);
    res.end();
  }
});
server.listen(Number(process.argv[2]));