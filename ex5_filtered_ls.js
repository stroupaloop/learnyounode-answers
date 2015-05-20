// prints a list of files in a given directory, filtered by the extension of the files (1st argument dir/path, 2nd argument extension).
// should leverage fs.readdir(pathname, function( err, [array] ) );
// path module > extname method from node
// file:///usr/local/lib/node_modules/learnyounode/node_apidoc/path.html

var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function (err, list) {
	list.forEach(function(file) {
		if (path.extname(file) === '.' + process.argv[3])
			console.log(file);
	});
});