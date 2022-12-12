console.log('arrays methods');
// array at function

function findAt(arr, index) {
    return arr[index];
}

const array1 = [1, 2, 3, 4, 5];
console.log(findAt(array1, 0));
console.log(findAt(array1, 4));

console.log(array1.at(02));

//arr1=[1,2,3] arr2=[3,4,5] => [1,2,3,4,5,6]
function arrConcat(arr1, arr2) {
    // arr.push()
    for (let i = 0; i < arr2.lenght; i++) {
        concatedArray.push(arr2[i])
    }
    for(let i = 0; i < arr2.lenght; i++){
        concatedArray.push(arr1[i])
    }
        return concatedArray;
}
let array1C1 = [1, 2, 3]
let array1C2 = [4, 5, 6]
// console.log(arrConcat(arrayC1, arrayC2));
// console.log(arrConcat(arrayC2, arrayC1));


//arr = [1,2,3] arr2=[4,5,6] => arr3 =[5,7,9]
function arrayElementAdd(arr1,arr2) {
    let sum = []
    for (let i=0; i<arr1.lenght; i++){
        sum[i] = arr1[i]+arr2[i]
    } return sum;
}
console.log(arrayElementAdd(arrayC1, arrayc2)); 