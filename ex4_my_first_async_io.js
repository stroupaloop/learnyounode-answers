// single asynchronouse filesystem operation to read a file and pring the number of newliens it contains
// using fs.readFile >> requires callback function
// https://github.com/maxogden/art-of-node#callbacks
// idiomatic Node.js callbacks normally have the signature below
var fs = require('fs');
var file = process.argv[2];
var file = fs.readFile(file, 'utf8', function(err,data) {
	console.log(data.split('\n').length-1);
});