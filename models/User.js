const userCollection = require('../db').db().collection("users")
const validator = require("validator")
const bcrypt = require('bcryptjs')
const md5 = require('md5')

let User = function(data, getAvatar) {
    this.data = data
    this.errors = []
    if(getAvatar == undefined){getAvatar= false}
    if(getAvatar){this.getAvatar()}
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

User.prototype.validate = function(){
    return new Promise(async (resolve, reject) => {
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
        if(this.data.password.length > 50){this.errors.push("The password must not exceed 50 characters")}
    
        //Only if username is valid then check to see if it is already taken
        if(this.data.username.length>2 && this.data.username.length < 31 && validator.isAlphanumeric(this.data.username)){
            //This variable will result in NULL if username doesn't exist
            //Awaits for promise to return
            let usernameExists = await userCollection.findOne({username: this.data.username})
            if(usernameExists){this.errors.push("That username is already taken")}
        }
    
        //Only if email is valid then check to see if it is already taken
        if(validator.isEmail(this.data.email)){
            //This variable will result in NULL if email doesn't exist
            //Awaits for promise to return
            let emailExists = await userCollection.findOne({email: this.data.email})
            if(emailExists){this.errors.push("That email is already taken")}
        }
        
        //Promise completed
        resolve()

    })
}


User.prototype.login = function() {
    return new Promise((resolve, reject)=>{
        //Validate data  
        this.cleanUp() 
        userCollection.findOne({username: this.data.username}).then((attemptedUser)=>{
            //Check if user name was found and password is a match
            if(attemptedUser && bcrypt.compareSync(this.data.password, attemptedUser.password)){
                this.data= attemptedUser
                this.getAvatar()
                resolve("Congrats!")
            } else {
                reject("Invalid username/password")
            }
        }).catch(()=>{
            reject("Please try again later.")
        })
    })
}


User.prototype.register = function (){
    return new Promise(async (resolve, reject)=> {
        //Validate data
        this.cleanUp()
        await this.validate()
    
        //Save user to db if no errors
        if (!this.errors.length){
            //Hash user password
            let salt = bcrypt.genSaltSync(10)
            this.data.password = bcrypt.hashSync(this.data.password , salt)
            await userCollection.insertOne(this.data)
            this.getAvatar()
            resolve()
        }
        else{
            reject(this.errors)
        }
    })
}

User.prototype.getAvatar= function() {
    this.avatar = `https://gravatar.com/avatar/${md5(this.data.email)}?s=128`
}

User.findByUsername = function(username){
    console.log(username)
    return new Promise(function(resolve, reject){
        if(typeof(username) != "string"){
            reject()
            return
        } 
        userCollection.findOne({username: username}).then(function(userDoc){
            if(userDoc){
                //clean user doc for security
                userDoc = new User(userDoc, true)
                userDoc = {
                    _id: userDoc.data._id,
                    username: userDoc.data.username,
                    avatar: userDoc.avatar
                }
                resolve(userDoc)
            } else {
                reject()
            }
        }).catch(function(){
            reject()
        })
    })
}

module.exports = User 
