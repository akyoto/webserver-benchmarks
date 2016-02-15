const Hapi = require('hapi')
const server = new Hapi.Server()

server.connection({
	port: 5006
})

server.route({
    method: 'GET',
    path: '/',
    handler: function(request, reply) {
        reply('Hello World')
    }
})

server.route({
    method: 'GET',
    path: '/test',
    handler: function(request, reply) {
        reply('Test')
    }
})

server.start()