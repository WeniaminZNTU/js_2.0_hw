'use strict'

//Variable tasks
//First task
let a = 2, b = 5;
console.log(a * b);

//Second task
let c = 2, d = 5;
console.log(c / d);

//Third task
let e = 2, f = 5;
console.log(e + f);

//Fourth task
let nam = 11;
let bool_t = true;
let language = 'java script';
let van_hundred = '100';

console.log(`nam: ${nam}`);
console.log(`bool_t: ${bool_t}`);
console.log(`language: ${language}`);
console.log(`van_hundred: ${van_hundred}`);

//Fifth task
let num = 1;

num += 11;
num -= 11;
num *= 11;
num /= 11;
num++;
num--;


//Prompt tasks
//First task
let usr_nam;

usr_nam = prompt('Enter namber');

usr_nam = usr_nam ** 2;

//Second task
let first_usr_nam, second_usr_nam;
let average;

first_usr_nam = prompt('Enter first namber');
second_usr_nam = prompt('Enter second namber');

first_usr_nam = parseFloat(first_usr_nam);
second_usr_nam = parseFloat(second_usr_nam);

average = (first_usr_nam + second_usr_nam) / 2;

alert(`Average is:${average}`);

//Third task
let minutes, seconds;

minutes = prompt('Enter the number of minutes');

seconds = minutes * 60;

//Fourth task
let userName, greeting = 'Hello';

userName = prompt('Enter your name');
alert(`${greeting}, ${userName}`);


//
