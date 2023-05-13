// OPERATORS
/* ### Assignment operator */
// An equal sign in JavaScript is an assignment operator. It uses to assign a variable.
let firstName = "Julius Adebowale";
let country = "Nigeria";
/* ### Assignment operator */

/* ### Arithmetic operator */
// Arithmetic operators are mathematical operators.
let numOne = 4;
let numTwo = 3;
let sum = numOne + numTwo;
let diff = numOne - numTwo;
let mult = numOne * numTwo;
let div = numOne / numTwo;
let remainder = numOne % numTwo;
let powerOf = numOne ** numTwo;

console.log(sum, diff, mult, div, remainder, powerOf); // 7,1,12,1.33,1, 64

const PI = 3.14;
let radius = 100; // length in meter

//Let us calculate area of a circle
const areaOfCircle = PI * radius * radius;
console.log(areaOfCircle); //  314 m

const gravity = 9.81; // in m/s2
let mass = 72; // in Kilogram

// Let us calculate weight of an object
const weight = mass * gravity;
console.log(weight); // 706.32 N(Newton)

const boilingPoint = 100; // temperature in oC, boiling point of water
const bodyTemp = 37; // body temperature in oC

// Concatenating string with numbers using string interpolation
console.log(
  `The boiling point of water is ${boilingPoint} oC.\nHuman body temperature is ${bodyTemp} oC.\nThe gravity of earth is ${gravity} m / s2.`
);
/* ### Arithmetic operator */

// As we've seen, JavaScript has seven primitive data types namely number, string, boolean, null, undefined, symbol, and BigInt, and two non-primitive data types, objects, and arrays. Primitive data types are simple and do not have methods, while non-primitive data types are dynamic and do not have a fixed size

// The && (AND) operator gets true only if the two operands are true.
const check = 4 > 3 && 10 > 5; // true && true -> true
const check2 = 4 > 3 && 10 < 5; // true && false -> false
const check3 = 4 < 3 && 10 < 5; // false && false -> false
// The || (OR) operator gets true either of the operand is true.
const check4 = 4 > 3 || 10 > 5; // true  || true -> true
const check5 = 4 > 3 || 10 < 5; // true  || false -> true
const check6 = 4 < 3 || 10 < 5; // false || false -> false
// The ! (NOT) operator negates true to false and false to true.
let check7 = 4 > 3; // true
let check8 = !(4 > 3); //  false
let isLightOn = true;
let isLightOff = !isLightOn; // false
let isMarried = !false; // true
/* ### Logical operator */

/* ### Comparison operator */
// In programming we compare values, we use comparison operators to compare two values. We check if a value is greater or less or equal to other value.
console.log(3 > 2);
console.log(3 >= 2);
console.log(3 < 2);
console.log(2 < 3);
console.log(2 <= 3);
console.log(3 == 2);
console.log(3 != 2);
console.log(3 == "3");
console.log(3 === "3");
console.log(3 !== "3");
console.log(3 != 3);
console.log(3 !== 3);
console.log(0 == false);
console.log(0 === false);
console.log(0 == "");
console.log(0 == " ");
console.log(0 === "");
console.log(1 == true);
console.log(1 === true);
console.log(undefined == null);
console.log(undefined === null);
console.log(NaN == NaN);
console.log(NaN === NaN);
console.log(typeof NaN);

console.log("mango".length == "avocado".length);
console.log("mango".length != "avocado".length);
console.log("mango".length < "avocado".length);
console.log("milk".length == "meat".length);
console.log("milk".length != "meat".length);
console.log("tomato".length == "potato".length);
console.log("python".length > "dragon".length);

// NOTE FOR EQUALITY OPERATORS, ALWAYS USE "===" UNLESS YOU HAVE A GOOD REASON TO USE "=="

/* ### Comparison operator */

/* ### Logical operator */

/* ### Increment/Decrement operator */
// In JavaScript we use the increment operator to increase a value stored in a variable. The increment and decrement could be pre or post. Let us see each of them:
// 1. Pre-increment / pre-decrement
let countPre = 0;
console.log(++countPre);
console.log(countPre);
console.log(--countPre);
console.log(--countPre);
console.log(countPre);
// 2. Post-increment / post decrement
let countPost = 0;
console.log(countPost++);
console.log(countPost++);
console.log(countPost);
console.log(countPost--);
console.log(countPost);

// NB: post increment/decrement is used much more than pre-*. so just stick to post to avoid confusion

/* ### Increment/Decrement operator */

/* ### Ternary Operators */
let isRaining = true;
// Ternary operator allows to write a condition.
// Another way to write conditionals is using ternary operators. Look at the following examples:

isRaining
  ? console.log("You need a rain coat.")
  : console.log("No need for a rain coat.");

isRaining = false;

isRaining
  ? console.log("You need a rain coat.")
  : console.log("No need for a rain coat.");

let number = 5;
number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`);
number = -5;

number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`);
/* ### Ternary Operators */

// ### Operator Precedence
// I would like to recommend you to read about operator precedence from this
// [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
// ### Operator Precedence

/* ### Creating a time object */
// Once we create time object. The time object will provide information about time. Let us create a time object
let now = new Date();
console.log(now);
// Let's extract or get the full year from a time object.
console.log(now.getFullYear());
// Let's extract or get the month from a time object.
console.log(now.getMonth());
// Let's extract or get the day from a time object.
console.log(now.getDate());
// Let's extract or get the hours from a time object.
console.log(now.getHours());
// Let's extract or get the minutes from a time object.
console.log(now.getMinutes());
// Let's extract or get the seconds from a time object.
console.log(now.getSeconds());

// ### Getting time
// Using _getTime()_
console.log(now.getTime()); //this is the number of seconds passed from January 1, 1970 to January 4, 2020 00:56:41
//Using _Date.now()_
const allSeconds = Date.now();
console.log(allSeconds);

const timeInSeconds = new Date().getTime();
console.log(allSeconds == timeInSeconds); // true

const moment = new Date();
const year = moment.getFullYear();
const month = moment.getMonth() + 1;
const date = moment.getDate();
const hours = moment.getHours();
const minutes = moment.getMinutes();

console.log(`${date}/${month}/${year} ${hours}:${minutes}`);

/* ### Creating a time object */
