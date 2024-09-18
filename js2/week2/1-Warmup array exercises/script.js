let numbers = [1, 2, 3, 4];
let newNumbers = [];

let check = numbers.filter((item) => {
  return item % 2 !== 0;
});
console.log(check);

check.map((item) => {
  return newNumbers.push(item * 2);
});

console.log("The doubled numbers are", newNumbers);
