'use strict'
let S = 12000000, p = 10, years = 5;
let perepl = null;
for(let i = 0; i <= 4; i++){
    perepl += S / 10 * 1.1;
}

console.log(perepl);