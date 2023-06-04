const myObj = {
  name: "John",
  age: 30,
  hobbies: ["Eat", "Sleep", "Rest"],
  hello: function () {
    console.log("Hi!, I'm John");
  },
};

console.log(myObj);
console.log(myObj.name);
console.log(myObj.age);
console.log(myObj.hobbies);
myObj.hello();

//convert myObj to json
const myObjJsn = JSON.stringify(myObj);
console.log(myObjJsn);
//notice that JSON doesn't send options?!
console.log(typeof myObjJsn);
console.log(myObjJsn.name); //undefined

// to convert JSON back to object
const myObj2 = JSON.parse(myObjJsn);
console.log(myObj2);
//Note you will lose the method in your object
