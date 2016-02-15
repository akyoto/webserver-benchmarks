global.Promise = require('bluebird')

const text = require('./lorem-ipsum')
const AeroServer = require('aero/lib/Server')
const server = new AeroServer()

// Aero framework knows if a resource is static or dynamic
// so it can cache headers. We emulate it in this test by
// caching the headers here.
let headers = {
	'Content-Length': Buffer.byteLength(text)
}

server.routes.GET = {
	'': function(request, response) {
		response.writeHead(200, headers)
		response.end(text)
	},

	'test': function(request, response) {
		response.writeHead(200, headers)
		response.end(text)
	}
}

server.run({
	ports: {
		http: 5001
	}
})