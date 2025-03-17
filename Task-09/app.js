// Expian Temporal Dead Zone by creating 3 variables in side a block. Post the code as your answer.

{
  // name, friendName, FavoriteColor TDZ zone started
  //
  //   console.log(name) //reference Error
  //
  //
  let name = "Sonatan Paul"; // name TDZ zone end
  //   console.log(name) Sonatan Paul   //   no error
  //
  //
  //   console.log(frinedName) referenceError
  //
  let frinedName = "Anik"; // friendName TDZ zone end
  //   console.log(frinedName) // Anik // No Error
  //
  //
  //
  //   console.log(FavoriteColor) // referenceError
  //
  let FavoriteColor = "Black"; // FavoriteColor TDZ zone end
  //   console.log(FavoriteColor); // Black // No Error
}

// Explain Variable and Function Hoisting with Example. Post the code as your answer.
/*
 Hoisting means the creation phase in the execution context
be a global execution context or function execution context
when javascript create the memory of a variable or
function an initilaze or if possible initilazition them
why because if it is variable then call variable hoisting
if it is function then call function hoisting */

// var keyword
console.log("name is", names); // undifined
var names;
names = "Sonatan Paul";
console.log("name is", names); // Sonatan Paul

// let keyword

console.log("friend name is", friendName); // Reference Error
let friendName;
friendName = "Anik";
console.log("Friend Name is", friendName); // Anik

// const keyword

console.log("Favorite Color is", color); // Reference Error
const color = "Black";
console.log("Favorite Color is", color); // Color

// function hoisting

// invoke function, sayName
sayName();

// declare function sayName
function sayName() {
  console.log("My name is Sonatan Paul");
  // invoke function myFriendName
  myFrindName();
}

// function declare myFriendName
function myFrindName() {
  console.log("My friend Name is Anik");
}

// Function Hoisting as a Expression

// invoke function
fullName(); // fullName is not a function, reasson: fullName is variable and varibale value is function and execution context createion phase variable value undifined , that why fullName function is not a function

// declare function fullName
var fullName = function () {
  console.log("My full Name is Sonatan Paul");
};
