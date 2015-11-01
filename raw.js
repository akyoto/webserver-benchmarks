"use strict";

let http = require("http")

http.createServer(function(request, response) {
	if(request.url === '/')
		response.end("Hello World")
}).listen(5000)