// Task - 01
let myName = "Sonatan Paul";
let myAge = 26;
let isStudent = true;
let favoriteProgrammingLang = "JavaScript";

// Task - 02
console.log(myName);
console.log(myAge);
console.log(isStudent);
console.log(favoriteProgrammingLang);

// Task - 03
let name = "Sonatan";
console.log(name);
name = "Sonatan Paul";
console.log(name); // Output: Sonatan Paul

const cityName = "Pabna";
console.log(cityName);
cityName = "Dhaka";
console.log(cityName); // Error: can't re-assign

// Task - 4

// Object
let person = {
  name: "Sonatan Paul",
  age: 26,
  favoriteColor: "blue",
};
console.log(person);
// access object single value
console.log(person.name);
// add new object property and value
person.dreamProfession = "Web Developer";
console.log(person.dreamProfession);
// update object property value
person.favoriteColor = "black";
console.log(person.favoriteColor);
// object assign new variable
let newPerson = person;
console.log(newPerson);

// Array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(numbers);
// access single array of element
console.log(numbers[2]);
// update array element
numbers[2] = 33;
console.log(numbers);
// array assign new variable
let newNumbers = numbers;
console.log(newNumbers);
