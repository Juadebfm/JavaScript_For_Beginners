// // // javascript is a forgiven language, not strictly type
// // variable = "Dave";
// // console.log(variable);

// // "use strict";
// // variable = "Dave";
// // console.log(variable);

// "use strict";
// // Object..create() //syntax error will be caught but reference, type error cannot be caught
// // variable = "Dave";
// // console.log(variable)

const makeError = () => {
  let i = 2;
  while (i <= 5) {
    try {
        throw new Error("This is a custom error")
    } catch (error) {
      console.error(error);
      console.warn(error.name);
      console.info(error.message);
      console.table(error.stack);
    } finally {
      console.log("This is the finally block");
      i++;
    }
  }
};
console.log(makeError());

function CustomError(message) {
  this.message = message;
  this.name = "CustomError";
  this.stack = `${this.name}:${this.message}`;
}
try {
  let i = 3;
  if (i % 2 !== 0) {
    console.table("Odd number");
  }
} catch (error) {
  console.error(error);
}

function divideNumbers(a, b) {
  try {
    let result = a +
    return a / b;
  } catch (err) {
    console.log("An error occurred:", err.message);
  } finally {
    console.log("This is the finally block");
  }
}

console.log(divideNumbers(10, 2)); // Output: 5
console.log(divideNumbers(10, 0)); // Output: An error occurred: Division by zero is not allowed.
console.log(divideNumbers(12, 4)); // Output: 3
