// added modules into the mix (module.js)
// module exports a single function that exports three arguments: directory name, filname extension and callback function
// callback function must use idiomatic node(err, data) convention

var module = require('./module');
var dir = process.argv[2];
var ext = process.argv[3];

module(dir, ext, function(err, list) {
	if (err)
		return console.error('There was an error.', err);

  list.forEach(function (file) {
  	console.log(file);
  });
});