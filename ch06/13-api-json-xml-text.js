const express = require('express')
const app = express()

const tours = [
    {id:0, name:'Hood River', price:99.99},
    {id:1, name:'Oregon Coast', price: 149.95},
    {id:2, name:'Water Park', price: 5000.0}
]

app.get('/api/tours', (req, res) => {
  const toursXml = '<?xml version="1.0"?><tours>' +
    tours.map(p =>
      `<tour price="${p.price}" id="${p.id}">${p.name}</tour>`
    ).join('') + '</tours>'
  const toursText = tours.map(p =>
      `${p.id}: ${p.name} (${p.price})`
    ).join('\n')
  res.format({
    'application/json': () => res.json(tours),
    'application/xml': () => res.type('application/xml').send(toursXml),
    'text/xml': () => res.type('text/xml').send(toursXml),
    'text/plain': () => res.type('text/plain').send(toursXml),
  })
})

app.get('*', (req, res)=> res.send('웹 주소 <a href="/api/tours">/api/tours</a>를 사용하세요.'))

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`\n웹 주소 http://localhost:${port}/api/tours로 접속하세요.\n`)
})