const text = require('./lorem-ipsum')
const restify = require('restify')
const server = restify.createServer()

server.get('/', function(request, response) {
	response.end(text)
})

server.get('/test', function(request, response) {
	response.end(text)
})

server.listen(5004)