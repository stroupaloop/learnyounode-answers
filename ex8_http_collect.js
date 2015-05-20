// perform HTTP GET request to a provided URL, collect all data and write two lines
// using the bl (Buffer List) package (http://npm.im/bl) via sudo npm install bl
// alternative package is concat-stream (http://npm.im/concat-stream)

var http = require('http');
var bl = require('bl');

http.get(process.argv[2], function(response) {
	response.pipe(bl(function (err, data) {
		if (err)
			return console.error(err);

		data = data.toString();
		console.log(data.length);
		console.log(data);
	}));
});