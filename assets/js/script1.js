
var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName() {
    var name = document.getElementById('contact-name').value;

    if(name.length == 0) {
        nameError.innerHTML = 'Name is reqired';
        return false;
    }
    if(!name.match(/^[A-Za-z ]{3,30}$/)){
        nameError.innerHTML = 'Write full name'; 
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validatePhone() {
    var phone = document.getElementById('contact-phone').value; 

    if(phone.length == 0) {
        phoneError.innerHTML = 'Phone number is required'
        return false;
    }
    if(phone.length != 10) {
        phoneError.innerHTML = 'Number should be 10 digits';
        return false;
    }
    if(!phone.match(/^\d{10}$/)) {
        phoneError.innerHTML = 'Only numbers';
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true
}

function validateEmail() {
    var email = document.getElementById('contact-email').value; 

    if(email.length == 0) {
        emailError.innerHTML = 'email is required';
        return false;
    }
    if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        emailError.innerHTML = 'email invalid';
        return false
    }

    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateMessage() {
    var message = document.getElementById('contact-message').value; 
    var required = 30;
    var left = required - message.length;

    if(left > 0) {
        messageError.innerHTML = left + 'more charecters required';
        return false;
    }

    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
        submitError.style.display = 'block'
        submitError.innerHTML = 'Please check the errors';
        setTimeout(function(){submitError.style.display = 'none';}, 3000);
        return false;
    }
}