console.log('Prime number');

let input = Number(prompt('Give number'));
let temp = 0;

for (let i = 2; i < Math.round(input / 2); i++) {
    if (input % i == 0) {
        temp = temp + 1;
    }
}
if (temp == 0) {
    console.log('its prime number')
} else {
    console.log('Its not Prime Number');
}
