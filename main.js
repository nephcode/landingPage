"use strict"

const dateNow = moment()
dateNow.locale("fr")
console.log(dateNow)

// DOM Elements
const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus'),
    todayDay = document.getElementById("todayDay");


// Output date
todayDay.innerHTML = `${dateNow.format(
    "dddd DD/MM/YYYY"
)}`


// Options
const showAmPm = false;

// Show Time
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    // Set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';

    // 12hr Format
    hour = hour % 12 || 12;

    // Output Time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
        sec
    )} ${showAmPm ? amPm : ''}`;

    setTimeout(showTime, 1000);
}


// Every Hour with SwitchCase
let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

// Set AM or PM
const amPm = hour >= 12 ? 'PM' : 'AM';

// 12hr Format
hour = hour % 12 || 12;

// Output Time
time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
)} ${showAmPm ? amPm : ''}`;


switch (hour) {
    case 12:
        // Morning
        document.body.style.backgroundImage = "url('/images/morning.jpg')";
        greeting.textContent = 'Wesh, ';
        document.body.style.color = 'white';
        break;
    case 11:
        // Morning
        document.body.style.backgroundImage = "url('/images/morning.jpg')";
        greeting.textContent = 'Salam, ';
        document.body.style.color = 'white';
        break;
    case 10:
        // Morning
        document.body.style.backgroundImage = "url('/images/morning.jpg')";
        greeting.textContent = 'Good Morning, ';
        document.body.style.color = 'white';
        break;
    case 9:
        // Morning
        document.body.style.backgroundImage = "url('/images/evening.jpg')";
        greeting.textContent = 'Good Morning, ';
        document.body.style.color = 'white';
        break;
    case 8:
        // Morning
        document.body.style.backgroundImage = "url('/images/morning.jpg')";
        greeting.textContent = 'Massal, ';
        document.body.style.color = 'white';
        break;
    case 7:
        // Morning
        document.body.style.backgroundImage = "url('/images/afternoon.jpg')";
        greeting.textContent = 'Wesh, ';
        document.body.style.color = 'white';
        break;
    case 6:
        // Morning
        document.body.style.backgroundImage = "url('/images/morning.jpg')";
        greeting.textContent = 'Shalom, ';
        document.body.style.color = 'white';
        break;
    case 5:
        // Morning
        document.body.style.backgroundImage = "url('/images/afternoon.jpg')";
        greeting.textContent = 'Bien ou quoi , ';
        document.body.style.color = 'white';
        break;
    case 4:
        // Morning
        document.body.style.backgroundImage = "url('/images/morning.jpg')";
        greeting.textContent = 'Wesh, ';
        document.body.style.color = 'white';
        break;
    case 3:
        document.body.style.backgroundImage = "url('/images/morning.jpg')";
        greeting.textContent = 'Wesh, ';
        document.body.style.color = 'white';
        break;
    case 2:
        document.body.style.backgroundImage = "url('/images/afternoon.jpg')";
        greeting.textContent = 'Wesh, ';
        document.body.style.color = 'white';
        break;
    case 1:
        document.body.style.backgroundImage = "url('/images/morning.jpg')";
        greeting.textContent = 'Wesh, ';
        document.body.style.color = 'white';
        break;
    default:
        document.body.style.backgroundImage = "url('/images/default.jpg')";
        greeting.textContent = 'Good Morning, ';
        document.body.style.color = 'white';
}


// Add Zeros
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background and Greeting
/*function setBgGreet() {
    let today = new Date(),
        hour = today.getHours();

    if (hour < 12) {
        // Morning
        document.body.style.backgroundImage = "url('/images/morning.jpg')";
        greeting.textContent = 'Good Morning, ';
        document.body.style.color = 'white';
    } else if (hour < 18) {
        // Afternoon
        document.body.style.backgroundImage = "url('/images/afternoon.jpg')";
        greeting.textContent = 'Good Afternoon, ';
        document.body.style.color = 'white';
    } else {
        // Evening
        document.body.style.backgroundImage = "url('/images/evening.jpg')";
        greeting.textContent = 'Good Evening, ';
        document.body.style.color = 'white';
    }
}
*/
// Get Name
function getName() {
    if (localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

// Set Name
function setName(e) {
    if (e.type === 'keypress') {
        // Make sure enter is pressed
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}

// Get Focus
function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

// Set Focus
function setFocus(e) {
    if (e.type === 'keypress') {
        // Make sure enter is pressed
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    } else {
        localStorage.setItem('focus', e.target.innerText);
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// Run
showTime();
setBgGreet();
getName();
getFocus();
