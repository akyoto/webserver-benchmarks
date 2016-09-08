const text = require('./lorem-ipsum')
const feathers = require('feathers')
const app = feathers()

app.get('/', function(request, response) {
	response.writeHead(200, {
		'Content-Length': Buffer.byteLength(text)
	})
	response.end(text)
})

app.get('/test', function(request, response) {
	response.writeHead(200, {
		'Content-Length': Buffer.byteLength(text)
	})
	response.end(text)
})

app.listen(5007)