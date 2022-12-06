// let a = prompt(" give me big number");
// let count = 0;


// while(a!==0){
//     count  = count + 1;
//     a = Math.floor(a/10);
// }
// console.log(count);

// console.log(Math.floor(12.3)); //12 n

// let a = prompt('give number?');
// let count = 0;

// for (; a !== 0;) {
//     count = (count + 1);
//     a = Math.floor(a / 10);

// }
// console.log(count);


// const str = ('life is Beautiful');

// let urt = str.length;
// let letCount = 0;
// while (letCount < urt) {
//     console.log(str.charAt(letCount));
//     letCount = letCount + 1;
// }


// let rev = 0; let num = 123456; 
// let lastDigit =prompt('give too'); 
// while (num != 0) { 
//     lastDigit = num % 10; 
//     rev = rev * 10 + lastDigit; 
//     num = Math.floor(num / 10); 
// } console.log(num);

let number = prompt('give tooooo?');
// let number = 1234567890; // your number
let output = []; // to save output value

// makes your number into string and then convert it into an array
number = number.toString().split('');

// here the maximum itreation count of array is the length of the array
for (let i = 0; i < number.length; i++) {

    // creating an array of numbers in reverse order
    output[i] = number[number.length - (i + 1)];

};

// joining the array of reversed array and converting back to numbers
output = Number(output.join(""));

console.log(output); // here is your reversed number
