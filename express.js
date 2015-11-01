'use strict'

let express = require('express')
let app = express()

app.get('/', function(request, response) {
	response.end('Hello World')
})

app.listen(5000)