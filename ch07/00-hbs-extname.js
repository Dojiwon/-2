const express = require('express')
const expresshandlebars = require('express-handlebars')

const handlers = require('./lib/handlers')
const weatherMiddlware = require('./lib/middleware/weather')

const app = express()

// configure handlebars view engine
app.engine('hbs', expresshandlebars({
    defaultLayout: '00-main',
    extname:'.hbs',
    helpers: {
        section: function(name,options) {
            if(!this._sections) this._sections = {}
            this._sections[name] = options.fn(this)
            return null
        },
    },
}))
app.set('view engine', 'hbs')

const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'))

app.get('/', (req,res) => res.render('00-home'))

app.listen(port, () => {
    console.log(`Express가 http://localhost:${port}에서 시작되었습니다.` +
    '; 종료하려면 Ctrl-C를 누르세요...')
})