function calcAverage(array) {
  let sum = 0;
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number' && isNaN(array[i]) === false) {
      sum = sum + array[i];
      count = count + 1;
    }
  }

  if (count > 0) {
    return sum / count;
  } else {
    return 0;
  }
}
