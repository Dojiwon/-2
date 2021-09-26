const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.disable('X-powered-by')

app.get('*', (req,res) => {
    res.send('브라우저를 개발자모드로 실행하시오;'  +
        'x-powred-by 항목이 사라진 것을 확인할 수 있습니다.')
})

app.listen (port, () => {
    console.log(`Server started on port ${port}; ` +
    `Press Ctrl-C to terminate....`)
})