const http = require('http')

http.createServer(function(request, response) {
	if(request.url === '/')
		response.end('Hello World')
	else if(request.url === '/test')
		response.end('Test')
}).listen(5000)