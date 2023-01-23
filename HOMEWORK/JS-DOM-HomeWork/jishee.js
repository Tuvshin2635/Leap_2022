// let result = window.confirm(question);

// let result = confirm('Та устгахдаа итгэлтэй байна уу ?');
// let message = result ?
// 'Та OK товчийг дарлаа' :
// 'Та Cancel товчийг дарсан';
// alert(message);

// let lang = prompt('What is your favorite programming languag');
// let feedback = lang.toLowerCase() === 'javascript' ? `It's g` : `It's ${lang}`;
// alert(feedback);

// let ageStr = prompt('How old are you?');
// let age = Number(ageStr);
// let feedback = age >= 16 ?
// "You 're eligible to join." :
// "You must be at least 16 year old to join.";
// alert(feedback);

// function showAlert() {
//   timeoutID = setTimeout(alert, 2000, "setTimeout Demo!");
// }

// function clearAlert() {
//   clearTimeout(timeoutID);
// }

// function greeting(name) {
//     alert(`Hello, ${name}`);
//     }
//     function greetings(callback) {
//     const name = prompt("Please enter your name.");
//     callback(name);
//     }
//     greetings(greeting);

// const doPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//     const skills = ['HTML', 'CSS', 'JS']
//     if (skills.indexOf('Node') !== -1) {
//     resolve('fullstack developer')
//     } else {
//     reject('Something wrong has happened')
//     }
//     }, 2000)
//     })
//     doPromise
//     .then(result => {
//     console.log(result)
//     })
//     .catch(error => console.log(error))


function prepare_breakfast() {
    let coffee_promise = new Promise((resolve, reject) => resolve("coffee ready"));
    let egg_promise = new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve("finished frying egg");
    }, 1000);
    });
    let combined_promise = Promise.all([coffee_promise, egg_promise]);
    return combined_promise;
    }
    async function morning() {
    let result = await prepare_breakfast();
    console.log(result);
    }
    morning();

