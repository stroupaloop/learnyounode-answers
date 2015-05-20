// http core module
// file:///usr/local/lib/node_modules/learnyounode/node_apidoc/http.html
// performs an HTTP GET request to a provided URL
// returns each "data" event from the response

var http = require("http");
var url = process.argv[2];

// NOTE: this callback function has the signature: function callback (response) { /*...*/ }
// The response is a Node Stream object, which emits events (e.g. "data", "error", and "end")
http.get(url, function(response) {
  response.setEncoding("utf8");
  response.on("data", console.log);
  response.on("data", console.error);
});