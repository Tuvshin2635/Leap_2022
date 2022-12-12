console.log('My Function');

// Function declaration -  funktsiin todorxoiloh
function f() {
    console.log('Hello Function');
} 
// function call : 
f();

//1.
/**
 * f(x) = x * x => is parameter  буюу функцын гаднаас авдаг хувьсагч
 */

function f1 (x) {
    console.log(x * x);
}
f1(5);

//2 
function f2 (x,y) {
    console.log(Math.pow(x, 2) + Math.pow(y, 2));    
}
f2(5,3);

function f3 (x,y) {
    console.log(Math.pow((x+y), 2));

}
f3(2,4);

function factorial(x) {
    let multiplication = 1;
    for (let i =1; i<=x; i++ ) {
        multiplication = multiplication * i;
    }
    console.log(multiplication);
}
factorial(2);




console.log('COSINUS');
function f5 (x) {
    console.log(Math.cos(x) - Math.sin(x));
}
f5(45);

function F6 (x) {
    console.log(Math.pow(x,3) + Math.pow(x,2) + 5 *x + 12 );
}
F6(3);

function f7 (x) {
    console.log(Math.pow(x,2));
}
f7(5);

// function E (m, c) {
//     console.log(m * (Math.pow(c,2)));
// }
// const c = 300000;
// E(m,c);

//f9 
function f9(x) {
    console.log(Math.sqrt(x));

}
f9(729);