// 1. What will be the output of the following code and why?
let user = "Alice";

function outer() {
  function inner() {
    console.log(user);
  }
  let user = "Bob";
  inner();
}
outer();
// ans : Bob
// 2. What is the mistake in the code below?

let total = 0; // Global, bad practice

function add(num) {
  total += num;
}

add(5);
add(10);
console.log(total);
// Answer : 15 , code is ok

// 3. Create a function with a nested function and log a variable from the parent function.

function parent() {
  let parentName = "Kartik Chandra Paul";
  function child() {
    console.log(parentName);
  }
  child();
}
parent();

// Ans : Kartik Chandra Paul

function sayName() {
  for (let i = 0; i <= 10; i++) {
    let names = "Sonata Paul";
  }
}
sayName();

// console.log(names); // Reference Error
//  Resson : when we declare {} using let and const variable cant access outside
