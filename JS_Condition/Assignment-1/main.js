
// Assignment -1 - #1

 let i = 4 > 3; //true
 let iii = 4 < 3; //false
 let ii = 4 >= 3; // true
 let iv = 4 <= 3; //false
 let v = 4 == 4; // true
 let vi = 4 === 4; //true
 let vii = 4 != 4; //false
 let iix = 4 !== 4; //false
 let ix = 4 != "4"; //false
 let x = 4 == "4"; //true
 let xi = 4 === "4"; //false
 

// Assignment -1 - #2

 console.log(i, iii, ii , iv, v, vi, vii, iix, ix, x, xi);
 
 
 let one = 4 > 3 && 10 < 12; // true
 let two = 4 > 3 && 10 > 12; // false
 let three = 4 > 3 || 10 < 12; //true 
 let four = 4 > 3 || 10 > 12; //true
 let five = !(4 > 3);  //false
 let six = !(4 < 3); //true
 let eight = !(4 > 3 && 10 < 12); //false
 let nine = !(4 > 3 && 10 > 12); //true
 let ten = !(4 === "4"); //true
 console.log(one, two, three, four, five, six, eight, nine, ten);
 
 //Assignment -1 - #3

 let myAge = prompt('fill the your Age')
 let yourAge = prompt('fill the his/her Age')
 let old =(myAge - yourAge)
 console.log(old)
     if(myAge > yourAge){
         console.log('chi xugshin')
     }
     else if(myAge < yourAge){
         console.log('chi zaluu')
     }
     else if (myAge = yourAge) {
         console.log('nas chitsuu')
    } else {}
     
//  Assignment -1 - #4


let day=prompt('Fill the Day');

if ( 1 <= day && day <= 5) {
    alert('Ajliin udur')
} else  if( 6 <= day && day <= 7 ) {
    alert('Amraltiin udur')
} else {
    alert('Fill the number 1-7')
}

 //  Assignment -1 - #5

 let salary = prompt('Fill the how many hours ?');
 let hours = prompt('how much dollar for a hour?');
 let wage = (salary * hours);
 alert(wage);

