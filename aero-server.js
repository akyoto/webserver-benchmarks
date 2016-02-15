// You shouldn't use the server component only...
// but for benchmarking purposes it's interesting to see how fast the router is.
global.Promise = require('bluebird')
const Server = require('aero/lib/Server')
const server = new Server()

server.routes.GET = {}
server.routes.GET[''] = function(request, response) {
	response.end('Hello World')
}

server.routes.GET['test'] = function(request, response) {
	response.end('Test')
}

server.run({
	ports: {
		http: 5002
	}
})