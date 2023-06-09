# ASYNC - AWAIT

The async/await function is a special type of function in JavaScript that allows us to write asynchronous code in a more synchronous and readable way. It provides a more convenient syntax than _then block_ for working with promises and handling asynchronous operations. By using async/await, we can write asynchronous code that resembles synchronous code, making it easier to read, understand, and handle errors.

```js
//Async - Await
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}

//then-catch block
function fetchData() {
  fetch("https://api.example.com/data")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    })
    .catch(function (error) {
      console.log("Error:", error);
    });
}
```

## THINGS TO KNOW BEFORE USING ASYNC / AWAIT

Note that in the original async/await code, we used await to pause the execution and wait for promises to resolve. In the .then syntax, the chaining of promises achieves a similar effect by ensuring that each subsequent step waits for the previous one to complete before executing. Both approaches achieve the same goal of handling asynchronous operations, but they differ in syntax and readability. The choice between async/await and .then syntax depends on personal preference and the requirements of the project.

- `async` and `await` must be used together exceptions to this role is in [JS Module](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) and in [Chrome Dev Tools](https://developer.chrome.com/docs/devtools/)
- `async` and `await` only affects the promise reciever not the creator, the creator implementation stays the same i.e you don't change the promise creation part of the code.
- You can add `await` or put it in front of any function that returns a promise
- Any function can be converted to async, even object methods

```js
const me = {
  async sayHello() {
    return "I am Juadeb";
  },
};

me.sayHello(); // Promise {'I am Juadeb'}
```

- `async` functions return a promise/promise object by default, so if you convert a function to async, it will force that function to return a promise by default.
- `await` can only be used inside an `async` function, it will wait for the promise to resolve and return the resolved value.
- error handling with try/catch block can be used for async-await function.

```js
function getData() {
    return new Promise(function)
}
```
