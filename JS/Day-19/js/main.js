console.log('Day-19: object  and methods');

let teacherDolgor = {
    firstName: 'Dolgor' ,
    lastName: 'Dondog', 
    age: 35,
    experience: 10,
    children: [],
    isMarried : true,
    address: {
        district: 'BGD',
        khoroolol: '2-r',
        khoroo: '1r',
        doorNumber: '4',
    },
    GPA: 94.5,


    introduction: function (){
        console.log(`Minii neriig ${this.lastName}-iin ${this.firstName} gedeg. 
        Bi ${this.age} nastai. Bi ${this.experience}-jiliin ajliin turshlagatai. 
        Bi ${this.address.district} ${this.address.khoroo} -t amidardag.`);
    }
}
teacherDolgor.introduction()

// let teacherDolgorClones = teacherDolgor;

// teacherDolgorClones.firstName = 'Dolgor Clone';

// console.log(teacherDolgor.firstName);
// console.log(teacherDolgorClones.firstName);

let teacherDolgorRealClone = {...teacherDolgor};
teacherDolgorRealClone.firstName = 'Dolgor Real Clone';
console.log(teacherDolgorRealClone.firstName);
console.log(teacherDolgor.firstName);

console.log(Object.keys(teacherDolgor));
console.log(Object.values(teacherDolgor));

let newTeacher = Object.create ( {
    firstName: 'shine bagsh',
    lastName: 'Shine1bagsh',
    
})