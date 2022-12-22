let counter = 0;

let startTimer = document.getElementById('startTimer');

startTimer.addEventListener("click", runTimerInterval);

function runTimerInterval ( ) {
    window.setInterval(startInterval, 100);
}


function startInterval() {
    let now = new Date();
    let myTimer = document.getElementById('myTimer');
    myTimer.innerHTML = now.getSeconds() + ':' + now.getMilliseconds();
    console.log(counter);
    counter++
}
