// indexOf(): Takes takes a substring and if the substring exists in a string it returns the first position of the substring if does not exist it returns -1

let string = "PluralCode Javascript February Cohort Class";
console.log(string.indexOf("J")); // 11
console.log(string.indexOf("Feb")); // 22
console.log(string.indexOf("Cohort")); // 31
console.log(string.indexOf("a")); // 4
console.log(string.indexOf("Javascript")); // 11
console.log(string.indexOf("Script")); //-1 (when it can't find the value)
console.log(string.indexOf("script")); // 15
