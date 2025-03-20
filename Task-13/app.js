// 2. What is the problem here? Fix it to log the correct name and explain the fix
// const user = {
//   name: "tapaScript",
//   greet: function () {
//     console.log(`Hello, ${this.name}!`);
//   },
// };
// user.greet();
// Arrow function as object method always refer parent scope thats why this.name return undifined
// normal function as object method always refer current object thats why this.name return Hello, tapaScript! and problem solve

// 3. Can you explain what is the problem here and fix the issue to log the correct name?

const obj = {
  name: "Tom",
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

// obj.greet(); // Tom

const greetFn = obj.greet;
// greetFn();
// problem is greetFn assign value obj.greet not call thats obj is dis connceted thats why return is undifined
// this problem solve need to explicit binding method
greetFn.call(obj);

// 4. What is the problem with the following code? Why isn't it logging the name correctly?

const user = {
  name: "Alex",
  greet: function () {
    function inner() {
      console.log(`Hello, ${this.name}!`);
    }
    inner();
  },
};
user.greet();

// greet funtion method inside another function thats why inner function refer window  thats why  name can't showing correctly

// 5. Create a Sports constructor function that takes name and number of players as arguments and assigns them using this keyword. Then, create two sports instances and log their details

function Sports(name, number) {
  this.name = name;
  this.number = number;
}

const football = new Sports("football", 11);
console.log(football);
const basketball = new Sports("basketball ", 5);
console.log(basketball);

// 6. Can you attach the car1's describe() method to car2 object? Give all possible solutions that you can think of

const car1 = {
  brand: "Audi",
  model: "A8",
  describe: function () {
    console.log(`This car is a ${this.brand} ${this.model}.`);
  },
};

const car2 = {
  brand: "BMW",
  model: "X1",
};

// option 1
// car2.describe = car1.describe;
// console.log(car2.describe());

// option 2
// car1.describe.call(car2);

// option 3
// car1.describe.apply(car2);

// Option 4
// const car1ToCar2 = car1.describe.bind(car2);
// console.log(car1ToCar2());

// 7. What will be the output of the following code and why?
const person = {
  name: "Charlie",
  sayHello: function () {
    console.log(this.name);
  },
  sayHelloArrow: () => {
    console.log(this.name);
  },
};

person.sayHello();
person.sayHelloArrow();

// Ans : B: "Charlie" and undefined
// reason : arrow function object method refer parent scope and normal function refer as a same object
