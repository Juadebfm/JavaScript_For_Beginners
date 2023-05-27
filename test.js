// Call the elements from HTML

const input = document.getElementById("inputNumber");
const validateText = document.getElementById("validationText");
const button = document.getElementById("submitNumber");
const numberContainer = document.getElementById("numbersContainer");

// Validate user input on button click
button.addEventListener("click", (event) => {
  event.preventDefault();
  const inputValue = parseInt(input.value);
  if (isNaN(inputValue)) {
    validateText.textContent = "Oga enter a number not strings";
  } else if (inputValue <= 0) {
    validateText.textContent = "Oga enter a valid number";
  } else {
    validateText.textContent = "";
    numberContainer.innerHTML = "";
    for (let i = 1; i <= inputValue; i++) {
      const span = document.createElement("span");
      span.textContent = i;
      // if it is even
      if (i % 2 === 0) {
        span.style.border = "1px solid green";
      } else {
        span.style.border = "1px solid red";
      }
      span.classList.add("span_fix");

      numberContainer.appendChild(span);
    }

    // Store the number spans in localStorage so that when you refresh the page you have the last render still available for view (READ ABOUT LOCALSTORAGE)
    localStorage.setItem("numberSpans", numberContainer.innerHTML);
  }
});

// Retrieve number spans from localStorage on page load
window.addEventListener("load", () => {
  const storedSpans = localStorage.getItem("numberSpans");
  if (storedSpans) {
    numberContainer.innerHTML = storedSpans;
  }
});

// Clear validation text when user starts typing
input.addEventListener("input", () => {
  validateText.textContent = "";
});
