var http = require('http');

http.createServer(function(resquest, response) {
	response.writeHead(200);
	response.write("Hello, this is dog.");
	response.end();
}).listen(8080, function(){
	console.log('Listening on port 8080...');
});