// JavaScript is a programming language that was created in 1995 by Brendan Eich, and it was originally developed to add interactive features to web pages. Since then, it has become one of the most popular programming languages in the world.

// There are a few important concepts to understand when learning JavaScript. Concepts like variables, reserved words, js syntax, difference between const, let and var, javascript quirkiness, global and local scope, data types

/*VARIABLES*/
// Variables: Think of a variable like a container that holds different things. You can put different things in it at different times. In JavaScript, you can create a variable to hold a value using the "let" keyword. Here's an example:
let firstName = "Julius"; // variable firstName holds a string value
let lastName = "Adebowale"; // variable lastName holds a string value
let country = "Nigeria"; // string value
let city = "Lagos State"; // string value
let age = 32; // variable age holds a number value
let isMarried = false; // variable isMarried holds a boolean value
/*VARIABLES*/

/*RESERVED WORDS*/
// Reserved words: These are words that have special meaning in JavaScript and cannot be used as variable names or other identifiers. For example, "let", "const", "function", "var", are reserved words that we use to create variables. If we tried to use it as a variable name, we would get an error.
/*RESERVED WORDS*/

/*DIFFERENCE BETWEEN CONST, LET & VAR*/
// "const" is used to create a variable that cannot be reassigned. For example:
let PI = 3.14;
console.log(PI);
const waterBoilingPoint = 100;
const earthGravity = 9.81;
// "let" is used to create a variable that can be reassigned. For example:
let weight = 65;
weight = 11; //here we reassigned weight to 11 from 65
//difference between var and let

var x = 10;

if (true) {
  var x = 20;
  console.log(x); // Output: 20
}

console.log(x); // Output: 20
// In this example, we declare a variable x and assign it the value of 10. Then we use an if statement to create a new block of code. Inside that block, we declare a new variable x and assign it the value of 20. When we log the value of x inside the block, we get 20. But when we log the value of x again outside the block, we still get 20. This is because var variables are function-scoped, which means that they are accessible anywhere within the function that they are declared in. In this case, both x variables are declared within the same function, so they refer to the same variable.

// Now let's take a look at an example using let:

let y = 10;

if (true) {
  let y = 20;
  console.log(y); // Output: 20
}

console.log(y); // Output: 10
// In this example, we declare a variable y using let and assign it the value of 10. Inside the if block, we declare a new variable y using let and assign it the value of 20. When we log the value of y inside the block, we get 20. But when we log the value of y again outside the block, we get 10. This is because let variables are block-scoped, which means that they are only accessible within the block that they are declared in. In this case, the y variable inside the block is a completely separate variable from the y variable outside the block.

// So, in summary, var and let are both used to declare variables in JavaScript, but var variables are function-scoped and let variables are block-scoped. This means that var variables can be accessed from anywhere within the function that they are declared in, whereas let variables can only be accessed within the block that they are declared in.
/*DIFFERENCE BETWEEN CONST, LET & VAR*/

/*GLOBALSCOPE & LOCAL SCOPE*/
// Global and local scope: Scope is like the area of your code where a variable is accessible. If a variable is created inside a function, it's only accessible within that function (we call it "local" scope). If a variable is created outside of a function, it's accessible anywhere in your code (we call it "global" scope). Here's an example:
let globalVariable = "I'm a global variable!";

function myFunction() {
  let localVariable = "I'm a local variable!";
  console.log(globalVariable); // accessible here
}

myFunction(); // logs "I'm a global variable!"
// console.log(localVariable); // this will throw error "localVariable is not defined"

/*GLOBALSCOPE & LOCAL SCOPE*/

/*CONSOLE & ALERT */
// console.log(): This is the most common way to print values to the console. You simply pass in the value you want to print as an argument. For example:
console.log(
  globalVariable,
  age,
  city,
  isMarried,
  country,
  firstName,
  lastName,
  PI,
  waterBoilingPoint,
  earthGravity,
  weight,
  x,
  y
);
/*CONSOLE & ALERT */


