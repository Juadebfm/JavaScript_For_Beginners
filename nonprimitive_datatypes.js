/*Non-primitive data types in JavaScript are also known as reference types. They are called reference types because they are not directly stored in the variable, but instead, they are stored somewhere in the memory and the variable holds a reference to that memory location. Here are some of the commonly used non-primitive data types:

Objects: Objects are used to represent a collection of data or properties. They can contain both primitive and non-primitive values, as well as methods for manipulating the data.

Arrays: Arrays are used to store lists of data. They are similar to objects but with a specific structure and functionality for managing sequential data.

Functions: Functions are used to define reusable pieces of code that can be called from anywhere in the program. They can take parameters as inputs and can also return values.

Dates: Dates are used to represent dates and times. They have methods for manipulating dates and times and are useful for tasks such as scheduling events.

RegEx: RegEx (regular expressions) are used to match patterns in strings. They are powerful tools for string manipulation and data validation.

Map: Maps are collections of key-value pairs that allow for efficient searching and retrieval of data.

Set: Sets are collections of unique values that can be used to remove duplicates from arrays or to test membership of a value in a collection.

Non-primitive data types are mutable, meaning that their values can be changed during program execution. Additionally, non-primitive data types are passed by reference, which means that changes made to an object in one part of the program will affect all references to that object. */

let nums = [1, 2, 3];
nums[0] = 10;
nums[1] = 22;
console.log(nums); // [10, 2, 3]

let numbers = [1, 2, 3];
console.log(nums == numbers); // false

let userOne = {
  name: "Julius",
  role: "teaching",
  country: "Nigeria",
};
let userTwo = {
  name: "Dele",
  role: "teaching",
  country: "Belgium",
};
console.log(userOne == userTwo); // false
