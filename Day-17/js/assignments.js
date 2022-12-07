/** Хоёр тооны утгыг хооронд харьцуулаад аль багыг нь хэвлээд true / false 
 *  буцаадаг функц бичнэ үү. Функцын нэр  нь findMin
Өгөгдсөн array-ны элементүүлэг хэвлэдэг функц бичнэ үү. 
    Функцын нэр нь printArray
Өгөгдсөн array-наас хамгийн их утгыг нь олоод буцаадаг функц бичнэ үү. 
    Функцын нэр нь findArrayMax
Өгөгдсөн тоон array-ны утгуудыг бүгдийг нь нэмээд дундажыг нь олоод буцаадаг 
    функц бичнэ үү. Функцын нэр нь findArrayAverage */



console.log('==== 1 =====');

    function findMin (x,y) {
        if ( x > y) {
            return true;
        } else {
            return false;
        }
    }
console.log(findMin(7,9));


console.log(' ==== 2 ===== Decleration');


function printArray (array) {
    for (let i = 0; i<array.length; i++){
        console.log(array[i]);
}
}   

let arr = [45, 23, 75, 99];
let arr2 = [1, 2, 7, 9,7,8];

let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];


printArray(arr);

console.log(' ==== 3 =====  exression type');

let findArrayMax = function (arr){
    let max = -1;
    for (let i = 0; i<arr.length; i++) {
        if (max <= arr[i]){
            max = arr[i];
        }
    } return max;
    
}
console.log(findArrayMax(arr));



console.log(' ==== 4 ===== arrow expression type');
let sum = 0;
let findArrayAverage =  (arr) => {
    for (let i = 0; i<arr.length; i++) {
        sum = sum + arr[i]
    } console.log(sum/arr.length);
}

findArrayAverage(arr2);



// function findOntsDumd (points) {
//     if (points <60){
//         return "Very bad";
//     } else if (points >= 60 && points<70){
//         return "satisfied";
//     } else if (points >= 70 && points<80){
//         return "average";
//     { else if (points >= 80 && points<100){
//         } return "very good";

//     } else 
//     }
// }
