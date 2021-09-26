const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const tours = [
    {id:0, name:'Hood River', price:99.99},
    {id:1, name:'Oregon Coast', price: 149.95},
    {id:2, name:'Water Park', price: 5000.0}
]

app.get('/api/tours', (req, res) => res.json(tours))

app.put('/api/tour/:id', (req, res) => {
  const p = tours.find(p => p.id === parseInt(req.params.id))
  if(!p) return res.status(410).json({ error: '그런 상품은 없습니다.' })
  if(req.body.name) p.name = req.body.name
  if(req.body.price) p.price = req.body.price
  res.json({ success: true })
})

app.use('*', (req, res) => res.send(
  `<p>Use a tool like <a href="https://www.getpostman.com">Postman</a> ` +
  `or <a href="https://curl.haxx.se/">curl</a> to try the following:</p>` +
  `<pre>` +
  `GET /api/tours\n` +
  `PUT /api/tour/0 with JSON body { "price": 149.99 }\n` +
  `GET /api/tours`))

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`\n웹 주소 http://localhost:${port}로 접속하세요.\n`)
})