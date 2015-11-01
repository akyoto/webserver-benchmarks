'use strict'

let aero = require('aero')

aero.get('/', function(request, response) {
	response.end('Hello World')
})

aero.server.run(5000)