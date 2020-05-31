const express = require('express')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const flash = require('connect-flash')
const markdown = require('marked')
const app = express()
const sanitizeHTML = require('sanitize-html')


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
    // make our markdown function available from within ejs templates
    res.locals.filterUserHTML = function(content){
        // return sanitizeHTML(markdown(content), {allowedTags:['p','br','ul','ol','li','strong','bold','i','em','h1','h2','h3','h4','h5','h6'],allowedAttributes: {}})
        return markdown(content)
    }

    //make all error and success flash messages available from all templates
    res.locals.errors = req.flash('errors')
    res.locals.success = req.flash('success')

    //make current user id available on the req object
    if(req.session.user){req.visitorId = req.session.user._id} else{req.visitorId=0} 

    //make user session data available from within view templates
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

const server = require('http').createServer(app)

//Adding socket functionality to server
const io = require('socket.io')(server)

io.on('connection', function(){
    console.log("A new user connected")
})

//Export express app
module.exports = server