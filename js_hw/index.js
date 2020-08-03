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
console.log(`boolTrue: ${boolTrue}`);
console.log(`language: ${language}`);
console.log(`vanHundred: ${vanHundred}`);

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

usrNam = prompt('Enter a number to calculate its square');

usrNam = parseFloat(usrNam);

squareUsrNam = usrNam ** 2;

//alert(`Square of number ${usrNam}:${squareUsrNam}`)

//Second task
let firstUsrNam, secondUsrNam;
let average;

firstUsrNam = prompt('Enter the first number to find the arithmetic mean');
secondUsrNam = prompt('Enter the second number to find the arithmetic mean');

firstUsrNam = parseFloat(firstUsrNam);
secondUsrNam = parseFloat(secondUsrNam);

average = (firstUsrNam + secondUsrNam) / 2;

alert(`Average is:${average}`);

//Third task
let minutes, seconds;

minutes = prompt('Enter the number of minutes');

seconds = minutes * 60;

alert(`${seconds} seconds in ${minutes} minutes`)

//Fourth task
let userName, greeting = 'Hello';

userName = prompt('Enter your name');
alert(`${greeting}, ${userName}`);


//Condition-Based tasks
//First task
let usersNam;

usersNam = prompt('Enter namber(ten)');

usersNam = parseFloat(usersNam);

if(usersNam === 10)
{
    alert('Верно');
}
else
{
    alert('Неверно');
}

//Second task
function check_test_for_true(check)
{
    if(check === true){console.log('Верно');}
    else{console.log('Неверно');}
}

function check_test_for_not_true(check)
{
    if(check != true){console.log('Верно');}
    else{console.log('Неверно');}
}


let test = true;
console.log('First check results')
check_test_for_true(test);
test = false;
check_test_for_true(test);

test = true;
console.log('Second check results');
check_test_for_not_true(test);
test = false;
check_test_for_not_true(test);

//Third task
let amount, toPay;
const smallDiscount = 3, middleDiscount = 5;

amount = prompt('Enter purchase amount');

amount = parseFloat(amount);

if(amount >= 500 && amount < 800)
{
    toPay = amount - ((amount / 100) * smallDiscount);
    alert(`Discount purchase amount:${toPay}`)
}

else if(amount >= 800)
{
    toPay = amount - ((amount / 100) * middleDiscount);
    alert(`Discount purchase amount:${toPay}`)
}

else{alert(`Purchase amount:${amount}`);}

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

for(let i = 25; i >= 0; i--)
{
    console.log(i);
}

//Second task
let cycleCounter;

cycleCounter = 10;
while(cycleCounter <= 50)
{
    if((cycleCounter % 5) === 0) console.log(cycleCounter++);
    cycleCounter++;
}

cycleCounter = 10;
do
{
    if((cycleCounter % 5) === 0) console.log(cycleCounter);
    cycleCounter++;
}while(cycleCounter <= 50);

for(let i = 10; i <= 50; i++)
{
    if((i % 5) === 0) console.log(i);
}

//Third task
let count, sumOfNam;

sumOfNam = 0;
count = 1;
while(count < 100)
{
    sumOfNam += count;
    count++;
}

sumOfNam = 0;
count = 1;
do
{
    sumOfNam += count;
    count++;
}while(count < 100);

sumOfNam = 0;
for(let i = 1; i < 100; i++)
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
alert('Fourth task complete');
//Function assignment
function isAdult(age)
{
    if(age >= 18) return true;
    else return false;
}

console.log(`The result of the isAdult function with (age) parameter 4:${isAdult(4)}`);
console.log(`The result of the isAdult function with (age) parameter 20:${isAdult(20)}`);
