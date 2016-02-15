const text = require('./lorem-ipsum')
const Hapi = require('hapi')
const server = new Hapi.Server()

server.connection({
	port: 5006
})

server.route({
    method: 'GET',
    path: '/',
    handler: function(request, reply) {
        reply(text)
    }
})

server.route({
    method: 'GET',
    path: '/test',
    handler: function(request, reply) {
        reply(text)
    }
})

server.start()