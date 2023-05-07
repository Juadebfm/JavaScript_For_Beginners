/*In programming, primitive data types refer to the most basic data types that are used to represent simple values. In JavaScript, there are six primitive data types, which include:

Number: This data type is used to represent numeric values. Numbers in JavaScript can be integers or floating-point values.

String: This data type is used to represent text values. Strings in JavaScript are enclosed in either single or double quotes.

Boolean: This data type is used to represent logical values, which can be either true or false.

Null: This data type is used to represent the intentional absence of any object value.

Undefined: This data type is used to represent a variable that has not been assigned a value.

Symbol: This data type is used to represent a unique identifier. Symbols were introduced in ES6.

Primitive data types are called "primitive" because they are not objects and have no methods or properties. They are passed by value, meaning that when you assign a primitive value to a variable or pass it to a function, a copy of the value is created. */

let word = "JavaScript";
// we dont' modify string
// we don't do like this, word[0] = 'Y'
let numOne = 3;
let numTwo = 3;
console.log(numOne == numTwo); // true

let js = "JavaScript";
let py = "Python";
console.log(js == py); //false

let lightOn = true;
let lightOff = false;
console.log(lightOn == lightOff); // false

let age = 35;
const gravity = 9.81; //we use const for non-changing values, gravitational constant in  m/s2
let mass = 72; // mass in Kilogram
const PI = 3.14; // pi a geometrical constant

//More Examples
const boilingPoint = 100; // temperature in oC, boiling point of water which is a constant
const bodyTemp = 37; // oC average human body temperature, which is a constant
console.log(age, gravity, mass, PI, boilingPoint, bodyTemp);
