// We use "var" instead of "let" here because restify doesn't run in strict mode with node.js
var restify = require("restify");
var server = restify.createServer();

server.get("/", function(request, response) {
	response.end("Hello World");
});

server.listen(5000);