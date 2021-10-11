const express = require('express')
const expressHandlebars = require('express-handlebars')
const app = express()
const port = process.env.PORT || 3000

// 다음은 views 를 사용하기 위하여 필요합니다.
app.engine('handlebars', expressHandlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// 이 뷰의 내용은 views/abount.handlebars 파일에 있습니다.
app.get('/about', (req, res) => {
  res.render('about')
})

app.get('*', (req, res) => res.send('"<a href="/about">About</a>" 페이지에 접속하세요!'))

app.listen(port, () => 
    console.log(`\n웹 주소 http://localhost:${port}/about 로 접속하세요.\n`))