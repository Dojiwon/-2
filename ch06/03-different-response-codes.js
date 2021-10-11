const express = require('express')
const expresshandlebars = require('express-handlebars')
const app = express()

app.engine('handlebars', expresshandlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.get('/error', (req,res) => {
    res.status(500)
    res.render('error')
})

app.get('/error', (req,res) => res.status(500).render('error'))

const port = process.env.PORT || 3000
app.listen(port, () => 
    console.log(`\n웹 주소 http://localhost:${port}/about 로 접속하세요.\n`))