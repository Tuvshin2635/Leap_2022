
let myButton = document.getElementById('myBtn');
console.log(myBtn);

function changeBackgroundColor (){
    myButton.style = document.querySelector("h2").style = 'background-color: red';
    myButton.style = document.querySelector("#second").style = 'background-color: yellow';
}
myButton.addEventListener("click", changeBackgroundColor);

    // document.querySelector("h2").style = 'background-color: red';
    // document.querySelector("#second").style = 'background-color: yellow';
