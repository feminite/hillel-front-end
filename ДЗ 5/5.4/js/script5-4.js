let number = prompt("Введіть ціле число:");

let numPrime = true;

if (isNaN(number) || number <= 1) {
    numPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            numPrime = false;
            break;
        }
    }
}

if (numPrime) {
    console.log(`Число ${number} є простим.`);
} else if (number <= 1) {
    console.log("Число має бути більшим за 1, щоб вважатися простим.");
} else {
    console.log(`Число ${number} є складним.`);
}
