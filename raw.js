const text = require('./lorem-ipsum')
const http = require('http')

http.createServer(function(request, response) {
	if(request.url === '/')
		response.end(text)
	else if(request.url === '/test')
		response.end(text)
}).listen(5000)