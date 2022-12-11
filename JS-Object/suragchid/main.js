console.log('Сурагчид');

const students = [
    {
        name: 'Tuvshin',
        birthOfYear: 1989,
        Hobby: 'Rally',
        single: false
    },
    {
        name: 'Munkh',
        birthOfYear: 2000,
        Hobby: 'Book',
        single: false
    },
    {
        name: 'Tsas',
        birthOfYear: 2009,
        Hobby: 'language',
        single: true
    },

]

// function findOlderStudents(array) {
//     // debugger
//     for (let i = 0; i < array.length; i++) {
//         if (array.birthOfYear[i] >= 2004) {
//             console.log(array[i].name)
//         } else { }
//     }
// }

// findOlderStudents(students);

function howOldAreYou (array) {
    for (let i = 0; i<array.length; i++) {
        (2022 - array[i].birthOfYear);
        console.log(array[i].birthOfYear);
    }
}
howOldAreYou(students);
