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
  function child() {
    let parentName = "Kartik Chandra Paul";
    console.log(parentName);
  }
  child();
}
parent();

// Ans : Kartik Chandra Paul
// 4. Use a loop inside a function and declare a variable inside the loop. Can you access it outside?
function sayName() {
  for (let i = 0; i <= 10; i++) {
    let names = "Sonata Paul";
  }
}
sayName();

// console.log(names); // Reference Error
//  Resson : when we declare {} using let and const variable cant access outside

// 5. Write a function that tries to access a variable declared inside another function.
function outer() {
  let color = "Black";
  function inner() {
    console.log(color);
  }
  inner();
}
outer();

// 6. What will be the output and why?
// console.log(a); // Reference Error
// let a = 10;

// resson  we can't access let and const variable before initialization . and execution context e crateion phase e hoisting hoi but variable undifined set hoi nah ;

// 7. Where is the age variable accessible?
function showAge() {
  let age = 25;
  console.log(age); // only this console log accessible
}

// console.log(age); // ReferenceError
// resson : we can't access inside variable outside
// when showAge Call answer is B: Only inside showAge

// 8. What will be the output and explain the output?
let message = "Hello";

function outer() {
  let message = "Hi";

  function inner() {
    console.log(message);
  }

  inner();
}

outer();
// Ans : Hi
// Resson : when we declare global variable and inside function variable first piority is inside function variable when function variable not available then access global variable ,, this is call variable shadowing

// 9. What will be the output and why?
let x = "Global";

function outer() {
  let x = "Outer";

  function inner() {
    let x = "Inner";
    console.log(x);
  }

  inner();
}

outer();

// Ans : Inner
// resson : when we declare global variable  then  function varable then or nested function variable first access nested variable  if not available then  outer function variable if not available then access global variable

// 10. What will be the output and why?
function counter() {
  let count = 0;
  return function () {
    count--;
    console.log(count);
  };
}

const reduce = counter();
reduce(); // -1
reduce(); // -2

// reasson : when we declare or return function inside onother function inner fuction acessalbe any variable of outer function and use them
