class Person {
  constructor(
    firstName = "John",
    lastName = "Doe",
    age = "18",
    gender = "male"
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
  }

  sayFullName() {
    return this.firstName + " " + this.lastName;
  }
}
let myPerson1 = new Person();
console.log(myPerson1.sayFullName());

// console.log(myPerson.sayFullName());

class greet extends Person {
  raceName = "Martians";

  greetExtraTerrestrials(raceName) {
    return `Welcome to Planet Earth ${raceName}`;
  }
}
console.log(greet);

console.log(myPerson.greetExtraTerrestrials(myPerson.firstName));
let myPerson = new Person("Martians", "Doe", 18, "male");
