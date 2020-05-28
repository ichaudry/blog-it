const User = require('../models/User')

exports.login = function(req , res) {

}

exports.logout = function(req , res) {
    
}

exports.register = function(req , res) {
    //create a new user object
    let user = new User(req.body)
    user.register()
}

exports.home = function(req , res) {
    res.render('home-guest')   
}