/*
let userName = prompt('What is your name?', 'Denis');
let userCity = prompt('Where are you from?', 'Saratov');
let userAge = +prompt('How old are you?', '18');

let login = (userAge < 18) ? `We are so sorry, ${userName}` :
    (userAge >= 18) ? `Welcome, ${userName} from ${userCity}!` : 'Error';

alert(login);
*/


/*
let question = prompt ('What if official name of Javascript?', '');

let answer = (question == 'ECMAScript') ? 'Yes!' : 'Err.. No.';
alert ( answer );
*/


/*
let userNumber = +prompt ('Write random number', '');
let checkNumber = (userNumber > 0) ? '1' :
                  (userNumber < 0) ? '-1' : 
                  (userNumber == 0) ? '0' : 'Error';

alert ( checkNumber );
*/


/*
let login = prompt ('Who are you', '');
let loginMessage = (login == 'user') ? 'hello' :
                (login == 'boss') ? 'dobriden' :
                (login == '') ? 'enter login' : '';

alert ( loginMessage );
*/


/*
let age = +prompt('How old are you', '');

if (!(age >= 6 && age <= 90)) {
    alert('You can play lego');
};
*/


/*
const userLogin = prompt('Enter your login here', 'Admin');

function checkLogin() {
    let correctLogin = 'Admin';
    let loginResult = (userLogin == correctLogin) ? checkPass() :
        (userLogin == '' || userLogin == null) ? alert('Cancelled') :
        alert('Can not find user');
}

function checkPass() {
    let masterPass = 123456;
    let userPass = +prompt('Please, enter password', '');
    let passResult = (userPass == masterPass) ? 'Access granted' :
        (userPass == '' || userPass == null) ? 'Cancelled' : 'Access denied';
    alert(passResult);
}

checkLogin();
*/


