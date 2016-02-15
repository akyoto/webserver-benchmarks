global.Promise = require('bluebird')

const text = require('./lorem-ipsum')
const AeroServer = require('aero/lib/Server')
const server = new AeroServer()

server.router.get('/', function*() {
	this.body = text
})

server.router.get('/test', function*() {
	this.body = text
})

server.run({
	ports: {
		http: 5002
	}
})