// // javascript is a forgiven language, not strictly type
// variable = "Dave";
// console.log(variable);

// "use strict";
// variable = "Dave";
// console.log(variable);

"use strict";
// Object..create() //syntax error will be caught but reference, type error cannot be caught
// variable = "Dave";
// console.log(variable)

const makeError = () => {
  let i = 2;
  while (i <= 5) {
    try {
      //   throw new CustomError("This is a custom error")
      //   throw new Error("Generic error");
      if (i % 2 !== 0) {
        throw new Error("This is an odd number");
      }
      console.log("Even number");
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

// function CustomError(message) {
//   this.message = message;
//   this.name = "CustomError";
//   this.stack = `${this.name}:${this.message}`;
// }
