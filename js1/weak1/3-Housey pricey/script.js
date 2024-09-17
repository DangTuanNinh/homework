const width = 5;
const height = 11;
const deep = 8;
const volumeInMeters = width * height * deep;
const gardenSizeInM2 = 70;
const housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
console.log(housePrice);
