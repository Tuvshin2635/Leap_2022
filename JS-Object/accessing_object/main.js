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
        gender: 'male',
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
let count = 0;
function howManyMale(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].gender === "male"){
} console.log(`Niit eregtei oyutanii ` + count[i]+1 );
    }
}

howManyMale(students);