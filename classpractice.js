const isMale = true;
const age = 33;
const fullName = "Julius A Adebowale";

const favoriteSport = [
  5,
  { isFootball: true, wrestling: "fake" },
  "boxing",
  [0, 1, 2, 3, 4, 6],
];

const bioData = {
  BloodGroup: "B+",
  weight: 68,
  isPregnant: false,
};

console.log(typeof isMale, typeof age, typeof favoriteSport, typeof bioData);

function AlertB(event) {
  event.preventDefault();
  Swal.fire({
    icon: "success",
    title: "Thanks for visiting my page",
    text:
      "This is your info " +
      isMale +
      " " +
      age +
      " " +
      fullName +
      " " +
      typeof favoriteSport +
      " " +
      typeof bioData,
  });
}
