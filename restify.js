'use strict'

let restify = require('restify')
let server = restify.createServer()

server.get('/', function(request, response) {
	response.end('Hello World')
})

server.listen(5000)