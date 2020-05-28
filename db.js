const mongodb = require('mongodb')
const dotenv = require('dotenv')
dotenv.config()

//Open connection
mongodb.connect(process.env.CONNECTIONSTRING , {useNewUrlParser: true, useUnifiedTopology: true} , (err, client)=>{
    //export database connected database
    module.exports = client.db()

    //Start express server after db is connected
    const app = require('./app')
    
    app.listen(process.env.PORT)
})