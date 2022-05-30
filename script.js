// console.log(`Check`);
const form = document.querySelector(`#form`);
const username = document.querySelector(`#username`);
const email = document.querySelector(`#email`);
const password = document.querySelector(`#password`);
const password2 = document.querySelector(`#password2`);

//Functions

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const errorMsg = formControl.querySelector("small");
    errorMsg.innerText = message;
}

function isValidEmail(email) {
    let checkEmail = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    return checkEmail.test(email);
}

//EvenListener 

form.addEventListener(`submit`, function (e) {
    e.preventDefault();
    // console.log(form);
    // console.log(`submit`);
    // console.log(username.value);
    // console.log(email.value)
    // console.log(password.value)
    // console.log(password2.value)

    //Username
    if (username.value === ``) {
        showError(username, `Please enter a username`);
    }
    else { showSuccess(username) }


    //email
    if (email.value === ``) {
        showError(email, `Please enter an email`);
    }
    else if (isValidEmail(email.value)) {
        showSuccess(email);
    }
    else
        showError(email, `Invalid Email`);


    //password
    if (password.value === ``) {
        showError(password, `Please enter a password`);
    }
    else {
        showSuccess(password);
    }

    //Confirm Password
    if (password2.value == `` & password == ``) {
        showError(password2, `Confirm your password`);
    }
    else {
        showSuccess(password2);
    }


    //Password Match
    if (password.value === password2.value & password2 !== ``) {
        showSuccess(password2, `password matched`);
    }
    else {
        showError(password2, `Password Did not match`);
    }
})