// function addTwoNum(a, b) {
//   let result = parseFloat(a) + parseFloat(b);
//   if (parseFloat(a) + parseFloat(b) > 10) {
//     return `${result} is greater than a decade`;
//   } else {
//     return `${result} is less than a decade`;
//   }
// }

// console.log(addTwoNum(1, 5));

// function AddTwoNum(a, b) {
//   return a + b >= 10
//     ? " the number is more than decade"
//     : " the number is less than decade";
// }

// AddTwoNum(4, 5);

function sumArrayValues(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];  
  }
  return sum;
}

const numbers = [1, 2, 1, 9];
//calling a function
console.log(sumArrayValues(numbers));


function addNumbers() {

}



