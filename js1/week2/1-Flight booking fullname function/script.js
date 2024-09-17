function getFullName(firstname, surname, useFormalName) {
  if (useFormalName === true) console.log("Lord " + firstname + " " + surname);
  else console.log(firstname + " " + surname);
}
getFullName("Benjamin", "Hughes", true);
