// to run file use node Login.js  (cmd prompt)
// to run file use node Login.js  (cmd prompt)

//Validate Login Credentials
var username = document.forms['form']['username'];
var password = document.forms['form']['password'];

var noUsername = document.getElementById('noUsername')
var noPassword = document.getElementById('noPassword')

username.addEventListener('textInput', verifyUsername);
password.addEventListener('textInput', verifyPassword);



function validated(){

    if (username.value.length < 5){ //if username under 5 characters
        username.style.border = "1px solid red";
        noUsername.style.display = "block";
        username.focus();
        return false;
    }

    if (password.value.length < 5){ //if password under 5 characters
        password.style.border = "1px solid red";
        noPassword.style.display = "block";
        password.focus();
        return false;
    }

}

function verifyUsername(){

    if (username.value.length > 4 ) {
        username.style.border = "1px solid red";
        noUsername.style.display = "none";
        return true;
    }
}

function verifyPassword(){

    if (password.value.length > 4 ) {
        username.style.border = "1px solid red";
        noPassword.style.display = "none";
        return true;
    }
}