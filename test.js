function getWeather() {
    return new Promise(function (resolve, reject) {
      resolve("Sunny");
    });
  }
  
  function onSuccess(data) {
    console.log(`Success: ${data}`);
  }
  
  function onError(error) {
    console.log(`Error: ${error}`);
  }
  
  getWeather().then(onSuccess, onError);
  