/* let admin;
let myName;

myName = 'John';
admin = myName;

console.log(admin);

const planet = 'Earth';
const currentUsername = '';

console.log(planet);

let age = +prompt('How old are you?', '26');
let ageDays = (age * +365);
let youSure = confirm(`Are you ${ageDays} days old?`);

if (youSure == true) {
    alert('Oh, wow');
} else {
    alert('Ehh');
}
*/

let userName = prompt ('What is your name?', 'Valentin');
let userCity = prompt ('Where do you live?', 'Nursultan');
let checkUserData = confirm (`So, youre ${userName} from ${userCity}, yeah?`);

alert (`Oh, welcome ${userName}!!!`);