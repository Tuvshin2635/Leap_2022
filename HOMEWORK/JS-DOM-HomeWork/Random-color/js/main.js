let ColorGenerate = document.getElementById('random_Color');
let colorFeild = document.getElementsByClassName('color_Feild')

ColorGenerate.addEventListener("click", getRandomColor)



function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    myTimer.innerHTML = now.getSeconds() + ':' + now.getMilliseconds();
return color;
}









// let startTimer = document.getElementById('startTimer');

// startTimer.addEventListener("click", runTimerInterval);

// function runTimerInterval ( ) {
//     window.setInterval(startInterval, 100);
// }


// function startInterval() {
//     let now = new Date();
//     let myTimer = document.getElementById('myTimer');
//     myTimer.innerHTML = now.getSeconds() + ':' + now.getMilliseconds();
//     console.log(counter);
//     counter++
// }
