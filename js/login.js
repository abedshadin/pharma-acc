document.getElementById('login-button').addEventListener('click',function(){
const userInputField = document.getElementById('user-input');
const userInput = userInputField.value;

const passInputField = document.getElementById('pass-input');
const passInput = passInputField.value;

userInputField.value = '';
passInputField.value = '';

if(userInput == 'admin@sherpur.com' && passInput == 'admin'){
    window.location.href = 'home.html';
}
else{
    window.location.href = 'error.html';
}

})