const passwordInput = document.getElementById("passwordInput");

const minLengthInfo = document.getElementById("minLengthInfo");
const uppercaseInfo = document.getElementById("uppercaseInfo");
const numericInfo = document.getElementById("numericInfo");

const validatePassword = () => {
  const password = passwordInput.value;
  //make sure that the length of the passwrod is more than 8
  const minLengthRex = /^.{8,}$/;
  //make sure that the password contains capital letters
  const uppercaseRex = /(?=.*[A-Z])/;
  //make sure that the password contains digits/numeric values
  const numericRex = /(?=.*\d)/;

  minLengthInfo.className = minLengthRex.test(password) ? "valid" : "invalid";
  uppercaseInfo.className = uppercaseRex.test(password) ? "valid" : "invalid";
  numericInfo.className = numericRex.test(password) ? "valid" : "invalid";
};
