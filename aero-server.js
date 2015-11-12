'use strict'

// You shouldn't use the server component only...
// but for benchmarking it's quite interesting to see how fast the router is.
let aero = require('aero')
let Server = require('aero/lib/classes/Server')

aero.server = new Server()

aero.server.routes.GET[''] = function(request, response) {
	response.end('Hello World')
}

aero.server.run(5000)
