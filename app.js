/* 
This is where express server will be set up
*/
const express = require('express')
const app = express()
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


app.listen(3000)
