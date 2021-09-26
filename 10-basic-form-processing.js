const express = require('express')
const expressHandlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()

// 다음은 뷰를 사용하기 위하여 필요합니다.
app.engine('handlebars', expressHandlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// 다음은 폼 데이터를 사용하기 위하여 필요합니다.
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/thank-you', (req, res) => res.render('10-thank-you'))

// 뷰의 내용은 views/10-home.handlebars를 보시오
app.get('*', (req, res) => res.render('10-home'))

app.post('/process-contact', (req, res) => {
  console.log(`연락처 ${req.body.name} <${req.body.email}>를 받았습니다.`)
  res.redirect(303, '/thank-you')
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`\n웹주소 http://localhost:${port}로 접속하세요.\n`))