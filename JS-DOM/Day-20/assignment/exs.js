console.log('Exercises');

// document.getElementsByClassName("aimag-101").innerHTML = "Архангай"
// console.log(document.getElementsByClassName("aimag-101"));
console.log(document.getElementById("aimag-101").innerHTML);

console.log(document.getElementById('aimag-522').innerHTML);

console.log(document.getElementById('aimag-315').innerHTML);

// document.getElementById("aimagNames").style = 'font-size: 40px;' .style = 'color: red';
// document.getElementById("aimagNames").style = 'color: red'

document.getElementById("aimagNames").style = 'font-size: 40px; color: red;';
document.getElementById("aimag-101").style = 'border: 2px solid pink; color: blue; background-color: gray; border-radius:10px;'

for (let i = 0; i < document.getElementsByClassName("khangai").length; i++) {
    document.getElementsByClassName("khangai")[i].style = 'font-size: black; background-color: black; color:white;'
}

console.log(document.getElementById('aimagNames').id);

const Lilength = document.getElementById('aimagNames').getElementsByTagName('li').length;
console.log(document.getElementById('aimagNames').getElementsByTagName('li')[Lilength - 1].innerHTML);


for (i = 0; i < document.getElementById('aimagNames').getElementsByTagName('li').length; i++) {
    if (document.getElementById('aimagNames').getElementsByTagName('li')[i].id.includes('aimag-1')) {
        console.log(document.getElementById('aimagNames').getElementsByTagName('li')[i].style = 'background-color: yellow');
    }
}

document.getElementsByClassName("dummy")[0].innerHTML = 'dummy uurchilj uzsen';

console.log(document.querySelector('#aimagNames'));
console.log(document.querySelector('.khangai'));

console.log(document.getElementsByClassName('khangai'));
console.log(document.querySelectorAll('.khangai'));

document.querySelector("#demo").innerHTML = "яг одоо цаг:" + Date();

document.querySelector("img").innerHTML;
// document.getElementsByTagNameNS("img").src = "../Day-20/img/screen.png";
document.querySelector("img").src = "../Day-20/img/screen.png";
document.querySelector("img").style = "width:50px, height:50px";




const newDiv = document.createElement("h2");
const newContent = document.createTextNode("manaid welcome");
newDiv.appendChild(newContent);
const main = document.getElementsByName("body");
document.querySelector("h1");
h1.appendChild(newDiv);

