const express = require('express')
const expresshandlebars = require('express-handlebars')
const app = express()
const port = process.env.PORT || 3000
const fortunes = [
    "Conquer your fears or they will conquer you.",
    "봄이 오면 강물은 흐른다.",
    "Do not fear what you don't know.",
    "You will have a pleasant surpise.",
    "쉽게 생각하라."
]

//핸들바 뷰 엔진 설정
app.engine('handlebars', expresshandlebars({
    defaultLayout: 'main',
}))
app.set('view engine', 'handlebars')

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res)=> res.render('home'))
app.get('/about', (req, res)=>{
    const randomFortune = fortunes[Math.floor(Math.random()*fortunes.length)]
    res.render('about', {fortune: randomFortune})
})

// custom 404 page
app.use((req, res)=> {
    res.status(404)
    res.render('404')
})
//custom 500 page
app.use((err, req, res, next)=> {
    console.error(err.message)
    res.status(500)
    res.render('500')
})

app.listen(port, ()=> console.log(
    `Express started on http://localhost:${port}; `+
    `press Ctrl-C to terminate...`))