const User = require('../models/User')

exports.login = function(req , res) {
    //create new user object
    let user = new User(req.body)

    //User login. Promise returned
    user.login().then((result)=>{
        //Set session data for user
        req.session.user= {avatar: user.avatar, username: user.data.username}
        req.session.save(()=>{
            //Redirect after session data is saved
            res.redirect('/')
        })
    }).catch((err)=>{
        //Save errors in sessions using flash
        req.flash('errors',err)
        req.session.save(()=>{
            res.redirect('/')
        })
    })
}

exports.logout = function(req , res) {
    //destroy user session
    req.session.destroy(()=>{
        res.redirect('/')
    })
}

exports.register = function(req , res) {
    //create a new user object
    let user = new User(req.body)
    user.register().then(()=>{
        req.session.user = {avatar: user.avatar, username: user.data.username}
        req.session.save(()=>{
            res.redirect('/')
        })
    }).catch((regErrors)=>{
        regErrors.forEach((error)=>{
            req.flash('regErrors', error)
        })
        req.session.save(()=>{
            res.redirect('/')
        })
    })
}

exports.home = function(req , res) {
    if(req.session.user){
        res.render('home-dashboard', {username: req.session.user.username, avatar: req.session.user.avatar})
    } else {
        res.render('home-guest', {errors: req.flash('errors'), regErrors: req.flash('regErrors')})   
    }

}