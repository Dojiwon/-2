const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/headers', (req, res)=> {
    res.type('text/plain')
    const headers = Object.entries(req.headers)
        .map(([key, value])=>`${key}: ${value}`)
    res.send(headers.join('\n'))
})

app.listen(port, () => 
    console.log(`\n웹 주소 http://localhost:${port}/headers 로 접속하세요.\n`))