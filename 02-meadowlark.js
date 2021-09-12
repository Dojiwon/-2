const express = require('express')
const expresshandlebars = require('express-handlebars')
const app = express()

//핸틀바 뷰 엔진 설정
app.engine('handlebars', expresshandlebars({
    defaultLayout: 'main',
}))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => res.render('home'))

app.get('/about', (req,res) => res.render('about'))

//custom 404 page
app.use((req, res) => {
    res.status(404)
    res.render('404')
})

//custom 500 page
app.use((err, req, res, next) => {
    console.error(err.message)
    res.status(500)
    res.render('500')
})

app.listen(port, () => console.log(
    'Express started on http://localhost:${port};'+
    'press Ctrl-C to terminate.'))