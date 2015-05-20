// uses a single synchronous filesystem operation to read a file and print the number of new lines (\n) it contains to the console.
// full path to file is first command-line argument
// fs module (from Node core library)
// file:///usr/local/lib/node_modules/learnyounode/node_apidoc/fs.html
// fs.readFileSync('path') returns a Buffer object containing the complete contents of the file
// Buffer objects efficiently represent arbitrary arrays of data (ascii, binary or some other format)
// file:///usr/local/lib/node_modules/learnyounode/node_apidoc/buffer.html
var fs = require('fs');
var contents = fs.readFileSync(process.argv[2]);
var lines = contents.toString().split('\n').length-1;
// alternatively
// var lines = fs.readFileSync(process.argv[2], 'utf8').toString().split('\n').length-1;
console.log(lines);