const itCompanies = Array();

itCompanies.push(
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon"
);

console.log(itCompanies);
console.log(itCompanies.length);
console.log(itCompanies.slice(0, 3));
console.log(itCompanies.slice(-3));

const middleIndex = Math.floor(itCompanies.length / 2);
const middleCompanies = itCompanies.splice(middleIndex, 1);

console.log(middleCompanies);

console.log(itCompanies.sort());
console.log(itCompanies.reverse());

for (company of itCompanies) {
  console.log(company.toUpperCase());
}

for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i].toUpperCase());
}

let companiesWithMoreThanOneO = [];

for (company of itCompanies) {
  let count = 0;
  for (char of company) {
    if (char.toLowerCase() === "o") {
      count++;
      if (count > 1) {
        companiesWithMoreThanOneO.push(company);
        break;
      }
    }
  }
}

console.log(companiesWithMoreThanOneO);
