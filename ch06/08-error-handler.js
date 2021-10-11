const express = require('express')
const expresshandlebars = require('express-handlebars')
const app = express()

app.engine('handlebars', expresshandlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.get('/bad-bad-not-good', (req,res) => {
    throw new Error("that didn't go well!")
})

app.get('*',(req,res) => res.render('08-click-here'))

//이 핸들러는 반드시 라우트 마지막에 있어야 합니다.
// next 함수를 사용하지 않더라도 매개변수를 써야만
//익스프레스가 이 핸들러를 오류 핸들러로 인식합니다.
app.use((err, req, res, next) => {
    console.error('** SERVER ERROR: ' + err.message)
    res.status(500).render('08-error', { message: "다시 시도해주십시오!" })
  })

const port = process.env.PORT || 3000
app.listen(port, () => 
    console.log(`\n웹 주소 http://localhost:${port}/about 로 접속하세요.\n`))