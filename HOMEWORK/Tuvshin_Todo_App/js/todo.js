// Date part
let presentTime = new Date();
let shortDate = ' Он cар өдөр  ' + presentTime.getFullYear() + ' - ' + presentTime.getMonth() + ' - ' + presentTime.getDate();
document.getElementById("presentTime").innerHTML = shortDate;

// TODO APP
let todoCreate = document.getElementById("todo-create");
let todoList = document.getElementById("todo-list");
let button = document.getElementById("add");

// console.log(button);

button.addEventListener('click', () => {
    console.log('add clicked');
    console.log(todoCreate.value);

    let input = document.createElement('p');
    input.innerHTML = `<input value=${todoCreate.value} disabled>`;

    todoList.appendChild(input);

});






