console.log(' === Suragchid ===');


let students = [
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
        birthOfYear: 2000,
        hobby: 'cars',
        isSingle: false,
    },
    {
        name: 'Odko',
        birthOfYear: '1988',
        hobby: 'shopping',
        isSingle: true,
    },
]

console.log(` === Сурагчидаас 20 - оос дээш насны сурагчидыг буцаах function бичэх ===`);

let currentYear = 2022;
function adultAgeStudents(array) {
    for (let i = 0; i < array.length; i++) {
        if ((currentYear - array[i].birthOfYear) >= 20) {
            console.log(array[i].name + ` you are Adult`);
        } else { }
    }
}

adultAgeStudents(students);

console.log(`===Surachdiin nasiig olon function bichix===`);
let year = 0;
function ageOfStudents(array) {
    for (let i = 0; i < array.length; i++) {
        year = currentYear - array[i].birthOfYear
        console.log(array[i].name + `  ` + year + ` - years old`);
    }
}

ageOfStudents(students);


console.log(`===Gants biy mun esex===`);
let relationship = true;
function isSingleStudents(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].isSingle == "true"){
        console.log(array[i].name + ` gants biy oyutan`);
}
    }
}

isSingleStudents(students);