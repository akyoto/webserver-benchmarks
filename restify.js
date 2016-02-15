const restify = require('restify')
const server = restify.createServer()

server.get('/', function(request, response) {
	response.end('Hello World')
})

server.get('/test', function(request, response) {
	response.end('Test')
})

server.listen(5004)