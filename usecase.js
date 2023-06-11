// COURSES
window.onload = function () {
    // Fetch data from API endpoint
    fetch("https://pluralcode.academy/pluralcode_apis/api/bot_course_list")
      .then((response) => response.json())
      .then((data) => {
        // Get select element by ID
        const select = document.getElementById("course_of_interest");
  
        // Loop through data and add options to select element
        data.forEach((course) => {
          const option = document.createElement("option");
          option.value = course.id;
          option.text = course.name;
          option.setAttribute("data-name", course.name); // add data attribute with course name
  
          select.add(option);
        });
      })
      .catch((error) => console.error(error));
  };
  
  //email valid
  var emailInput = document.getElementById("email");
  emailInput.addEventListener("input", validateEmail);
  
  function validateEmail() {
    var referenceEmail = emailInput.value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var isValid = emailRegex.test(referenceEmail);
    var errorDiv = document.getElementById("emailError");
  
    if (isValid) {
      emailInput.classList.remove("is-invalid");
      errorDiv.style.display = "none";
    } else {
      emailInput.classList.add("is-invalid");
      errorDiv.style.display = "block";
    }
  }
  
  // referernce email
  var referenceEmailInput = document.getElementById("reference_email");
  referenceEmailInput.addEventListener("input", validateReferenceEmail);
  
  function validateReferenceEmail() {
    var referenceEmail = referenceEmailInput.value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var isValid = emailRegex.test(referenceEmail);
    var errorDiv = document.getElementById("emailRefError");
  
    if (isValid) {
      referenceEmailInput.classList.remove("is-invalid");
      errorDiv.style.display = "none";
    } else {
      referenceEmailInput.classList.add("is-invalid");
      errorDiv.style.display = "block";
    }
  }
  
  //phone number
  var phoneInput = document.getElementById("phone_number");
  phoneInput.addEventListener("input", validatePhone);
  
  function validatePhone() {
    var phoneValue = phoneInput.value;
    var isValid = /^\d{11}$/.test(phoneValue);
    var errorDiv = document.getElementById("phoneError");
  
    if (isValid) {
      phoneInput.classList.remove("is-invalid");
      errorDiv.style.display = "none";
    } else {
      phoneInput.classList.add("is-invalid");
      errorDiv.style.display = "block";
    }
  }
  
  //reference phone number
  var referencePhoneInput = document.getElementById("reference_phone");
  referencePhoneInput.addEventListener("input", validateReferencePhone);
  
  function validateReferencePhone() {
    var phoneValue = referencePhoneInput.value;
    var isValid = /^\d{11}$/.test(phoneValue);
    var errorDiv = document.getElementById("phoneRefError");
  
    if (isValid) {
      referencePhoneInput.classList.remove("is-invalid");
      errorDiv.style.display = "none";
    } else {
      referencePhoneInput.classList.add("is-invalid");
      errorDiv.style.display = "block";
    }
  }
  
  //file size valid
  var fileInput = document.getElementById("passport_photograph");
  var maxFileSize = 400 * 1024; // Maximum file size in bytes (400kb)
  
  // Add an event listener to the file input field
  fileInput.addEventListener("change", function () {
    var file = fileInput.files[0];
    if (file && file.size > maxFileSize) {
      // Clear the file input field
      fileInput.value = "";
      // Show an error message to the user
      Swal.fire({
        icon: "info",
        title: "File Size Exceeded",
        text: "Please choose an image file that is less than 400kb.",
        confirmButtonText: "OK",
        confirmButtonColor: "#f59e0b",
      });
    }
  });
  
  //file size valid
  var fileIdInput = document.getElementById("personal_id_photograph");
  var maxFileSize = 400 * 1024; // Maximum file size in bytes (400kb)
  
  // Add an event listener to the file input field
  fileIdInput.addEventListener("change", function () {
    var file = fileIdInput.files[0];
    if (file && file.size > maxFileSize) {
      // Clear the file input field
      fileIdInput.value = "";
      // Show an error message to the user
      Swal.fire({
        icon: "info",
        title: "File Size Exceeded",
        text: "Please choose an image file that is less than 400kb.",
        confirmButtonText: "OK",
        confirmButtonColor: "#f59e0b",
      });
    }
  });