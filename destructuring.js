// NEW WAY : OBJECTS

let person = {
  firstName: "Julius",
  lastName: "Ade",
  currentAge: 250,
};

let { firstName, ...rest } = person; //the spread has to be the last at the end
console.log(firstName);
console.log(rest);

// let {
//   firstName: fName,
//   lastName: lName,
//   middleName: mName = "",
//   currentAge: age = 30,
// } = person;
// console.log(fName); // Julius
// console.log(lName); // Ade
// console.log(mName); // ""
// console.log(age); // 30

// OLD WAY : ARRAYS
const arr = [1, 2, 3];

// let x = arr[0];
// let y = arr[1];
// let z = arr[2];

// console.log(x, y, z);

//NEW WAY
// let [x, y, z] = arr;
// console.log(x, y, z);

let [a, b, c, d] = [1, 2, 3, 4];
console.log(a, b, c, d);

// to skip an item
const arrValue = ["one", "two", "three"];
const [x, , z] = arrValue;
console.log(x, z);

// combining desc with the spread operator
const names = ["Julius", "Justina", "Evans", "Ifeanyi", "Kelvin", "Dolapo"];

const [j, l, ...k] = names;

console.log(j, l, k);

//swapping values
let nameA = "Julius";
let nameB = "Doe";

[nameA, nameB] = [nameB, nameA];

console.log(nameA, nameB);

//descturctor from an object
function getPerson() {
  return null;
}

let { fName, lname } = getPerson() || {};

console.log(fName, lname);

// Nested object descruturing
const member = {
  id: 01,
  name: {
    fame: "Julius",
    lame: "Doe",
  },
};

// how to dest
let {
  name: { fame, lame },
} = member;

console.log(fame, lame);

// most popular use cases
// let displayFullname = (person) => `${person.firstName} ${person.lastName}`;

// displayFullname(person);

let displayFullname = ({ props: Props }) => `${firstName} ${lastName}`;
