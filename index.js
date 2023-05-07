const isMale = true;
const age = 33;
const fullName = "Julius A Adebowale";

const favoriteSport = [
  5,
  { isFootball: true, wrestling: "fake", femaleBasketBall: "fake" },
  "boxing",
  "ufc",
  [0, 1, 2, 3, 4, 5, 6],
];

const bioData = {
  bloodGroup: "o+",
  weight: 68,
  isPregnant: false,
};

function alertUser(event) {
  event.preventDefault();
  Swal.fire({
    title: "Sweet!",
    text: "Modal with a custom image.",
    imageUrl: "https://unsplash.it/400/200",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image",
  });
  console.log(
    typeof isMale,
    typeof age,
    typeof fullName,
    typeof favoriteSport,
    typeof bioData
  );
}

console.log(favoriteSport[3]);
console.log(bioData.weight);
