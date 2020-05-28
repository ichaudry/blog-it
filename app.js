/* 
This is where express server will be set up
*/
const express = require('express')
const app = express()

//Make public accessible
app.use(express.static('public'))

//Setting views configuration option and templating engine
app.set('views' , 'views')
app.set('view engine' , 'ejs')

app.get('/', (req, res) => {
    res.render('home-guest')
});

app.listen(3000)
