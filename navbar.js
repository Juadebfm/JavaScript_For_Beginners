const toggleBtn = document.getElementById("toggleBtn");
const navList = document.getElementById("navList");

toggleBtn.addEventListener("click", (event) => {
  event.preventDefault();
  //   console.log("I have been clicked");
  navList.classList.toggle("show");
});
