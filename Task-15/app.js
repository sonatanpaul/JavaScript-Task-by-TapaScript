{
  // T-001: Create an array of 5 elements using the Array Constructor.
  const numbers = new Array(1, 2, 3, 4, 5);
  console.log(numbers); // [1, 2, 3, 4, 5]
}
{
  // T-002: Create an array of 3 empty slots.
  const emptyArray = new Array(3);
  console.log(emptyArray); // [empty × 3]
}

{
  // T-003: Create an array of 6 elements using the Array literals and access the fourth element in the array using its length property.
  const number = [1, 2, 3, 4, 5, 6];
  const fourthElement = number.length - 2;
  const fourElement = number[3];
  console.log(fourElement); // 4
  console.log(fourthElement); // 4
}
{
  // T-004: Use the for loop on the above array to print elements in the odd index.
  const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] % 2 === 0) {
      console.log(i); // 1,3,5,7
    }
  }
}

{
  // T-005: Add one element at the front and the end of an array.
  const friends = ["asraful", "anik"];
  // add front side element
  friends.unshift("tom");
  console.log(friends); //  ['tom', 'asraful', 'anik']

  // add end side element
  friends.push("jhon");
  console.log(friends); // ['tom', 'asraful', 'anik', 'jhon']
}
{
  // T-006: Remove an element from the front and the end of an array.
  const friend = ["anik", "tom", "paul", "akash", "rayhan"];
  // remove front side element
  friend.shift();
  console.log(friend); // ['tom', 'paul', 'akash', 'rayhan']

  // remove end side element
  friend.pop();
  console.log(friend); // ['tom', 'paul', 'akash']
}

{
  // T-007: Create an array containing the name of your favourite foods(10 foods). Destructure the 6th food element from the array using destructuring.
  const foods = [
    "Pizza",
    "Burger",
    "Pasta",
    "Sushi",
    "Tacos",
    "Salad",
    "Ice Cream",
    "Steak",
    "Sandwich",
    "Fried Rice",
  ];

  const [, , , , , salad, , , ,] = foods;
  console.log(salad); // Salad
}

{
  // T-008: Take out the last 8 food items from the above array using the Array destructuring. Hint: rest parameter.
  const foods = [
    "Pizza",
    "Burger",
    "Pasta",
    "Sushi",
    "Tacos",
    "Salad",
    "Ice Cream",
    "Steak",
    "Sandwich",
    "Fried Rice",
  ];
  const [pizza, burger, ...rest] = foods;
  console.log(pizza); // Pizza
  console.log(burger); //  Burger
  console.log(rest); // ['Pasta', 'Sushi', 'Tacos', 'Salad', 'Ice Cream', 'Steak', 'Sandwich', 'Fried Rice']
}

{
  // T-009: Clone an Array(Shallow cloning)
  const numbers = [10, 20, 11, 22, 45, 62];
  // option 1
  const numbersCopy = numbers.slice();
  console.log(numbersCopy); // [10, 20, 11, 22, 45, 62]
  console.log(numbers === numbersCopy); //  false

  // option 2
  const newNumbers = [...numbers];
  console.log(newNumbers); // [10, 20, 11, 22, 45, 62]
  console.log(numbers === newNumbers); //  false
}

{
  // T-010: Empty an array using its length property
  const number = [1, 2, 3, 4, 5];
  console.log(number); // [1, 2, 3, 4, 5]

  number.length = 0;
  console.log(number); // []
}

{
  // T-011: Create an array of 10 elements(number 1 to 10). Resize the array to length 6 once you find the number 5 in that array. Hint: Use for-loop.
  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for (let i = 0; i < number.length; i++) {
    if (number[i] === 5) {
      number.length = 6;
      console.log(number); // [1, 2, 3, 4, 5, 6];
    }
  }
  console.log(number); // [1, 2, 3, 4, 5, 6]
}

{
  // T-012: Create an Array of 10 elements. Use the splice() method to empty the array.
  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(number); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  number.splice(0, number.length);
  console.log(number); // []
}

{
  // T-013: Create an Array of 10 elements. You can empty the array in multiple ways: using the length property, using the pop() method, using the shift() method, setting the array with [], or the splice() method. Which among these methods are most efficient and why?
  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // my refer array.lenth = 0,
  //   reason : other method create new variable then empty thats why array. lenght fast and efficient
  number.length = 0;
  console.log(number); // []
}

{
  // T-014: What happens when you concatenate two empty arrays?
  const arr1 = [];
  const arr2 = [];
  const concatArray = arr1.concat(arr2);
  console.log(concatArray); // []
  // when we concat two empty array return empty array
}

// {
//   // T-015: How can you check if a value is partially matching with any of the elements of an Array?
//   const fruits = ["banana", "orange"];
//   const partiallyMatch = fruits.includes("an");
//   console.log(partiallyMatch);
// }

{
  // T-016: What is the difference between the slice() and splice() methods?
  // slice method
  // 01. slice method is immutable method
  // 02. slice method can't modified orginal array give me new array
  // 03 . when we need new copy array then useing slcie method
  // splice method
  // 01. splice method is muteable method
  // 02. splice method orginal array modified
  // 03. when we need array element add , delete then use splcie method
}

{
  // T-017: Create an Array of alphanumeric strings. Sort the elements in both ascending and descending orders. You must be doing this in an immutable way such that the source array never gets modified.
  const friends = ["rayhan", "anik", "paul", "tom", "bikash", "akash"];

  //   ascending orders
  const ascendingFriends = friends.toSorted((a, b) => {
    return a === b ? 0 : a > b ? 1 : -1;
  });
  console.log(ascendingFriends);
  // ['akash', 'anik', 'bikash', 'paul', 'rayhan', 'tom']

  //   descending orders
  const descendingFriends = friends.toSorted((a, b) => {
    return a === b ? 0 : a < b ? 1 : -1;
  });
  console.log(descendingFriends);
  // ['tom', 'rayhan', 'paul', 'bikash', 'anik', 'akash']
}

{
  // T-018: Can you give examples of sparse and dense arrays?
  // sparse Array :
  const sparseArray = [1, , , 4, , 6];
  console.log(sparseArray); // [1, empty × 2, 4, empty, 6]
  console.log(sparseArray[0]); // 1
  console.log(sparseArray[1]); // undefined
  console.log(sparseArray[2]); // undefined
  console.log(sparseArray[3]); // 4
  console.log(sparseArray[4]); // undefined
  console.log(sparseArray[5]); // 6

  //   dense Array :
  const denseArray = [1, 2, 3, 4, 5];
  console.log(denseArray); // [1, 2, 3, 4, 5]
  console.log(denseArray[0]); // 1
  console.log(denseArray[1]); // 2
  console.log(denseArray[2]); // 3
  console.log(denseArray[3]); // 4
  console.log(denseArray[4]); // 5
}

{
  // T-019: Give a practical usages of the .fill() method

  const busSeat = ["booked", "available", "booked", "booked", "booked"];
  const newBusSeat = busSeat.fill("available", 1, 4);
  console.log(newBusSeat); // ['booked', 'available', 'available', 'available', 'booked']
}

{
  // T-020: How to convert an array to a string?
  const number = [1, 2, 3, 4, 5, 6];
  const arrayToString = number.join(" ");
  console.log(arrayToString); // 1 2 3 4 5 6
}
