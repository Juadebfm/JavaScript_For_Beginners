// endsWith: it takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean(true or false).
// string.endsWith(substring)
let string = "Love is the best tool in this world";
console.log(string.endsWith("world")); // true
console.log(string.endsWith("love")); // false
console.log(string.endsWith("in this world")); // true

function LoginData() {
  if (string.endsWith("male")) { 
    console.log("you're logged in");
  }
}
let country = "Nigeria";
console.log(country.endsWith("eria")); // true
console.log(country.endsWith("ria")); // true
console.log(country.endsWith("nig")); //  false
