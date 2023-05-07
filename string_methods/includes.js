// includes(): It takes a substring argument and it check if substring argument exists in the string. includes() returns a boolean. It checks if a substring exist in a string and it returns true if it exists and false if it doesn't exist.
let string = "PluralCode Javascript February Cohort Class";
console.log(string.includes("Pluralcode")); // false
console.log(string.includes("days")); // false
console.log(string.includes("script")); // true
console.log(string.includes("Script")); // false
console.log(string.includes("java")); // false
console.log(string.includes("Java")); // true

let country = "Nigeria";
console.log(country.includes("fin")); // false
console.log(country.includes("Nig")); // true
console.log(country.includes("Eria")); // false
console.log(country.includes("eria")); // true
