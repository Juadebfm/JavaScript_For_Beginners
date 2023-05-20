let age = prompt("Enter your age:");

if (age >= 18) {
  console.log("You are old enough to drive");
} else if (age < 18) {
  let noOfYears = 18 - age;
  console.log(`You have to wait for ${noOfYears} before you can drive`);
} else {
    console.log("You are an alien")
}
