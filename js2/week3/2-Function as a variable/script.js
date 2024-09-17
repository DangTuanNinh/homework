const myArray = [
  () => console.log("Function 1"),
  () => console.log("Function 2"),
  () => console.log("Function 3"),
];
myArray.forEach((item) => {
  item();
});

const constFunction = () => {
  console.log("Đây là hàm được tạo bởi const");
};

function normalFunction() {
  console.log("Đây là hàm bình thường được tạo");
}
constFunction();
normalFunction();

const myObject = {
  keyFunction: () => {
    console.log("Đây là 1 key function được khởi tạo!");
  },
};
myObject.keyFunction();
