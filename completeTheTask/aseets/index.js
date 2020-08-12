'use strict'

CreateArray.prototype = new AddMethods();

const artificialArray = new ArrayMethods('test1', 'test2', 'test3', 100, 50);

function CreateArray(){
    this.length = 0;

    for(let i = 0; i < arguments.length; i++){
        this[this.length] = arguments[i];

        this.length++;
    }
}

function AddMethods(){

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

// myArr.forEach(function(item, i, arr){
//     alert(i + ': ' + item + ' (массив' + arr + ')');
// });
