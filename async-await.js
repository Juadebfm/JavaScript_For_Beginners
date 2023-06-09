//using async and await
async function start() {
  const data = await fetch(
    "https://api.weather.gov/gridpoints/OKX/35,35/forecast"
  );
  const result = await data.json();
  console.log(result.properties.periods[1].shortForecast);
}

//using then block
async function start2() {
  fetch("https://api.weather.gov/gridpoints/OKX/35,35/forecast")
    .then((data) => data.json())
    .then((result) => {
      console.log(result.properties.periods[1].shortForecast);
    });
}

let outputAsync = start();
let outputThen = start2();

console.log(outputAsync, outputThen);
