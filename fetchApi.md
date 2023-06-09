# FETCH API

Every single web or mobile app in web development requires that you get data from somewhere and get data from somewhere. This back and forth is actually what makes the web so powerful and one of the way we do this natively in JS is using the all powerful _fetch API_

_fetch()_ provides an easy way to make HTTP requests to retrieve resources from a server. It returns a Promise that resolves to the response from the server. It is commonly used to fetch JSON data, HTML content, or other types of resources.

The history of the Fetch API dates back to the introduction of the Fetch specification in 2014. It was designed as a modern replacement for the traditional _XMLHttpRequest object_, offering a more powerful and flexible way to handle network requests in JavaScript. The Fetch API provides a standardized approach to making HTTP requests and handling responses.

```js
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
```

## HOW DOES FETCH KNOW WHERE TO GET DATA FROM

When you call fetch() and provide a URL as its argument, the function knows where to get the data from because the URL serves as the target endpoint for the HTTP request. It tells fetch() the location of the resource you want to retrieve.

For example, calling _fetch('https://api.example.com/data')_ instructs fetch() to make a request to the _https://api.example.com/data_ URL to fetch the desired data.

The URL you pass to fetch() serves as the address for the server hosting the resource. fetch() uses this URL to establish a connection and send an HTTP request to the server. The server processes the request and sends back a response containing the requested data.

In summary, fetch() knows where to get data from because you explicitly provide the URL as an argument, which indicates the location of the desired resource.

- You parse the API URL to the fetch function and that's how it get's the data. You could use any API you want as long as it's publicly accessible.
- Fetch will then return a response object like below:

```js
const response = fetch("SomeAPI.com");
```

- So basic mechanism for fetch API is to ask for a data and recieve a response object `ask and you shall recieve`, an over-simplication

## REQUEST

Fetch needs more than the URL as parameter to operate, in fact, when you pass only the URL, JavaScript creates a new request object for you behind the scene. _const request = new Request()_

```js
const response = fetch("SomeAPI.com");

// becomes
const request = new Request("SomeAPI.com");
const response = fetch(request);
```

The Request object is a container for all the information about the request. It contains the URL, the method, the headers, and the body. Now the same way the request needs the URL it also needs to know what method to be triggered be it _POST_, _GET_ and other things like headers and cache policy. the default value for method in the request is _GET_

## RESPONSE

The response object is the result of the fetch() call. It contains the body of the response, the headers, and the status code. Note that fetch is an `asynchronous` operation we're in actuality making a round trip to an API/server/backend, so fetch does actually return a fetch object but the `promise` that will resolve into a response object eventually.

```js
const url = "http://worldtimeapi.org/api/timezone/America/New_York";

async function getData() {
  const response = await fetch(url);
  // .json is an async operation so we need to await it// remove the await and see what happens
  const data = await response.json();
  console.log(data);
}

let output = getData();
console.log(output);
```

### API TOKEN

API's sometimes requires tokens so you have to add it to your request.

### PARAMS

Params are used to send data to the server. With API's sometimes it's not just simple "hey get me weather data" or "get me list of countries", sometimes, we want specific information from the API.

```js
const url = "music.com/api?type=albums&artist=abcd&beforeYear=2000";
```

### HEADERS

Headers are used to send additional information to the server.

### ERROR HANDLING

```js
const spotifyUrl = "https://api.spotify.com/v1/artists/0k17h0D3J5VfsdmQ1iZtE9";

const request = new Request(spotifyUrl, {
  headers: {
    Authorization: "Bearer <KEY>",
  },
});

fetch(request)
  .then((response) => response.json())
  .then((data) => console.log(`Success:`, data))
  .catch((error) => console.log(`Error: ${error}`));

  OUTPUT:
  Promise { <pending> }
Success: {
  error: {
    status: 400,
    message: 'Only valid bearer authentication supported'
  }
}
```

Note that the code did not get to the catch block because for the fetch API, making a success trip from and to an API is considered a success. That is why validating on the frontend is very essential to make sure weʻre sending the correct data especially with forms
