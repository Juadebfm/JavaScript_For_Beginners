// let shawarma;
// function orderShawarma() {
//   console.log("Order Shawarma");
//   setTimeout(() => {
//     shawarma = "shawarma";
//   }, 3000);
//   console.log("Shawarma was ordered");
// }
// orderShawarma();
// //note because "setTimeout" is an asynchronous function/operation the shawarma variable is undefined at the point below because the console.log() had run synchronously before the "shawarma" value is assigned to the variable

// console.log(`Eat ${shawarma}`);


let shawarma;
function orderShawarma() {
  console.log("Order Shawarma");
  setTimeout(() => {
    shawarma = "shawarma";
    console.log(`${shawarma} is ready`);
  }, 3000);
  console.log("Shawarma was ordered");
}
orderShawarma();
console.log("Call Jhybo");
console.log(`Eat ${shawarma}`)