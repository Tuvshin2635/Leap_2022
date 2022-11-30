

 let i = 4 > 3; //true
let iii = 4 < 3; //false
let ii = 4 >= 3; // true
let iv = 4 <= 3; //false
let v = 4 == 4; // true
let vi = 4 === 4; //true
let vii = 4 != 4; //false
let iix = 4 !== 4; //false
let ix = 4 != "4"; //false
let x = 4 == "4"; //true
let xi = 4 === "4"; //false

console.log(i, iii, ii , iv, v, vi, vii, iix, ix, x, xi);


let one = 4 > 3 && 10 < 12; // true
let two = 4 > 3 && 10 > 12; // false
let three = 4 > 3 || 10 < 12; //true 
let four = 4 > 3 || 10 > 12; //true
let five = !(4 > 3);  //false
let six = !(4 < 3); //true
let eight = !(4 > 3 && 10 < 12); //false
let nine = !(4 > 3 && 10 > 12); //true
let ten = !(4 === "4"); //true
console.log(one, two, three, four, five, six, eight, nine, ten);

let myAge = prompt('fill the your Age')
let yourAge = prompt('fill the his/her Age')
let old =(myAge - yourAge)
console.log(old)
    if(myAge > yourAge){
        console.log('chi xugshin')
    }
    if(myAge < yourAge){
        console.log('chi zaluu')
    }
    else (myAge = yourAge)
        console.log('nas chitsuu')
    
