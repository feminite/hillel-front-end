function removeElements(el, elementsToRemove) {
  let result = '';

  for (let i = 0; i < el.length; i++) {
    let char = el[i];
    let found = false;

    for (let j = 0; j < elementsToRemove.length; j++) {
      if (char === elementsToRemove[j]) {
        found = true;
        break;
      }
    }

    if (found === false) {
      result = result + char;
    }
  }

  return result;
}

let enterText = prompt("Enter text:");
let charRemove = prompt("Enter the characters to be removed after the space:");

let chars = charRemove.split(' '); 

let final = removeElements(enterText, chars);
console.log(final);