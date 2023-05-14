# Loops

Most of the activities we do in life are full of repetitions. Imagine if I ask you to print out from 0 to 100 using console.log(). To implement this simple task it may take you 2 to 5 minutes, such kind of tedious and repetitive task can be carried out using loop. If you prefer watching the videos, you can checkout the [video tutorials](https://www.youtube.com/watch?v=Kn06785pkJg)

In programming languages to carry out repetitive task we use different kinds of loops. The following examples are the commonly used loops in JavaScript and other programming languages.

## for Loop

```js
// For loop structure
for(initialization, condition, increment/decrement){
  // code goes here
}
```

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// 0 1 2 3 4 5
```

- Break Down

```js
let i = 0;
i <= 5;
i++;
let i = 1;
i <= 5;
i++;
let i = 2;
i <= 5;
i++;
let i = 3;
i <= 5;
i++; break
let i = 4;
i <= 5;
i++;
let i = 5;
i <= 5;
i++;
```

```js
for (let i = 5; i >= 0; i--) {
  console.log(i);
}

// 5 4 3 2 1 0
```

```js
for (let i = 0; i <= 5; i++) {
  console.log(`${i} * ${i} = ${i * i}`);
}
```

```sh
0 * 0 = 0
1 * 1 = 1
2 * 2 = 4
3 * 3 = 9
4 * 4 = 16
5 * 5 = 25
```

```js
const countries = [
  "Finland",
  "Sweden",
  "Denmark",
  "Norway",
  "Iceland",
  "nigeria",
];
const newArr = [];
for (let i = 0; i < countries.length; i++) {
  newArr.push(countries[i].toUpperCase());
}

// ["FINLAND", "SWEDEN", "DENMARK", "NORWAY", "ICELAND"]
```

Adding all elements in the array

```js
const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum = sum + numbers[i]; // can be shorten, sum += numbers[i]
}

console.log(sum); // 15
```

Creating a new array based on the existing array

```js
const numbers = [1, 2, 3, 4, 5];
const newArr = [];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  newArr.push(numbers[i] ** 2);
}

console.log(newArr); // [1, 4, 9, 16, 25]
```

```js
const countries = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
const newArr = [];
for (let i = 0; i < countries.length; i++) {
  newArr.push(countries[i].toUpperCase());
}

console.log(newArr); // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]
```

### while loop

```js
let i = 5;
while (i > 0) {
  console.log(i);
  i--;
}

// 0 1 2 3 4 5
```

### do while loop

```js
let i = 0;
do {
  console.log(i);
  i++;
} while (i <= 5);

// 0 1 2 3 4 5
```

### for of loop

We use for of loop for arrays. It is very hand way to iterate through an array if we are not interested in the index of each element in the array.

```js
for (const element of arr) {
  // code goes here
}
```

```js
const numbers = [1, 2, 3, 4, 5];

for (const num of numbers) {
  console.log(num);
}

// 1 2 3 4 5

for (const num of numbers) {
  console.log(num * num);
}

// 1 4 9 16 25

// adding all the numbers in the array
let sum = 0;
for (const num of numbers) {
  sum = sum + num;
  // can be also shorten like this, sum += num
  // after this we will use the shorter synthax(+=, -=, *=, /= etc)
}
console.log(sum); // 15

const webTechs = [
  "HTML", // 0
  "CSS", // 1
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

for (const tech of webTechs) {
  console.log(tech.toUpperCase());
}

// HTML CSS JAVASCRIPT REACT NODE MONGODB

for (const tech of webTechs) {
  console.log(tech[0]); // get only the first letter of each element,  H C J R N M
}
```

```js
const countries = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
const newArr = [];
for (const country of countries) {
  newArr.push(country.toUpperCase());
}

console.log(newArr); // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]
```

### break

Break is used to interrupt a loop.

```js //0 - 5
for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    break; //
  }
}

// 0 1 2
```

The above code stops if 3 found in the iteration process.

### continue

We use the keyword _continue_ to skip a certain iterations.

```js
for (let i = 0; i <= 10; i++) {
  if (i == 4) {
    continue;
  }
  console.log(i); 0 1 2 3 5 6 7 8 9 10
}

// 0 1 2 4 5
```

#### simple array methods

- push(): The push method is used to add one or more elements to the end of an array.
  Example: Suppose you have an empty array to store a list of groceries, and you want to add some items to it. You can use the push method to add the items one by one to the end of the array:

```js
const groceryList = [];
groceryList.push("milk");
groceryList.push("bread");
groceryList.push("eggs");
console.log(groceryList); // Output: ['milk', 'bread', 'eggs']
```

- pop(): The pop method is used to remove the last element from an array.
  Example: Suppose you have an array of numbers, and you want to remove the last element from it. You can use the pop method to remove the last element:

```js
const numbers = [1, 2, 3, 4, 5];
const lastNumber = numbers.pop();
console.log(numbers); // Output: [1, 2, 3, 4]
console.log(lastNumber); // Output: 5
```

- shift(): The shift method is used to remove the first element from an array.
  Example: Suppose you have an array of strings representing a list of students in a class, and you want to remove the first student from the list. You can use the shift method to remove the first element:

```js
const students = ["Alice", "Bob", "Charlie", "David"];
const firstStudent = students.shift();
console.log(students); // Output: ['Bob', 'Charlie', 'David']
console.log(firstStudent); // Output: 'Alice'
```

- unshift(): The unshift method is used to add one or more elements to the beginning of an array.
  Example: Suppose you have an array of numbers, and you want to add a new number to the beginning of the array. You can use the unshift method to add the number:

```js
const numbers = [2, 3, 4, 5];
numbers.unshift(1);
console.log(numbers); // Output: [1, 2, 3, 4, 5]
```
