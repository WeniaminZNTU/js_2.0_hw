'use strict'

//Condition task 
let namber;
let temp;
let againConditionTask = true;

do{
    namber = prompt('Enter a number to check');
        if(namber !== null && !isNaN(namber) && namber !== ''){
            temp = prompt('Select the number to check for division: five(5), three(3), two(2)');
                if(temp !== null && !isNaN(temp) && temp !== '' && (temp === '5' || temp ===  '3' || temp === '2')){
                    namber = Number(namber);
                    temp = Number(temp);

                    againConditionTask = false;
                }
        }
        else alert('Enter correct data');
}while(againConditionTask);

if(temp === 5){
    if(nam % 5 === 0) console.log(`${namber} is divisible by ${temp} no remainder`);
    else console.log(`${namber} is not divisible by ${temp}`);
}

if(temp === 3){
    if(nam % 3 === 0) console.log(`${namber} is divisible by ${temp} no remainder`);
    else console.log(`${namber} is not divisible by ${temp}`);
}

if(temp === 2){
    if(nam % 2 === 0) console.log(`${namber} is divisible by ${temp} no remainder`);
    else console.log(`${namber} is not divisible by ${temp}`);
}



//Task 1 - Switch
let num, result, againFirstTaskSwitch;

do{

    num = prompt('Enter chilo from one to 1 to 4 inclusive');
    num = Number(num);

    if(num !== null && !isNaN(num) && num !== '' && (num >= 1 && num <= 4)){
        againFirstTaskSwitch = false;
    }
    else alert('Enter correct data');
}while(againFirstTaskSwitch);


switch(num){
    case '1':
        result = 'зима';
        break;
    case '2':
        result = 'весна';
        break;
    case '3':
        result = 'лето';
        break;
    case '4':
        result = 'зима';
        break;
}



//Task 2 - Switch
let month, againSecondTaskSwitch;

do{

    month = prompt('Enter the ordinal number of the month(1 - 12)');
    month = Number(month);

    if(month !== null && !isNaN(month) && month !== '' && (month >= 1 && month <= 12)){
        againSecondTaskSwitch = false;
    }
    else alert('Enter correct data, this month does not exist');
}while(againSecondTaskSwitch);

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
let dayOfWeek, againThirdTaskSwitch;

do{

    dayOfWeek = prompt('Enter the ordinal number of the day of the week(1 - 7');

    if(dayOfWeek !== null && !isNaN(dayOfWeek) && dayOfWeek !== ''){
        dayOfWeek = Number(dayOfWeek);

        againThirdTaskSwitch = false;
    }
    else alert('Enter correct data, This day of the week doesn\'t exist');
}while(againThirdTaskSwitch);


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
        alert('There is no day of the week with this number.');
}



//Task 4 - Switch
let day, againFouthTaskSwitch;

do{
    day = prompt('Enter the ordinal number of the day of the week(1 - 7');
    dayOfWeek = Number(day);

    if(day !== null && !isNaN(day) && month !== '' && (day <= 1 && day >= 31)){
        againFouthTaskSwitch = false;
    }
    else alert('Enter correct data, This day of the month doesn\'t exist');
}while(againFouthTaskSwitch);


switch(true){
    case day >= 1 && day <= 10:
        console.log('Этот день часть первой декады месяца');
        break;
    
    case day >= 11 && day <= 20:
        console.log('Этот день часть второй декады месяца');

    case day >= 21 && day <= 31:
        console.log('Этот день часть тертей декады месяца');
}


