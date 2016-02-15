const koa = require('koala')
const router = require('koa-router')()
const app = koa()

router.get('/', function *(next) {
	this.body = 'Hello World'
})

router.get('/test', function *(next) {
	this.body = 'Test'
})

// response
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(5005)