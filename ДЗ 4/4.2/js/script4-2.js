let number = prompt("Enter a three-digit number:");

if (number && number.length === 3) {
    let d1 = number[0];
    let d2 = number[1];
    let d3 = number[2];

    let allSame = (d1 === d2 && d2 === d3);

    let someSame = (d1 === d2 || d1 === d3 || d2 === d3);

    console.log(`All numbers are the same - ${allSame}`);
    console.log(`There are some identical numbers ${someSame}`);
} else {
    console.log("Please, enter a three-digit number.");
}

