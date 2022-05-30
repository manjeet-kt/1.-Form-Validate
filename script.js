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

function InputID(input) {
    return (input.id.charAt(0).toUpperCase() + input.id.slice(1));
}

// Checking Field Entry
function checkEntry(inputArr) {
    inputArr.forEach(input => {
        if (input.value == ``) {
            showError(input, `${InputID(input)} is required`);
        }
        else {
            showSuccess(input);
            return true;
        }
    });
}

//Email Validation

function isValidEmail(input) {
    let checkEmail = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
    if ((input.value.length == 0)) {
        showError(input, `${InputID(input)} is required`)
    }
    else if (checkEmail.test(input.value)) {
        showSuccess(input)
    }
    else {
        showError(input, `Invalid Email`);
    }
}

//Password Validation

function isValidPassword(input) {
    let checkPassword = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$");
    if ((input.value.length == 0)) {
        showError(input, `${InputID(input)} is required`)
    }
    else if (checkPassword.test(input.value)) {
        showSuccess(input);
    }
    else {

        showError(input, `Invalid password`)
    }
}

// Field Character Limit
function fieldCharLimit(input, min, max) {
    if ((input.value.length == 0)) {
        showError(input, `${InputID(input)} is required`)
    }
    else if (input.value.length < min) {
        showError(input, `${InputID(input)} must be greater than ${min} char`)
    }
    else if ((input.value.length > max)) {
        showError(input, `${InputID(input)} can't be more than ${max} char`)
    }
    else {
        showSuccess(input);
    }

}
//Password Match
function matchPassword(input1, input2) {
    if ((input2.value.length == 0)) {
        showError(input2, `${InputID(input2)} is required`)
    }
    else if (input1.value == input2.value) {
        showSuccess(input2);
    }
    else {
        showError(input2, `${InputID(password)} does not match`);
    }
}

//EventListener 

form.addEventListener(`submit`, function (e) {
    e.preventDefault();
    // checkEntry(Enter new fields);
    fieldCharLimit(username, 4, 12);
    fieldCharLimit(password, 8, 16);
    isValidEmail(email);
    isValidPassword(password);
    matchPassword(password, password2);

})

