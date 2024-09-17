const class07Students = [];
function addStudentToClass(studentName) {
  if (class07Students.includes(studentName))
    console.log(`Student ${studentName} is already in the class`);
  else if (class07Students.length < 6) class07Students.push(studentName);
  else console.log("Cannot add more students to class 07");
  return class07Students;
}

function getNumberOfStudents() {
  return class07Students.length;
}
console.log(addStudentToClass("Ninh", "Nam"));
