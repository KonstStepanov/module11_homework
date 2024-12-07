// Задание 1
console.log("Задание 1 =>");

function isEvenOrNot(arrayOfValues) {
  let evenNumber = 0;
  let notEvenNumber = 0;
  let zeroNumber = 0;
  let zeroElment = false;

  for (let i = 0; i < arrayOfValues.length; i++) {
    if (
      arrayOfValues[i] != null &&
      !isNaN(arrayOfValues[i]) &&
      typeof arrayOfValues[i] != "boolean"
    ) {
      if (arrayOfValues[i] % 2 == 0) {
        if (arrayOfValues[i] == 0) {
          zeroNumber++;
          zeroElment = true;
        } else {
          evenNumber++;
        }
      } else {
        notEvenNumber++;
      }
    }
  }

  let result = `Чётных - ${evenNumber}, нечётных - ${notEvenNumber}`;
  if (zeroElment) {
    result =
      result +
      `| Количество нулевых элементов массива = ${zeroNumber} (число чётное)`;
  }
  return console.log(result);
}

isEvenOrNot([1, 2, 3, 4, null, 0, NaN, true, false]);
