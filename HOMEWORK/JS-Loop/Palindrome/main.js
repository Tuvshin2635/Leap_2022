// (let i = 0; i < len / 2; i++) 

function palindrome() {
    var a, b, no, temp = 0;
    no = Number(document.getElementById("palindrome").value);
    b = no;
    while (no > 0) {
        a = no % 10;
        no = parseInt(no / 10);
        temptemp = temp * 10 + a;
    }
    if (temp == b) {
        alert("It is a Palindrome Number");
    }
    else {
        alert("it is not a Palindrome Number");
    }
}

// let b, a = 0;
// while (a > 0) {
//     b = 
// }