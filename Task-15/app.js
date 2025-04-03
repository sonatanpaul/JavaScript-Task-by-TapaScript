// T-001: Create an array of 5 elements using the Array Constructor.
const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers); // [1, 2, 3, 4, 5]

// T-002: Create an array of 3 empty slots.
const emptyArray = new Array(3);
console.log(emptyArray); // [empty × 3]

// T-003: Create an array of 6 elements using the Array literals and access the fourth element in the array using its length property.
const number = [1, 2, 3, 4, 5, 6];
const fourthElement = number.length - 2;
const fourElement = number[3];
console.log(fourElement); // 4
console.log(fourthElement); // 4

// T-004: Use the for loop on the above array to print elements in the odd index.
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < numberArray.length; i++) {
  if (numberArray[i] % 2 === 0) {
    console.log(i); // 1,3,5,7
  }
}


// T-005: Add one element at the front and the end of an array.
