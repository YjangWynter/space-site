class Validator {
    constructor() {
        // This class is just so I can consisely check with regex
        this.name = /^[a-zA-Z\-\'\,]+$/
        this.mail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    }
}
// these select the form & the inputs for name and email only
let form = document.getElementById('form');
let name = document.getElementById('name');
let email = document.getElementById('email');
let subject = document.getElementById('subject')
let submit = document.getElementById('submit');

//created a new Validator object
let check = new Validator();
// this ensures both fields must be valid
let validated = [false, false, false];
//still working this out
const validateData = (regex) => {
    //this adds an event listen check if the name input passes the regex test
    name.addEventListener('blur', function () {

        if (regex.name.test(name.value) == true) {
            name.nextElementSibling.textContent = "Looking good!"
            name.nextElementSibling.className = 'success__text'
            validated[0] = true
        } else {
            name.nextElementSibling.textContent = "You didn't enter a valid name"
            name.nextElementSibling.className = 'error__text'
            validated[0] = false
        }
    })
    email.addEventListener('blur', function () {
 //this adds an event listen check if the email input passes the regex test
        if (regex.mail.test(email.value) == true) {
            email.nextElementSibling.textContent = "Looking good!"
            email.nextElementSibling.className = 'success__text'
            validated[1] = true
        } else {
            email.nextElementSibling.textContent = "You didn't enter a valid email address"
            email.nextElementSibling.className = 'error__text'
            validated[1] = false
        }

    })
    subject.addEventListener('blur', function () {
        //this adds an event listen check if the subject input passes the regex test
               if (regex.mail.test(subject.value) == true) {
                   subject.nextElementSibling.textContent = "Looking good!"
                   subject.nextElementSibling.className = 'success__text'
                   validated[2] = true
               } else {
                   subject.nextElementSibling.textContent = "You didn't enter a valid subject address"
                   subject.nextElementSibling.className = 'error__text'
                   validated[2] = false
               }
       
           })
    submit.addEventListener('click', function (e) {
        //this adds an event listener to clear the form when the submission is valid
        e.preventDefault()
        if (validated.includes(false) === false) {
            form.reset()
            }
        },false)
    return
}
const init = () => {
    //calls the validation function with the regex 
    validateData(check)

}
init() //runs
//runs on load
window.addEventListener('load', init, false)