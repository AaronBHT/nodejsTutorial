// example

/* 
 How to start:
 cmd window
 C:\Users\Wenpeng\node-app\codeSchoolTutorial>node stream.js

 a new cmd window
 C:\Users\Wenpeng\mycurl> curl -d 'hello' http://localhost:8080
*/
// var http = require('http');
// http.createServer(function(resquest, response) {
// 	response.writeHead(200);
// 	response.write("<p>Dog is running.</p>");
// 	setTimeout(function(){
// 		response.write("<p>Dog is done.</p>");
// 		response.end();
// 	}, 5000);
// }).listen(8080);

var http = require('http');
http.createServer(function(request, response) {
	response.writeHead(200);
	request.pipe(response);
	// request.on('readable', function(){
	// 	var chunk = null;
	// 	while(null !== (chunk = request.read())) {
	// 		response.write(chunk);
	// 	}
	// });
	// request.on('end', function() {
	// 	response.end();
	// });
}).listen(8080);