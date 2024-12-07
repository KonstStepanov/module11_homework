// Задание 2
console.log("Задание 2 =>");

function isNumberSimple(number) {
  if (number > 1000) return console.log("данные неверны");
  if (number <= 1) return console.log("число не является простым");
  if (number === 2) return console.log("число простое");

  for (let i = 2; i < number; i++) {
    if (number % i === 0) return console.log("число не является простым");
  }
  return console.log("число простое");
}

isNumberSimple(5);
