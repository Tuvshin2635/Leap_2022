let arrayOfNumber = [43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11];
console.log(arrayOfNumber);
console.log('Нийлбэр:');

let sum = 0;
for (let i = 0; i < arrayOfNumber.length; i++) {
    sum = sum + arrayOfNumber[i]

} console.log(sum);

// let i = 0;
// let sum = 0;
// while (i < arrayOfNumber.length) {
//     sum = sum + arrayOfNumber[i];
//     i++;
// }
// console.log(sum);

console.log('Хамгийн их тоог олох:');
let max = 0;
for (let i = 0; i < arrayOfNumber.length; i++) {
    if (max < arrayOfNumber[i]) {
        max = arrayOfNumber[i];
    }
} console.log(max);

console.log('Хамгийн бага тоог олох:');
let min = max;
for (let i = 0; i < arrayOfNumber.length; i++) {
    if (min > arrayOfNumber[i]) {
        min = arrayOfNumber[i];
    }
} console.log(min);

console.log('Array - ийн эхэнд дурын 1 тоог нэм.');
let arrayOfNumber2 = [43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11];
arrayOfNumber2[arrayOfNumber2.length + 1]=110;
console.log(arrayOfNumber2);


console.log('6. Array - ийн төгсгөлд дурын 1 тоог нэм');

let arrayOfNumber3 = [43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11];
arrayOfNumber3[arrayOfNumber3.length + 1]=38;
console.log(arrayOfNumber3);


// Input:
let arr1 = [3, 45, 23, 78, 34];
let arr2 = [4, 2, 34, 4, 12, 1];
for (let i,j=0; i,j <arr1.length ; i,j++)
    if (arr1[i]=arr2[j]) {
    arr1[i]*arr2[j]
} console.log(arr1,arr2);

arr1[0]*arr2[0]


// Output: [12, 90, 782, 312, 408, 1]

