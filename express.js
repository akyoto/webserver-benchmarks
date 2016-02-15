const express = require('express')
const app = express()

app.get('/', function(request, response) {
	response.end('Hello World')
})

app.get('/test', function(request, response) {
	response.end('Test')
})

app.listen(5003)