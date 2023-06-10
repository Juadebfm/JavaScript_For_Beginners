# Asynchronous Programming, Synchronous Programming and Promises

## Synchronous Programming

Javascript runs _top - bottom_ , javascript codes executes one line at a time and that is what is built into javascript or javascript engine. JavaScript waits for one line to executes and do what it needs to do before moving to another line. This needs to happen because each line depends on the line above it or more or less a particular line above it. This is where _Hoisting_ and _Scoping_ comes into play.

- Synchronous codes blocks the execution of any codes that comes after it

```js
// Example
const shawarma = "shawarma"; //memory allocation, writing the actual string to the memory
console.log(shawarma);
```

This is an example of a _Synchronous_ code. It goes from the variable declaration to the console.log point of the code "synchronously". NB: it actually takes a bit og time for each line of code to be executed before they go to the subsequent line. That means, at the point when JS is assigning the value "shawarma" to the variable _shawarma_, the _console.log(shawarma);_ is paused until the code above it is worked on and done.

```js
function getShawarma() {
  return "shawarma";
}

const shawarma = getShawarma();
console.log(`${shawarma}`);
```

- SYNCHRONOUS MEANS THINGS HAPPEN ACCORDING TO THE ORDER IN WHICH IT WAS SETUP

## Asynchronous Programming

```js
let shawarma;
function orderShawarma() {
  console.log("Order Shawarma");
  setTimeout(() => {
    shawarma = "shawarma";
  }, 3000);
  console.log("Shawarma was ordered");
}
orderShawarma();
console.log(`Eat ${shawarma}`);
```

This simply relates to the suituation where a part of your code relies, depends or waits for another part of your code or event from another part of your code e.g waiting for a backend call or user click event.

Now imagine after ordering shawarma, you want to call your best friend jhybo, who you haven't seen in a while.

- Asynchronous codes does not block the execution of any codes that comes after it.

```js
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
console.log(`Eat ${shawarma}`);
```

So we need to identify part of our codes that waits/depends on another part and the part of our code that doesn't need to wait.

- We need to wait and be notified when the wait is over so that the line that is dependent can run properly
- We need a way to kick off the function that we need to wait for and then forget it so we can "move on with our lifes", we can come back to it when the wait is over.

This is where _Asynchronous_ programming comes in and the _setTimeOut_ function is a very basal/basic example of that.

```js
function orderShawarma(callback) {
  setTimeout(() => {
    const shawarma = "shawarma";
    callback(shawarma);
  }, 3000);
}

function shawarmaReady(shawarma) {
  console.log(`Eat the ${shawarma}`);
}

orderShawarma(shawarmaReady);
console.log(`Call Jhybo`);
```

In the code above, one can now happen independent of the other without been stuck waiting for the other, meaning they are not synchronized. A popular asynchronous code you've been writing unknowningly is these ones below :

```js
//async
window.addEventListener("click", function () {
  console.log("Clicked");
});

//async 2
window.addEventListener("click", callback);

function callback() {
  console.log("Clicked");
}
```

### Callback Hell

```js
function orderShawarma(callback) {
  callback();
}
function waitForShawarma(callback) {
  callback();
}
function eatShawarma(callback) {
  callback();
}

orderShawarma(() => {
  waitForShawarma(() => {
    eatShawarma();
  });
});
```

## Examples Of Asynchronous operations

- Data Fetching
- Calling Backend APIs
- Loading Files
- Timers & Intervals

## Promises

For javaScript promises, there are 2 things involved

### The Maker

This is the function that creates a promise objects and returns it, the maker is always an asynchronous function


```js
function getWeather() {
  return new Promise(); // hey i know you want the weather data, i don't have it right now, i need to go get it but in the mean-time this is a "promise" object that will be fulfilled as soon as i get the actual data... Just like in plane tickets been a promise to a flight not the actual flight
}
```

```js
function getWeather() {
  return new Promise(function(resolve, reject) { /* async logic*/ // the promise object takes a function where you can perform actual async logic, could be backend call e.t.c
  setTimeOut(function() {

  })

  });
```

The promise object has 3 states, namely _pending_ (meaning we're waiting), _fulfilled_ or _resolved_ (meaning we're successfull) and _reject_ (meaning it's done but we couldn't accomplish what we're actually looking out for)The Promise object takes in a function as it's parameter and that function also takes in 2 parameters:

- resolve: Called if the promise is successfully fulfilled
- reject: Called if the promise is failed and isn't fulfilled

```js
function getWeather() {
  return new Promise(function (resolve, reject) {
    setTimeOut(function () {
      resolve("Sunny");
      //OR
      reject("Error");
    });
  });
}
```

### The Reciever

This the function/part of you code that calls the maker and recieve something from it

```js
let promise = getWeather();
```

The promise method has different methods like _then_ , _catch_ , _finally_

```js
function getWeather() {
  return new Promise(function (resolve, reject) {
    resolve("Sunny"); // response in first param
    // reject("Sunny");// response in first param
  });
}

// reciever
const promise = getWeather();
promise.then(
  function (data) {
    console.log(`First Param ${data}`);
  },
  function (data) {
    console.log(`Second Param ${data}`);
  }
);
```

So let's rewrite this code like actual intelligent programmers

```js
function getWeather() {
  return new Promise(function (resolve, reject) {
    reject("Sunny");
  }
}


function onSuccess(data) {
    console.log(`Success: ${data}`);
}

function onError(error) {
    console.log(`Error: ${error}`);
}

getWeather().then(onSuccess,OnError)
```

Now remember we have to make it as asnchronous as possible right? "Then" we can "chain" seperate _events_ (not to be confused by actual events).

```js
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
```

#### Explanation

Imagine you want to know what the weather is like outside, but it takes some time for the information to arrive. Promises in JavaScript are like asking someone to get the weather information for you and promising that they will give it to you when they have it.

In this code, there are two functions: `getWeather` and `getWeatherIcon`. The `getWeather` function asks for the weather and returns a promise. It says, "I promise to give you the weather, but it might take a moment."

Then, the `getWeatherIcon` function takes the weather and returns another promise. It says, "I promise to give you the weather icon that corresponds to the weather you have, but it might also take a moment."

Next, there are two more functions: `onSuccess` and `onError`. If everything goes well, the `onSuccess` function is called with the weather icon as the data. It prints a success message. But if there's an error or something goes wrong, the `onError` function is called with an error message, and it prints an error message.

Finally, we use the promises together with the then keyword. We say, "After you get the weather, get the weather icon, and when you have it, call the `onSuccess` function." If anything goes wrong, call the `onError` function instead.

So, it's like waiting for someone to get the weather information, then waiting for them to find the weather icon, and finally, when they have it, you either celebrate the success or handle the error.

### COMPARE CALLBACK HELL TO PROMISES

```js
//Callback hell - pyramid of doom
getLocationName(function (locationName) {
  getLocationLatLon(locationName, function (latLon) {
    getWeather(latLon, function (weatherData) {
      getWeatherIcon(weatherData, function (weatherIcon) {
        displayWeatherIcon(weatherIcon);
      });
    });
  });
});

//promises
getLocationName()
  .then(getLocationLatLon)
  .then(getWeather)
  .then(getWeatherIcon)
  .then(displayWeatherIcon)
  .catch(function (error) {
    console.log(error);
  });
```

### ADVANTAGES OF PROMISES OVER CALLBACKS

- Readability and Maintainability: Promises offer a more readable and sequential code flow, making it easier to understand and maintain the code compared to callback-based code that often leads to callback hell.

- Error Handling: Promises provide built-in error handling mechanisms, allowing you to use a single .catch() block to handle errors in the entire promise chain, simplifying error management and making code more robust.

- Promise Chaining: Promises allow you to chain multiple asynchronous operations together using .then(), enabling better management of dependencies and ensuring the proper execution order of operations.

- Promise States: Promises have distinct states (pending, fulfilled, or rejected), providing better control and visibility over the state of asynchronous operations. This allows for handling different scenarios based on the promise state, such as displaying loading indicators or handling errors.

These advantages of promises enhance code readability, simplify error handling, enable better control over asynchronous operations, and improve the overall programming experience in dealing with asynchronous JavaScript code.

Finally will run regardless of anything that happens.
