function add (x,y) {
    return x+y;
}

function print (f) {
    let x=2, y=3
    console.log(f(x,y));
}
print(add);



let x = () => {
    console.log('arrow function')
}

setTimeout (x,2000);

// setInterval neg uildlees ehleed urgelj davtana

