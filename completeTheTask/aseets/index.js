'use strict'

ArrayMethods.prototype = new CreateArray();

const myArr = new ArrayMethods('test1', 'test2', 'test3', 100, 50);


myArr.forEach(function(item, i, arr){
    alert(i + ': ' + item + ' (массив' + arr + ')');
});

console.log(myArr.push('test4'));
console.log(myArr);

function CreateArray(){
    this.length = 0;

    for(let i = 0; i < arguments.length; i++){
        this[this.length] = arguments[i];

        this.length++;
    }
}

function ArrayMethods(){
    this.push = function (){
        this.length = 0;

        for(let i = 0; i < arguments.length; i++){
            this[this.length] = arguments[i];

            this.length++;
        }
        this.length;
    }

    this.pop = function (){
        ret = this[this.length];
        
        delete this[this.length];
        this.length--;
        
        return ret;
    }

    this.forEach = function (f){
        for(let i = 0; i < this.length; i++){
            f(this[i]);
            alert(this[i]);
        }
    }
}