// Задание 5
console.log("Задание 5 =>");
// Решение с помощью циклов
const powLoop = (number, base) => {
  if (base === 0) {
    return console.log(1);
  } else {
    let result = number;
    for (let i = 2; i <= base; i++) {
      result = result * number;
    }
    return console.log(`Число ${number} в степени ${base} = ${result}`);
  }
};
powLoop(2, 3);

// Решение с помощью Math
const powMath = (number, base) =>
  console.log(`Число ${number} в степени ${base} = ${Math.pow(number, base)}`);
powMath(2, 3);
