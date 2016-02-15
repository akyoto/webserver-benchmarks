const text = require('./lorem-ipsum')
const http = require('http')

http.createServer(function(request, response) {
	if(request.url === '/') {
		response.writeHead(200, {
			'Content-Length': Buffer.byteLength(text)
		})
		response.end(text)
	} else if(request.url === '/test') {
		response.writeHead(200, {
			'Content-Length': Buffer.byteLength(text)
		})
		response.end(text)
	}
}).listen(5000)