const express = require('express')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const flash = require('connect-flash')
const app = express()

let sessionOptions = session({
    secret: "JavaScript is so not cool",
    store: new MongoStore({client: require('./db')}),
    resave: false,
    saveUninitialized: false,
    cookie: {maxAge: 1000 * 60 * 60 * 24, httpOnly: true}
})

app.use(sessionOptions)
app.use(flash())

//Middleware for locals
app.use(function(req, res, next){
    res.locals.user = req.session.user
    next()
})


const router = require('./router')

//Middleware to parse incoming request bodies
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//Make public accessible
app.use(express.static('public'))

//Setting views configuration option and templating engine
app.set('views' , 'views')
app.set('view engine' , 'ejs')

//Set base router
app.use('/' , router)

//Export express app
module.exports = app