const text = require('./lorem-ipsum')
const http = require('http')

const headers = {
	'Content-Length': Buffer.byteLength(text)
}

http.createServer(function(request, response) {
	if(request.url === '/') {
		response.writeHead(200, headers)
		response.end(text)
	} else if(request.url === '/test') {
		response.writeHead(200, headers)
		response.end(text)
	}
}).listen(5000)