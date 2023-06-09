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

// let shawarma;
// function orderShawarma() {
//   console.log("Order Shawarma");
//   setTimeout(() => {
//     shawarma = "shawarma";
//     console.log(`${shawarma} is ready`);
//   }, 3000);
//   console.log("Shawarma was ordered");
// }
// orderShawarma();
// console.log("Call Jhybo");
// console.log(`Eat ${shawarma}`)

// function getWeather() {
//   return new Promise(function (resolve, reject) {
//     reject("Sunny");
//   });
// }

// // reciever
// const promise = getWeather();
// promise.then(
//   function (data) {
//     console.log(`First Param ${data}`);
//   },
//   function (data) {
//     console.log(`Second Param ${data}`);
//   }
// );

function getWeather() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("Smoky");
    }, 1000);
  });
}

function getWeatherIcon(weather) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      switch (weather) {
        case "Sunny":
          resolve("☀️");
          break;
        case "Cloudy":
          resolve("☁️");
          break;
        case "Rainy":
          resolve("🌧");
          break;
        default:
          reject("Invalid Weather");
      }
    }, 1000);
  });
}

function onSuccess(data) {
  console.log(`Success: ${data}`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

getWeather().then(getWeatherIcon).then(onSuccess, onError);


