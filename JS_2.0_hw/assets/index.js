'use strict'

//Condition task 
let namber;
let temp;

namber = inputValidation('Enter a number to check');
temp = inputValidation('Select the number to check for division: five(5), three(3), two(2)', 'Enter correct data', 2, 5);


if(temp === 5){
    if(namber % 5 === 0) console.log(`${namber} is divisible by ${temp} no remainder`);
    else console.log(`${namber} is not divisible by ${temp}`);
}

if(temp === 4){
    if(namber % 4 === 0) console.log(`${namber} is divisible by ${temp} no remainder`);
    else console.log(`${namber} is not divisible by ${temp}`);
}

if(temp === 3){
    if(namber % 3 === 0) console.log(`${namber} is divisible by ${temp} no remainder`);
    else console.log(`${namber} is not divisible by ${temp}`);
}

if(temp === 2){
    if(namber % 2 === 0) console.log(`${namber} is divisible by ${temp} no remainder`);
    else console.log(`${namber} is not divisible by ${temp}`);
}



//Task 1 - Switch
let num, result;

num = inputValidation('Enter the Season Number(1 - 4)', 'Enter correct data', 1, 4);

switch(num){
    case 1:
        result = 'зима';
        console.log(result);
        break;
    case 2:
        result = 'весна';
        console.log(result);
        break;
    case 3:
        result = 'лето';
        console.log(result);
        break;
    case 4:
        result = 'зима';
        console.log(result);
        break;
}



//Task 2 - Switch
let month;

month = inputValidation('Enter the ordinal number of the month(1 - 12)', 'Enter correct data, this month does not exist', 1, 12);

switch(month){
    case 1: 
    case 2: 
    case 12:
        console.log('It\'s winter month');
        break;
    case 3:
    case 4:
    case 5:
        console.log('This is the spring month');
        break;
    case 6:
    case 7:
    case 8:
        console.log('This is the summer month');
        break;
    case 9:
    case 10:
    case 11:
        console.log('This is the autumn month');
}



//Task 3 - Switch
let dayOfWeek;

dayOfWeek = inputValidation('Enter the ordinal number of the day of the week(1 - 7)', 'Enter correct data, This day of the week doesn\'t exist');

switch(dayOfWeek){
    case 1:
        console.log('Понедельник')
        break;

    case 2:
        console.log('Вторник');
        break;

    case 3:
        console.log('среда');
        break;

    case 4:
        console.log('Четверг');
        break;

    case 5:
        console.log('Пятница');
        break;

    case 6:
        console.log('Суббота');
        break;

    case 7:
        console.log('Воскресенье');
        break;
        
    default:
        alert('There is no day of the week with this number');
}



//Task 4 - Switch
let day;

day = inputValidation('Enter the day of the month (1 - 31)', 'Enter correct data', 1, 31);

switch(true){
    case day >= 1 && day <= 10:
        console.log('Этот день часть первой декады месяца');
        break;
    
    case day >= 11 && day <= 20:
        console.log('Этот день часть второй декады месяца');

    case day >= 21 && day <= 31:
        console.log('Этот день часть тертей декады месяца');
}



//Task 1 - Cycles
let number, fact = 1;

number = inputValidation('Enter a number(to calculate its factorial)');

for(let i = 1; i <= number; i++){
    fact *= i;
}

console.log(`${number}! = ${fact}`);


// Task 2 - Cycles
let N, total = 0;
const one = 1;

N = inputValidation('Enter the number of elements of the sequence(1 + 1/2 + 1/3... 1/N)');

for(let i = 1; i <= N; i++){
    total += one / i;
}

console.log(`Sum of ${N} elements of the sequence:${total}`);


//Task 3 - Cycles
let lim1, lim2, productOfNumbers = 0;

lim1 = inputValidation('Enter the first number to calculate the product of numbers within (first and last number)');
lim2 = inputValidation('Enter the last number', 'Enter correct data', lim1);

for(let i = lim1; i < lim2; i++){
    productOfNumbers += i * (i + 1);
}

console.log(`Product of aggregate of numbers from ${lim1} to ${lim2}=${productOfNumbers}`);


//Task 1 for functions
function isPrime(num){

  for(let i = 2; i < num; i++){
    if(num % i === 0 && num !== 1) return false;
  }

return true;
}

console.log('Task 1 for function');
console.log(`The result of checking the number 4 with the isPrime function:${isPrime(4)}`);
console.log(`The result of checking the number 5 with the isPrime function:${isPrime(5)}`);
console.log(`The result of checking the number 6 with the isPrime function:${isPrime(6)}`);
console.log(`The result of checking the number 7 with the isPrime function:${isPrime(7)}`);
console.log('')


//Task 2 for functions
function checkMultiplicity(value, divisor){
  return value % divisor === 0
}
  
console.log('Task 2 for function');
console.log(`The result of checking for multiplicity with the checkMultiplicity function of numbers 25 and 5:${checkMultiplicity(25, 5)}`);
console.log(`The result of checking for multiplicity with the checkMultiplicity function of numbers 15 and 3:${checkMultiplicity(15, 3)}`);
console.log(`The result of checking for multiplicity with the checkMultiplicity function of numbers 15 and 5:${checkMultiplicity(15, 5)}`);
console.log(`The result of checking for multiplicity with the checkMultiplicity function of numbers 15 and 4:${checkMultiplicity(15, 4)}`);
console.log('');


//Task 3 for functiom
function isTriangle(a, b, c){
    return (a + b) > c && (a + c) > b && b + c > a;
}
  
console.log('Task 3 for function');
console.log(`The result of checking the possibility of creating a triangle with the isTriangle () function with the values ​​of the sides ​​a = 10, b = 5, c = 9:${isTriangle(10, 5, 9)}`);
console.log(`The result of checking the possibility of creating a triangle with the isTriangle () function with the values ​​of the sides ​​a = 15, b = 11, c = 25:${isTriangle(15, 11, 25)}`);
console.log(`The result of checking the possibility of creating a triangle with the isTriangle () function with the values ​​of the sides ​​a = 15, b = 10, c = 25:${isTriangle(15, 10, 25)}`);
console.log(`The result of checking the possibility of creating a triangle with the isTriangle () function with the values ​​of the sides ​​a = 40, b = 32, c = 72:${isTriangle(40, 32, 72)}`);
console.log('');


//Task 4 for function
function areaOfTriangle(a, b, c){
let p, s;

    p = (a + b + c) / 2;
    s = p * ((p - a) * (p - b) * (p - c));
    
    return Math.sqrt(s);
}


console.log('Task 4 for function (1\\2)');
console.log(`Calculated area of ​​a triangle using the areaOfTriangle() function with sides a = 10, b = 10, c = 10:${areaOfTriangle(10, 10, 10)}`);
console.log(`Calculated area of ​​a triangle using the areaOfTriangle() function with sides a = 10, b = 5, c = 9:${areaOfTriangle(10, 5, 9)}`);
console.log(`Calculated area of ​​a triangle using the areaOfTriangle() function with sides ​​a = 15, b = 11, c = 25:${areaOfTriangle(15, 11, 25)}`);
console.log(`Calculated area of ​​a triangle using the areaOfTriangle() function with sides a = 25, b = 12.5, c = 22:${areaOfTriangle(25, 12.5, 22)}`);
console.log('');


function AreaOfRectangle(a, b){
    return a * b;
}
    
console.log('Task 4 for function (2\\2)');
console.log(`Calculated area of ​​a rectangle using the areaOfRectangle() function with sides a = 5, b = 9:${AreaOfRectangle(5, 9)}`);
console.log(`Calculated area of ​​a rectangle using the areaOfRectangle() function with sides a = 76, b = 158:${AreaOfRectangle(76, 158)}`);
console.log(`Calculated area of ​​a rectangle using the areaOfRectangle() function with sides a = 10, b = 15:${AreaOfRectangle(10, 15)}`);
console.log(`Calculated area of ​​a rectangle using the areaOfRectangle() function with sides a = 16, b = 34:${AreaOfRectangle(16, 34)}`);
console.log('');








function inputValidation(appealToUser, errMass='Enter correct data', lim1, lim2){
    let value, again = true;
    
        do{
            value = prompt(appealToUser);
    
                if(value !== null && !isNaN(value) && value !== '' && (lim1 === undefined && lim2 === undefined)){
                  value = Number(value);
                  again = false;
                }

                else if(value !== null && !isNaN(value) && value !== '' && (lim1 !== undefined && value >= lim1 && lim2 === undefined)){
                    value = Number(value);
                    again = false;
                }
  
                else if(value !== null && !isNaN(value) && value !== '' && (value >= lim1 && value <= lim2)){
                  value = Number(value);
                  again = false;
                }
    
                else alert(errMass);
    
        }while(again)
    
    return value;
}
