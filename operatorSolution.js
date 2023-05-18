// LEVEL 3

const now = new Date();
const options = {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
};
const formattedTime = now.toLocaleString("en-US", options);

console.log(formattedTime);

// LEVEL 2
// 1
let base = prompt("Enter the base of the triangle");
let height = prompt("Enter the height of the triangle");
let area = 0.5 * parseInt(base) * parseInt(height);

console.log(area);

// 2
let sideA = prompt("Enter side A");
let sideB = prompt("Enter side B");
let sideC = prompt("Enter side C");
let perimeter = parseInt(sideA) + parseInt(sideB) + parseInt(sideC);
console.log(perimeter);

// 3
let length = parseInt(prompt("Enter length"));
let width = parseInt(prompt("Enter width"));
let areaOf = length * width;
let perimeterOf = 2 * (length + width);
console.log(
  `The area of the rectangle is ${areaOf}, and the perimeter is ${perimeterOf}`
);

// 4
let radius = Number(prompt("Enter radius"));
const PI = 3.14;

let areaOfCircle = PI * radius * radius;
let circumference = 2 * (PI * radius);
console.log(
  `The area of the circle is ${areaOfCircle}, and the circumference is ${circumference}`
);

// 5
// 5. Calculate the slope, x-intercept, and y-intercept of y = 2x - 2
const equation1 = "y = 2x - 2";
const slope1 = 2;
const xIntercept1 = 1;
const yIntercept1 = -2;

console.log("Equation 1: " + equation1);
console.log("Slope: " + slope1);
console.log("x-intercept: " + xIntercept1);
console.log("y-intercept: " + yIntercept1);

// 6. Calculate the slope between point (2, 2) and point (6, 10)
const x1 = parseFloat(prompt("Enter x-coordinate for point 1:"));
const y1 = parseFloat(prompt("Enter y-coordinate for point 1:"));
const x2 = parseFloat(prompt("Enter x-coordinate for point 2:"));
const y2 = parseFloat(prompt("Enter y-coordinate for point 2:"));

const slope2 = (y2 - y1) / (x2 - x1);
console.log("Slope between the given points: " + slope2);

// 7. Compare the slope of the above two questions
if (slope1 === slope2) {
  console.log("The slopes are equal.");
} else {
  console.log("The slopes are not equal.");
}

// 8. Calculate the value of y = x^2 + 6x + 9 for different x values to find when y is 0
const xValue = parseFloat(prompt("Enter the x value to calculate y:"));
const yValue = Math.pow(xValue, 2) + 6 * xValue + 9;
console.log("y = " + yValue);

// 8
let hours = parseInt(prompt("Enter hours worked"));
let ratesPerHr = parseInt(prompt("Enter rate per hours worked"));
let pay = hours * ratesPerHr;
console.log(`Hours worked is ${hours} and the rates is ${ratesPerHr} therefore accumulated pay is ${pay}`);


// 9