const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.use((req, res, next) => {
	// add local variable myNameIs directly to
	// res.locals object, from within a middleware
	// function
	res.locals.myNameIs = "My name is, Ian!"
	next()
})

app.get('/', (req, res, next) => {
	// add a local variable greeting to res.locals as
	// second argument in res.render() method
	res.render('index', {greeting: 'Hello, world!'})
})

app.listen(3000)