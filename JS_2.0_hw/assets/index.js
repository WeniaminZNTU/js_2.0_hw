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
        result = 'осень';
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

number = inputValidation('Enter a number(to calculate its factorial)', 'Enter correct number, this number is too small', 1);

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
let lim1, lim2, productOfNumbers = 1;

lim1 = inputValidation('Enter the first number to calculate the product of numbers within (first and last number)');
lim2 = inputValidation('Enter the last number', 'Enter correct number, this nuber is too small', lim1);

for(let i = lim1; i < lim2; i++){
    productOfNumbers += i * productOfNumbers;
}

console.log(`Product of aggregate of numbers from ${lim1} to ${lim2}=${productOfNumbers}`);


//Task 1 for functions
function isPrime(num){
  if(num === 1) return false;

  for(let i = 2; i < num; i++){
    if(num % i === 0) return false;
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
function areaOfTriangleSides(a, b, c){
let p, s;

    p = (a + b + c) / 2;
    s = p * ((p - a) * (p - b) * (p - c));
    
    return Math.sqrt(s);
}


console.log('Task 4 for function (1\\2)');
console.log(`Calculated area of ​​a triangle using the areaOfTriangleSides() function with sides a = 10, b = 10, c = 10:${areaOfTriangleSides(10, 10, 10)}`);
console.log(`Calculated area of ​​a triangle using the areaOfTriangleSides() function with sides a = 10, b = 5, c = 9:${areaOfTriangleSides(10, 5, 9)}`);
console.log(`Calculated area of ​​a triangle using the areaOfTriangleSides() function with sides ​​a = 15, b = 11, c = 25:${areaOfTriangleSides(15, 11, 25)}`);
console.log(`Calculated area of ​​a triangle using the areaOfTriangleSides() function with sides a = 25, b = 12.5, c = 22:${areaOfTriangleSides(25, 12.5, 22)}`);
console.log('');


function areaOfTriangleHeightAndSides(a, h){
    return (a * h) / 2;
}


console.log('Task 4 for function (2\\2)');
console.log(`Calculated area of ​​a triangle using the areaOfTriangleHeightAndSides() function with sides a = 140, h = 80:${areaOfTriangleHeightAndSides(140, 80)}`);
console.log(`Calculated area of ​​a triangle using the areaOfTriangleHeightAndSides() function with sides a = 80, h = 55:${areaOfTriangleHeightAndSides(80, 55)}`);
console.log(`Calculated area of ​​a triangle using the areaOfTriangleHeightAndSides() function with sides a = 55, h = 20:${areaOfTriangleHeightAndSides(55, 20)}`);
console.log(`Calculated area of ​​a triangle using the areaOfTriangleHeightAndSides() function with sides a = 6.5, h = 3:${areaOfTriangleHeightAndSides(6.5, 3)}`);
console.log('');


function AreaOfRectangle(a, b){
    return a * b;
}
    
console.log(`Calculated area of ​​a rectangle using the areaOfRectangle() function with sides a = 5, b = 9:${AreaOfRectangle(5, 9)}`);
console.log(`Calculated area of ​​a rectangle using the areaOfRectangle() function with sides a = 76, b = 158:${AreaOfRectangle(76, 158)}`);
console.log(`Calculated area of ​​a rectangle using the areaOfRectangle() function with sides a = 10, b = 15:${AreaOfRectangle(10, 15)}`);
console.log(`Calculated area of ​​a rectangle using the areaOfRectangle() function with sides a = 16, b = 34:${AreaOfRectangle(16, 34)}`);
console.log('');



//Task 1 - Objects
const student = {
    name: 'Lorem',
    surname: 'Ipsum',
    isMale: true,
    phoneNumber: '099 0567 89 002',
    email: 'exzample@gmail.com',
}

const education = {
    course: 2,
    faculty: 'economy',
    cathedra: 'Department of International Economic Relations',
    curator: 'Deinega L. U.',
}



let randomNumericArray = new Int8Array(100);
for(let i = 0; i < randomNumericArray.length; i++){
    randomNumericArray[i] = Math.random() * (100 - (-100)) + (-100);
//    console.log(`i=${i}, ${randomNumericArray[100]}`);
}

console.log('Task for array');
console.log(`length randomNumericArray:${randomNumericArray.length}`);
console.log('Even-indexed items');


for(let i = 0; i < randomNumericArray.length; i++){
    if(i % 2 === 0) console.log(`[${i}] = ${randomNumericArray[i]}`);
}


console.log('\nEven nambers');
for(let i = 0; i < randomNumericArray.length; i++){
    if(randomNumericArray[i] % 2 === 0) console.log(`Even:${randomNumericArray[i]}`);
}

console.log('\nIndex(es) of elements equal to zero\n');
for(let i = 0, count = 0; i < randomNumericArray.length; i++){
    
    if(randomNumericArray[i] === 0){
        console.log(`[${i}]`);
        count++;
    }

    if((i + 1) === randomNumericArray.length) console.log(`\nWith a total of ${randomNumericArray.length} elements ${count} equal to zero\n\n`);
}


let book = function (authorName, bookName, releaseYear, publisher){
    this.authorName = authorName,
    this.bookName = bookName,
    this.releaseYear = releaseYear,
    this.publisher = publisher
}

let eBook = function (authorName, bookName, releaseYear, publisher, format, eNumber){
    this.authorName = authorName,
    this.bookName = bookName,
    this.releaseYear = releaseYear,
    this.publisher = publisher,
    this.format = format,
    this.eNumber = eNumber
}


//last task
MyArray.prototype = new AddMethods();

let tmp;

const artifitialArray = new MyArray('test1', 1);
console.log('ArtifitialArray after creation:', artifitialArray);


tmp = artifitialArray.push('test2', 200, 300);
console.log('ArtifitialArray after push:', artifitialArray);
console.log(`Number of elements after pushing 3x:${tmp}`);


tmp = artifitialArray.pop();
console.log('ArtifitialArray after pop:', artifitialArray);
console.log(`The return value of the .pop() method:${tmp}`);


console.log('\n.ForEach() method with one argument');
artifitialArray.forEach(element => {
    console.log(element);
});

console.log('\n.ForEach() method with three arguments');
artifitialArray.forEach((element, index, array) => {
    console.log(`[${index}] = ${element}`);
});

console.log('---------------------------------------');

artifitialArray.forEach((element, index, array) => {
    console.log(array);
});


/**
 * Creates an instance of myArray
 * 
 * @constructor
 * @this {myArray}
 * @param {anything} - Accepts any number of elements
 */
function MyArray(){
    this.length = 0;

    for(let i = 0; i < arguments.length; i++){
        this[this.length] = arguments[i];

        this.length++;
    }
}

/**
* Adds elements
* 
* @method
* @param {anything} - the arguments can have any number of elements
* @return {number} - Correct number of elements in the array
*/
function AddMethods(){

    /**
    * Adds elements
    * 
    * @method
    * @param {anything} - Accepts any number of parameters
    * @return {number} - Returns the correct number of elements
    */
    this.push = function (){
        for(let i = 0; i < arguments.length; i++){
            this[this.length] = arguments[i];

            this.length++;
        }
        return this.length;
    };

    /**
    * Removes the last element of an array and returns it
    * 
    * @method
    * @return {anything} - The value of the last element of the array
    */
    this.pop = function (){
        const lastIndex = --this.length;
        const lastElement = this[lastIndex];

        delete this[this.length];

        return lastElement;
    };

    /**
    * Loops through all elements of the array and applies function(f) to each
    * 
    * @method
    * @param {function} f - a function that applies to each element
    */
    this.forEach = function (f){
        for(let i = 0; i < this.length; i++){
          f(this[i], i, this);
        }
    };
}


/**
* Displays a message to the user with a request and in case of an error
* Limits input to numbers from lim1 to lim2
* 
* @function
* @param {string} appealToUser 
* @param {string} errMass - Optional argument
* @param {string} lim1 - Optional argument
* @param {string} lim2 - Optional argument
* @return {number} - Returns the correct value
*/
function inputValidation(appealToUser, errMass='Enter correct data', lim1, lim2){
    let value, again = true;
    
        do{
            value = prompt(appealToUser);
    
                if(value !== null && !isNaN(value) && value !== '' && (lim1 === undefined && lim2 === undefined)){
                  value = Number(value);
                  again = false;
                }

                else if(value !== null && !isNaN(value) && value !== '' && (value >= lim1 && lim2 === undefined)){
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
