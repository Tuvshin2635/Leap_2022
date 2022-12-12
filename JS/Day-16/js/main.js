let arr = [1, 4, 5, 6, 8, 10, 9, 8];
// console.log(arr);


for (let i = 0; i < arr.length; i++) {
    if (isEven(arr[i])) {
        arr[[i]] = arr[i] + 4
        // console.log(arr);
    } else arr[i] = arr[i] - 5
} console.log(arr);

function isEven(x) {
    console.log('the number is ' + x );
    if (x % 2 == 0) {
        // console.log('Its a even number');
        return true;
    } else {
        // console.log('its not a even number');
        return false;
    }
}
console.log(isEven(arr[0]));
console.log(isEven(arr[1]));


// isEven(5);
// isEven(100);
// isEven(arr[0]);



// addTwoNumbers(x,y) = x + y 


function addTwoNumbers (x,y) {
        return x+y;
    }

console.log(addTwoNumbers(4,5));

function multiTwoNumbers (x,y) {
    return x * y 
}
console.log(multiTwoNumbers(4,5));


console.log('3 multi');
function multiThreeNumbers (x,y,z) {
    const m = x * y * z; 
    return m;
}
console.log(multiThreeNumbers(3,4,5));
// multiThreeNumbers(2,3,5);