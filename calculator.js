let result = document.getElementById("result");

function getResult(value) {
  result.value += value;
}

function clearResult() {
  result.value = "";
}

function deleteChar() {
  result.value = result.value.slice(0, -1);
}

function calculateResult() {
  try {
    result.value = eval(result.value);
  } catch (error) {
    result.value = "Error";
  }
}

// THIS IS FOR KEYBOARD INPUT

document.addEventListener("keydown", (event) => {
  const key = event.key;
  if (key >= "0" && key <= "9") {
    getResult(key);
  } else if (key === ".") {
    getResult(".");
  } else if (key === "+") {
    getResult("+");
  } else if (key === "-") {
    getResult("-");
  } else if (key === "*") {
    getResult("*");
  } else if (key === "/") {
    getResult("/");
  } else if (key === "%") {
    getResult("%");
  } else if (key === "Enter") {
    calculateResult();
  } else if (key === "Backspace") {
    deleteChar();
  } else if (key === "Escape") {
    clearResult();
  }
});

// This code defines four functions:

// getResult(value): This function takes a value (which can be a number or operator) and appends it to the value already present in the result input field.
// clearResult(): This function sets the value of the result input field to an empty string, effectively clearing the calculator screen.
// deleteChar(): This function removes the last character from the result input field.
// calculateResult(): This function calculates the result of the expression entered by the user in the result input field. It uses the eval() function to evaluate the expression, and displays the result in the result input field. If there is an error in the expression (e.g. if the user enters an invalid expression like "2/0"), it displays the word "Error" in the result input field.
