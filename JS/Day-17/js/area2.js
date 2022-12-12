// // array includes
// console.log('array includes');

// // arr1 = [2,4,5] =>5 true 3=> false

// let arrayIncludes = function (arr, number) {
//     let found = false;          
//     for (let i = 0; i < arr.length; i++) {
//         if (number === arr[i]) {
//             found = true;
//             break;
//         }
//     }
//     return found;
// }
// console.log(arrayIncludes(arrayInc,2));
// console.log(arrayIncludes(arrayInc,5));
// console.log(arrayIncludes(arrayInc,3));


// // console.log(arrayInc.includes(2));
// // console.log(arrayInc.includes(5));
// // console.log(arrayInc.includes(3));

const animals = ['chono', 'buhun', 'temee', 'nugas', 'buhun']
console.log(animals.indexOf('buhun')); // 1

4 // 2р индексээс хойш хайна

7 // хэрэв байхгүй бол -1 утга буцаана

console.log(animals.indexOf('giraffe')); // -1

//JOIN 
console.log('Join me function');

// arr1 = ['1', '2', '3'] => 123
let funcJoin = (arr, symbol) => {
    let output = '' ;
for (let i = 0; i<arr.length; i++){
    output = output + arr[i] + symbol;
}

    return output
}

const arrayJoin = [1,2,3]
console.log(funcJoin(arrayJoin,";")); //123

const jiguurten = ['Elee', 'Heree', 'Galuu'];
console.log(jiguurten.join());
console.log(jiguurten.join(''));


const arr = [0, 1, 2, 3, 4];
const poppedValue = arr.pop();
console.log(poppedValue); // 4
console.log(arr); // Array [0,1,2,3]

let popFunc = (arr) => {
    // debugger
    const lastIndex = arr.length - 1;
    let poppedArray = []
    for (let i =0; i<arr.length; i++){
        if (i !== lastIndex) {
            poppedArray.push(arr[i]);
        }
    }
    return poppedArray;
}
const popArray = [1,2,3]
console.log(popFunc(12, 4,3,65,5,6));
console.log();
