const express = require('express')
const expresshandlebars = require('express-handlebars')
const app = express()
const port = process.env.PORT || 3000
const handlers = require('./lib/handlers')

//핸들바 뷰 엔진 설정
app.engine('handlebars', expresshandlebars({
    defaultLayout: 'main',
}))
app.set('view engine', 'handlebars')

app.use(express.static(__dirname + '/public'))

app.get('/', handlers.home)
app.get('/about', handlers.about)

// custom 404 page
app.use(handlers.notFound)
//custom 500 page
app.use(handlers.serverError)

if (require.main === module) {
    app.listen(port, ()=> {console.log(
        `Express started on http://localhost:${port}; `+
        `press Ctrl-C to terminate...`)})
} else {
    module.exports = app
}