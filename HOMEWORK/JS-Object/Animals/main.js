

console.log( 'Objects Exercises');


function howDoesTheFoxSay(array, animalsType) {
    
    for (let i=0; i<array.length; i++) {
            console.log((array[i].sound + '-' + array[i].sound +'-'+ array[i].sound ));
            
    }

}

let animals = [
    {
        type: 'dog',
        sound: 'woof-woof-woof',
    },
    {
        type: 'cow',
        sound: 'moo',
    },
    {
        type: 'cat',
        sound: 'meow',
    }
]
animals.type = 

console.log('DOG barking');
howDoesTheFoxSay(animals, 'dog'); // woof-woof-woof



// console.log('COW mooing');
// howDoesTheFoxSay(animals, 'cow');

// console.log('Cat moewing');
// howDoesTheFoxSay(animals, 'cat');
