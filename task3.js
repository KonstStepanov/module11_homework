// Задание 3
console.log("Задание 3 =>");

function firstFunc(numberOne) {
  console.log(`Number one = ${numberOne}`);
  return (function (numberOne, numberTwo) {
    console.log(`Number two = ${numberTwo}`);
    console.log(`Result = ${numberOne + numberTwo}`);
  })(numberOne, 4);
}

firstFunc(2);
