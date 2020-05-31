export default class RegistrationForm{
    constructor(){
        // Get array of fields
        this.allFields = document.querySelectorAll("#registration-form .form-control")
        this.insertValidationElements()
        this.username = document.querySelector("#username-register")
        // this.email
        // this.password = document.querySelector("#")
        this.username.previousValue = ""
        this.events()
    }

    // Events
    events(){
        this.username.addEventListener("keyup", ()=>{
            this.isDifferent(this.username, this.usernameHandler)
       })
    }

    // Methods
    isDifferent(el, handler){
        if(el.previousValue != el.value){
            handler.call(this)
        }
        el.previousValue = el.value
    }

    usernameHandler(){
        this.username.errors = false
        this.usernameImmediately()
        clearTimeout(this.username.timer)
        this.username.timer = setTimeout(()=> this.usernameAfterDelay(), 800)
    }

    usernameImmediately(){
        if(this.username.value != "" && !/^([a-zA-Z0-9]+)$/.test(this.username.value)){
            this.showValidationError(this.username, "Username can only contain letters and numbers")
        }

        if(this.username.value.length > 30){
            this.showValidationError(this.username, "Username can not exceed 30 characters")
        }

        if(!this.username.errors){
            this.hideValidationError(this.username)
        }
    }

    showValidationError(el, message){
        el.nextElementSibling.innerHTML = message
        el.nextElementSibling.classList.add("liveValidateMessage--visible")
        el.errors = true
    }

    hideValidationError(el){
        el.nextElementSibling.classList.remove("liveValidateMessage--visible")
    }

    usernameAfterDelay(){
        if(this.username.value.length < 3){
            this.showValidationError(this.username, "Username must be at least 3 characters")
        }
    }

    insertValidationElements() {
        this.allFields.forEach(function(element){
            element.insertAdjacentHTML('afterend', '<div class="alert alert-danger small liveValidateMessage"></div>')
        })
    }

}