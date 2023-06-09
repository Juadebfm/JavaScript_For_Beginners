# Asynchronous Programming, Synchronous Programming and Promises

## Synchronous Programming

Javascript runs _top - bottom_ , javascript codes executes one line at a time and that is what is built into javascript or javascript engine. JavaScript waits for one line to executes and do what it needs to do before moving to another line. This needs to happen because each line depends on the line above it or more or less a particular line above it. This is where _Hoisting_ and _Scoping_ comes into play.

```js
// Example
const shawarma = "shawarma"; //memory allocation, writing the actual string to the memory
console.log(shawarma);
```

This is an example of a _Synchronous_ code. It goes from the variable declaration to the console.log point of the code "synchronously". NB: it actually takes a bit og time for each line of code to be executed before they go to the subsequent line. That means, at the point when JS is assigning the value "pizza" to the variable _pizza_, the _console.log(pizza);_ is paused until the code above it is worked on and done.

```js
function getShawarma() {
  return "shawarma";
}

const shawarma = getShawarma();
console.log(`${shawarma}`);
```

- SYNCHRONOUS MEANS THINGS HAPPEN ACCORDING TO THE ORDER IN WHICH IT WAS SETUP

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

## Asynchronous Programming

This simply relates to the suituation where a part of your code relies, depends or waits for another part of your code or event from another part of your code e.g waiting for a backend call or user click event.

Now imagine after ordering shawarma, you want to call your best friend jhybo, who you haven't seen in a while.

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
- We need a way to kick off the function that we need to wait for and then forget it so we can "move one with our lifes", we can come back to it when the wait is over.

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
