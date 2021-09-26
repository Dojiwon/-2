const express = require('express')
const expresshandlebars = require('express-handlebars')
const app = express()

const tours = [
    {id:0, name:'Hood River', price:99.99},
    {id:1, name:'Oregon Coast', price: 149.95},
    {id:2, name:'Water Park', price: 5000.0}
]

app.get('/api/tours', (req, res)=>res.json(tours))
app.get('*', (req, res)=> res.send('웹 주소 <a href="/api/tours">/api/tours</a>를 사용하세요.'))

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log("\n웹 주소 http://localhost:${port}/api/tours로 접속하세요.\n")
})