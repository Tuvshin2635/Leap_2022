/** 
Sort the array using  method
Reverse the array using  method
Remove the first IT company from the array
Remove the middle IT company or companies from the array
Remove the last IT company from the array
Remove all IT companies
let array = [ "Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon" ] 
*/

console.log('= = = = = = = = = #1 = = = = = = = = = =');
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
let sorted = itCompanies.sort();
console.log(sorted);

console.log('= = = = = = = = = #2 = = = = = = = = = = = = = = = =');

let reversed = itCompanies.reverse();
console.log(reversed);

console.log('= = = = = = = = = = = = #3 = = = = = = = = = = = = = = = =');

let itCompanies3 = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

let shiftedValue = itCompanies3.shift(0);
console.log(shiftedValue);
console.log(itCompanies3);

// console.log('= = = = = = = = = = = = #4 = = = = = = = = = = = = = = = =');

// let itCompanies4 = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// let spliceValue2 = itCompanies4.splice( 0, 7);
// console.log(spliceValue2);
// console.log(itCompanies4);

console.log('= = = = = = = = = = = = #5 = = = = = = = = = = = = = = = =');

let itCompanies2 = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

let poppedValue2 = itCompanies2.pop(0);
console.log(poppedValue2);
console.log(itCompanies2);


console.log('= = = = = = = = = = = = #6 = = = = = = = = = = = = = = = =');
 
let itCompanies4 = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

let spliceValue2 = itCompanies4.splice( 0, 7);
console.log(spliceValue2);
console.log(itCompanies4);
