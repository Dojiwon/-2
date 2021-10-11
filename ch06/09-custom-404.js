const express = require('express')
const expressHandlebars = require('express-handlebars')
const app = express()

//다음 뷰를 위하여 필요합니다.
app.engine('handlebars', expressHandlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
  res.render('09-home')
})

app.get('/page1', (req, res) => {
  res.render('09-page', { page: 1 })
})

app.get('/page2', (req, res) => {
  res.render('09-page', { page: 2 })
})

app.get('/page3', (req, res) => {
  res.render('09-page', { page: 3 })
})

// 이 핸들러는 반드시 라우트 마지막에 있어야 합니다.
app.use((req, res) =>
  res.status(404).render('404')
)

const port = process.env.PORT || 3000
app.listen(port, () => 
    console.log(`\n웹 주소 http://localhost:${port}/about 로 접속하세요.\n`))