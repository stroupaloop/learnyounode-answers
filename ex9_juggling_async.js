// print out the content from 3 urls in the correct order using async
// 3rd party libraries to help
// async (http://npm.im/async)
// after (http://npm.im/after)

var http = require('http');
var bl = require('bl');
var results = [];
var count = 0;

function printResults () {
  for (var i = 0; i < 3; i++ )
    console.log(results[i]);
}

function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err)
        return console.error(err);

      results[index] = data.toString();
      count++;

      if (count == 3)
        printResults();
    }));
  });
}

for (var i = 0; i < 3; i++)
  httpGet(i);