const userCollection = require('../db').collection("users")
const validator = require("validator")


let User = function(data) {
    this.data = data
    this.errors = []

}

User.prototype.cleanUp = function() {
    //Check type
    if(typeof(this.data.username) != "string"){this.data.username= ""}
    if(typeof(this.data.email) != "string"){this.data.email= ""}
    if(typeof(this.data.password) != "string"){this.data.password= ""}

    //get rid of any bogus properties and trim whitespace
    this.data = {
        username: this.data.username.trim().toLowerCase(),
        email: this.data.email.trim().toLowerCase(),
        password: this.data.password
    }
}

User.prototype.validate = function() {
    //Username should be atleat 3 characters and max 30. Only alphanumeric 
    if(this.data.username == ""){this.errors.push("You must provide a username")}
    if(this.data.username != "" && !validator.isAlphanumeric(this.data.username)){this.errors.push("Username can only contain alphabets and numbers")}
    if(this.data.username.length > 0 && this.data.username.length < 3){this.errors.push("The username must be atleast 3 characters.")}
    if(this.data.username.length > 30){this.errors.push("The username must not exceed 30 characters")}
    
    //Check valid email
    if(!validator.isEmail(this.data.email)){this.errors.push("You must provide a valid email address")}
   
    //Password should be atleat 12 characters and max 100.
    if(this.data.password == ""){this.errors.push("You must provide a password")}
    if(this.data.password.length > 0 && this.data.password.length < 12){this.errors.push("The password must be atleast 12 characters.")}
    if(this.data.password.length > 100){this.errors.push("The password must not exceed 100 characters")}

}

User.prototype.register = function() {
    //Validate user data
    this.cleanUp()
    this.validate()

    //Save user to db if no errors
    if (!this.errors.length){
        userCollection.insertOne(this.data)
    }

}

module.exports = User 