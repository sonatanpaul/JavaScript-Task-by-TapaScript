// // 1. What will be the output and why?
// const user = { name: "Alex", age: undefined };
// console.log(user.age ?? "Not provided");
// // ans : when ?? nullish coalescing operator left value null or undifined then return return right side value thats why ans is not provided

// // 2. What will happen if we try to modify a frozen object?
// const obj = Object.freeze({ a: 1 });
// obj.a = 2;
// console.log(obj.a);
// // ans : a:1 ,
// // Object. freeze method can't allow add , modified, or delete

// // 3. Given an object with deeply nested properties, extract name, company, and address.city using destructuring
// const person = {
//   name: "Tapas",
//   company: {
//     name: "tapaScript",
//     location: {
//       city: "Bangalore",
//       zip: "94107",
//     },
//   },
// };

// const {
//   name,
//   company: {
//     name: cName,
//     location: { city },
//   },
// } = person;

// console.log(name);
// console.log(cName);
// console.log(city);

// 4. Build a Student Management System

// Store student details in an object (name, age, grades).
// Implement a method to calculate the average grade.

/*
const student = {
  name: "Sonatan",
  age: 26,
  grades: [95, 65, 78, 54, 75, 88],
  avarageMark: function () {
    let totalNum = 0;
    for (let mark of this.grades) {
      totalNum = totalNum + mark;
    }
    const avarageNumber = totalNum / this.grades.length;
    console.log(avarageNumber);
  },
};

console.log(student.avarageMark());
*/

// 6. What is the difference between Object.keys() and Object.entries()? Explain with examples

const student = {
  name: "Paul",
  age: 26,
  color: "White",
  isStudent: true,
};
console.log(student);
const keys = Object.keys(student); //['name', 'age', 'color', 'isStudent']
console.log(keys);
const entries = Object.entries(student);
console.log(entries); //[Array(2), Array(2), Array(2), Array(2)]

// Object.keys return object key of array
// Object.entries return object of array

// 7. How do you check if an object has a certain property?

// const personInfo = {
//   name: "Sonatan",
//   age: 26,
//   color: "Black",
// };

// console.log("name" in personInfo); // true
// console.log("isMarried" in personInfo); // false
// console.log(Object.hasOwn(personInfo, "name")); // false
// console.log(Object.hasOwn(personInfo, "isMarrid")); // true

// 8. What will be the output and why?

const person = { name: "John" };
const newPerson = person;
newPerson.name = "Doe";
console.log(person.name); // Doe
// when we decalre object object refer mermory not value ,, object store pass by reference when i  newPerson = person then newPerson and person same memory allowcated , thats why when change newPerson value change also change person value ?

/*
9. What’s the best way to deeply copy a nested object? Expalin with examples
*/

/*
best way method is (structuredClone()) . structuredClone method copy shallow or nested both . when i clone structuredClone method then i can't add propert , can't remove or can't modified thats why best structuredClone method
*/

// 10. Loop and print values using Object destructuiring
/*
const users = [
  {
    name: "Alex",
    address: "15th Park Avenue",
    age: 43,
  },
  {
    name: "Bob",
    address: "Canada",
    age: 53,
  },
  {
    name: "Carl",
    address: "Bangalore",
    age: 26,
  },
];

// answer
for (let { name, address, age } of users) {
  console.log(name, address, age);
}

*/
