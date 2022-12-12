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

console.log(`===Eregtei oyutanii too===`);

// function howManyMale(array) {
//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < array.length[j]; j++) {
//             if (gender[j] == "male") {
//                 console.log(array[i][j]);
//             }
//         }
//     }
// }

function howManyMale(array) {
    for (let i = 0; i < array.length; i++) {
            if (gender[i][j] == "male") {
                console.log(array[j]);
            }
        }
    }




howManyMale(students);


// console.log(`===Emegtei oyutanii too===`);
// function howManyFemale(array){
//     for (let i = 0; i<array.length; i++){
//         if (array[i].gender === "female") {
//         } console.log(`Niit eregtei oyutan ` + count[i]);
//     }
// }
// howManyFemale(students);



// console.log(`===Dundaj nas===`);
// function avaregeAge(array) {
//     for ( let i=0; i<array.length; i++){
//         (age[i] + age)
//     }
// }