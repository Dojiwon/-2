const express = require('express')
const app = express()

app.get('/text', (req, res) => {
  res.type('text/plain')
  res.send('this is a test')
})

app.get('*', (req, res) => res.send('"<a href="/text">plain text</a>" 페이지에 접속하세요!'))

const port = process.env.PORT || 3000
app.listen(port, () => 
    console.log(`\n웹 주소 http://localhost:${port}/about 로 접속하세요.\n`))