const url = "http://worldtimeapi.org/api/timezone/America/New_York";

async function getData() {
  const response = await fetch(url);
  // .json is an async operation so we need to await it// remove the await and see what happens
  const data = await response.json();
  console.log(data);
}

let output = getData();
console.log(output);


