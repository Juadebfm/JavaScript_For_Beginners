const usersObj = {
  firstName: "Julius",
  lastName: "Adebowale",
  age: 250,
  email: "asab@asb.com",
  slangs: () => {
    return "I am a slang";
  },
};

const newObj = JSON.stringify(usersObj, undefined, 3);
console.log(newObj);

const secondObj = JSON.parse(newObj);
console.log(secondObj);
