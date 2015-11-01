'use strict';

let koa = require('koa')
let router = require('koa-router')()
let app = koa()

router.get('/', function *(next) {
	this.body = 'Hello World'
})

// response
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(5000)