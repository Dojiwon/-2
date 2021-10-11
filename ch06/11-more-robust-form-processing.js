const express = require('express')
const expressHandlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()

// 다음 뷰를 사용하기 위해 필요합니다.
app.engine('handlebars', expressHandlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// // 다음은 폼 데이터를 사용하기 위하여 필요합니다
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/thank-you', (req, res) => res.render('11-thank-you'))
app.get('/contact-error', (req, res) => res.render('11-contact-error'))

// see the views/10-home.hbs file for the contents of this view
app.get('*', (req, res) => res.render('11-home'))

app.post('/process-contact', (req, res) => {
  try {
    // 여기서 연락처를 데이터베이스나 파일 등의 저장 장소에 보관해야 하지만
    // 일단 오류만 시뮬레이트합니다.
    if(req.body.simulateError) throw new Error("error saving contact!")
    console.log(`contact from ${req.body.name} <${req.body.email}>`)
    res.format({
      'text/html': () => res.redirect(303, '/thank-you'),
      'application/json': () => res.json({ success: true }),
    })
  } catch(err) {
    // 저장에 문제가 발새했을 경우 여기서 처리합니다.
    console.error(`error processing contact from ${req.body.name} ` +
      `<${req.body.email}>`)
    res.format({
      'text/html': () =>  res.redirect(303, '/contact-error'),
      'application/json': () => res.status(500).json({
        error: 'error saving contact information' }),
    })
  }
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`\n웹주소 http://localhost:${port}로 접속하세요.\n`))