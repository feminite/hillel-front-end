function closures() {
    let total = 0;

    return function(number) {
        total += number;
        return total;
    };
}

const sum = closures();

console.log(sum(4));  // 4
console.log(sum(10));  // 14