let http = require("http");

http.createServer(function(request, response) {
	response.end("Hello World");
}).listen(5000);