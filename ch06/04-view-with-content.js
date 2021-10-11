const express = require('express')
const expresshandlebars = require('express-handlebars')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const catNames = require('cat-names')
const app = express()

//다음 뷰를 위하여 필요합니다.
app.engine('handlebars', expresshandlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

//쿠키를 사용하려면 다음이 필요합니다.
app.use(cookieParser())

//세션을 사용하려면 다음이 필요합니다.
app.use(session({resave: false, saveUninitialized: false, secret: 'keyboard cat'}))

//뷰의 내용은 views/greeting.handlebars에 있습니다.
//뷰에 필요한 매개변수를 전달하고 있습니다.
app.get('/greeting', (req,res) => {
    res.render('greeting', {
        message: '안녕하세요',
        style: req.query.style,
        userid: req.cookies.userid,
        username: req.session.username
    })
})

app.get('/set-random-userid', (req,res) => {
    res.cookie('userid', (Math.random()*10000).toFixed(0))
    res.redirect('/greeting')
})

app.get('/set-random-username', (req,res) => {
    req.session.username = catNames.random()
    res.redirect('/greeting')
})

app.get('*', (req,res) => res.send('<a href="/greeting">안녕</a> 페이지로 접속하세요!'))

const port = process.env.PORT || 3000
app.listen(port, () => 
    console.log(`\n웹 주소 http://localhost:${port}/about 로 접속하세요.\n`))