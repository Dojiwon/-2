const express = require('express')
const expresshandlebars = require('express-handlebars')
const app = express()

app.engine('handlebars',expresshandlebars({defaultLayout: 'main'}))
app.set('view engine' , 'handlebars')

app.get('/custom-layout', (req, res) =>
  res.render('custom-layout', { layout: 'custom' })
)

app.get('*', (req,res) => res.send('"<a href="/custom-layout">custom-layout</a>"페이지에 접속하세요!'))

const port = process.env.PORT || 3000
app.listen(port, () => 
    console.log(`\n웹 주소 http://localhost:${port}/about 로 접속하세요.\n`))