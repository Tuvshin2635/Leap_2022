
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


const tip1 = 3000;
const tip2 = 27500;
const tip3 = 100000;

let tipResult1 = (5000 >= tip1 && 30000<=tip1) ? tip1*0.15 + tip1 : tip1* 0.2 + tip1;
console.log(('Huvilbar #1_ 3,000 tug ='), tipResult1);

let tipResult2 = (5000 >= tip2 && 30000<=tip2) ? tip2*0.15 + tip2 : tip2* 0.2 + tip2;
console.log('Huvilbar #2_ 27,500 tug =', tipResult2);

let tipResult3 = (5000 >= tip3 && 30000<=tip3) ? tip3*0.15 + tip3 : tip3* 0.2 + tip3;
console.log('Huvilbar #3_ 100,000 tug =', tipResult3);

