let now = new Date();
console.log( now );

let Jan01_1970 = new Date(0);
console.log( Jan01_1970 );

let Dec31_1969 = new Date(-24 * 3600 * 1000);
console.log( Dec31_1969 );

let date = new Date("2017-01-26");
console.log(date);

let March5 = new Date("1989-03-05")
console.log(March5);

let difference = now - March5
console.log(March5 - now);

let time = new Date(difference);
console.log(time.getDate());