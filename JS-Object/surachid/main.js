console.log('Suragchid');


let studnets = [
    {
        name: 'Gonjig',
        birthOfYear: 1999,
        hobby: 'mori',
        isSingle: false,
    },
    {
        name: 'Davaa',
        birthOfYear: 2002,
        hobby: 'book',
        isSingle: true,
    },
    {
        name: 'tsetseg',
        birthOfYear: 2008,
        hobby: 'cars',
        isSingle: false,
    },
    {
        name: 'Odko',
        birthOfYear: 1988,
        hobby: 'shopping',
        isSingle: true,
    },
]

console.log(`2. Сурагчидаас 20 - оос дээш насны сурагчидыг буцаах function бичэх`);

let currentYear = 2022;

function adultAgeStudents (array) {
    for ( let i=0; i<array.length; i++) {
        if ( (currentYear - students.birthOfYear[i])>=20) {
            console.log(students.name + `you are Adult` );
        } else {}
        }
}

adultAgeStudents(studnets);

// function howDoesTheFoxSay(array, animalsType) {
    
//     for (let i=0; i<array.length; i++) {
//             console.log((array[i].sound + '-' + array[i].sound +'-'+ array[i].sound ));
            
//     }

// }