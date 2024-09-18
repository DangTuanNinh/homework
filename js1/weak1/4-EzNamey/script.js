const randomNumber = Math.floor(Math.random() * 3);
const randomNumber1 = Math.floor(Math.random() * 3);
const firstWords = ["Easy", "Awesome", "Corporate"];
const secondWords = ["Easy", "Awesome", "Corporate"];
const startupName = firstWords[randomNumber] + " " + secondWords[randomNumber1];
const nameLength = startupName.length;

console.log(`The startup: ${startupName} contains ${nameLength} characters`);