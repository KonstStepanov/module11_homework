// Задание 4
function rangeDelayedOutput(startValue, endValue) {
  let current = startValue;
  const intervalId = setInterval(function () {
    if (current === startValue) {
      console.log("Задание 4 =>");
    }
    console.log(current);
    if (current >= endValue) {
      clearInterval(intervalId);
    }
    current++;
  }, 1000);
}

rangeDelayedOutput(5, 15);
