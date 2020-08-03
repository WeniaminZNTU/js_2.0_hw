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
let boolTrue = true;
let language = 'java script';
let vanHundred = '100';

console.log(`nam: ${nam}`);
console.log(`bool_t: ${boolTrue}`);
console.log(`language: ${language}`);
console.log(`van_hundred: ${vanHundred}`);

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
let usrNam, squareUsrNam;

usrNam = prompt('Enter namber');

squareUsrNam = usrNam ** 2;

alert(`Square of number ${usrNam}:${squareUsrNam}`)

//Second task
let firstUsrNam, secondUsrNam;
let average;

firstUsrNam = prompt('Enter first namber');
secondUsrNam = prompt('Enter second namber');

firstUsrNam = parseFloat(firstUsrNam);
secondUsrNam = parseFloat(secondUsrNam);

average = (firstUsrNam + secondUsrNam) / 2;

alert(`Average is:${average}`);

//Third task
let minutes, seconds;

minutes = prompt('Enter the number of minutes');

seconds = minutes * 60;

alert(`${seconds} seconds in ${minutes}`)

//Fourth task
let userName, greeting = 'Hello';

userName = prompt('Enter your name');
alert(`${greeting}, ${userName}`);


//Condition-Based tasks
//First task
let usrNam;

usrNam = prompt('Enter namber');

if(usrNam === 10)
{
    console.log('Верно');
}

else
{
    console.log('Неверно');
}

//Second task
function check_test_for_true(check)
{
    if(check === true){console.log('Верно');}
    else{console.log('Неверно');}
}

function check_test_for_not_tru(check)
{
    if(check != true){console.log('Верно');}
    else{console.log('Неверно');}
}


let test = true;
console.log('Results for the first option')
check_test_for_true(test);
test = false;
check_test_for_true(test);

test = true;
console.log('Results for the second option');
check_test_for_not_tru(test);
test = false;
check_test_for_not_tru(test);

//Third task
const smallDiscount = 3, middleDiscount = 5;
let amount, toPay;

amount = prompt('Enter purchase amount');

if(amount >= 500 && amount < 800)
{
    toPay = ((amount / 100) * smallDiscount) - amount;
    alert(`Purchase amount:${toPay}`)
}

else if(amount >= 800)
{
    toPay = ((amount / 100) * middleDiscount) - amount;
    alert(`Purchase amount:${toPay}`)
}

else{alert(`Purchase amount:${toPay}`);}

//Cycle tasks
//First task
let counter;

counter = 25;
while(counter >= 0)
{
    console.log(counter--);
}

counter = 25;
do
{
    console.log(counter--);
}while(counter >= 0);

counter = 25;
for(let i = 0; counter >= 0; i--)
{
    console.log(counter);
}

//Second task
let cycleCounter;

cycleCounter = 10;
while(cycleCounter <= 50)
{
    if(cycleCounter % 5 === 0) console.log(cycleCounter++);
}

cycleCounter = 10;
do
{
    if(cycleCounter % 5 === 0) console.log(cycleCounter);
    cycleCounter++;
}while(cycleCounter <= 50);

cycleCounter = 10;
for(let i = 0; counter <= 50; i++)
{
    if(i % 5 === 0) console.log(i);
}


//Third task
let count, sumOfNam;

sumOfNam = 0;
count = 1;
while(counter < 100)
{
    sumOfNam += count;
}

sumOfNam = 0;
count = 1;
do
{
    sumOfNam += count;
}while(count < 100);

sumOfNam = 0;
for(let i = 1; count < 100; count++)
{
    sumOfNam += i;
}

//Fourth task
let userNamber;
const answer = 6;

while(userNamber != answer)
{
    userNamber = prompt('Solve the math example(2 + 2 * 2) and enter your answer');
}

do{
    userNamber = prompt('Solve the math example(2 + 2 * 2) and enter your answer');
}while(userNamber != answer);

userNamber = null;
for( ; userNamber != answer; )
{
    userNamber = prompt('Solve the math example(2 + 2 * 2) and enter your answer');
}

//Function assignment
function isAdult(age)
{
    if(age >= 18) return true;
    else return false;
}

console.log(`The result of the isAdult function with parameter 4:${isAdult(4)}`);
console.log(`The result of the isAdult function with parameter 4:${isAdult(20)}`);
