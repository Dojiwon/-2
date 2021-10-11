const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const tours = [
    {id:0, name:'Hood River', price: 99.99},
    {id:1, name:'Oregon Coast', price: 3000.0},
    {id:2, name:'Water Park', price: 5000.0}
]

app.get('/api/tours', (req, res) => res.json(tours))

app.delete('/api/tour/:id', (req, res) => {
  const p = tours.find(p => p.id === parseInt(req.params.id))
  if(p<0) return res.status(410).json({ error: '그런 여행 상품은 없습니다.' })
  tours.splice(p, 1)
  res.json({ success: true })
})

app.use('*', (req, res) => res.send(
  `<p>Use a tool like <a href="https://www.getpostman.com">Postman</a> ` +
  `or <a href="https://curl.haxx.se/">curl</a> to try the following:</p>` +
  `<pre>` +
  `GET /api/tours\n` +
  `DELETE /api/tour/0\n` +
  `GET /api/tours`))

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`\n웹 주소 http://localhost:${port}로 접속하세요.\n`)
})