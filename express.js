// $npm install --save express
// run express.js
// run curl http://localhost:8080
var express = require('express');
var app = express();

app.get('/', function(request,response) {
	response.sendFile(__dirname + "/index.html");
});

app.listen(8080);