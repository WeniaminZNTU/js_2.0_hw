'use strict'
//Condition task 
let nam;
let temp;
let again = true;

do{

    nam = prompt('Enter a number to check');
        
    if(nam !== null && !isNaN(nam) && nam !== ''){
        temp = prompt('Select the number to check for division: five (5), three(3), two(2)');
            if(temp !== null && !isNaN(temp) && temp !== '' && (temp === '5' || temp ===  '3' || temp === '2')){
                nam = Number(nam);
                temp = Number(temp);

                again = false;
            }
    }
}while(again);

if(temp === 5){
    if(nam % 5 === 0) console.log(`${nam} is divisible by ${temp} no remainder`);
    else console.log(`${nam} is not divisible by ${temp}`);
}

if(temp === 3){
    if(nam % 3 === 0) console.log(`${nam} is divisible by ${temp} no remainder`);
    else console.log(`${nam} is not divisible by ${temp}`);
}

if(temp === 2){
    if(nam % 2 === 0) console.log(`${nam} is divisible by ${temp} no remainder`);
    else console.log(`${nam} is not divisible by ${temp}`);
}

