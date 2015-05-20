// process is a global object
// .argv is a property which is an array containing the completel command-line
// returns [ 'node', '/path/to/your/program.js', '1', '2', '3' ]
var result = 0;
for (i = 2; i < process.argv.length; i++) {
	result += Number(process.argv[i]);
}
console.log(result);