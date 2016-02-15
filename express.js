const text = require('./lorem-ipsum')
const express = require('express')
const app = express()

app.get('/', function(request, response) {
	response.end(text)
})

app.get('/test', function(request, response) {
	response.end(text)
})

app.listen(5003)