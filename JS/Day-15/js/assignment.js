// Fibonachi 

let F1 = 0;
let F2 = 1;
let n = 0;
let F3 = 0;

let m = prompt('Give me the range');

while ( n<=m ) {
    let F3 = F1 + F2;
    let F1 = F2;
    let F2 = F3;
    n = n + 1;
} console.log(F3);