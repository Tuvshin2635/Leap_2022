// console.log('bom js');
// console.log(window);
// // window.alert('Hello')

// window.open('https://google.com', 'hello');

// window.confirm('Helloo');

// let result = window.confirm('do you wanna play?')

// console.log(result);

// let message = result ? 'та устгахдаа итгэлтэй байна уу?' : 'Та буцах товчийг дарлаа';

// // let alertButton = document.getElementById('alertButton');
// // let cancelButton = document.getElementById('cancelButton');
// // let timeouID;

// function showAlert() {
//     timeouID = setTimeout(alert, 3000, 'setTimeOut Demo!');
// }

// function cleartAlert() {

// }




// alertButton.addEventListener('click', () => {
//     console.log('alert button is clicked');
// })

// cancelButton.addEventListener('click', () => {
//     console.log('alert button is clicked');
// })
let counter = 0;

let startTimer = document.getElementById('startTimer');

startTimer.addEventListener("click", runTimerInterval);

function runTimerInterval ( ) {
    window.setInterval(startInterval, 1000);
}

function startInterval() {
    let now = new Date();
    let myTimer = document.getElementById('myTimer');
    myTimer.innerHTML = now.getSeconds();
    console.log(counter);
    counter++
}