//exercise 1
// let a = "4";
// let b = "5";
// console.log(a<b);

// console.log(a == b);

// console.log(a === b);

// //exercise 2
// let c = 10;
// let d = '10';
// console.log(c == d);
// console.log(c === d);   //turliig n shalgaad tgd utgiig n shalgaad xariu n false 

// //exercise 3
// let e = true;
// let f = false;

// console.log(e < f); //false 1 ilerxiilex
// console.log(e > f); //

// //exercise 4 ternary
// let result = 10;
// if (result > 10) {
//     console.log('more than 10');
// } else {
//     console.assert('less than 10');
// }
// // result > 10 ? (console.log('more than 10')) : (console.assert('less than 10');)

// result > 15 ? (result <15 ? console.log('test'): console.log('hi')) : console.log('less than 10')

// // 3000, 27500, 100000

// const tip1 = 3000;
// const tip2 = 27500;
// const tip3 = 100000;

// if ((5000 >= tip1 && 30000 <= tip1)) {
//     console.log('bodlogo bodox 15%');
// }   else{
//     console.log('busad bodox 20%');
// }
// if ((27500 >= tip2 && 30000 <= tip2)) {
//     console.log('bodlogo bodox 15%');
// }   else{
//     console.log('busad bodox 20%');
// }
// result 

// let tipResult2 = (5000 >= tip2 && 30000<=tip2) ? tip2*0.15 + tip2 : tip2* 0.2 + tip2;
// console.log(tipResult2);

// let tipResult3 = (5000 >= tip3 && 30000<=tip3) ? tip2*0.15 + tip2 : tip2* 0.2 + tip2;

// const input = Number(prompt('give me your money'));
// let exTipResult = (5000 >= tip3 && 30000<=tip3) ? tip2*0.15 + tip2 : tip2* 0.2 + tip2;
// alert(exTipResult);

//Сурагчдын шалгалтын дүнг гаргаарай 

// const studentPoint = Number(prompt('Fill the your score'));
// const studentName = prompt('Give me your student name');
// let studentResult = 'onoo buruu oruulsan bna';

// if (studentPoint < 60) {
//     studentResult ='mash muu'
// } else if(studentPoint >= 60 && studentPoint < 70 ){
//     studentResult='hangalttai'
// } else if(studentPoint >= 70 &&  studentPoint < 80){
//     studentResult='dund'
// } else if(studentPoint >= 80 &&  studentPoint < 90){
//     studentResult='sain'
// } else if(studentPoint >= 90 &&  studentPoint <= 100){
//     studentResult='mash sain'
// } else {
//     console.log('buruu')
// }
// alert(studentName + ' - ' +studentPoint + ' - ' + studentResult);



// 
// alert('Lorem Ipsum is simply dummy text of the printing and typesetting industry.
// Content here, content here, making it look like readable English. Many desktop p
// ublishing packages and web page editors now use Lorem Ipsum as their default model text
// // , and a search for ['lorem ipsum'] will uncover many web sites still in their infancy. V
// arious versions have evolved over the years, sometimes by accident, sometimes on purpose
// injected humour and the like')


//js condition - Huvisagch


// let a = 85;
// let b = 75;
// let c = 86;
// let d = 69;



//exercise 
// console.log('its log');
// console.error('its error');

// const str ='life, the universe and everhing.';
// console.log(str.length);

// const registerNumber = prompt('Fill the Register');

// console.log(registerNumber.length);
// if (registerNumber.length == 10){
//     console.log('zuv')
// } else {
//  console.log('buruu')
// }

// .charAt(index) str[index]
// const str ='life, the universe and everhing.';
// console.log(str.charAt(0));
// console.log(str[1]);

// console.log(registerNumber.charAt(0));
// console.log(registerNumber[1]);

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// let firstName = 'John';
// let fullName = firstName.concat('' , ' Smith');
// console.log(fullName);
// console.log(firstName);


// console.log(registerNumber.substr(0,2));
// console.log(Number('abc'));

// console.log(Number.isInteger(Number('abc')));

    // if(typeof(Number) != NaN)

// console.log(registerNumber.substr(2-9));
// console.log(Number.isInteger(Number('12312345')));
    

// const registerChar = registerNumber.substr(0 , 2);
// const registerNum = registerNumber.substr(2, 9);
// if (Number(registerChar) != NaN) {

// }

// console.log(Number('abc'));
// console.log(Number.isInteger(Number('abc')));
// console.log(Number('111111111'));
// console.log(Number.isInteger(Number('12312345')));

// done register done
// const registerNumber = prompt('Fill the Register');
// const registerChar = registerNumber.substr(0 , 2);
// const registerNum = registerNumber.substr(2, 9);

// console.log(Number.isInteger(Number('12312345')));

// if (!Number.isInteger(Number(registerChar)) && Number.isInteger(Number(registerNum)) && registerNumber.length == 10) 
// {
//     console.log('zuv')
// } else {    console.log('buruu')
// }

//

const phoneNumber = prompt('Fill the phone number')
const phoneCode = phoneNumber.substr(0, 4);
const phoneNum = phoneNumber.substr(5, 12);
console.log(Number.isInteger(Number('12312345')));
console.log(phoneCode == +976);

if (Number.isInteger(phoneCode) && Number.isInteger(phoneNum) )
{
    console.log('ZUV')
} else {
    console.log('BURUU')
}

// && phoneNumber.length ==13