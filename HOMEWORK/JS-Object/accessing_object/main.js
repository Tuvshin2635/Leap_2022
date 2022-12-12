console.log(' === accessing object ===');
/**Ангид хэдэн эрэгтэй , эмэгтэй сурагч байгааг олох object 
 * буцаадаг функц бичих 
 Сурагчдын насны дунджийг олох 
функц бичих 
 Сурагчидад овог нэмж оруулах 
Ижилхэн настай сурагчдыг олж шинэ array дотор хийх  */

let students = [
    {
        name: 'Сэд-Эрдэнэ',
        age: 19,
        gender: "male",
    },
    {
        name: 'Индра',
        age: 19,
        gender: "female",
    },
    {
        name: 'Хатнаа ',
        age: 21,
        gender: "male",
    },
    {
        name: 'Тэмүүлэн',
        age: 23,
        gender: "male",
    },
    {
        name: 'Намуун',
        age: 23,
        gender: "female",
    },
]

console.log(`===Eregtei,emegtei oyutanii too===`);

let maleCount = 0;
let femaleCount =0;

function howManyMale(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].gender == "male") {
            maleCount = maleCount + 1;
        } else {
            femaleCount = femaleCount +1;
        }
    }
    console.log(maleCount + ' - Niit eregtei');
    console.log(femaleCount + ' - Niit emegtei');
}
howManyMale(students);

console.log(`===Dundaj nas===`);

let sum = 0;

function avaregeAge(array) {
    for ( let i=0; i<array.length; i++){
        sum = sum +array[i].age;
        avaregeAge = sum/array.length;
    }
    console.log(avaregeAge + " - Dundaj nas");
}

avaregeAge(students);

console.log(`===ovog nemj oruulax===`);

function giveName(count, givenName) {
    students[count].Lastname = givenName;
}

// function sameAge () {
//     for ( let i = 0; i<array[i].length; i++){
//         if ( age[i] == age[i]){
//             sameAge.push = (array1);
//         }
//     }
// } console.log(array1);

// sameAge(students)

let sameAge = [];

for (let i = 0; i < students.length; i++) {
    for (let j = i + 1; j < students.length; j++) {
        if (students[i].age === students[j].age) {
            sameAge.push(students[i], students[j])
        }
    }
}

console.log(sameAge);