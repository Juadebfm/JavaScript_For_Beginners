// split(): The split method splits a string at a specified place.
let string = "PluralCode Javascript February Cohort Class";
console.log(string.split()); // [ 'PluralCode Javascript February Cohort Class' ]
console.log(string.split(" ")); // [ 'PluralCode', 'Javascript', 'February', 'Cohort', 'Class' ]
let firstName = "Julius Adebowale";
console.log(firstName.split()); // ["Julius Adebowale"]
console.log(firstName.split("")); // [ 'J', 'u', 'l', 'i','u', 's', ' ', 'A','d', 'e', 'b', 'o','w', 'a', 'l', 'e']
let countries = "Finland, Sweden, Norway, Denmark, and Iceland";
console.log(countries.split(",")); // ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
console.log(countries.split(", ")); //  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]
