console.log('Exercises');
console.log('===== 1 ======= ');
console.log(document.getElementById("aimag-101").innerHTML);

console.log('===== 2 ======= ');

console.log(document.getElementById('aimag-522').innerHTML);

console.log('===== 3 ======= ');

console.log(document.getElementById('aimag-315').innerHTML);

console.log('===== 4 ======= ');
document.getElementById("aimagNames").style = 'font-size: 30px; color: red; margin-top: 30px; padding: 20px';

console.log('===== 5 ======= ');
console.log('Xangain bus id=1.. yellow');
for (i = 0; i < document.getElementById('aimagNames').getElementsByTagName('li').length; i++) {
    if (document.getElementById('aimagNames').getElementsByTagName('li')[i].id.includes('aimag-1')) {
        console.log(document.getElementById('aimagNames').getElementsByTagName('li')[i].style = 'background-color: yellow');
    }
}
console.log('Baruun bus id=2.. brown');

for (let i = 0; i < document.getElementById('aimagNames').getElementsByTagName('li').length; i++) {
    if (document.getElementById('aimagNames').getElementsByTagName('li')[i].id.includes('aimag-2')) {
        console.log(document.getElementById('aimagNames').getElementsByTagName('li')[i].style = 'background-color: brown; color: blue;');
    }
}

console.log('Zuun bus id=3.. gray');

for (let i = 0; i < document.getElementById('aimagNames').getElementsByTagName('li').length; i++) {
    if (document.getElementById('aimagNames').getElementsByTagName('li')[i].id.includes('aimag-3')) {
        console.log(document.getElementById('aimagNames').getElementsByTagName('li')[i].style = 'background-color: gray; color: black;');
    }
}

console.log('Tuviin bus id=4.. green');

for (let i = 0; i < document.getElementById('aimagNames').getElementsByTagName('li').length; i++) {
    if (document.getElementById('aimagNames').getElementsByTagName('li')[i].id.includes('aimag-4')) {
        console.log(document.getElementById('aimagNames').getElementsByTagName('li')[i].style = 'background-color: green; color: white;');
    }
}
console.log('Tuviin bus id=5.. pink');

document.getElementById("aimag-522").style = 'border: 2px solid pink; color: blue; background-color: pink; border-radius:20px; font-size: 45px;'
 

