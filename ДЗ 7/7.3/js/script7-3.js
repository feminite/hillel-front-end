function removeElement(array, item) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== item) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}
