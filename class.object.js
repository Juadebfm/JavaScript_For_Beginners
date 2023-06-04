const myObj = {
  firstName: "John",
  lastName: "Doe",
};
const myObj2 = {
  familyName: "Dele",
  maritalStatus: "Doe",
};

let studentData = { ...myObj, ...myObj2 };
console.log(studentData);
