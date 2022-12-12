function pow (number, exponent) {
    let multiply = 1
    for (let i =1; i<=3; i++){
        multiply = multiply * number;
    }
    return multiply;
}
let result = pow (2,3);
console.log(result);
console.log(pow(5,3));


