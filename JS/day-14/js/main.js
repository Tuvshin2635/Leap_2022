let count = 0;
let sum = 0;

// while (count < 10) {
//   count = count + 1;
//   sum = sum + count;
//   console.log(sum);
// console.log(count);
// }
// tegsh too gargax
// const max = 10;
// let start = 0;
// while (start <= 10) {
//   if (start % 2 == 1) {
//     console.log(start);
//   }
//   start = start + 1;
// }
// console.log(start);
// tegsh too gargax for using
// console.log("for version tegsh too gargax");
// for (let start = 0; start < 10; start++) {
//   if (start % 2 == 0) {
//     console.log(start);
//   }
// }

// for ashiglax/
// console.log("for version 5 xvrtel");
// let xyz = 5;
// for (let i = 1; i <= xyz; i++) {
//   console.log(i);
// }

// sondgoi too gargax

// const MIN = 20;
// let minStart = 1;
// while (minStart <= MIN) {
//   if (minStart % 1 == 0) {
//     console.log(minStart);
//   }
//   minStart = minStart + 1;
// }
// console.log("for version sondgoi too");

// useg doosh tsuvuulj bicheh

// const str = "life is Beautiful";

// let urt = str.length;
// let letCount = 0;
// while (letCount < urt) {
//   console.log(str.charAt(letCount));
//   letCount = letCount + 1;
// }

//factariol too olox

// let f = Number(prompt("give me number?"));
// let fcount = 1;
// while (fcount < f) {
//   if ((fcount = fcount * (fcount + 1))) {
//     console.log(fcount);
//   }
//   fcount = fcount + 1;
// }

// async function fryEgg() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("done!"), 1000);
//   });
//   // setTimeout(() => reject("unDone"), 3000);
//   let result = await promise; // энд 1 сэкүнд хүлээнэ
//   console.log(result);
// }
// console.log("a");
// console.log("b");
// fryEgg();
// console.log("final");

function prepare_breakfast() {
  let coffee_promise = new Promise((resolve, reject) =>
    resolve("coffee ready")
  );
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
