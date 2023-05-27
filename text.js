const heading = document.querySelector("h1");
const para = document.querySelector("p");
const container = document.getElementById("container");

const newDIv = document.createElement("div");
const newSpan = document.createElement("span");

heading.classList.add("bold_text");
heading.classList.add("large_text");

para.classList.add("font_style");

newSpan.textContent = "February Cohort";

newDIv.appendChild(newSpan);

container.appendChild(newDIv);
