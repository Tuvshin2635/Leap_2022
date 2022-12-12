let myButton = document.getElementById('myButton');
console.log(myButton);

// console.log(myButton);

// function changeBackground() {
//     myButton.style = "background-color: green;"
// }
// // changeBackground():
// myButton.addEventListener("click", changeBackground);


// function changeBackgroundToGreen (){
//     myButton.style =" background-color: green"
// }
// function changeBackgroundToBlue (){
//     myButton.style =" background-color: blue"
// }

// // myButton.addEventListener("click", changeBackgroundToBlue);
// // myButton.addEventListener("click", changeBackgroundToGreen);

// if ( myButton.addEventListener("click", changeBackgroundToBlue)) {
//     myButton.addEventListener("click", changeBackgroundToGreen);
// }



let color = 'green'; 

function changeBackgroundColor () {

}

function changeColor ( ) {
    console.log('clicked');
    if ( color === 'green' ) {
        color = 'white'
        myButton.style = `background-color: ${color}`;
    } else {
        color= 'green';
        myButton.style = `background-color :${color}`;
    }
}
myButton.addEventListener("click", changeColor);

